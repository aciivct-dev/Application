import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ListApplicantComponent } from './list-applicant/list-applicant.component';
import { EditApplicantComponent } from './edit-applicant/edit-applicant.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Add',
    component: AddApplicantComponent,
  },
  { path: 'List', component: ListApplicantComponent },
  {
    path: 'Edit',
    component: EditApplicantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
