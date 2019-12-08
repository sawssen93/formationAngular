import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from '../entities/post.entity';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[CrudService]
})
export class EditComponent implements OnInit {
  title:string ;
  description:string;
  contract_type:string;
  salaire:string;
  idPost: any ;
// Post:any={};
 Post :Post = new Post() ;
  constructor( private route :ActivatedRoute , private re : Router, private crud :CrudService) { 
    this.route.params.subscribe(res=>{console.log(res)
    this.idPost=res.id  })
  }

  ngOnInit() {
    this.crud.getPostById(this.idPost).subscribe(res=>{console.log(res);
      this.Post = <Post>res;
    })
  }

  upd() {
  
    this.crud.updatePostById(this.idPost,this.Post).subscribe(res=>{console.log(res);
      this.re.navigate(['/'])
    // http.put('http://localhost:3000/post/'+this.idPost,this.Post).subscribe(res=>{console.log(res);
  // this.re.navigate(['/'])
}) 
    
   
  }



}
