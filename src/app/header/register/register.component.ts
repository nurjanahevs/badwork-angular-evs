import { Component, OnInit } from '@angular/core';
import {  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators, } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { AuthService } from '../../services/auth/auth.service';
  import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataUser = {
    email:'',
    password:'',
    name:'',
  }

  constructor(private authService:AuthService, private router:Router) { }


  signupUser(){
    this.authService.signupUser(this.dataUser)
    .subscribe(
      res =>{
      console.log(res)
      this.router.navigate(['profile'])
    },
    )
  }
  ngOnInit(): void {
  }

}
