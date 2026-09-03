"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import BackIcon from "@/public/careers/back-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PhoneInputWithCountrySelect, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import MagicWandIcon from "@/public/common/magic-wand.svg";
import UploadIcon from "@/public/common/upload-icon.svg";
import SendIcon from "@/public/contact-us/send.svg";
import CustomPhoneInput from "@/src/components/CustomPhoneInput/CustomPhoneInput";

interface Props {
  params: Promise<{ id: string }>;
}

export default function JobDetails() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = Number(params.id);

  const job = OPEN_ROLES.find(
    (role) => role.id === id
  );

  if (!job) return notFound();

  const [activeTab, setActiveTab] = useState<
    "overview" | "applications"
  >("overview");

  useEffect(() => {
    const tab = searchParams.get("tab");

    setActiveTab(
      tab === "applications"
        ? "applications"
        : "overview"
    );
  }, [searchParams]);

  // --------------------------------------------------
  // Autofill Resume
  // --------------------------------------------------

  const autofillInputRef = useRef<HTMLInputElement>(null);

  const [autofillFile, setAutofillFile] = useState<File | null>(null);
  const [isAutofilling, setIsAutofilling] = useState(false);

  // --------------------------------------------------
  // Actual Resume Upload
  // --------------------------------------------------

  const resumeInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // --------------------------------------------------
  // Form fields
  // --------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resumeFile = autofillFile || file;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPhoneValid = phone ? isValidPhoneNumber(phone) : false;

  const isFormValid =
    name.trim() !== "" &&
    isEmailValid &&
    isPhoneValid &&
    !!resumeFile;

  const isFormDisabled = isSubmitting || isSuccess || isAutofilling;

  const clearSubmitError = () => setSubmitError(null);

  // --------------------------------------------------
  // Bottom Resume Upload
  // --------------------------------------------------

  const handleResumeFile = (selectedFile: File) => {
    // Disable bottom upload if resume was already uploaded
    // through Autofill
    if (autofillFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    clearSubmitError();
    setFile(selectedFile);
  };

  const handleResumeFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      handleResumeFile(selectedFile);
    }

    // Allow selecting the same file again
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (isFormDisabled) return;

    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) {
      handleResumeFile(droppedFile);
    }
  };

  // --------------------------------------------------
  // Autofill Resume Upload
  // --------------------------------------------------

  const handleAutofillResume = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF resume.");
      e.target.value = "";
      return;
    }

    clearSubmitError();
    setAutofillFile(selectedFile);
    setIsAutofilling(true);

    try {
      const formData = new FormData();

      formData.append("resume", selectedFile);

      const response = await fetch("/api/resume/parse", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to extract resume information");
      }

      const data = await response.json();

      // Populate form fields from resume
      if (data.name) {
        setName(data.name);
      }

      if (data.email) {
        setEmail(data.email);
      }

      if (data.phone) {
        setPhone(data.phone);
      }
    } catch (error) {
      console.error("Resume autofill failed:", error);

      alert(
        "Unable to extract information from this resume. Please enter your details manually."
      );
    } finally {
      setIsAutofilling(false);

      // Allow selecting the same file again
      e.target.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting || isSuccess) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone ?? "");
      formData.append("role", job.role);
      formData.append("resume", resumeFile);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to submit application."
        );
      }

      setName("");
      setEmail("");
      setPhone("");

      setFile(null);
      setAutofillFile(null);

      if (resumeInputRef.current) {
        resumeInputRef.current.value = "";
      }

      if (autofillInputRef.current) {
        autofillInputRef.current.value = "";
      }

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (error: unknown) {
      console.error("Application submission failed:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Failed to submit application.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <HeaderComponent active="CAREERS" />

      <main className="flex-1 pt-[110px] pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back + Title */}
          <div className="flex items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="cursor-pointer"
              aria-label="Go back"
            >
              <Image src={BackIcon} alt="Back" />
            </button>

            <h1 className="text-[26px] font-bold text-[#2D7DBA]">
              {job.role}
            </h1>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">

            {/* LEFT PANEL */}
            <aside className="border-r-0 lg:border-r border-gray-300 pr-0 lg:pr-8">

              <div className="mb-2">
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-[#333333]">{job.location}</p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Preferred Domain
                </h3>

                <p className="text-[#333333]">
                  {job.preferredDomain}
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Reports To
                </h3>

                <p className="text-[#333333]">
                  {job.reportsTo}
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-lg">
                  Experience
                </h3>

                <p className="text-[#333333]">
                  {job.experienceRequired} Years
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Education
                </h3>

                <p className="text-[#333333]">
                  {job.eduacation}
                </p>
              </div>

            </aside>

            {/* RIGHT CONTENT */}
            <section>

              {/* Tabs */}
              <div className="flex gap-8 mb-8">

                <button
                  onClick={() => setActiveTab("overview")}
                  className={`cursor-pointer pb-3 text-[16px] font-semibold transition ${activeTab === "overview"
                    ? "text-[#2D7DBA] border-b-2 border-[#2D7DBA]"
                    : "text-[#333333] hover:text-[#2D7DBA]"
                    }`}
                >
                  Overview
                </button>

                <button
                  onClick={() => setActiveTab("applications")}
                  className={`cursor-pointer pb-3 text-[16px] font-semibold transition ${activeTab === "applications"
                    ? "text-[#2D7DBA] border-b-2 border-[#2D7DBA]"
                    : "text-[#333333] hover:text-[#2D7DBA]"
                    }`}
                >
                  Application
                </button>

              </div>

              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <>
                  {/* Responsibilities */}
                  <div className="mb-10">

                    <h2 className="font-bold text-xl mb-4">
                      Responsibilities
                    </h2>

                    <ul className="list-disc pl-6 space-y-3 text-[#333333]">
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                  </div>

                  {/* Skills */}
                  <div className="mb-10">

                    <h2 className="font-bold text-xl mb-4">
                      Skills
                    </h2>

                    <ul className="list-disc pl-6 space-y-3 text-[#333333]">
                      {job.skills.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                  </div>

                  <p className="text-[18px] text-[#333333] leading-7 mb-8 font-bold">
                    EMCUS is an Equal Employment Opportunity (EEO)
                    Employer. All qualified applicants will receive
                    consideration for employment without regard to race,
                    religion, color, national origin, sex, sexual
                    orientation, gender identity, age, status as a
                    qualified individual with a disability, or other
                    trait protected by law.
                  </p>

                  <button
                    onClick={() => setActiveTab("applications")}
                    className="cursor-pointer bg-[#2D7DBA] hover:bg-[#2A72A8] text-white px-8 py-3 rounded-md font-semibold"
                  >
                    Apply Now
                  </button>

                  <p className="text-sm text-[#333333] mt-4 font-bold">
                    Click the APPLY button to upload your resume.
                    <br />
                    Alternatively, email your resume to{" "}
                    <a
                      href="mailto:career@emcus.co.in"
                      className="text-[#2D7DBA] font-semibold hover:underline cursor-pointer"
                    >
                      career@emcus.co.in
                    </a>
                  </p>
                </>
              )}

              {/* APPLICATION */}
              {activeTab === "applications" && (
                <div className="space-y-6">

                  {/* ========================================
                      AUTOFILL FROM RESUME
                  ======================================== */}

                  <div className="border border-[#C1C1C1] rounded-xl p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-[#FBFBFB]">

                    <div>

                      <div className="flex gap-2 items-center">

                        <Image
                          src={MagicWandIcon}
                          alt="magic"
                          className="w-5 h-5"
                        />

                        <h3 className="font-semibold text-[#2D7DBA]">
                          Autofill from Resume
                        </h3>

                      </div>

                      <p className="text-sm text-[#333333] mt-1">

                        {isAutofilling
                          ? "Extracting information from your resume..."
                          : autofillFile
                            ? `Selected: ${autofillFile.name}`
                            : "Upload your resume here to autofill key application fields."}

                      </p>

                    </div>

                    <div>

                      {/* IMPORTANT:
                          This input is ONLY for autofill
                      */}

                      <input
                        ref={autofillInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleAutofillResume}
                        className="hidden"
                      />

                      <button
                        type="button"
                        disabled={isFormDisabled}
                        onClick={() => autofillInputRef.current?.click()}
                        className="
        w-full
        sm:w-auto
        cursor-pointer
        rounded-md
        border-[1.5px]
        border-[#2D7DBA]
        px-5
        py-2
        font-bold
        text-[#2D7DBA]
        transition-colors
        hover:bg-[#2A72A8]
        hover:border-[#2A72A8]
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
    "
                      >
                        {isAutofilling
                          ? "Reading..."
                          : autofillFile
                            ? "Change File"
                            : "Upload File"}
                      </button>

                    </div>

                  </div>

                  {/* ========================================
                      FORM
                  ======================================== */}

                  <div className="space-y-5">

                    {/* NAME */}
                    <div>

                      <label className="font-medium">
                        Name{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        value={name}
                        onChange={(e) => {
                          clearSubmitError();
                          setName(e.target.value);
                        }}
                        disabled={isFormDisabled}
                        className="
    mt-2
    w-full
    rounded-md
    border
    px-4
    py-3
    bg-[#FBFBFB]
    border-[#C1C1C1]
    outline-none
    focus:border-[#2D7DBA]
    focus:ring-1
    focus:ring-[#2D7DBA]
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
                        placeholder="Name"
                      />

                    </div>

                    {/* EMAIL */}
                    <div>

                      <label className="font-medium">
                        Email{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          clearSubmitError();
                          setEmail(e.target.value);
                        }}
                        disabled={isFormDisabled}
                        className={`mt-2 w-full rounded-md border px-4 py-3 bg-[#FBFBFB]
    outline-none
    focus:border-[#2D7DBA]
    focus:ring-1 focus:ring-[#2D7DBA]
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${email.trim() !== "" && !isEmailValid
                            ? "border-[#2D7DBA]"
                            : "border-[#C1C1C1]"
                          }`}
                        placeholder="Enter Email"
                      />
                      {email.trim() !== "" && !isEmailValid && (
                        <p className="mt-1 text-[11px] text-[#2D7DBA]">
                          Please enter a valid email address.
                        </p>
                      )}

                    </div>

                    {/* PHONE */}
                    <div>

                      <label className="font-medium">
                        Phone{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <CustomPhoneInput
                        defaultCountry="IN"
                        value={phone}
                        onChange={(value) => {
                          clearSubmitError();
                          setPhone(value);
                        }}
                        placeholder="00000 00000"
                        disabled={isFormDisabled}
                        className={`${phone && !isPhoneValid ? "!border-[#2D7DBA]" : ""
                          }`}
                      />

                      {!phone && (
                        <p className="mt-1 text-[11px] text-[#E4312D]">
                          Please enter a valid phone number.
                        </p>
                      )}

                    </div>

                    {/* ========================================
                        ACTUAL RESUME UPLOAD
                    ======================================== */}

                    {/* <div>

                      <label className="font-medium">
                        Resume{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <div
                        onClick={() => {
                          if (isFormDisabled || autofillFile) return;
                          resumeInputRef.current?.click();
                        }}
                        onDragOver={(e) => {
                          if (isFormDisabled || autofillFile) return;

                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className={`bg-[#FBFBFB] mt-2 rounded-lg h-48 flex items-center justify-center text-[#333333] flex-col gap-1 transition ${autofillFile || isFormDisabled
                          ? "opacity-50 cursor-not-allowed bg-gray-100"
                          : "cursor-pointer"
                          } ${isDragging && !autofillFile && !isFormDisabled
                            ? "bg-gray-50"
                            : ""
                          }`}
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #C1C1C1 60%, transparent 60%), linear-gradient(to right, #C1C1C1 60%, transparent 60%), linear-gradient(to bottom, #C1C1C1 60%, transparent 60%), linear-gradient(to bottom, #C1C1C1 60%, transparent 60%)",
                          backgroundPosition: "top, bottom, left, right",
                          backgroundSize: "20px 2px, 20px 2px, 2px 20px, 2px 20px",
                          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
                        }}
                      >
                        <input
                          ref={resumeInputRef}
                          type="file"
                          accept=".pdf"
                          onChange={handleResumeFileChange}
                          className="hidden"
                        />

                        <Image
                          src={UploadIcon}
                          alt="Upload"
                          className="h-7 w-7"
                        />

                        {file ? (
                          <>
                            <span className="text-[#322986] font-semibold">
                              {file.name}
                            </span>

                            <span className="text-sm text-[#333333]">
                              Click or drag to replace file
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-[#322986] font-semibold">
                              Upload File
                            </span>

                            <span className="px-4 text-center font-normal">
                              Or Drag and Drop File Here
                            </span>
                          </>
                        )}

                      </div>

                    </div> */}

                    {/* SUBMIT */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={
                        !isFormValid || isSubmitting || isSuccess
                      }
                      className={`
                        w-full
                        py-3
                        rounded-md
                        font-semibold
                        flex
                        gap-2
                        items-center
                        justify-center
                        text-white
                        transition-all
                        duration-300
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        ${isSuccess
                          ? "bg-green-600 hover:bg-green-600 cursor-default"
                          : "bg-[#2D7DBA] hover:bg-[#2A72A8] hover:opacity-90 cursor-pointer disabled:hover:opacity-50"
                        }
                      `}
                    >
                      {isSuccess ? (
                        <>
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span>Submitted!</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Image
                            src={SendIcon}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>

                    {submitError && (
                      <p className="text-center text-sm text-[#E4312D]">
                        {submitError}
                      </p>
                    )}

                  </div>

                </div>
              )}

            </section>

          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}