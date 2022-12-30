import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../office/rest-api.service';

@Component({
  selector: 'app-list-applicant',
  templateUrl: './list-applicant.component.html',
  styleUrls: ['./list-applicant.component.css'],
})
export class ListApplicantComponent implements OnInit {
  Applicant: any = [];
  constructor(public api: RestApiService, public router: Router) {}
  ngOnInit(): void {
    this.loadApplicants();
  }
  //to get applicants List
  loadApplicants() {
    
   

    return this.api.getApplicants().subscribe(data => {
      this.Applicant = data;
      // this.Applicant.aadhar_no=atob(this.Applicant.aadhar_no)
      // this.Applicant.pancard=atob(this.Applicant.pancard)
      console.log(data);
    });
  }
   //to Delete from applicants List
  deleteApplicant(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.api.deleteApplicant(id).subscribe((data) => {
        this.loadApplicants();
      });
    }
  }
}
