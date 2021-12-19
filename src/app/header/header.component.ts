import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

import {
  faCartPlus,
  faShoppingBag,
  faUserCircle,
  faSearch,
  faHome,
  faTags
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCartPlus = faCartPlus;
  faShoppingBag = faShoppingBag;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faHome = faHome;
  faTags = faTags;



  constructor(public authService : AuthService, private cartService : CartService ,public productService : ProductService) { }

  ngOnInit(): void {
 
    }
  }

