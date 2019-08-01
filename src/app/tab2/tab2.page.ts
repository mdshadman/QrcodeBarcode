import { Component } from '@angular/core';
import { TahoeService } from '../tahoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  animalsInZoo: { image: string; title: string; }[];
  image = './assets/images/tahoe.jpg';
  constructor(
    public ServiceProvider: TahoeService,
    public route: Router
  ) {
    this.animalsInZoo = this.ServiceProvider.TahoeParksAnimals;
  }
  goToCreatureType(data: any) {
    this.route.navigate(['creturelists', { dataList: JSON.stringify(data.creaturesList) }]);
  }
}
