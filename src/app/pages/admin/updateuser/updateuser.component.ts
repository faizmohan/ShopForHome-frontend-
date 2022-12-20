import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id: any;
  User = {
    username:'',
    email:'',
    password:''
  }

  constructor(private _route:ActivatedRoute,private user:UserService,private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
  //  this.categoryName = this._route.snapshot.params['categoryName'];
  //  this._product.getProductsOfCategory(this.cid).subscribe((data:any)=>{
  //   console.log(data);
  //   this.products=data;
  //  },
  //  (error)=>{
  //   console.log(error);
  //  }
  //  )
   console.log(this.id);
  //  console.log(this.categoryName);
  }
  formSubmit()
  {
    if (this.User.username.trim() == '' || this.User.username.trim() == null) {
      this._snack.open("username required", '', {
        duration: 3000,
      });
      return;
    }
    if (this.User.email.trim() == '' || this.User.email.trim() == null) {
      this._snack.open("email required", '', {
        duration: 3000,
      });
      return;
    }
    if (this.User.password.trim() == '' || this.User.password.trim() == null) {
      this._snack.open("password required", '', {
        duration: 3000,
      });
      return;
    }
    this.user.updateUser(this.User, this.id).subscribe(
      (data: any) => {
        this.User.username = '',
          this.User.email = '',
          Swal.fire("Success", 'Updated', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire("error", 'server error', 'error');
      }
    )
  }

}
