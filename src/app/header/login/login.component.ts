import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
product:any;

 loginData = {
   email:'',
   password:''
 };

  constructor(private authService:AuthService, private router:Router, private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data:any[])=>{
      console.log(data)
      this.product=data
      console.log(this.product)
    })
}

  getData(){
    this.productService.getProduct().subscribe((data:any[])=>{
      console.log(data)
      this.product=data
      console.log(this.product)
    })
  }
signinUser(){
  this.authService.signinUser(this.loginData)
  .subscribe(
    res =>{
    console.log(res)
    localStorage.setItem('token', res.access_token)
    window.alert('succes login')
    this.router.navigate(['home'])
  },
  )
}

}