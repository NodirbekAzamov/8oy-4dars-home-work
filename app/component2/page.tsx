"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Component2() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "username" && password === "1234") {
            router.push("/component2/cardTable");
        } else {
            alert("username ni paroli 'username' va password ni paroli '1234'")
        }
    }

    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-slate-200">
            <div className="w-[100%] flex justify-center items-center">
                <div className="w-[400px] h-[400px] border-2 flex flex-col items-center p-[20px] rounded-[10px] gap-[30px] bg-white">
                    <h1 className="text-[30px] font-[600]">Login</h1>
                    <form
                        className="flex flex-col items-start w-[90%] gap-[10px]"
                        onSubmit={handleSignIn} >
                        <label htmlFor="username">Username</label>
                        <input required
                            type="text"
                            className="w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="w-[100%] relative">
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                type="password"
                                className="mt-[10px] w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="self-center px-[20px] py-[10px] bg-purple-700 rounded-lg text-white">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
