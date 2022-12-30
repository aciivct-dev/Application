import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../office/rest-api.service';
// import { AgePipe } from '../Pipes/age.pipe';

@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css'],
})
export class EditApplicantComponent implements OnInit {
  // id = this.actRoute.snapshot.params['id'];
  // applicantData: any = {};
  id: any;
  applicantData: any = [];
  applicantObj = {
    name: '',
    address: '',
    dob: '',
    age:0,
    gender: '',
    email: '',
    mobile: '',
    aadhar_no: '',
    pancard: '',
    amount_req: 0,
    house_type: '',
    employee_type: '',
  };
  constructor(
    public api: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit() {
    // this.api.getApplicant(this.id).subscribe((data: {}) => {
    //   this.applicantData = data;
    this.actRoute.queryParams.subscribe(data=>{
      this.id=data;
    })
    this.getApplicants();
  }
  getApplicants()
  {
    this.api.getApplicants().subscribe(data=>{
      this.applicantData=data;
    })

  }
  // Update applicant data
  updateApplicant(name:string,address:string,dob:any,age:number,
    gender:string,email:string,mobile:string,aadhar_no:string,
    pancard:string,amount_req:number,house_type:string,employee_type:string) {
    // console.log(data)
     
    this.applicantObj.name=name;
    this.applicantObj.address=address;
    this.applicantObj.dob=dob;
    this.applicantObj.age=age;
    // this.applicantObj.age=dob|age;
    this.applicantObj.gender=gender;
    this.applicantObj.email=email;
    this.applicantObj.mobile=mobile;
    this.applicantObj.aadhar_no=btoa(aadhar_no);
    this.applicantObj.pancard=btoa(pancard);
    this.applicantObj.amount_req=amount_req;
    this.applicantObj.house_type=house_type;
    this.applicantObj.employee_type=employee_type;
    // this.id=id;


    if (window.confirm('Are you sure, you want to update?')) {
      this.api.updateApplicant(this.id.id,this.applicantObj).subscribe((data) => {
        this.router.navigate(['/List']);
      });
    }
  }
}
