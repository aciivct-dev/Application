import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../office/rest-api.service';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})

export class AddApplicantComponent implements OnInit {

 
  applicantDetails={ 
  name:'',
  address: '',
  dob:"",
  // age:0,
  gender:'',
  email:'',
  mobile:'',
  aadhar_no:'',
  pancard:'',
  amount_req:'',
  house_type:'',
  employee_type:''
  
};
  constructor(public api:RestApiService,public router:Router) {}
  ngOnInit(){

    // let str=" ";

    // let Aadharno=btoa(str);
    // console.log(Aadharno);

    // console.log(atob(Aadharno));
    
    
  }
  addApplicant()
  {
    // console.log(this.applicantDetails)
    this.applicantDetails.aadhar_no=btoa(this.applicantDetails.aadhar_no)
    this.applicantDetails.pancard=btoa(this.applicantDetails.pancard)
    this.api.createApplicant(this.applicantDetails).subscribe(data=>
    {
      console.log(data);
      
      this.router.navigate(['/List'])
    })
  }
  

}
