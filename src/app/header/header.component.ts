import { Component, OnInit } from '@angular/core';
import {
  faCartPlus,
  faShoppingBag,
  faUserCircle,
  faSearch,
  faHome,
  faTags
} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
