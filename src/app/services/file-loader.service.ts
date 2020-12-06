import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor(
    private http: HttpClient
  ) { }

  getFile(filePath: string): Observable<string> {
    return this.http.get(filePath, {responseType: 'text'}).pipe(
      catchError(() => of(undefined)),
    );
  }

}
