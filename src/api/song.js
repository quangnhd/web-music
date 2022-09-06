import api from "./";

export function getAll() {
    return api.get(`/songs`);
}