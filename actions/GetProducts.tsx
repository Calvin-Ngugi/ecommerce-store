import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ROUTE}/products`;

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getProducts;
