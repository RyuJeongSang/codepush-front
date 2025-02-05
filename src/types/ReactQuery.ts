import {
    UseInfiniteQueryOptions,
    UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export type UseQueryByAxiosOptions<T extends any> = UseQueryOptions<
    any,
    AxiosError,
    AxiosResponse<T>,
    any
>;
export type UseInfiniteQueryByAxiosOptions<T extends any> = Omit<
    UseInfiniteQueryOptions<
        AxiosResponse<T>,
        AxiosError,
        AxiosResponse<T>,
        any,
        any
    >,
    'queryKey' | 'queryFn'
>;
