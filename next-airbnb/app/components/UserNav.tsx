import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

type Props = {
  className?: string;
};

export const UserNav: FC<Props> = async ({ className }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className={cn("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="border rounded-full px-2 py-2 lg:px-4 flex items-center gap-x-3">
            <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
            <Image
              className="rounded-full hidden lg:block"
              src={user?.picture ?? "/default-avatar.jpg"}
              width={32}
              height={32}
              alt="avatar"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] ">
          {user ? (
            <>
            <DropdownMenuItem>
                <form className="w-full">
                  <button type='submit' className="w-full text-start">
                    Airbnb your home
                  </button>
                </form>
              </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={"/my-home"} className="w-full">
                  My Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/favorites"} className="w-full">
                  My Favorites
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/reservations"} className="w-full">
                  My Reservations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator  />
              <DropdownMenuItem>
                <LogoutLink className="w-full">Logout</LogoutLink>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <RegisterLink className="w-full">Register</RegisterLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LoginLink className="w-full">Login</LoginLink>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
