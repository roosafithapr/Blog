import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  

})
export class BlogsComponent implements OnInit {
  
  
  blogs: {title: string; content: string ;author:string}[]=[];
  
  constructor(private blogsservice:BlogsService) { 
    
    this.blogs=this.blogsservice.blogs;
    
  }
  

  ngOnInit(): void {
  }

}
