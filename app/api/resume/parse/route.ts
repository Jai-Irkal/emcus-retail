import { NextResponse } from "next/server";
import PDFParser from "pdf2json";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { message: "Resume file is required" },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { message: "Only PDF files are supported" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const rawText = await extractPdfText(buffer);

    console.log("RAW PDF TEXT:");
    console.log(rawText);

    // --------------------------------
    // Normalize PDF text
    // --------------------------------

    const text = normalizePdfText(rawText);

    console.log("NORMALIZED PDF TEXT:");
    console.log(text);

    // --------------------------------
    // Extract Email
    // --------------------------------

    const email = extractEmail(text);

    // --------------------------------
    // Extract Phone
    // --------------------------------

    const phone = extractPhone(text);

    // --------------------------------
    // Extract Name
    // --------------------------------

    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const name = findName(lines, email, phone);

    console.log("Extracted resume data:", {
      name,
      email,
      phone,
    });

    return NextResponse.json({
      name,
      email,
      phone,
    });
  } catch (error) {
    console.error("Resume parsing error:", error);

    return NextResponse.json(
      {
        message: "Failed to parse resume",
      },
      { status: 500 }
    );
  }
}

/**
 * Extract text from PDF
 */
function extractPdfText(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (error: any) => {
      reject(error.parserError);
    });

    pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
      try {
        const text = pdfData.Pages.flatMap((page: any) =>
          page.Texts.map((item: any) => {
            return item.R
              .map((textItem: any) => {
                try {
                  return decodeURIComponent(textItem.T);
                } catch {
                  return textItem.T;
                }
              })
              .join("");
          })
        ).join("\n");

        resolve(text);
      } catch (error) {
        reject(error);
      }
    });

    pdfParser.parseBuffer(buffer);
  });
}

/**
 * Fix PDF text where characters are
 * returned on separate lines.
 */
function normalizePdfText(text: string): string {
  return text
    // Remove excessive whitespace
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")

    // Join single characters separated by newlines
    .replace(
      /(?<!\n)([A-Za-z0-9])\n(?=[A-Za-z0-9])/g,
      "$1"
    )

    // Repeat because PDFs can have multiple
    // consecutive single-character lines
    .replace(
      /([A-Za-z0-9])\n(?=[A-Za-z0-9])/g,
      "$1"
    )

    // Fix spaces/newlines around email
    .replace(/\s*@\s*/g, "@")
    .replace(/\s*\.\s*/g, ".")

    // Fix common phone spacing
    .replace(/\n(?=\d)/g, "")

    // Clean excessive newlines
    .replace(/\n{2,}/g, "\n")
    .trim();
}

/**
 * Extract email
 */
function extractEmail(text: string): string {
  const emailMatch = text.match(
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  );

  return emailMatch?.[0] ?? "";
}

/**
 * Extract phone number
 */
function extractPhone(text: string): string {
  const phoneMatch = text.match(
    /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3,5}\)?[\s.-]?)?\d{3,5}[\s.-]?\d{4}/
  );

  return phoneMatch?.[0]?.trim() ?? "";
}

/**
 * Extract candidate name
 */
function findName(
  lines: string[],
  email: string,
  phone: string
): string {
  const ignoredWords = [
    "resume",
    "curriculum vitae",
    "cv",
    "profile",
    "summary",
    "objective",
    "experience",
    "education",
    "skills",
    "contact",
    "github",
    "linkedin",
    "projects",
    "certifications",
    "additional information",
  ];

  for (const line of lines.slice(0, 20)) {
    const cleanedLine = line.trim();

    const lowerLine = cleanedLine.toLowerCase();

    // Ignore known section headings
    if (
      ignoredWords.some((word) =>
        lowerLine === word
      )
    ) {
      continue;
    }

    // Ignore email
    if (cleanedLine.includes("@")) {
      continue;
    }

    // Ignore phone
    if (
      phone &&
      cleanedLine.replace(/\D/g, "").includes(
        phone.replace(/\D/g, "")
      )
    ) {
      continue;
    }

    // Ignore URLs
    if (
      lowerLine.includes("http") ||
      lowerLine.includes("www.")
    ) {
      continue;
    }

    // Name should be reasonably short
    if (
      cleanedLine.length < 3 ||
      cleanedLine.length > 60
    ) {
      continue;
    }

    // Name should contain letters
    if (!/[a-zA-Z]/.test(cleanedLine)) {
      continue;
    }

    // Avoid sentences
    if (cleanedLine.split(" ").length > 6) {
      continue;
    }

    // Name pattern
    if (
      /^[a-zA-Z][a-zA-Z .'-]+$/.test(cleanedLine)
    ) {
      return cleanedLine;
    }
  }

  return "";
}