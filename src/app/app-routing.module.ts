import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';


import { AppComponent } from './app.component';

import { CreateComponent } from './create/create.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import {BlogsService} from './blogs.service';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  
  { path:'',component:BlogsComponent},
  { path: 'create', component: CreateblogComponent },
  { path: 'blog/:id', component:BlogdetailsComponent },
  { path:'loginn',component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}