import {commonRequest} from "./axios.ts";

export async function getDocumentById(id: number) {
    const response = await commonRequest.get(`/document/${id}`);
    return response.data;
}