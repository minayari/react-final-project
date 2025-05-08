import { useQueries, useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useGetCartProducts(productIDs) {
  // async function queryFn() {
  //   const req = await Promise.all(
  //     productID.map((id) => api.get(`/products/${id}`))
  //   );
  //   return req;
  // }

  async function queryFn() {
    const req = await Promise.all(
      productIDs.map((id) => api.get(`/products/${id}`))
    );
    return req;
  }

  return useQuery({
    queryFn,
    queryKey: [`cartProducts@${productIDs}`],
    retry: 1,
  });
}
