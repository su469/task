import { Component, OnInit, } from '@angular/core';

import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapplication';
  p :number =1;
  searchText: any;
  pricetype: string="All";
  counter=0;
  eachUser:any;
  isBooleanValue!:boolean;
  user:any;
  
  constructor(private rs:RestService){
    
  }
   
  
  columns=[
  "S.No" ,"Name","Email","City","Action"
  ];
  index =["id","name","email","city"];
  users :any=[];
  
  
  
  

ngOnInit(): void{
  this.getUsers()
    
    
      
    }
    getUsers(){
      this.rs.getUsers().subscribe
      (
        (response)=>
    
        {
          this.users =response;
          
    
        },
        (error)=>{
          console.log("Error Occured :" +error);
        })
    }
    deleteUsers(id:number)
   {
     console.log(id)
    this.rs.deleteUsers(id)
      .subscribe(res=>{
        alert("Deleted successfully")
        this.getUsers()
      })
    }
    popBox(x:number)
{
  this.isBooleanValue=true;
  console.log("number",x)
  this.rs.getUsers().subscribe( res=>
    {
      res.map((item:any)=>{
       
        if(item.id == x)
        {
          
          this.eachUser=item;
         console.log("eachUser",this.eachUser)
        }
      })
    
    });
}
    
close()
{
  this.isBooleanValue=false;
} 
filterall(value:any){
  if(value.target.value==="All"){
    this.users=[];
    this.getUsers()
  }
  console.log(value.target.value)
}

  

  
}
