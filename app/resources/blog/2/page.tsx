"use client";

import { BLOGS } from "@/src/data/blog.data";

import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import BackIcon from "@/public/common/back-arrow-icon.svg";
import LinkedinIcon from "@/public/blogs/linkedin-icon.svg";
import TwitterIcon from "@/public/blogs/twitter-icon.svg";
import FacebookIcon from "@/public/blogs/facebook-icon.svg";
import BlogImg from "@/public/blogs/blog-2-img.png";

export default function BlogTwo() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const blog = BLOGS.find((b) => b.id === 2);

    const categories = useMemo(() => {
        const allCategories = BLOGS.flatMap((blog) => blog.categories);
        return [...Array.from(new Set(allCategories))];
    }, []);

    if (!blog) return null;

    const [comments, setComments] = useState<any[]>([]);
    const [saveDetails, setSaveDetails] = useState(false);

    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        comment: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentForm.email.trim());

    const isCommentFormValid =
        commentForm.comment.trim() !== "" &&
        commentForm.name.trim() !== "" &&
        isEmailValid;

    useEffect(() => {
        fetchComments();

        const savedCommentUser = localStorage.getItem("blogCommentUser");

        if (savedCommentUser) {
            const { name, email } = JSON.parse(savedCommentUser);

            setCommentForm((prev) => ({
                ...prev,
                name,
                email,
            }));

            setSaveDetails(true);
        }
    }, []);

    const fetchComments = async () => {
        const response = await fetch("/api/blogs/2/comments");

        const data = await response.json();

        setComments(data);
    };

    const handleShare = (
        platform: "x" | "facebook" | "linkedin"
    ) => {
        const url = window.location.href;
        const title = blog.title;

        let shareUrl = "";

        switch (platform) {
            case "x":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                )}&text=${encodeURIComponent(title)}`;
                break;

            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`;
                break;

            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                )}`;
                break;
        }

        window.open(
            shareUrl,
            "_blank",
            "width=600,height=500,noopener,noreferrer"
        );
    };

    const [submitError, setSubmitError] = useState("");

    const handleSubmitComment = async () => {
        if (!isCommentFormValid || isSubmitting) return;

        try {
            setIsSubmitting(true);
            setSubmitError("");

            const response = await fetch("/api/blogs/2/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: commentForm.name.trim(),
                    email: commentForm.email.trim(),
                    comment: commentForm.comment.trim(),
                    localDateTime: new Date().toISOString(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setSubmitError(
                    data.error || "Unable to post your comment. Please try again."
                );

                return;
            }

            if (saveDetails) {
                localStorage.setItem(
                    "blogCommentUser",
                    JSON.stringify({
                        name: commentForm.name,
                        email: commentForm.email,
                    })
                );
            } else {
                localStorage.removeItem("blogCommentUser");
            }

            setCommentForm((prev) => ({
                ...prev,
                comment: "",
            }));

            await fetchComments();
        } catch (error) {
            console.error("Comment submission error:", error);

            setSubmitError(
                "Something went wrong while posting your comment. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5]">
            <main className="w-full pt-24 bg-white">
                <HeaderComponent active="BLOG" />

                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6">

                    <article className="w-full">

                        {/* Back + Title */}
                        <div className="flex items-center gap-2 mb-5">

                            <button
                                onClick={() => window.history.back()}
                                className="relative flex h-8 w-8 shrink-0 items-center justify-center text-[#222] hover:text-[#E34334] transition-colors hover:cursor-pointer"
                                aria-label="Go back"
                            >
                                <Image
                                    src={BackIcon}
                                    alt="Back"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </button>

                            <h1 className="text-[21px] font-bold text-[#111] uppercase leading-tight">
                                {blog.title}
                            </h1>

                        </div>

                        {/* =====================================================
                            HERO IMAGE
                        ===================================================== */}

                        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden rounded-lg">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        <div
                            className="
                                mt-5
                                text-[16px]
                                text-[#222]
                                leading-[1.55]
                            "
                        >

                            {/* Intro */}
                            <p className="mb-5">
                                Developing fire panels is a challenging task due to their multiple interfaces and real-time requirements to comply with regulations, such as alarm notification and output activation. Consequently, the software development cycle for fire panels is lengthy, with a significant portion dedicated to testing and bug fixing.
                            </p>

                            <p className="mb-5">
                                Traditionally, most development was carried out on physical hardware setups, which often suffered from limitations and were unable to replicate real-world scenarios. As a result, software testing cycles were frequently incomplete, leading to poor software quality and substantial rework costs.
                            </p>

                            <p className="mb-5">
                                However, recent advancements in electronics, off-the-shelf modules, components, and partnerships with companies like EMCUS Technologies have brought about new possibilities in the market. These developments allow for the rapid and reliable creation of custom simulators and testing equipment.
                            </p>

                            <p className="mb-5">
                                Incorporating this equipment into the software development process can help ensure software quality from the early stages. For example, protocol simulators can be utilized to test various fire alarm and loop loading conditions. Some of the tests that can be performed using loop/SLC circuit simulators include:
                            </p>

                            {/* Bullet Points */}
                            <ul className="list-disc pl-6 space-y-2 mb-5 text-[18px]">
                                <li>Alarms reporting</li>
                                <li>Prioritization of alarms</li>
                                <li>SLC loop loading conditions</li>
                                <li>Fire panel LCD strings</li>
                                <li>Cause and effect logic</li>
                                <li>Loop or SLC fault conditions</li>
                                <li>Performance tests of fire panels</li>
                                <li>OEM protocol testing</li>
                            </ul>

                            <p className="mb-5">
                                Moreover, these protocol simulators can also serve commissioning teams by enabling viability tests of fire panels before actual installation in a building. This approach significantly reduces labor costs by resolving issues that would typically require troubleshooting post installation.
                            </p>

                            <p className="mb-5">
                                Furthermore, these simulators can facilitate long-term test automation of fire alarm software and hardware verification. They offer a general architecture for a protocol simulator, as depicted below.
                            </p>

                            {/* =================================================
                                PROTOCOL SIMULATOR IMAGE
                            ================================================= */}

                            <div className="relative w-full max-w-[720px] h-[300px] sm:h-[340px] lg:h-[380px] rounded-lg overflow-hidden">
                                <Image
                                    src={BlogImg}
                                    alt={blog.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <span className="italic block mt-2">
                                General architecture for protocol simulator
                            </span>

                            {/* =================================================
                                TAGS + SHARE
                            ================================================= */}

                            <div className="pt-6">

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px]">

                                    {/* Tags */}
                                    <div className="flex flex-wrap items-center gap-1.5">

                                        <span className="text-black font-bold text-[16px]">
                                            Tags :
                                        </span>

                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 font-semibold py-1 rounded-[3px] border border-[#E34334] text-[#E34334] bg-[#FFF2F2] text-[16px] leading-none"
                                            >
                                                {tag.charAt(0).toUpperCase() +
                                                    tag.slice(1)}
                                            </span>
                                        ))}

                                    </div>

                                    {/* Share */}
                                    <div className="flex items-center gap-1.5">

                                        <span className="text-black font-bold text-[16px]">
                                            Share :
                                        </span>

                                        {/* LinkedIn */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleShare("linkedin")
                                            }
                                            aria-label="Share on LinkedIn"
                                            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center bg-[#2867B2] text-white rounded-[2px]"
                                        >
                                            <Image
                                                src={LinkedinIcon}
                                                alt="linkedin"
                                            />
                                        </button>

                                        {/* Facebook */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleShare("facebook")
                                            }
                                            aria-label="Share on Facebook"
                                            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center bg-[#1877F2] text-white rounded-[2px]"
                                        >
                                            <Image
                                                src={FacebookIcon}
                                                alt="facebook"
                                            />
                                        </button>

                                        {/* Twitter */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleShare("x")
                                            }
                                            aria-label="Share on Twitter"
                                            className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center bg-[#1DA1F2] text-white rounded-[2px]"
                                        >
                                            <Image
                                                src={TwitterIcon}
                                                alt="twitter"
                                            />
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <section className="mt-4">

                                <h2 className="text-[18px] font-semibold text-[#222] mb-2">
                                    Leave a Reply{" "}
                                    <span className="text-[14px] font-normal text-[#E34334] [font-family:var(--font-jakarta-sans)]">
                                        *
                                    </span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                    <div>
                                        <textarea
                                            value={commentForm.comment}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    comment: e.target.value,
                                                })
                                            }
                                            placeholder="Type your comment here"
                                            disabled={isSubmitting}
                                            className="w-full h-[205px] md:h-[230px] lg:h-[218px] resize-none rounded-[3px] border border-[#333333] bg-[#F7F8F9] px-2 py-2 text-[16px] text-[#333333] placeholder:text-[#333333] focus:outline-none focus:border-[#322986] disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    {/* User Details */}
                                    <div className="flex flex-col">

                                        <p className="text-[12px] text-[#222] font-bold leading-[1.25] mb-1">
                                            Your email address will not be
                                            published. Required fields are
                                            marked
                                            <span className="text-[#E34334]">
                                                {" "}*
                                            </span>
                                        </p>

                                        {/* Name */}
                                        <label className="text-[14px] mb-[2px] font-semibold">
                                            Name{" "}
                                            <span className="text-[#E34334]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            value={commentForm.name}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    name: e.target.value,
                                                })
                                            }
                                            placeholder="Enter Name"
                                            disabled={isSubmitting}
                                            className="
                                                w-full
                                                h-[30px]
                                                rounded-[2px]
                                                bg-[#F7F8F9]
                                                border
                                                border-[#64748B]
                                                px-2
                                                text-[14px]
                                                mb-2
                                                focus:outline-none
                                                focus:border-[#322986]
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
                                            "
                                        />

                                        {/* Email */}
                                        <label className="text-[14px] text-[#222] mb-[2px] font-semibold">
                                            Email{" "}
                                            <span className="text-[#E34334]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            value={commentForm.email}
                                            onChange={(e) =>
                                                setCommentForm({
                                                    ...commentForm,
                                                    email: e.target.value,
                                                })
                                            }
                                            type="email"
                                            placeholder="Enter Your Email"
                                            disabled={isSubmitting}
                                            className={`
                                                w-full
                                                h-[30px]
                                                rounded-[2px]
                                                bg-[#F7F8F9]
                                                border
                                                px-2
                                                text-[14px]
                                                mb-1
                                                focus:outline-none
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
                                                ${commentForm.email.trim() !== "" && !isEmailValid
                                                    ? "border-[#E34334] focus:border-[#E34334]"
                                                    : "border-[#64748B] focus:border-[#322986]"
                                                }
                                            `}
                                        />
                                        {commentForm.email.trim() !== "" && !isEmailValid && (
                                            <p className="text-[11px] text-[#E34334] mb-2">
                                                Please enter a valid email address.
                                            </p>
                                        )}

                                        {/* Checkbox */}
                                        <label className="flex items-start gap-1 text-[12px] text-[#555] leading-tight mb-2 py-2">

                                            <input
                                                type="checkbox"
                                                checked={saveDetails}
                                                onChange={(e) => setSaveDetails(e.target.checked)}
                                                className="mt-[1px] w-[12px] h-[12px] accent-[#E34334]"
                                            />

                                            <span>
                                                Save my name, email, and
                                                website in this browser for
                                                the next time I comment.
                                            </span>

                                        </label>

                                        {/* Submit */}
                                        {/* Submit */}
                                        {submitError && (
                                            <p className="mb-2 rounded-md bg-[#FFF2F2] border border-[#E34334] px-3 py-2 text-[12px] text-[#E34334]">
                                                {submitError}
                                            </p>
                                        )}

                                        <button
                                            type="button"
                                            onClick={handleSubmitComment}
                                            disabled={!isCommentFormValid || isSubmitting}
                                            className="cursor-pointer w-full h-[40px] rounded-[8px] bg-[#E34334] text-white text-[16px] font-medium hover:bg-[#BE392D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#E34334] flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                    Posting...
                                                </>
                                            ) : (
                                                "Post a Comment"
                                            )}
                                        </button>

                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                                            Comments ({comments.length})
                                        </h3>
                                    </div>

                                    {comments.length === 0 ? (
                                        <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                                            <p className="text-[#333333]">
                                                No comments yet. Be the first to comment.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {comments.map((comment) => (
                                                <div
                                                    key={comment.id}
                                                    className="
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        p-5
                        shadow-sm
                        transition-all
                        duration-300
                        hover:shadow-md
                    "
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div
                                                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#322986]
                                text-lg
                                font-bold
                                text-white
                            "
                                                        >
                                                            {comment.name.charAt(0).toUpperCase()}
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                                <h4 className="text-base font-semibold text-[#111827]">
                                                                    {comment.name}
                                                                </h4>

                                                                <p className="text-xs text-[#333333]">
                                                                    {new Date(
                                                                        comment.created_at
                                                                    ).toLocaleString("en-IN", {
                                                                        day: "2-digit",
                                                                        month: "short",
                                                                        year: "numeric",
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                        hour12: true,
                                                                    })}
                                                                </p>
                                                            </div>

                                                            <p className="mt-3 text-sm sm:text-base leading-7 text-[#333333]">
                                                                {comment.comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </section>

                        </div>
                    </article>
                </div>

                <FooterComponent />
            </main>
        </div>
    );
}