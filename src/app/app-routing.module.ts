import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsManageComponent } from './routes/actors-manage/actors-manage.component';
import { ActorsRegisterComponent } from './routes/actors-register/actors-register.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: '', component: ActorsRegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: ActorsRegisterComponent },
  { path: 'manage', component: ActorsManageComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
