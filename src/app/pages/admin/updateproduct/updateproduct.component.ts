import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductserviceService } from 'src/app/services/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  pid = 0;
  product: any;
  category: any;
  constructor(private _category: CategoryService,private _route:ActivatedRoute, private serve:ProductserviceService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.pid = this._route.snapshot.params['pid'];
    this.serve.getSingleProduct(this.pid).subscribe((data:any)=>{
      this.product=data;
      console.log(data);
    },
    (error)=>{
      console.log(error);
    }   
    );
    this._category.categories().subscribe((data: any) => {
      this.category = data;
      console.log(this.category);
    },
      (error) => {
        console.log(error);
        Swal.fire('error', 'error in fetching data', 'error');
      }
    );
  }
  formSubmit()
  {
    if (this.product.productName.trim() == '' || this.product.productName.trim() == null) {
      this._snack.open("Product name required", '', {
        duration: 3000,
      });
      return;
    }
    if (this.product.image.trim() == '' || this.product.image.trim() == null) {
      this._snack.open("image url required", '', {
        duration: 3000,
      });
      return;
    }
    // if (this.product.category.cid.trim() == '' || this.product.category.cid.trim() == null) {
    //   this._snack.open("category id required", '', {
    //     duration: 3000,
    //   });
    //   return;
    // }
    this.serve.updateProduct(this.product).subscribe(
      (data: any) => {
        this.product.productName = '',
          this.product.productDesc = '',
          this.product.image = '',
          this.product.productPrice = '',
          this.product.productCount = '',
          this.product.category.cid='';
          Swal.fire("Success", 'Product updated successfully', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire("error", 'server error', 'error');
      }
    )
  }

}
