import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f5] px-6 text-center">
      <h1 className="text-7xl font-bold text-[#8B1E2D]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-600">
        The page you are looking for does not
        exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#8B1E2D] px-8 py-4 text-white"
      >
        Back Home
      </Link>
    </div>
  );
}