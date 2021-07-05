import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password:'',
  };
  formsubmitted = false;

  constructor(private blogsservice:BlogsService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.blogsservice.islogin=true;
    this.formsubmitted = true;
    this.user.username = form.value.username;
    this.user.password=form.value.password;
  }

}
