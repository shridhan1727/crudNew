import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../service/http-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.scss'],
  providers:[HttpServiceService]
})
export class MyDetailComponent implements OnInit {
detailInfo!:FormGroup;
id!:string| null;
editInfo:boolean=false;

constructor(private fb:FormBuilder, private _httpSvc:HttpServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.detailInfo=this.fb.group({
      'prd':[''],
      'price':[0],
      'brand':[''],
    })

    this.id = this.route.snapshot.paramMap.get('id')
if(this.id){
  this.editInfo = true;
}
console.log("OK",this.editInfo)

this.getinfo()
  }
  getinfo(){
    const reqbody="infoEnd/" + this.id
    this._httpSvc.GetInfo(reqbody).subscribe((data:any)=>{
if(data){
  console.log(data)
this.detailInfo.patchValue(data)
}
    },
    error=>{

    });

  }

  submitInfo(){
    // console.log(this.detailInfo.value);
    // const reqbody = this.detailInfo.value;
    // this._httpSvc.PostInfo("infoEnd",reqbody).subscribe((data:any)=>{
    //   this.detailInfo=data;
    //   console.log("DONE")
    // },
    // error=>{
      
    // })
    if(this.editInfo){
this.updateInfo();
    }else{
      this.saveInfo();
    }

  }

updateInfo(){
  console.log(this.detailInfo.value)
  const reqbody = this.detailInfo.value;
  const endpoint= "infoEnd/" + this.id;
  this._httpSvc.PutInfo(endpoint,reqbody).subscribe((data:any)=>{
this.detailInfo=data
console.log("FINE")
  },
  error=>{

  });
}

saveInfo(){
  console.log(this.detailInfo.value);
  const reqbody = this.detailInfo.value;
  this._httpSvc.PostInfo("infoEnd",reqbody).subscribe((data:any)=>{
this.detailInfo= data
  },
  error=>{

  });
}

canDeactivate(){
if(this.detailInfo.dirty){
  const data= confirm("Are You Sure")
  if(data) return true;
}
return false;
}
}


