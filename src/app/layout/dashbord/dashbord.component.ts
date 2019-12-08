import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Post } from '../entities/post.entity';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers:[CrudService]
})
export class DashbordComponent implements OnInit {
  resultats : any=[];
  title:string ;
  description:string;
  contract_type:string;
  salaire:string;
  Post :Post = new Post() ;
  idPost: any ;
  constructor( private http:HttpClient , private route :Router , private crud:CrudService) { 

  }

  ngOnInit() {
    this.getAll()

   }

   /**
    * get all posts
    */
   getAll(){
     this.crud.getAllPosts().subscribe(res=>{
      this.resultats = res;
    //  get('http://localhost:3000/posts').subscribe(res=>{
      //  this.resultats = res;
     })
   }
   /**
    * 
    * @param post Delete post by id
    */
   delete(post){
     this.crud.deletePost(post.id).subscribe(res=>{
      this.getAll();
    //  http.delete('http://localhost:3000/post/'+post._id).subscribe(res=>{
      //  this.getAll();
     })
   }

   
   

   

   edit (post) {
    
         this.route.navigate(['edit',post._id])
   
    
  }
}
 