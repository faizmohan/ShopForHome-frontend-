import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileUploadUrl = "http://localhost:8080/product/upload";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  file: any
  flag = true
  selectFile(event: any) {
    // console.log(event);
    this.file = event.target.files[0];  
  }
  uploadFile() {
    let formData = new FormData()
    formData.append("file", this.file)

    this.flag=false;
    
    this.http.post(this.fileUploadUrl, formData).subscribe(
      (data:any) => {
        // success
        console.log(data);
        this.flag = true;
        alert(data.message);
      },
      (error) => {
        // error
        console.log(error);
        this.flag = true;
        alert("error");
      }
    );
  }
}
