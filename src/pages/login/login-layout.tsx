import {FormEvent, useEffect, useState} from 'react'

import {BookmarkSquareIcon} from "@heroicons/react/24/solid";
import {commonRequest} from "../../server/api/axios.ts";


export default function LoginLayout() {

    const inputStyle = "block w-full outline-none rounded-xl border-0 py-3 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

    }, []);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        commonRequest.post('/login', {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data.accessToken);
        }, (error) => {
            console.error(error.response.data.message);
        });
    }

    if (true) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="w-1/2 max-w-md px-8 py-16 border rounded-2xl shadow-lg shadow-blue-100">
                    <div className="flex flex-row items-center justify-center">
                        <BookmarkSquareIcon className="w-16 mr-5 fill-blue-500"/>
                        <span className="text-4xl font-black font-sans">ZH Doc</span>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col my-2">
                            <div className="text-lg text-slate-600 mb-4">
                                <div className="flex flex-col">
                                    <label className="my-2">Email Address: </label>
                                    <input type="email" id="email" name="email" placeholder="Your email address"
                                           value={email} onChange={(e) => setEmail(e.target.value)}
                                           className={inputStyle}/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2">Your Password: </label>
                                    <input type="password" id="password" name="password" placeholder="Your password"
                                           value={password} onChange={(e) => setPassword(e.target.value)}
                                           className={inputStyle}/>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full rounded-xl bg-blue-600 py-3.5 text-white hover:bg-blue-500">
                                Sign In
                            </button>
                            <a className="flex justify-center mt-4 underline hover:cursor-pointer">Don't have an
                                account? Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return (<div>Logged in!</div>)
    }
}