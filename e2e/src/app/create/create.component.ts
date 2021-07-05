import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  
  title: string = '';
  content: string = '';
  author:string='';

  ngOnInit(): void {
  }

  @Output() blogcreated = new EventEmitter<{
    
    title: string;
    content: string;
    author:string;
  }>();

  onblogAdd() {
    this.blogcreated.emit({
      
      title: this.title,
      content: this.content,
      author:this.author,
    });
  }

}
