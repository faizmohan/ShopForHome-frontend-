import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductserviceService } from 'src/app/services/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mailcontent',
  templateUrl: './mailcontent.component.html',
  styleUrls: ['./mailcontent.component.css']
})
export class MailcontentComponent implements OnInit {

  request = {
    to: "",
    subject:"",
    message:""
  }
  constructor(private mail:ProductserviceService,private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit() 
  {
    if (this.request.to.trim() == '' || this.request.to.trim() == null) {
      this._snack.open("Reciever mail required", '', {
        duration: 3000,
      });
      return;
    }
    this.mail.sendMail(this.request).subscribe(
      (data: any) => {
        this.request.to = '',
          this.request.message = '',
          this.request.subject = ''
          Swal.fire("Success", 'Mail sent', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire("error", 'server error', 'error');
      }
    )
  }

}
