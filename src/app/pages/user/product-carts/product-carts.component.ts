import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-product-carts',
  templateUrl: './product-carts.component.html',
  styleUrls: ['./product-carts.component.css']
})
export class ProductCartsComponent implements OnInit {

  total:number=0;
  products:any;
  constructor(private user:LoginService, private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.user.getCart().subscribe((data:any)=>{
      this.products = data.products
      this.products.forEach((element:any) => {
        element.count = 1;
        this.total+=element.productPrice*element.count
      });
      console.log(this.products)
      this.products
    })
  }

  getTotal(){
    this.total = 0
    this.products.forEach((e:any)=>{
      this.total += e.productPrice * e.count
    })
  }

  increaseCount(p:any){
    if(p.count===p.productCount) return alert("There is not enough stocks")
    p.count+=1
    this.getTotal()
  }
  decreaseCount(p:any){
    if(p.count===0) return
    p.count-=1
    this.getTotal()
  }

  buy(){
    alert("Products are purchased successfully")
    this.products.forEach((e:any)=>{
      e.productCount -= e.count;
      this.productService.updateProduct(e).subscribe((data:any)=>
        console.log(data)
      )
    })
  }

}
