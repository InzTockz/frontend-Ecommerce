import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  id:number = 0;
  name:string = '';

  constructor(private categoryService:CategoryService, private toastr:ToastrService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getCategoryById();
  }

  addCategory():void{
    let category = new Category(this.id, this.name);
    this.categoryService.createCategory(category).subscribe(
      resp => {
        if(category.id){
          this.toastr.success('Categoria actualizada correctamente','Categorias');
        } else {
          this.toastr.success('Categoria registrada correctamente','Categorias');
        }
        
        this.router.navigate(['/admin/category']);
      }
    )
  }

  getCategoryById():void{
    this.route.params.subscribe(
      category => {
        let id = category['id'];
        if(id){
          console.log(id);
          this.categoryService.getCategoryById(id).subscribe(
            data => {
              this.id = data.id;
              this.name = data.name;
            }
          )
        }
      }
    )
  }
}
