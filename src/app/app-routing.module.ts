import { HomeComponent } from './home/home.component';
import { ItsmeComponent } from './itsme/itsme.component';
import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'popup', component: PopupComponent},
  {path: 'itsme', component: ItsmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
