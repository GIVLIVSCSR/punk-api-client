import axios from "axios";
import { BASE_URL } from "./constants";

export default {
  getAllItems: (): Promise<any> => axios.get(`${BASE_URL}`),
  getItemsWithPizza: (): Promise<any> => axios.get(`${BASE_URL}?food=pizza`),
  getItemsWithSteak: (): Promise<any> => axios.get(`${BASE_URL}?food=steak`),
  getItemById: (id: string): Promise<any> => axios.get(`${BASE_URL}/${id}`),
};
