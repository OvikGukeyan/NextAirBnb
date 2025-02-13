// import { createCategoryPage } from "@/app/actions";
import { createCategoryPage } from "@/app/actions";
import { CreationSubmit, SelectCategory } from "@/app/components";
import { Button } from "@/components/ui";
import Link from "next/link";

export default async function StructurePage({ params }: { params: Promise<{ id: string }> }) {
  const homeId = (await params).id;
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your home?
        </h2>
      </div>
      <form action={createCategoryPage} >
        <input type="hidden" name="homeId" value={homeId}/>
        <SelectCategory />

        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24 ">
          <div className="flex justify-between items-center mx-auto px-5 lg:px-10 h-full">
            <Button size={"lg"} variant={"secondary"} asChild>
                <Link href={'/'}>
                Cancel
                </Link>
                </Button>
            <CreationSubmit/>

          </div>
        </div>
      </form>
    </>
  );
}
