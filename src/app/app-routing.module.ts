import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { Work1Component } from './components/work1/work1.component';
import { Work2Component } from './components/work2/work2.component';
import { Work3Component } from './components/work3/work3.component';
import { Work4Component } from './components/work4/work4.component';
import { Work5Component } from './components/work5/work5.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "work1",
    component: Work1Component
  },
  {
    path: "work2",
    component: Work2Component
  },
  {
    path: "work3",
    component: Work3Component
  },
  {
    path: "work4",
    component: Work4Component
  },
  {
    path: "work5",
    component: Work5Component
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "thankyou",
    component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
