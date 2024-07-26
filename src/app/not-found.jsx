import React from "react";
import Link from "next/link";
export default function notFound() {
  return (
    <div className="vhl">
      <h1>Page Not Found</h1>
      <Link href="/admin">Back to admin Page</Link>
    </div>
  );
}
