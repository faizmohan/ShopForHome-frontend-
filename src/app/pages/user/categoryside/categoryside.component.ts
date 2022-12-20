import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoryside',
  templateUrl: './categoryside.component.html',
  styleUrls: ['./categoryside.component.css']
})
export class CategorysideComponent implements OnInit {

  categories = [
    {
      id: 1,
      categoryName: 'Furniture',
      description: 'includes all furniture related items'
    }
  ];
  constructor(private _category: CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        console.log(error);
        Swal.fire('error', 'error in fetching data', 'error');
      }
    );
  }

}
