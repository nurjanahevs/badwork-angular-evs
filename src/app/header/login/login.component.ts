import { Component, OnInit } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
