import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import api from "../api/api";

export default function useGetProducts() {
  function queryFn() {
    const result = api.get("/products");
    return result;
  }

  return useQuery({
    queryFn,
    queryKey: ["allProducts"],
    retry: 1,
  });
}
