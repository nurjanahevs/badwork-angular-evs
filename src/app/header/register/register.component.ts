import { Component, OnInit } from '@angular/core';
import {  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators, } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
