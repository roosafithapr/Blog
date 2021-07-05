import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CreateComponent } from './create/create.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import {BlogsService} from './blogs.service';
import { CreateblogComponent } from './createblog/createblog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { NologinComponent } from './nologin/nologin.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    BlogComponent,
    BlogsComponent,
    CreateblogComponent,
    BlogdetailsComponent,
    LoginComponent,
    NologinComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
