import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  users: any
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getall().subscribe((data: any) => {
      this.users = data
      console.log(this.users)
    })
  }
  deleteData(id: any) {
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
        this.user.deleteUser(id).subscribe(
          (data) => {
            this.users = this.users.filter((user: any) => user.id != id)
            Swal.fire('Success', 'User deleted', 'success')
          },
          (error) => {
            Swal.fire('Error', 'Problem in deletion', 'error')
          }
        );
      }
    });
  }
}
