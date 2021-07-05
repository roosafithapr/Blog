import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  constructor(private blogsservice:BlogsService){}
  /*blogs = [
    {
    title:'travel',
    content:'food ,place',
  },
];*/

AddBlog(BlogData: { title: string; content: string;author:string }) {
  
  this.blogsservice.onblogAdded(BlogData);
}


  ngOnInit(): void {
  }

}
