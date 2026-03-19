"use client";

import { useState } from "react";

export default function QuotePage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [isDark, setIsDark] = useState(true);
    const [workType, setWorkType] = useState("kitchen");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
    const [message, setMessage] = useState("");


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setStatus("success");
        setMessage("Thanks! Your request has been sent. We'll contact you soon.");

        alert("Thanks! \nName: ${fullName}\nPhone: ${phone}\nType: ${workType}\nDetails: ${description}\nRequest submitted 👍");

        console.log("Quote request submitted");
        console.log({ fullName, phone, workType, description });

        setFullName("");
        setPhone("");
        setWorkType("kitchen");
        setDescription("");
    }

    return (
        <main
            className={`min-h-screen ${isDark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-100 text-zinc-900"
                }`}
        >
            <div className="mx-auto max-w-xl px-4 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Request a Free Quote
                </h1>

                <p className={`mt-2 ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
                    Tell us about your project and we'll get back to you.
                </p>

                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`mt-6 rounded-lg border px-3 py-1 text-sm ${isDark
                        ? "border-zinc-700 text-zinc-200"
                        : "border-zinc-400 text-zinc-700"
                        }`}
                >
                    Switch to {isDark ? "light" : "dark"} mode
                </button>

                <form
                    onSubmit={handleSubmit}
                    className={`mt-8 space-y-5 rounded-2xl border p-6 ${isDark
                        ? "border-zinc-800 bg-zinc-900/40"
                        : "border-zinc-300 bg-white"
                        }`}
                >
                    <div className="space-y-2">
                        <label
                            className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-700"
                                }`}
                        >
                            Full Name *
                        </label>

                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Name Family"
                            className={`w-full rounded-xl border px-4 py-3 outline-none ${isDark
                                ? "border-zinc-800 bg-zinc-950 text-zinc-100 focus:border-zinc-600"
                                : "border-zinc-300 bg-zinc-50 text-zinc-900 focus:border-zinc-500"
                                }`}
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-700"
                                }`}
                        >
                            Phone Number *
                        </label>

                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(416) 123-4567"
                            inputMode="tel"
                            className={`w-full rounded-xl border px-4 py-3 outline-none ${isDark
                                ? "border-zinc-800 bg-zinc-950 text-zinc-100 focus:border-zinc-600"
                                : "border-zinc-300 bg-zinc-50 text-zinc-900 focus:border-zinc-500"
                                }`}
                        />

                    </div>

                    <div className="space-y-2">
                        <label className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-700"}`}>
                            Type of Work *
                        </label>

                        <select
                            value={workType}
                            onChange={(e) => setWorkType(e.target.value)}
                            className={`w-full rounded-xl border px-4 py-3 outline-none ${isDark
                                ? "border-zinc-800 bg-zinc-950 text-zinc-100 focus:border-zinc-600"
                                : "border-zinc-300 bg-zinc-50 text-zinc-900 focus:border-zinc-500"
                                }`}
                        >
                            <option value="kitchen">Kitchen Remodeling</option>
                            <option value="bathroom">Bathroom Renovation</option>
                            <option value="flooring">Flooring</option>
                            <option value="painting">Painting</option>
                            <option value="framing">Framing</option>
                            <option value="extension">Extension</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-700"}`}>
                            Project details *
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe what you need (size, timeline, location, etc.)"
                            rows={5}
                            className={`w-full resize-y rounded-xl border px-4 py-3 outline-none ${isDark
                                ? "border-zinc-800 bg-zinc-950 text-zinc-100 focus:border-zinc-600"
                                : "border-zinc-300 bg-zinc-50 text-zinc-900 focus:border-zinc-500"
                                }`}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full rounded-xl px-4 py-3 font-medium transition ${isDark
                            ? "bg-zinc-100 text-zinc-950 hover:opacity-90"
                            : "bg-sky-600 text-white hover:opacity-90"
                            }`}
                    >
                        Submit
                    </button>

                    {status === "success" && (
                        <p className="text-green-500 text-sm mt-2">
                            {message}
                        </p>
                    )}

                    <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                        (Temporary) This will show an alert. Next step: send to an API route.
                    </p>


                </form>
            </div>
        </main>
    );
}
