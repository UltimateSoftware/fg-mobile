import { status } from "../constants/Chapter";
import { AUTH_TOKEN, API_BASE } from "../../SharedConstants";

export const updateChapter = async store => {
  store.setState({ Status: status.loading });
  // perform chapter update
  return new Promise((resolve, reject) => {
    store.setState({ Status: status.ready });
    resolve();
  });
};

export const loadChapter = async (store, id) => {
  store.setState({ Status: status.loading });
  // call Chapter API
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_BASE}/chapters/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN
        },
        method: "GET"
      });
      const json = await response.json();
      store.setState({ Chapter: { Chapter: json }, Status: status.ready });
      console.log(json);
      resolve();
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};
