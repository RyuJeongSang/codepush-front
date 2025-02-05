import { useQuery } from "@tanstack/react-query";
import { processGetAppList } from "apis/appManage";
import { QUERY_KEY } from "apis/ReactQueryKey";
import { UseQueryByAxiosOptions } from "types/ReactQuery";

export const useQuery_AppList = (configOptions?: UseQueryByAxiosOptions<Response_Apps>) =>
    useQuery({
        queryKey: [QUERY_KEY.app_list],
        queryFn: () => processGetAppList(),
        ...configOptions,
    })
