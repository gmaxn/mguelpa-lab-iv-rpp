import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from "firebase";
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { StorageService } from '../../app/services/storage.service';

import { Actor } from '../models/actor';
import { ProfilePicture } from '../models/profile-picture';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private db: AngularFirestore,
    private blob: StorageService
  ) { }


  public get() {
    return this.db.collection<Actor>("actors").valueChanges().pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  async createActor(info: Actor, pic: ProfilePicture) {
    return new Promise<any>((resolve, reject) => {
      if (pic.stream) {
        pic.filename = `actors/${info.firstname}_${info.lastname}_${Date.now()}.jpeg`;
        this.blob.uploadFile(pic.filename, pic.stream, pic.metadata).then(
          imageUrl => {
            info.imageUrl = imageUrl;
            this.loadInfo(info);
          },
          err => console.log(err)
        );
      }
      else {
        this.loadInfo(info);
      }
    });

  }

  async loadInfo(info: Actor) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection("actors")
        .add(info).then(
          res => {
            this.db.collection('actors').doc(res.id).update({ id: res.id });
            console.log(this.db.collection('actors').doc(res.id).get());
          },
          err => reject(err));
    });
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console.
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error ocurred: ${err.error.message}`;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
