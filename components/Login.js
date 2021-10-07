import React from "react";
import Image from "next/Image";
import { signIn } from "next-auth/client";

function Login(props) {
  return (
    <div className="grid place-items-center mt-20 space-y-20">
      <Image
        src="/images/fb.png"
        height={150}
        width={150}
        layout="fixed"
        objectfit="contain"
      />

      <h1
        onClick={signIn}
        className="bg-blue-500 rounded-full py-3 px-5 text-white font-semibold
        border-4 border-white hover:border-blue-200 cursor-pointer"
      >
        Log in with Facebook
      </h1>
    </div>
  );
}

export default Login;
