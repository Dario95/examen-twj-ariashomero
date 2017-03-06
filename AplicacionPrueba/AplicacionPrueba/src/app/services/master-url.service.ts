import { Injectable } from '@angular/core';

@Injectable()
export class MasterURlService {
  private _url:string;

  constructor() {
    this._url = "https://examen-twj-ariashomero-homero.c9users.io/";
    // this.url = "https://aplicacion-adrianeguez.c9users.io"
    // this.url = "https://asdasd-asdasdasd.herokuapp.com"
  }

  get url():string{
    return this._url;
  }

  set url(nuevoUrl:string){
    this._url = nuevoUrl;
  }

}
