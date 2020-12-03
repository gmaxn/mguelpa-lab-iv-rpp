// Dependencies
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

// Models
import { Country } from '../../models/country';
import { Actor } from '../../models/actor';
import { ProfilePicture } from '../../models/profile-picture';

//Services
import { CountriesService } from '../../services/countries.service';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actors-register',
  templateUrl: './actors-register.component.html',
  styleUrls: ['./actors-register.component.css']
})
export class ActorsRegisterComponent implements OnInit {

  public profilePicture: FormGroup;
  public profileInfo: FormGroup;
  public countries: Country[];
  public selectedCountry: string;
  public errorMessage: string;
  
  // File Upload
  public fileMessage = 'No hay un archivo seleccionado';

  constructor(
    private formBuilder: FormBuilder,
    private cs: CountriesService,
    private actor: ActorService
  ) { }

  ngOnInit(): void {
    this.initCountriesList();
    this.initActorForm();
  }
  public initCountriesList(): void {
    this.cs.getCountries().subscribe({
      next: response => {
        this.countries = response;
      },
      error: err => console.log(err)
    });
  }
  public initActorForm() {
    // Profile Info Form Initialization
    this.profileInfo = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthdate: new FormControl(''),
      country: new FormControl(''),
      imageUrl: new FormControl('')
    });
    // Profile Picture Form Initialization
    this.profilePicture = this.formBuilder.group({
      filename: new FormControl(''),
      stream: new FormControl(''),
      imageUrl: new FormControl(''),
      metadata: new FormControl('')
    });
  }


  onFileChanges(event:any): void {
    if (event.target.files.length > 0) {
      for (let i = 0; i <event.target.files.length; i++) {
        this.profilePicture.patchValue({
          filename: event.target.files[i].name,
          stream: event.target.files[i],
          metadata: 'image/jpeg',
          imageUrl: null,
        });
        this.fileMessage = `Archivo preparado: ${event.target.files[i].name}`
      }
    }
  }
  onSelection(selecton: string): void {
    this.selectedCountry = selecton;
  }


  onSubmit() {

    const profileInfo = this.profileInfo.value as Actor;
    const profilePicture = this.profilePicture.value as ProfilePicture;

    this.actor.createActor(profileInfo, profilePicture);
  }
}
