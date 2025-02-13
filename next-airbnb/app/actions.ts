"use server";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createAirbnbHome({ userId }: { userId: string }) {

  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/structure`);
  } else if (
    !data.addedCategory &&
    !data.addedLocation &&
    !data.addedDescription
  ) {
    return redirect(`/create/${data.id}/structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/create/${data.id}/description`);
  }
}

export async function createCategoryPage (formData: FormData) {
  const categoryName = formData.get('categoryName') as string;
  const homeId = formData.get('homeId') as string;
  console.log(categoryName, homeId)

  await prisma.home.update({
    where: {
      id: '4dd755d7-6a7b-41e4-8bfa-cd4237bfaff7'
    },
    data: {
      categoryName: 'beach',
      addedCategory: true
    }
  })

  return redirect(`/create/${homeId}/description`);


}