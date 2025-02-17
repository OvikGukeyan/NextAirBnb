"use server";

import { prisma } from "@/lib/db";
import { supabase } from "@/lib/supabase";
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
  }else if (data.addedCategory && data.addedDescription && !data.addedLocation) {
    return redirect(`/create/${data.id}/address`);
  }
}

export async function createCategory(formData: FormData) {
  const categoryName = formData.get("categoryName") as string;
  const homeId = formData.get("homeId") as string;

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });

  return redirect(`/create/${homeId}/description`);
}

export async function createDescription(formData: FormData) {
  const {
    title,
    description,
    price,
    imageFile,
    rooms,
    guests,
    bathrooms,
    homeId,
  } = Object.fromEntries(formData.entries()) as {
    title: string;
    description: string;
    price: string;
    imageFile: File;
    rooms: string;
    guests: string;
    bathrooms: string;
    homeId: string;
  };
  const { data: imageData, error: uploadError } = await supabase.storage
    .from("images")
    .upload(`${imageFile.name}-${new Date().toISOString()}`, imageFile, {
      cacheControl: "2592000",
      contentType: "image/png",
    });
  if (uploadError) {
    console.error("Ошибка загрузки:", uploadError);
    throw uploadError;
  }

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      title: title,
      description: description,
      price: parseInt(price),
      photo: imageData?.path,
      rooms: rooms,
      guests: guests,
      bathrooms: bathrooms,
      addedDescription: true,
    },
  });

  return redirect(`/create/${homeId}/address`);
}
