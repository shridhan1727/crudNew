import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { NewService } from '../service/new.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private newSvc:NewService) { }

intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
console.log("Request Interceptor",req);

if(req.url.includes("/login") || req.url.includes("/sign-up")){

}else{

const token = this.newSvc.getAuthToken();
if (token){
  req = req.clone({setHeaders:{"Authorization":"Bearer " +token}})
}
}
  return next.handle(req).pipe(
    map((data:any)=>{
console.log("Response at interceptor",data.status);

return data;
    }),

    catchError(this.ErrorResponse)
  );
}

ErrorResponse(error:HttpErrorResponse){
  console.log("ERROR",error);
if(error.status == 404){
  //Navigate to login page.
}

  if (error.error instanceof ErrorEvent){
    console.log("Client side Error",error.error.message);
  
  }else{
    console.log("Server side Error",error.message);
  }
  return throwError ("We are Unable to process your Request,Please try after someTime");
  }
}
