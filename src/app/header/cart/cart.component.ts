import { Component, OnInit } from '@angular/core';
import { faCartArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faCartArrowDown = faCartArrowDown
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

}
