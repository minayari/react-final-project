import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useGetSingleProduct(productID) {
  async function queryFn() {
    return await api.get(`/products/${productID}`);
  }

  return useQuery({
    queryFn,
    queryKey: [`singleProduct${productID}`],
    retry: 1,
  });
}
