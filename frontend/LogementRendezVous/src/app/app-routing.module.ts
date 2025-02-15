import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementComponent } from './logement/logement.component';
import { AddlogementComponent } from './addlogement/addlogement.component';

const routes: Routes = [

  {path:'', redirectTo:'/Logements', pathMatch:'full'},
  { path: 'Logements', component: LogementComponent },
  { path: 'addLogement', component: AddlogementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
