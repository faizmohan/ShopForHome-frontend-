import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    productName: '',
    productDesc: '',
    image: '',
    productPrice: '',
    productCount: '',
    category:{
      cid: ''
    }
    
  }
  category: any;
  constructor(private _category: CategoryService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
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
  formSubmit() {
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
    this._category.addProduct(this.product).subscribe(
      (data: any) => {
        this.product.productName = '',
          this.product.productDesc = '',
          this.product.image = '',
          this.product.productPrice = '',
          this.product.productCount = '',
          this.product.category.cid='';
          Swal.fire("Success", 'Product added successfully', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire("error", 'server error', 'error');
      }
    )
  }

}
