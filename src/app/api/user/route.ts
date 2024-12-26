import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "../lib/auth";
const client = new PrismaClient();

// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.email, password: user?.password })
// }

export async function GET(){
    const session = await getServerSession(NEXT_AUTH);
    return NextResponse.json({
        session
    })
}

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    await client.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in!"
    })
}

