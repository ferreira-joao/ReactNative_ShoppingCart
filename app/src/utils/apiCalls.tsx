import api from "../services/api";

export async function getStore() {
  return await api
    .get("/store")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}
