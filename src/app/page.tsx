export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <h1 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Welcome
          </h1>
          <nav className="flex justify-center gap-4">
            <a
              href="/signin"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}
