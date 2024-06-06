import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrlBase = 'https://api.weatherapi.com/v1/forecast.json?key=285d928554364fc9b64184342240506&q=';
  private apiEnd = '&days=1&aqi=no&alerts=no';

  constructor(private http: HttpClient) { }

  // Method to fetch data from the API
  fetchData(city: string): Observable<any> {
    let apiUrl = this.apiUrlBase + city + this.apiEnd;
    return this.http.get<any>(apiUrl).pipe(
      map(response => response), // Manipulate response if needed
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
