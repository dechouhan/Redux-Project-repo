import http from "../Components/http-common";

class MemberService {
  getAll() {
    return http.get("/members");
  }

  signup(data) {
    return http.post("/signup", data);
  }

  login(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/members/${id}`, data);
  }

  delete(id) {
    return http.delete(`/members/${id}`);
  }
}

export default new MemberService();
