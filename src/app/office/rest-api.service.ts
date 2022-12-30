import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { ApplicantModule } from './applicant/applicant.module';
// import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  //---------HttpClient API get() method => Fetch Applicant list------------
  getApplicants(): Observable<ApplicantModule> {
    return this.http
      .get<ApplicantModule>(this.apiURL + '/applicants')
      
      // .pipe(retry(1), catchError(this.handleError));
  }

  //---------HttpClient API get() method => Fetch Applicant---------------
  getApplicant(id: any): Observable<ApplicantModule> {
    return this.http
      .get<ApplicantModule>(this.apiURL + '/applicants/' + id)
      // .pipe(retry(1), catchError(this.handleError));
  }

  //----------------createApplicant---------------------
  createApplicant(newApplicant:any): 
  Observable<ApplicantModule> {
    let headers={'Content-Type': 'application/json'}
    return this.http
      .post<ApplicantModule>(
        this.apiURL + '/applicants',
        JSON.stringify(newApplicant),
        // this.httpOptions
        {'headers':headers}
      )
      // .pipe(retry(1), catchError(this.handleError));
  }

  //----------------------------updateBook------------------------------
  updateApplicant(id:any, newApplicant:any) :Observable<ApplicantModule> {

    console.log(newApplicant);
    
    return this.http
    .put<ApplicantModule>(
    this. apiURL + '/applicants/'+id,
    JSON.stringify(newApplicant), this . httpOptions)
    // .pipe(retry(1), catchError(this.handleError)); 
    }

    //------------------deleteBook-----------------------
    deleteApplicant(id: any) 
    {
      return this.http.delete<ApplicantModule>
      (this.apiURL+'/applicants/'+id,this.httpOptions)
      // .pipe(retry(1), catchError(this.handleError));
    }

//----------------------------------------
  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);

}

