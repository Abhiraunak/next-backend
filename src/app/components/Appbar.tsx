"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();
    return (
        <>
            <div className="flex justify-between p-4 bg-current">
                <button className="px-4 py-y rounded-md bg-zinc-500 text-white"
                    onClick={() => {
                        signIn();
                    }}
                >
                    Sign in
                </button>
                <button className="px-4 py-y rounded-md bg-zinc-500 text-white"
                    onClick={() => {
                        signOut();
                    }}
                >Sign out</button>
            </div>
            <div className="max-w-screen-xl mx-auto mt-4">
                {JSON.stringify(session)}
            </div>
        </>
    )
}