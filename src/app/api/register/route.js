import User from "../../../mongodb/schema/userRegister";
// import dbConn from "@/mongodb/connection/dbConn.js"

// dbConn()

export async function POST(request) {
    try {
        const { username, email, mobile, password } = await request.json();

        if (!username || !email || !mobile || !password) {
            throw new Error("All fields Required")
        }

        const existUser = await User.findOne({ email })

        if (existUser) {
            throw new Error("user already exists")
        }

        const newUser = await User.create({ username, email, mobile, password })
        if (!newUser) {
            throw new Error("something went wrong when user create ")
        }

        return Response.json({ data: { username, email, mobile, password }, status: true, redirect: "/login" }, { status: 200 })
    } catch (error) {

        if (error.name === 'ValidationError') {
            // Format validation errors
            const formattedErrors = Object.values(error.errors).map(err => err.message);
            return Response.json({ data: {}, status: false, err: formattedErrors[0] })

        }
        return Response.json({ data: {}, status: false, err: error.message, })

    }
}