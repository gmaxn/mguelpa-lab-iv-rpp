import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Metadata } from '../models/metadata';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private metadata

  constructor(
    private storage: AngularFireStorage
  ) { }


  public async uploadFile(filename: string, stream: any, metadata:Metadata) {

    return new Promise<any>((resolve, reject) => {

      const storageRef = this.storage.ref(filename);

      const uploadTask = storageRef.put(stream, metadata);

      uploadTask.task.on('state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        function error(err) {
          console.log('error', err);
          reject();
        },
        function complete() {
          uploadTask.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
            resolve(downloadURL);
          });
        });
    });
  }


}
