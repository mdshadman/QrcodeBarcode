import { Component } from '@angular/core';
import { TahoeService } from '../tahoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  headimage = './assets/images/tahoe.jpg';

  zoom = 8;
  mapviews: { lat: number; lng: number; }[];

  constructor(public serviceProvider: TahoeService, public route: Router) {
    this.mapviews = this.serviceProvider.mapsList;
    console.log(this.mapviews);
  }
  goToFullView(LatLng: any) {
    this.route.navigate(['mapdetail', LatLng]);
    // const modal = await this.serviceProvider.goForModal(MapfullComponent, LatLng);
    // await modal.present();
  }
}
