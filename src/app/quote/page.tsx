"use client";

import { useState } from "react";

export default function QuotePage() {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Minimal for now — later we’ll send it to an API route
        alert(`Thanks! Name: ${fullName}, Phone: ${phone}`);
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-xl px-4 py-10">
                <h1 className="text-3xl font-semibold tracking-light">Request a Free Quote</h1>
                <p className="mt-2 text-zinc-300">
                    Tell us about your project and we'll get back to you.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
                >
                    <div className="space-y-2">
                        <label className="text-sm text-zinc-200">Full Name *</label>
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Deniz Shayan"
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-zinc-200">Phone Number *</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(416) 123-4567"
                            inputmode="tel"
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-zinc-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-zinc-100 px-4 py-3 front-medium text-zinc-950 transition hover:opacity-90"
                        >
                        Submit
                    </button>


                    <p className="text-xs text-zinc-400">
                      (Temporary) This will show an alert. Next step: send to an API route.
                    </p>
                </form>
            </div>
        </main>
    );
}