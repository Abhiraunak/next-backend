"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();
    const handleRedirect = () => {
    router.push('/');
  };
    return (
        <div className="h-screen flex justify-center flex-col bg-zinc-700">
            <div className="flex justify-center">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        <div className="px-10">
                            <h1 className="text-3xl font-extrabold">Signup</h1>
                        </div>
                        <div className="pt-5">
                            <LabeledInput onChange={(e) => {
                                setEmail(e.target.value);
                            }} label="Username" placeholder="example@email.com"/>

                            <LabeledInput onChange={(e) => {
                                setPassword(e.target.value);
                            }} label="Password" type={"password"} placeholder="..........." />

                            <button onClick={async () => {
                                const response = await axios.post("http://localhost:3000/api/user", {
                                    email,
                                    password
                                });
                                {handleRedirect}
                            }}
                            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signup</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

function LabeledInput({
    label,
    placeholder = "", // Default values
    type = "text",
    onChange,
}: LabeledInputType) {
    return <div>
        <label className="block mb-2 text-medium text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" placeholder={placeholder} required
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
    </div>
}

interface LabeledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>

}