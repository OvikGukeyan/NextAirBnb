"use client";
import { Button } from "@/components/ui";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButtons() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size={"lg"}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
        Please wait
      </Button>
      ) : (
        <Button type="submit" size={"lg"}>
          Save
        </Button>
      )}
    </>
  );
}
