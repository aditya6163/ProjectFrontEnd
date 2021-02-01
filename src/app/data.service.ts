import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

 const api = "http://localhost:5555/register"
//const api = "http://localhost:5001/api/users"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpclient:HttpClient) { }
saveData(data)
{
return this.httpclient.post<any>(api,data);
}
}
