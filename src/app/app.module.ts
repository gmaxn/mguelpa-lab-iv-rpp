import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared-components/top-nav/top-nav.component';
import { HomeComponent } from './routes/home/home.component';
import { ActorsRegisterComponent } from './routes/actors-register/actors-register.component';
import { CountriesSelectorComponent } from './shared-components/countries-selector/countries-selector.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgDropdownSelectorComponent } from './shared-components/img-dropdown-selector/img-dropdown-selector.component';

import { environment } from 'src/environments/environment';


// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { ActorsManageComponent } from './routes/actors-manage/actors-manage.component';
import { ActorsGridComponent } from './shared-components/actors-grid/actors-grid.component';
import { ActorDetailsComponent } from './shared-components/actor-details/actor-details.component';

// 2. Add your credentials from step 1
const config = {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    ActorsRegisterComponent,
    CountriesSelectorComponent,
    ImgDropdownSelectorComponent,
    ActorsManageComponent,
    ActorsGridComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
