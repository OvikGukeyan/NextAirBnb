import { createDescription } from "@/app/actions";
import { Counter, CreationBottomBar } from "@/app/components";
import { Card, CardHeader, Input, Label, Textarea } from "@/components/ui";

export default async function DescriptionPage({ params }: { params: Promise<{ id: string }> }) {
  const homeId = (await params).id;

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Please describe your home as good as you can!
        </h2>
      </div>

      <form action={createDescription}>
        <input type="hidden" name="homeId" value={homeId} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="Shorl and simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Describe your home in a few words..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              required
              min={10}
              placeholder="Price per night in EUR"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="imageFile" type="file" required />
          </div>

          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="underline font-medium">Guests</h3>
                    <p className="text-muted-foreground text-sm">How many guests can you accommodate?</p>
                </div>
                <Counter name='guests'/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="underline font-medium">Rooms</h3>
                    <p className="text-muted-foreground text-sm">How many rooms do you have?</p>
                </div>
                <Counter name='rooms'/>
              </div><div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="underline font-medium">Bathrooms</h3>
                    <p className="text-muted-foreground text-sm">How many bathrooms do you have?</p>
                </div>
                <Counter name='bathrooms'/>
              </div>
            </CardHeader>
          </Card>
        </div>

        <CreationBottomBar/>
      </form>
    </>
  );
}
