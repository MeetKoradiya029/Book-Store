import { CartModel, GetCart } from "../../models/CartModel";
import request from "./request";

class CartService {
 ENDPOINT = "cart";

 public async add(data: CartModel): Promise<CartModel> {
  const url = `${this.ENDPOINT}`;
  return request
   .post<CartModel>(url, data)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return Promise.reject(e.response);
   });
 }

 public async getList(id: number): Promise<GetCart> {
  const url = `${this.ENDPOINT}/list?UserId=${id}`;
  return request.get<GetCart>(url).then((res) => {
   return res.data;
  });
 }

 public async updateItem(data: CartModel): Promise<CartModel> {
    const url = `${this.ENDPOINT}/Update`;
    return request
     .put<CartModel>(url, data)
     .then((res) => {
      return res.data;
     })
     .catch((e) => {
      return Promise.reject(e);
     });
   }

 public async removeItem(id: number): Promise<CartModel> {
  const url = `${this.ENDPOINT}/delete/${id}`;
  return request
   .delete<CartModel>(url)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return e;
   });
 }


}

export default new CartService();
