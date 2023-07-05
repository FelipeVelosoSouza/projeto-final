import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroservicesService {

  constructor(private http: HttpClient) { }
  Login(parametros: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', "Bearer");
    return this.http.get<any[]>('https://www.sollux.dev/api/_functions/consultas/loginTES', {
      params: headers
    }).pipe(
      tap((dados: any[]) => { })
    );
  }
  Registrauser(parametros: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', "Bearer");
    return this.http.post<any[]>('https://www.sollux.dev/api/_functions/consultas/insertuserES', {
      params: headers
    }).pipe(
      tap((dados: any[]) => { })
    );
  }
  insertnote(parametros: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', "Bearer");
    return this.http.post<any[]>('https://www.sollux.dev/api/_functions/consultas/insertNotasES', {
      params: headers
    }).pipe(
      tap((dados: any[]) => { })
    );
  }
  allnotes(parametros: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', "Bearer");
    return this.http.get<any[]>('https://www.sollux.dev/api/_functions/consultas/getNtes', {
      params: headers
    }).pipe(
      tap((dados: any[]) => { })
    );
  }

}