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

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    ActorsRegisterComponent,
    CountriesSelectorComponent,
    ImgDropdownSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
