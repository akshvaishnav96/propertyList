import React from "react";
import Login from "@/components/admin/loginForm/Login";
import Link from "next/link";
import Image from "next/image";

// export async function generateMetadata({ params }) {
//   return {
//     title: "hagsd",
//   };
// }
export const metadata = {
  title: "Login Page",
  description: "Login to your account to access exclusive features.",
};

export default function page() {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image
            src="/4346990.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
            width={800}
            height={800}
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <Login action={"/api/login"} />
          <div className="mt-6 text-blue-500 text-center">
            <Link href="/register" className="hover:underline">
              Go To signup page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
