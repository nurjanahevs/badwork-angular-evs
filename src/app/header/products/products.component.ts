import { map, Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product$ : Observable<any[]> | undefined
  product : any
  faBars = faBars;
  faAngleRight = faAngleRight;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  headPhone = '../../../../assets/product-images/headphone.jpg';
  jacket = '../../../../assets/product-images/jacket.jpg';
  camera = '../../../../assets/product-images/kamera.jpg';
  laptop = '../../../../assets/product-images/laptop.jpg';
  sdCard = '../../../../assets/product-images/sdcard.jpg';
  speaker = '../../../../assets/product-images/speaker.jpg';
  ssd = '../../../../assets/product-images/ssd.jpg';
  usb = '../../../../assets/product-images/usb.jpg';

  constructor(private http:HttpClient, private productService:ProductService) { } 

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct(): void {
    this.productService.getProduct()
      .subscribe({
        next: (data) => {
          this.product = data;
          console.log(data);
          console.log(this.product.product.name)
    
        },
        error: (e) => console.error(e)
      });
  }

}
