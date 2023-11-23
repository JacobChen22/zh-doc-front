import {commonRequest} from "./axios.ts";

export async function getSpaceById(id: number) {
    const response = await commonRequest.get(`/space/${id}`);
    return response.data;
}

export async function updateSpace(id: string, name: string, body: string) {
    const response = await commonRequest.patch(`space/${id}`, {
        name: name,
        body: body,
    });
    return response.data;
}