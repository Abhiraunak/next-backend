import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.email, email: user?.email })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    const user = await client.user.create({
        data : {
            email : body.email,
            password : body.password
        }
    })
    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}

