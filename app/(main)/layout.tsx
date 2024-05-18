"use client";
import { auth } from "@/firebaseConfig";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsUserValid(true);
          console.log("This is the logged in user", user);
        } else {
          console.log("no user found");
          router.push("/");
        }
      });
    };

    checkAuth();
  }, []);

  if (isUserValid) {
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }
}
