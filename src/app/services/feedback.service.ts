import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiURL = "https://portfoliojson.onrender.com/feedback";

  constructor(private http: HttpClient) { }

  addfeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiURL, feedback);
  }
}
