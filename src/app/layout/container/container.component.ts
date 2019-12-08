import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
containerTitle : string="container" ;
statusButton : boolean =true ;
count : number = 0;
user:string ;
Nom:string ;
email:string;
phone:string;
about:string ;
cin:string ;
name:string ;
adresse:string ;

 
 
 tab :any = [
//    {cin:'01', name:'ss', adresse:'tunis'},
//  {cin:'02', name:'sfs', adresse:'tunnis'}
]; 




HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
 ];
 
  constructor() {

    // console.log ("load const")
   }

  ngOnInit() {
  }
  affich (){
    alert(this.user)
  }
  affi (){
    // var my=this; 
    var item ={
      cin:this.cin , 
      name:this.name ,
      adressse:this.adresse}  ; 


     this.tab.push(item); 

    console.log("new table is : " + this.tab);  
  
    
  }
  aff (){
    let data ={
      Nom:this.Nom,
      email:this.email ,
      phone:this.phone,
      about:this.about 
    }
    alert(JSON.stringify(data))
  }

  Bplus() {
    this.count++ 
  }
  Bmoin() {
    this.count--
  }
  
  Tb() {
    alert(JSON.stringify(this.tab))
  }
}
   
  
  