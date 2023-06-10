import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }

  getAuthToken(){
    //get token from the Local storage
    const token= "eyJhbGciOiJIUzI1NiIsInR"
    return token
  }
}
