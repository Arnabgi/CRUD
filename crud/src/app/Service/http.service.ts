import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http : HttpClient
  ) { }
  getAllData() : Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  deleteData(id:any) : Observable<any> {
    return this.http.delete('https://dummyjson.com/products/'+id);
  }
  viewData(id:any) : Observable<any> {
    return this.http.get('https://dummyjson.com/products/'+id); 
  }
  addData(value:any) : Observable<any>{
    return this.http.post('https://dummyjson.com/products/add',value)
  }
  editData(value:any) : Observable<any>{
    return this.http.put('https://dummyjson.com/products/',value)
  }
}
