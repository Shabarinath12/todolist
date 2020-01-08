import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { FeaturepageComponent } from './pages/featurepage/featurepage.component';
import { FormcontrolpageComponent } from './pages/formcontrolpage/formcontrolpage.component';
import { DocspageComponent } from './pages/docspage/docspage.component';


const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'features',component:FeaturepageComponent},
  {path:'formcontrol',component:FormcontrolpageComponent},
  {path:'docs',component:DocspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
