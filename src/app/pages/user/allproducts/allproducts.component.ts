import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css', `../view-products/view-products.component.css`]
})
export class AllproductsComponent implements OnInit {

  products:any = [
    
  ]
  constructor(private _route:ActivatedRoute,private login:LoginService, private product:ProductserviceService) { }

  searchKey:string ="";
  public searchTerm !: string;
  public search = new BehaviorSubject<string>("");
  ngOnInit(): void {
    this.product.getall().subscribe((data:any)=>{
      this.products = data
      console.log(this.products)
    })
    this.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToWishlist(pid:number){
    this.product.addToWishlist(this.login.getUser().wishlist.wid, pid).subscribe(data=>{
      console.log(data)
    })
  }
  addToCart(pid:number){
    this.product.addToCart(this.login.getUser().cart.cartid, pid).subscribe(data=>{
      console.log(data)
    })
  }
  searchit(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.search.next(this.searchTerm);
  }
  key = 'productPrice';
  reverse:boolean =false;
  sort(key: any)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
