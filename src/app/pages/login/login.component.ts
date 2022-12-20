import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: "",
    password: ""
  }
  constructor(private snack: MatSnackBar, private login: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log("login form subitted");

    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open("username required", '', {
        duration: 3000,
      });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("password required", '', {
        duration: 3000,
      });
      return;
    }
    // request server to generate jwt token 
    this.login.generateToken(this.loginData).subscribe((data: any) => {
      console.log("success");
      console.log(data);

      // store in local storage 
      this.login.loginuser(data.token);
      this.login.getCurrentUser().subscribe(
        (user: any) => {
          this.login.setUser(user);
          console.log(user);

          // redirect to dashboard based on role
          if (this.login.getUserRole() == "ADMIN") {
            // admin dashboard
            // window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          } else if (this.login.getUserRole() == "NORMAL") {
            // user dashboard
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.login.loginStatusSubject.next(true);
          } else {
            this.login.logout();
          }
        }
      );
    },
      (error) => {
        console.log("Error");
        console.log(error);
        this.snack.open("Invalid details! Try again", "", {
          duration: 3000,
        });
      }
    );
  }
}
