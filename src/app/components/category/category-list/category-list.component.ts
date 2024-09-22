import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[] = [];

  constructor(private categoryService:CategoryService, private teastr:ToastrService){}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories():void{
    this.categoryService.getCategoryList().subscribe(
      data => this.categories = data
    )
  }

  deleteCategoryById(id:number):void{
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe(
          () => this.listCategories()
        )
        Swal.fire({
          title: "Eliminado!",
          icon: "success"
        });
      }
    });
  }
}
