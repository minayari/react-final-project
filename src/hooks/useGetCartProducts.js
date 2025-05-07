import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useGetCartProducts(productID) {
  async function queryFn() {
    return await api.get(`/products/${productID}`);
  }

  return useQuery({
    queryFn,
    queryKey: [`cartProducts${productID}`],
    retry: 1,
  });
}