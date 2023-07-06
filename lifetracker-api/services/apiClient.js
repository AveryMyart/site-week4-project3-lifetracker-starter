import axios from "axios";
import API_BASE_URL from "../constants";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "lifetraker_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };


    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const result = await axios({ url, method, data, headers });
      return { data: result.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || String(err) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  }
  async loginUser(creds) {
    return await this.request({
      endpoint: "auth/login",
      method: "POST",
      data: creds,
    });
  }

  async signupUser(creds) {
    return await this.request({
      endpoint: "auth/register",
      method: "POST",
      data: creds,
    });
  }

  async logoutUser() {
    this.setToken(null);
    localStorage.setItem(this.tokenName, "");
  }
}

export default new ApiClient("http://localhost:3001");