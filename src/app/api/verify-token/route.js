"use server"
import jwt from 'jsonwebtoken'; // Node.js module, used in server-side code
import { headers } from 'next/headers'
import User from '@/mongodb/schema/userRegister';

export async function POST(req) {





    try {




        const token = req.headers.get('token');



        const verifyCookie = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

        if (!verifyCookie) {
            throw new Error("Invalid token");
        }

        const existUser = await User.findOne({ email: verifyCookie.email })

        if (!existUser) {
            throw new Error("user dosent access according to the token")
        }


        let role = existUser.role;

        return Response.json({ status: true, role: role })

    } catch (error) {
        console.log(error);
        return Response.json({ status: false, role: "" })
    }

}
