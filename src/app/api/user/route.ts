import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.email, password: user?.password })
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

