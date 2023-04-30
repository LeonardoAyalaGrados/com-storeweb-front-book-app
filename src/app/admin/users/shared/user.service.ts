import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookPage, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  paginate(size: number = 5, page: number = 0): Observable<BookPage> {
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'createdAt,desc');

    return this.httpClient.get<BookPage>(`http://localhost:9090/api/user`, { params });
  }
  get():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:9090/api/user/list");
  }

  delete(id:any):Observable<any>{
      return this.httpClient.delete<any>(`http://localhost:9090/api/user/${id}`);
  }
  create(user:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:9090/api/user",user);
  }
  findById(id:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:9090/api/user/${id}`);
  }

  put(id:any,user:User):Observable<Object>{
    return this.httpClient.put(`http://localhost:9090/api/user/${id}`,user);
  }
}
