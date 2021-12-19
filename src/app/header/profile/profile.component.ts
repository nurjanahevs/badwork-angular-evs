import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  dataAddress = { 
      street:'',
      city:'',
      state:'',
      zipcode:''
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

  });

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: '',
      address: {
        street: ''
      }
    });
  }

  postAddress(){
    this.authService.postAddress(this.dataAddress)
    .subscribe(
      res =>{
        console.log(res)
      this.router.navigate(['home'])
      }
    )
  }
  
  ngOnInit(): void {}
}