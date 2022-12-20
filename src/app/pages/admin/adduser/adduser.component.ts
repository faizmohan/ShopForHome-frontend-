import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  User = {
    username:'',
    email:'',
    password:''
  }
  constructor(private user:UserService,private _snack: MatSnackBar) { }

  ngOnInit(): void {
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
    this.user.addUser(this.User).subscribe(
      (data: any) => {
        this.User.username = '',
          this.User.email = '',
          Swal.fire("Success", 'New user added', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire("error", 'server error', 'error');
      }
    )
  }

}
