import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  cid: any;
  categoryName: any;
  products:any = [
    
  ]
  constructor(private _route:ActivatedRoute, private _product:ProductserviceService, private login:LoginService) { }

  ngOnInit(): void {
   this.cid = this._route.snapshot.params['id'];
   this.categoryName = this._route.snapshot.params['categoryName'];
   this._product.getProductsOfCategory(this.cid).subscribe((data:any)=>{
    console.log(data);
    this.products=data;
   },
   (error)=>{
    console.log(error);
   }
   )
   console.log(this.cid);
   console.log(this.categoryName);
   
  }

  addToWishlist(pid:number){
   
    this._product.addToWishlist(this.login.getUser().wishlist.wid, pid).subscribe(data=>{
      console.log(data)
    })
  }
  addToCart(pid:number){
    this._product.addToCart(this.login.getUser().cart.cartid, pid).subscribe(data=>{
      console.log(data)
    })
  }
}
