"use server";

import { revalidatePath } from "next/cache";

export const getAllProducts = async () => {
  const organizationID = process.env.ORGANISATION_ID;
  const appID = process.env.APP_ID;
  const apiKey = process.env.API_KEY;

  try {
    const res = await fetch(
      `https://api.timbu.cloud/products?organization_id=${organizationID}&reverse_sort=false&page=1&size=3&Appid=${appID}&Apikey=${apiKey}`
    );
    const data = await res.json();

    return data.items;
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};

export const getProduct = async (id: string) => {
  const organizationID = process.env.ORGANISATION_ID;
  const appID = process.env.APP_ID;
  const apiKey = process.env.API_KEY;

  try {
    const res = await fetch(
      `https://api.timbu.cloud/products/${id}?organization_id=${organizationID}&Appid=${appID}&Apikey=${apiKey}`, { next: { revalidate: 3600 } }
    );
    const data = await res.json();
   
    return data;
    
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }

};
