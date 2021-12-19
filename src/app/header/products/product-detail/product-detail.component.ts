import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from './../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  faBars = faBars;
  faAngleRight = faAngleRight;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  headPhone = '../../../../assets/product-images/headphone.jpg';
  jacket = '../../../../assets/product-images/jacket.jpg';
  id : any;
  data :any;
  productList: any;
  constructor(private route : ActivatedRoute, private productService : ProductService,private cartService : CartService, private api: ApiService) {}


  ngOnInit(): void {
   
  }

 
    
  addtoCart(product:any) {
    this.cartService.addtoCart({
      product,
      quantity : 1,
      },
      )
  }

}
