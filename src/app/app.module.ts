import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { MoneydonationComponent } from './moneydonation/moneydonation.component';
import { SummercampComponent } from './summercamp/summercamp.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminscholarshipapprovalComponent } from './adminscholarshipapproval/adminscholarshipapproval.component';
import { AdmineventsComponent } from './adminevents/adminevents.component';
import { AdminaddeventsComponent } from './adminaddevents/adminaddevents.component';
import { AdminsummercampComponent } from './adminsummercamp/adminsummercamp.component';
import { AdminaddsummercampComponent } from './adminaddsummercamp/adminaddsummercamp.component';
import { AdminagrotoolsComponent } from './adminagrotools/adminagrotools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SummerCampService} from './summer-camp.service';
import { BloodCampService } from './blood-camp.service';
import { AgroToolService } from './agro-tool.service';
import { AdminloginService} from './adminlogin.service';
import {AdminloginComponent} from './adminlogin/adminlogin.component'
import { AdmingetagrotoolComponent } from './admingetagrotool/admingetagrotool.component';
import { AdmineditagrotoolComponent } from './admineditagrotool/admineditagrotool.component';
import { ScholarshipService } from './scholarsip.service';
import { AdminsummercamplistComponent } from './adminsummercamplist/adminsummercamplist.component';
import { SummercampregistrationComponent } from './summercampregistration/summercampregistration.component';
import { AdminmoneydonationlistComponent } from './adminmoneydonationlist/adminmoneydonationlist.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AgricultureComponent,
    MoneydonationComponent,
    SummercampComponent,
    ScholarshipComponent,
    BlooddonationComponent,
    AboutusComponent,
    AdminheaderComponent,
    AdminhomeComponent,
    AdminscholarshipapprovalComponent,
    AdmineventsComponent,
    AdminaddeventsComponent,
    AdminsummercampComponent,
    AdminaddsummercampComponent,
    AdminagrotoolsComponent,
    AdminloginComponent,
    AdmingetagrotoolComponent,
    AdmineditagrotoolComponent,
    AdminsummercamplistComponent,
    SummercampregistrationComponent,
    AdminmoneydonationlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SummerCampService,BloodCampService,AgroToolService,ScholarshipService,AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
