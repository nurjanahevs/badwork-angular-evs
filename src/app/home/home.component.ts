import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
