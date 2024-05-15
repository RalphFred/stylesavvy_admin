"use client"
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";



export default function Login() {
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
    }
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="p-12 lg:w-[400px] border-2 rounded-xl flex flex-col items-center"
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="mb-8"
        />
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="w-[300px] px-4 py-2 border-2 focus:border-slate-600 outline-none rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            className="w-[300px] px-4 py-2 border-2 focus:border-slate-600 outline-none rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-[300px] py-3 rounded-lg bg-black text-white font-semibold"
        >
          LOG IN
        </button>
      </form>
    </div>
  );
}
