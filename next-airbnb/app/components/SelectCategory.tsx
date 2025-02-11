"use client";

import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { categoryItems } from "@/lib";
import { Card, CardHeader } from "@/components/ui";
import Image from "next/image";

type Props = {
  className?: string;
};

export const SelectCategory: FC<Props> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div
      className={cn("grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36", className)}
    >
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={selectedCategory === item.name ? "border-primary " : ""}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />

              <h3 className="font-bold"> {item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};
