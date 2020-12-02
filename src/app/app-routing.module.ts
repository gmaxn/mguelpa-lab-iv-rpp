import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsRegisterComponent } from './routes/actors-register/actors-register.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: '', component: ActorsRegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'altaActor', component: ActorsRegisterComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
