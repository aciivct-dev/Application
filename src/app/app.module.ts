import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ListApplicantComponent } from './list-applicant/list-applicant.component';
import { EditApplicantComponent } from './edit-applicant/edit-applicant.component';
import { AgePipe } from './Pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddApplicantComponent,
    ListApplicantComponent,
    EditApplicantComponent,
    AgePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
