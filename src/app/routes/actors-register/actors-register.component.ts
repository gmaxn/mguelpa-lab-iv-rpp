import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { Actor } from '../../models/actor';
import { CountriesService } from '../../services/countries.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as $ from 'jquery';


@Component({
  selector: 'app-actors-register',
  templateUrl: './actors-register.component.html',
  styleUrls: ['./actors-register.component.css']
})
export class ActorsRegisterComponent implements OnInit {

  public countries: Country[];
  public errorMessage: string;
  public actorForm: FormGroup;
  public selectedCountry: string;

    // File Upload
    public fileMessage = 'No hay un archivo seleccionado';
    public filename = '';
    public imageUrl: string = '';
    public imageForm = new FormData();


  constructor(
    private formBuilder: FormBuilder,
    private cs: CountriesService
  ) { }

  ngOnInit(): void {

    this.initCountriesList();

    this.initActorForm();

  }


    //Evento que se gatilla cuando el input de tipo archivo cambia
    public onFileChanges(event) {
      if (event.target.files.length > 0) {
        for (let i = 0; i < event.target.files.length; i++) {
          this.fileMessage = `Archivo preparado: ${event.target.files[i].name}`;
          this.filename = event.target.files[i].name;
          this.imageForm.delete('filename');
          this.imageForm.append('filename', event.target.files[i], event.target.files[i].name)
        }
      } else {
        this.fileMessage = 'No hay un archivo seleccionado';
      }
    }
  
    onSelectShowImgName(): void {
      $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });
    }


    onSelection(selecton:string): void {
      this.selectedCountry = selecton;
    }

    onSubmit() {

      let data = this.actorForm.value as Actor

      console.log(data);

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

    this.actorForm = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthdate: new FormControl(''),
      country: new FormControl(''),
      imageUrl: new FormControl('')
    });
  }
}
