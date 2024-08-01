import { cookies } from "next/headers";

export async function POST(request) {

    let { detail, password } = await request.json();


    cookies().set("role", "agency")
    return Response.json({ data: { detail, password }, status: true, redirect: "/agency" }, { status: 200 })
}


