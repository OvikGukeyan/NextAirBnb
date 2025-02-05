import React, { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { UserNav } from "./";

type Props = {
  className?: string;
};

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={cn("w-full border-b", className)}>
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href={"/"}>
          <Image
            src="/airbnb.svg"
            alt="logo"
            className=" hidden lg:block"
            width={100}
            height={100}
          />
          <Image
            src="/airbnb-1.svg"
            alt="logo"
            className=" lg:hidden"
            width={50}
            height={50}
          />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1>hello</h1>
        </div>

        <UserNav/>
      </div>
    </nav>
  );
};
