import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="box">
        <span className="label">Error</span>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" className="btn">
          Return Home
        </Link>
      </div>
    </div>
  );
}