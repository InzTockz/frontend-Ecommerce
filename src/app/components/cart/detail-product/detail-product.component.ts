import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCart } from 'src/app/common/item-cart';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id:number = 0;
  name:string = '';
  description:string = '';
  price:number = 0;
  urlImage:string = '';
  quantity:number = 0;

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private cartService:CartService){}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById():void{
    this.activatedRoute.params.subscribe(
      p => {
        let id = p['id'];
        if(id){
          this.productService.getProductById(id).subscribe(
            data => {
              this.id = data.id;
              this.name = data.name;
              this.description = data.description;
              this.urlImage = data.urlImage;
              this.price = data.price;
            }
          )
        }
      }
    )
  }

  addCart(id:number):void{
    console.log('id product: ', id);
    console.log('name product: ', this.name);
    console.log('price product: ', this.price);
    console.log('quantity product: ', this.quantity);
  }
}
