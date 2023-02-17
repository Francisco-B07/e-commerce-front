import useSWR from "swr";
import useSWRInmutable from "swr/immutable";
import { fetchAPI, getSavedToken, removeToken, saveToken } from "lib/api";

export function useMe() {
  const { data, error, isLoading } = useSWR("/me", fetchAPI, {
    revalidateOnFocus: false,
  });
  try {
    return data;
  } catch (e) {
    throw { message: error };
  }
}

export function useGetToken() {
  const { data, error, isLoading } = useSWR("auth_token", getSavedToken);
  try {
    return data;
  } catch (e) {
    throw { message: error };
  }
}
export function useSetToken(token: string) {
  const { data, error, isLoading } = useSWR(token, saveToken);
  try {
    return data;
  } catch (e) {
    throw { message: error };
  }
}
export function useRemoveToken(token: string) {
  const { data, error, isLoading } = useSWR(token, removeToken);
  try {
    return data;
  } catch (e) {
    throw { message: error };
  }
}

export function useProduct(productId: string) {
  const { data, error, isLoading } = useSWRInmutable(
    () => (productId ? "/products/" + productId : null),
    fetchAPI
  );

  try {
    return data;
  } catch (e) {
    throw { message: e };
  }
}

export function useProducts(query: string) {
  const { data, error, isLoading } = useSWR(
    "/search?limit=5&q=" + query,
    fetchAPI,
    {
      revalidateOnFocus: false,
    }
  );
  try {
    console.log("productos", data);
    return data;
  } catch (e) {
    throw { message: error };
  }
}
