import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full' , title:'Home'},
  {path:'home' , component:HomeComponent , title:'Home'},
  {path:'about' , component:AboutComponent , title:'About'},
  {path:'portfolio' , component:PortfolioComponent , title:'Portfolio'},
  {path:'contact' , component:ContactComponent , title:'Contact'},
  {path:'**' , component:ErrorComponent , title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
