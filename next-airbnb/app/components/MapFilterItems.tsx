"use client";
import { cn, categoryItems } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { FC, useCallback } from "react";

type Props = {
  className?: string;
};

export const MapFilterItems: FC<Props> = ({ className }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <div
      className={cn(
        " flex w-full gap-x-10 justify-between mt-5 overflow-x-scroll no-scrollbar",
        className
      )}
    >
      {categoryItems.map((item) => (
        <Link
          key={item.name}
          href={pathname + "?" + createQueryString("filter", item.name)}
          className={cn(
            search === item.name
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col items-center gap-y-3 hover:opacity-100 transition-all duration-200 ease-in-out"
          )}
        >
          <div className="relative w-6 h-6">
            <Image src={item.imageUrl} alt={item.name} width={24} height={24} />
          </div>
          <p className="text-xs font-medium">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};
