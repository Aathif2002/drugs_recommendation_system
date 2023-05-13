import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  filterhealthcare:string = "";

  httpOptions:any;

  constructor(private http:HttpClient) {}
  getServices():Observable<any> {
    return this.http.get("http://localhost:3000/health");
 }
 getDetails():Observable<any>{
  return this.http.get("http://localhost:3000/aboutus");
}
 getFeedback():Observable<any> {
  return this.http.get("http://localhost:3000/complaints")
}
getDetail(id:number):Observable<any>{
  return this.http.get("http://localhost:3000/health/"+id)
}
getDetail1():Observable<any>{
  return this.http.get(" http://localhost:3000/commomdiseases");
}
postFeedback(obj:any):Observable<any>{
  
  this.httpOptions =  new HttpHeaders({
    'Content-Type':  'application/json',
  })

return this.http.post("http://localhost:3000/complaints",obj,this.httpOptions);
}
postEnquiry(obj:any):Observable<any>{

  this.httpOptions =  new HttpHeaders({
    'Content-Type':  'application/json',
  })

return this.http.post("http://localhost:3000/enqiry",obj,this.httpOptions);
}
getEnqiry():Observable<any> {
  return this.http.get("http://localhost:3000/enqiry")
}

}
