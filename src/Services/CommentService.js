import http from "../Components/http-common";

class CommentService {
  get(id) {
    return http.get(`/comments/${id}`);
  }

  create(data) {
    return http.post("/comments", data);
  }
}

export default new CommentService();
