import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TahoeService {
  segValue = 'contact';
  constructor() { }

  constructor(public modalCtrl: ModalController) { }



}


