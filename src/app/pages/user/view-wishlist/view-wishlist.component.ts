import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.css']
})
export class ViewWishlistComponent implements OnInit {

  products:any = [
    
  ]
  constructor(private _route:ActivatedRoute,private login:LoginService, private product:ProductserviceService) { }

  ngOnInit(): void {
    this.login.getWishlist().subscribe((data:any) => {
      this.products = data.products
    });
    console.log(this.products) 
  }
  addToCart(pid:number){
    this.product.addToCart(this.login.getUser().cart.cartid, pid).subscribe(data=>{
      console.log(data)
    })
  }
}
