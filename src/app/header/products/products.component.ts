import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faBars = faBars;
  faAngleRight = faAngleRight;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  imageCarousel1 = '../../../../assets/images/slide1.jpg';
  imageCarousel2 = '../../../../assets/images/slide2.jpg';
  imageCarousel3 = '../../../../assets/images/slide3.jpg';
  headPhone = '../../../../assets/product-images/headphone.jpg';
  jacket = '../../../../assets/product-images/jacket.jpg';
  camera = '../../../../assets/product-images/kamera.jpg';
  laptop = '../../../../assets/product-images/laptop.jpg';
  sdCard = '../../../../assets/product-images/sdcard.jpg';
  speaker = '../../../../assets/product-images/speaker.jpg';
  ssd = '../../../../assets/product-images/ssd.jpg';
  usb = '../../../../assets/product-images/usb.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
