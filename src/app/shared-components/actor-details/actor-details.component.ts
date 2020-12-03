import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  @Input()
  public actor: Actor;
  public profileInfo: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initActorForm();
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
  }


  onGetActor(actor:Actor) {

    console.log(actor);

  }
}
