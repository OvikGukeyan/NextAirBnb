import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { CreationSubmit } from ".";
import Link from "next/link";
import { Button } from "@/components/ui";

type Props = {
  className?: string;
};

export const CreationBottomBar: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "fixed w-full bottom-0 z-10 bg-white border-t h-24",
        className
      )}
    >
      <div className="flex justify-between items-center mx-auto px-5 lg:px-10 h-full">
        <Button size={"lg"} variant={"secondary"} asChild>
          <Link href={"/"}>Cancel</Link>
        </Button>
        <CreationSubmit />
      </div>
    </div>
  );
};
