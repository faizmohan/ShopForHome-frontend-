import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ProductserviceService } from 'src/app/services/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css',]
})
export class AdminProductComponent implements OnInit {

  products:any;
  constructor(private login:LoginService, private product:ProductserviceService) { }

  ngOnInit(): void {
    this.product.getall().subscribe((data:any)=>{
      this.products = data
      console.log(this.products)
    })
  }
  key = 'productCount';
  reverse:boolean =false;
  sort(key: any)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }
  deleteData(pid: any) {
    Swal.fire(
      {
        icon: 'info',
        title: "Are you sure to delete?",
        confirmButtonText: 'Delete',
        showCancelButton: true
      }
    ).then((result) => {
      if(result.isConfirmed)
      {
        this.product.deleteProduct(pid).subscribe(
          (data: any) => {
            this.products = this.products.filter((products: any) => products.pid != pid)
            Swal.fire('Success', 'Product deleted', 'success')
          },
          (error: any) => {
            Swal.fire('Error', 'Problem in deletion', 'error')
          }
        );
      }
    });
  }

}
