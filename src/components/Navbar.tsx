"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="container ">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <div className="d-flex justify-content-between ">
            <Link href="/" className="d-flex">
              <Image
                src="./assets/images/logo.svg"
                width={40}
                height={30}
                alt="logo"
              />
              <p>Kidbook Share</p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
