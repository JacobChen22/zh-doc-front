import {commonRequest} from "./axios.ts";

export async function getUseById(id: number) {
    const response = await commonRequest.get(`/user/${id}`);
    return response.data;
}
