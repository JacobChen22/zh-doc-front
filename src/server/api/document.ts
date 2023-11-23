import {commonRequest} from "./axios.ts";

export async function getDocumentById(id: number) {
    const response = await commonRequest.get(`/document/${id}`);
    return response.data;
}

export async function createDocument(title: string, body: string) {
    const response = await commonRequest.post('document', {
        title: title,
        body: body,
    });
    return response.data;
}

export async function updateDocument(id: string, title: string, body: string,) {
    const response = await commonRequest.patch(`document/${id}`, {
        title: title,
        body: body,
    });
    return response.data;
}