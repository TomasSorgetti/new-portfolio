import { getAllTechnologies } from "@/services/technologiesService";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Technology = {
    id: number,
    name: string,
    createdAt?: string,
    updatedAt?: string
}

export const technologiesApi = createApi({
    reducerPath: "api/technologies",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
    endpoints: (build) => ({
        getAllTechnologies: build.query({
            query: () => "technologies"
        })
    })
})

export const { useGetAllTechnologiesQuery } = technologiesApi


// export const getAllTechnologies = async (): Promise<string[]> => {
//     const response = await fetch("http://localhost:8000/api/technologies")
//     return await response.json()
// };
