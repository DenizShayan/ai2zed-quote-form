import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Ai2Zed Renovation
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Renovation services you can trust
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          From kitchens and bathrooms to flooring, painting, framing, and home
          extensions, Ai2Zed helps bring your renovation ideas to life.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="rounded-xl bg-zinc-100 px-6 py-3 font-medium text-zinc-950 transition hover:opacity-90"
          >
            Request a Free Quote
          </Link>

          <a
            href="tel:+14161234567"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-zinc-100 transition hover:border-zinc-500"
          >
            Call Us
          </a>
        </div>
      </section>
    </main>
  );
}