import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  productName: any;
  image: any;
  productDesc: string;
  productPrice: string;
  productCount: string;

  constructor(private _http:HttpClient) { }
  // load all categories
  public categories()
  {
    return this._http.get(`${baseUrl}/category/`);
  }
  // add new category
  public addCategory(category: any)
  {
    return this._http.post(`${baseUrl}/category/`,category)
  }
  public addProduct(product: any)
  {
    return this._http.post(`${baseUrl}/product/`,product)
  }
}
