
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  
  islogin=false
  isLoggedIn(){
    //this.islogin=true;
    return this.islogin;
  }
  blogs = [
    {
    
    title:'What is Lorem Ipsum?',
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    author:'E.BADMAN'
  },
  { 
    
    title:'Why do we use it?',
    content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
    author:'MENDOZA'
  },
  {
    
    title:'Where does it come from?',
    content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    author:'MICHAEL'
  },
  {
    
    title:'Where can I get some?',
    content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    author:'TICHOLA'
  },
];

onblogAdded(BlogData: { title: string; content: string ;author:string}) {
  
  this.blogs.push({
    
    title: BlogData.title,
    content: BlogData.content,
    author:BlogData.author,
  });
  //console.log(this.blogs);

}


  

  constructor() { }
}
