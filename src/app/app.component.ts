import { Component } from '@angular/core';
import { BlogsService } from './blogs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  

  constructor(public blogsservice:BlogsService){ }

  
/*
  constructor(private blogsservice:BlogsService){}
  blogs = [
    {
    title:'travel',
    content:'food ,place',
  },
];

AddBlog(BlogData: { title: string; content: string }) {
  
  this.blogsservice.onblogAdded(BlogData);
}
*/
}
