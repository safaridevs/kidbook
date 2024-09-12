"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const isLoggedIn = true;
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="d-flex justify-content-between">
            <Link href="/" className="d-flex">
              <Image
                src="./assets/images/logo.svg"
                width={40}
                height={30}
                alt="logo"
              />
              <p>Kidbook Share</p>
            </Link>
            {isLoggedIn ? (
              <div className="d-flex ">
                <Link href="/create-book" className="btn btn-success">
                  Share Book
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
