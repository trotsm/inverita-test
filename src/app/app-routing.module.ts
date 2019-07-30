import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const appRouts: Routes = [
  {path: '', component: PageOneComponent},
  {path: 'page2', component: PageTwoComponent},
  {path: 'page3', component: PageThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
