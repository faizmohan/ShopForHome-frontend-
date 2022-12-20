import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    email:''
  }

  ngOnInit(): void {
  }
  formSubmit()
  {
    // alert('Registered!');
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null)
    {
      // alert("username can't be left empty");
      this.snack.open("Username is required !", '',{duration:3000, verticalPosition: 'top', horizontalPosition: 'right'});
      return;
    }

    // addUser function from user service class
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        // success
        console.log(data);
        // alert("success");
        Swal.fire('Registered successfully', 'Welcome ' +data.username, 'success',); 
      },
      (error)=>{
        // error
        console.log(error);
        // alert("error");
        this.snack.open("Try different username !", '',{duration:3000, verticalPosition: 'top', horizontalPosition: 'right'});
      }
    )
  }

}
