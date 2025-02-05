import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { DropdownMenu } from "@/components/ui";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
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
