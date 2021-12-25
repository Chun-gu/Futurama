import useSWR from "swr";
import { FUTURAMA_API_ENDPOINT } from "../constants";
import { fetcher } from "../utils/fetcher";

export const useGetData = (path: string) => {
    return useSWR(`${FUTURAMA_API_ENDPOINT}${path}`, fetcher);
};
