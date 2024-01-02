"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt={""}
          width="40"
          height="40"
          className="object-contain"
        />
      </Link>
      <p className="logo_text">Smart Prompt</p>

      {/*Mobile Navigation */}
      <div className="sm-flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Nav;
