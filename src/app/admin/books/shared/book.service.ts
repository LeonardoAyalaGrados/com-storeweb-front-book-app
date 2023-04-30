import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Book, BookPage } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  paginate(size: number = 5, page: number = 0): Observable<BookPage> {
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'createdAt,desc');

    return this.httpClient.get<BookPage>(`${environment.apiBase}/books`, { params });
  }

  get():Observable<Book[]>{
      return this.httpClient.get<Book[]>(`${environment.apiBase}/books/list`);
  }

  create(book:Book):Observable<Book>{
     return this.httpClient.post<Book>(`${environment.apiBase}/books`, book);
  }
  findById(id:any):Observable<Book>{
    return this.httpClient.get<any>(`${environment.apiBase}/books/id/${id}`);
  }

  update(id:number,book:Book):Observable<Object>{
    return this.httpClient.put(`${environment.apiBase}/books/${id}`,book);
  }

  delete(id:any):Observable<any>{
      return this.httpClient.delete<any>(`${environment.apiBase}/books/${id}`);
  }

  upploadFile(formData: FormData):Observable<any>{
      return this.httpClient.post(`${environment.apiBase}/media/upload`,formData);
  }
}
