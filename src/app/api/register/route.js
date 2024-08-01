export async function POST(request) {
    const { username, email, mobile, password } = await request.json();

    return Response.json({ data: { username, email, mobile, password } })
}