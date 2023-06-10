import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit{

listInfo:any[]=[];
newListInfo:any[]=[]; //filter method

InfoAsync!:Observable<any>;

constructor(private _httpSvc:HttpServiceService, private router:Router){}

  ngOnInit(): void {
    this.saveInfo();
    // this.deletePrd();
   //this.InfoAsync= interval(2000)  //Using Async pipe

  }

saveInfo(){
 this._httpSvc.GetInfo("infoEnd").subscribe((data:any)=>{
if(data && data.length > 0){
this.listInfo=data;
////below step for filter the data =>
// this.newListInfo = this.listInfo.filter((data:any)=>data.price > 7000)
}
},
error=>{

});
  }

/////below get method used for error handling....
  // saveInfo(){
  //   this._httpSvc.GetInfo("infoEnd 1").subscribe((data:any)=>{
  //  if(data && data.length > 0){
  //  this.listInfo=data;
   
  //  }
  //  },
  //  error=>{
  // console.log(error)
  // alert(error)
  //  });
  //    }

  Navigation(id:number) {
    this.router.navigate(['/edit-info',id])
    }

    deletePrd(id:number){
      const endpoint = "infoEnd/" + id 
      this._httpSvc.DeleteInfo(endpoint).subscribe((data:any)=>{
        console.log("DELETE")
        this.listInfo.splice(id,)
      })
    }
}
