import { useQueries, useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useGetCartProducts(productID = []) {
  return useQueries({
    queries: productID.map((id) => ({
      queryKey: ["cartProduct", id],
      queryFn: async () => {
        const res = await api.get(`/products/${id}`);
        return res.data;
      },
      retry: 1,
    })),
  });
}
