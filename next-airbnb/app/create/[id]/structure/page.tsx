import { createCategory } from "@/app/actions";
import { CreationBottomBar, SelectCategory } from "@/app/components";

export default async function StructurePage({ params }: { params: Promise<{ id: string }> }) {
  const homeId = (await params).id;
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your home?
        </h2>
      </div>
      <form action={createCategory} >
        <input type="hidden" name="homeId" value={homeId}/>
        <SelectCategory />

        <CreationBottomBar/>
      </form>
    </>
  );
}
