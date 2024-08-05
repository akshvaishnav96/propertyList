import { cookies } from "next/headers";
import User from "@/mongodb/schema/userRegister.js"
// import dbConn from "@/mongodb/connection/dbConn.js"

// dbConn()

const generateAccessTokenAndRefreshToken = async function (userID) {
    try {


        const user = await User.findById(userID);



        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();




        user.refreshToken = refreshToken;


        const updateUser = await user.save();

        const userId = updateUser._id;
        return { accessToken, refreshToken, userId };
    } catch (error) {
        throw new Error("cookies not set something went wrong");
    }
};


export async function POST(request) {

    try {
        const cookieValue = cookies();


        let { email, password } = await request.json();




      

        if (!email || !password) {
            throw new Error("all fields required");
        }

        const existUser = await User.findOne({
            email
        });

        if (!existUser) {

            throw new Error("user dose not exist");

        }


        const verifyUser = await existUser.verifyPassword(password);

        if (!verifyUser) {
            throw new Error("user Details Not Matched")
        }




        const { accessToken, refreshToken, userId } =
            await generateAccessTokenAndRefreshToken(existUser._id);




        cookies().set("access_token", accessToken, { expires: new Date(Date.now() + (60 * 60 * 1000)), httpOnly: true, })



        let redirectUrl = existUser.role === "user" ? "/" : `/${existUser.role}`

        return Response.json({ data: { email, password }, status: true, redirect: redirectUrl }, { status: 200 })
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            // Format validation errors
            const formattedErrors = Object.values(error.errors).map(err => err.message);
            return Response.json({ data: {}, status: false, err: formattedErrors[0] })

        }
        return Response.json({ data: {}, status: false, err: error.message, })
    }
}


