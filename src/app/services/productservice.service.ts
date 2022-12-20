import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private _http:HttpClient) { }
  public getProductsOfCategory(id: any)
  {
    return this._http.get(`${baseUrl}/product/category/${id}`);
  }

  addToWishlist(wid:number, pid:number){
    return this._http.post(`${baseUrl}/wishlist/addProduct/${wid}/${pid}`,{})
  }
  addToCart(cid:number, pid:number){
    return this._http.post(`${baseUrl}/cart/addProduct/${cid}/${pid}`,{})
  }
  getall(){
    return this._http.get(`${baseUrl}/product/`)
  }
  updateProduct(p:any){
    return this._http.put(`${baseUrl}/product/`, p)
  }  
  getSingleProduct(pid: any)
  {
    return this._http.get(`${baseUrl}/product/${pid}`)
  }
  deleteProduct(pid:any)
  {
    return this._http.delete(`${baseUrl}/product/${pid}`)
  }
  sendMail(request:any)
  {
    return this._http.post(`${baseUrl}/sendEmail`, request)
  }
}
