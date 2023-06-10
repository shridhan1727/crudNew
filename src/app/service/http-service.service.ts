
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 baseUrl:string='http://localhost:3000/';
httpHeaders: HttpHeaders = new HttpHeaders ()
                          .set("content-type","application/json")

constructor(private http:HttpClient){ }  

PostInfo(endPt:string,body:string){
let url = this.baseUrl + endPt
return this.http.post(url,body,{headers:this.httpHeaders})
}

GetInfo(endPt:string){
let url = this.baseUrl + endPt
return this.http.get(url,{headers:this.httpHeaders})
}

//below for Error handle connect with ErrorResponse method
// GetInfo(endPt:string){
//   let url = this.baseUrl + endPt
//   return this.http.get(url,{headers:this.httpHeaders}).pipe(retry(2),catchError(this.ErrorResponse))
//   }

PutInfo(endPt:string,body:string){
  let url = this.baseUrl + endPt
  return this.http.put(url,body,{headers:this.httpHeaders})
  }

  DeleteInfo(endPt:string){
    let url = this.baseUrl + endPt
    return this.http.delete(url,{headers:this.httpHeaders})
    }

///below Error Handle Method

// ErrorResponse(error:HttpErrorResponse){
// if (error.error instanceof ErrorEvent){
//   console.log("Client side Error",error.message);

// }else{
//   console.log("Server side Error",error.message);
// }
// return throwError ("We are Unable to process your Request,Please try after someTime");
// }

}

//this ErrorResponse Method used in any methods like get,put,post etc.
//like =>above used inside the get method using pipe operator.