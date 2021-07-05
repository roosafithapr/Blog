import { Component, OnInit } from '@angular/core';
import {BlogsService } from '../blogs.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  blogId: number;
  blogDetails: { title: string; content: string; };

  constructor(
    private route: ActivatedRoute,
    private blogsservice: BlogsService,
  ) {
    this.blogId = route.snapshot.params.id;
    console.log(this.blogId)
    this.blogDetails = this.blogsservice.blogs[this.blogId];
  }

  ngOnInit(): void {
    /*this.blogtitle = this.route..paramMap.get['title'];
    this.blogDetails = this.blogsservice.blogs[this.blogtitle]; */
  }
  editSubmit(details:NgForm){
    console.log(details)
    this.blogsservice.onblogAdded(details.value);
    
  }
}
