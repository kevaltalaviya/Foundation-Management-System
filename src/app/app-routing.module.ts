import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneydonationComponent } from './moneydonation/moneydonation.component';
import { HomeComponent} from './home/home.component';
import { SummercampComponent } from './summercamp/summercamp.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminscholarshipapprovalComponent } from './adminscholarshipapproval/adminscholarshipapproval.component';
import { AdmineventsComponent } from './adminevents/adminevents.component';
import { AdminaddeventsComponent } from './adminaddevents/adminaddevents.component';
import { AdminsummercampComponent } from './adminsummercamp/adminsummercamp.component';
import { AdminaddsummercampComponent } from './adminaddsummercamp/adminaddsummercamp.component';
import { AdminagrotoolsComponent } from './adminagrotools/adminagrotools.component';
import { AdminloginComponent} from './adminlogin/adminlogin.component';
import { AdmingetagrotoolComponent} from './admingetagrotool/admingetagrotool.component';
import { AdmineditagrotoolComponent } from './admineditagrotool/admineditagrotool.component';
import { AdminsummercamplistComponent } from './adminsummercamplist/adminsummercamplist.component';
import { SummercampregistrationComponent } from './summercampregistration/summercampregistration.component';
import { AdminmoneydonationlistComponent } from './adminmoneydonationlist/adminmoneydonationlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'summercamp' ,component:SummercampComponent},
  {path:'home',component:HomeComponent},
  {path:'moneydonation',component:MoneydonationComponent},
  {path:'agriculture',component:AgricultureComponent},
  {path:'scholarship',component:ScholarshipComponent},
  {path:'blooddonation',component:BlooddonationComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminheader',component:AdminheaderComponent},
  {path:'adminscholarshipapproval',component:AdminscholarshipapprovalComponent},
  {path:'adminevents',component:AdmineventsComponent},
  {path:'adminaddevents',component:AdminaddeventsComponent},
  {path:'adminsummercamp',component:AdminsummercampComponent},
  {path:'adminaddsummercamp',component:AdminaddsummercampComponent},
  {path:'adminagrotools',component:AdminagrotoolsComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admingetagrotool',component:AdmingetagrotoolComponent},
  {path:'admineditagrotool/edit/:id',component:AdmineditagrotoolComponent},
  {path:'adminsummercamplist/get/:title',component:AdminsummercamplistComponent},
  {path:'summercampregistration/:title',component:SummercampregistrationComponent},
  {path:'adminmoneydonationlist',component:AdminmoneydonationlistComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
