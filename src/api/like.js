import api from "./";

export function getLike(userId) {
  return api.get(`/likes`, { params: { userId: userId } });
}

export function postLike({ userId, songId }) {
  return api.post(`/likes`, { userId: userId, songId: songId });
}

export function deleteLike(likeId) {
  return api.delete(`/likes/${likeId}`);
}