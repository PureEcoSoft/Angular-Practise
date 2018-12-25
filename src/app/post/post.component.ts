import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {
  userList: any;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getAllPost().subscribe(res=>{
      console.log(res);
      this.userList=res;
    },err=>{
      console.log(err);
    })
  }

}
