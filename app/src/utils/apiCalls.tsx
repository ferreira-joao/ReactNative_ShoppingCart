import api from "../services/api";

export function getStore() {
  return api
    .get("/store")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}
