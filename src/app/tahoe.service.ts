import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TahoeService {
  segValue = 'contact';
  constructor(public modalCtrl: ModalController) { }

  TahoeParks = [
    { image: '/assets/images/1.jpg', title: 'D.L Bliss State Park', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/2.jpg', title: 'Donner Menorial State Park', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/3.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
    { image: '/assets/images/4.jpg', title: 'D.L Bliss State Park', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/5.jpg', title: 'Donner Menorial State Park', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/6.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
    { image: '/assets/images/7.jpg', title: 'D.L Bliss State Park', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/8.jpg', title: 'Donner Menorial State Park', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/9.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
    { image: '/assets/images/10.jpg', title: 'D.L Bliss State Park', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/2.jpg', title: 'Donner Menorial State Park', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/4.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
  ];

  TahoeTours = [
    { image: '/assets/images/t1.jpg', title: 'Hellman Erh-Man Mansion', subTitle: 'A lakefrot Legacy at sugar divine Pine Point' },
    { image: '/assets/images/t2.jpg', title: 'Vikingshom Castle', subTitle: 'Historic Castle on Emarald Bay' },
    { image: '/assets/images/t3.jpg', title: 'Emeraldbay Cruise', subTitle: 'See Vikingshom and Emeraldbay Cruise by boat' },
    { image: '/assets/images/t4.jpg', title: 'D.L Bliss State Mansion', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/t5.jpg', title: 'Emeraldbay Cruise', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/t6.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
    { image: '/assets/images/t7.jpg', title: 'D.L Bliss State Park', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/t1.jpg', title: 'Emeraldbay Cruise', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/t2.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
    { image: '/assets/images/t1.jpg', title: 'Emeraldbay Cruise', subTitle: 'Beaches and endless recreation' },
    { image: '/assets/images/t2.jpg', title: 'Donner Menorial State Park', subTitle: 'History and mountain lake fun await you' },
    { image: '/assets/images/t4.jpg', title: 'Emeraldbay State Park', subTitle: 'See Lakes Tahoe\'s only island' },
  ];
  tourDetails = [
    {
      // tslint:disable-next-line: max-line-length
      descripton: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam beatae repellendus repudiandae voluptates vitae omnis et id explicabo quidem reprehenderit. Architecto obcaecati asperiores sint consequuntur iste aliquid magnam vero sunt.'
    },
    {
      title: 'Tour Dates',
      descripton: 'May 25-September 30, 2019'
    },
    {
      title: 'Tour hours',
      descripton: 'June 25-September 4, 2019 ',
      descripton1: 'Daily 10:30 1m - 3:30 pm on the half hour.'
    },
    {
      title: 'May 26-June 24 and September 5-30, 2019:',
      descripton: 'Wekends 10:20 am - 3:30pm ON HALF THE HOUR',
      descripton1: 'Weekdays 10:20 am - 3:30pm ON HALF THE HOUR'
    },
    {
      noBold: 'Tickets',
      descripton: '$10 for adults',
      descripton1: '$8 for students 7-17 years and with valid college ID',
    }
  ];
  TahoeParksAnimals = [
    {
      image: '/assets/images/animals1.jpg', title: 'Birds',
      creaturesList: [{
        image: '/assets/images/b1.jpg'
      },
      { image: '/assets/images/b2.jpg' },
      { image: '/assets/images/b3.jpg', },
      { image: '/assets/images/b4.jpg', },
      { image: '/assets/images/b5.jpg', },
      { image: '/assets/images/b6.jpg', },
      { image: '/assets/images/b7.jpg', },
      { image: '/assets/images/b8.jpg', },
      { image: '/assets/images/b9.jpg', },
      { image: '/assets/images/b10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals2.jpg', title: 'Fishes', creaturesList: [
        { image: '/assets/images/f1.jpg' },
        { image: '/assets/images/f2.jpg' },
        { image: '/assets/images/f3.jpg', },
        { image: '/assets/images/f4.jpg', },
        { image: '/assets/images/f5.jpg', },
        { image: '/assets/images/animals6.jpg', },
        { image: '/assets/images/animals7.jpg', },
        { image: '/assets/images/animals8.jpg', },
        { image: '/assets/images/animals9.jpg', },
        { image: '/assets/images/animals10.jpg', },
        { image: '/assets/images/animals1.jpg', },
        { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals3.jpg', title: 'Flowers', creaturesList: [{
        image: '/assets/images/fl1.jpg'
      },
      { image: '/assets/images/fl2.jpg' },
      { image: '/assets/images/fl3.jpg', },
      { image: '/assets/images/fl4.jpg', },
      { image: '/assets/images/fl5.jpg', },
      { image: '/assets/images/fl6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals4.jpg', title: 'Invertebrates', creaturesList: [{
        image: '/assets/images/animals1.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals5.jpg', title: 'Mammals', creaturesList: [{
        image: '/assets/images/animals10.jpg'
      },
      { image: '/assets/images/animals7.jpg' },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals6.jpg', title: 'Amphibians and Reptiles', creaturesList: [{
        image: '/assets/images/animals7.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals7.jpg', title: 'Reptiles', creaturesList: [{
        image: '/assets/images/animals3.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals8.jpg', title: 'Omnivores', creaturesList: [{
        image: '/assets/images/animals5.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals9.jpg', title: 'Carnivores', creaturesList: [{
        image: '/assets/images/animals6.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals10.jpg', title: 'D.L Bliss State Park', creaturesList: [{
        image: '/assets/images/animals1.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals1.jpg', title: 'Donner Menorial State Park', creaturesList: [{
        image: '/assets/images/animals1.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
    {
      image: '/assets/images/animals5.jpg', title: 'Emeraldbay State Park', creaturesList: [{
        image: '/assets/images/animals1.jpg'
      },
      { image: '/assets/images/animals2.jpg' },
      { image: '/assets/images/animals3.jpg', },
      { image: '/assets/images/animals4.jpg', },
      { image: '/assets/images/animals5.jpg', },
      { image: '/assets/images/animals6.jpg', },
      { image: '/assets/images/animals7.jpg', },
      { image: '/assets/images/animals8.jpg', },
      { image: '/assets/images/animals9.jpg', },
      { image: '/assets/images/animals10.jpg', },
      { image: '/assets/images/animals1.jpg', },
      { image: '/assets/images/animals5.jpg', },
      ]
    },
  ];
  SEGMENT_BUTTONS = [
    { laebl: 'Overview', value: 'overview' },
    { laebl: 'ACtivities', value: 'act' },
    { laebl: 'History', value: 'history' },
    { laebl: 'Camping', value: 'camp' },
    { laebl: 'Gallery', value: 'gal' },
  ];
  SEGMENT_BUTTONS_ABOUT = [
    { laebl: 'About', value: 'about' },
    { laebl: 'Contact', value: 'contact' },
    { laebl: 'Donate', value: 'donate' },
    { laebl: 'Join', value: 'join' },
    { laebl: 'Volounteer', value: 'volounteer' },
    { laebl: 'Shop', value: 'shop' },
  ];
  gallery = [
    { image: '/assets/images/1.jpg', },
    { image: '/assets/images/2.jpg', },
    { image: '/assets/images/3.jpg', },
    { image: '/assets/images/4.jpg', },
    { image: '/assets/images/5.jpg', },
    { image: '/assets/images/6.jpg', },
    { image: '/assets/images/7.jpg', },
    { image: '/assets/images/8.jpg', },
    { image: '/assets/images/9.jpg', },
    { image: '/assets/images/10.jpg', },
    { image: '/assets/images/2.jpg', },
    { image: '/assets/images/4.jpg', },
  ];
  mapsList = [
    { lat: 12.9716, lng: 77.5946, cityName: 'China Cove', parkName: 'Donner Memorial State Park' },
    { lat: 12.9718, lng: 77.5947, cityName: 'Coldstream  Trail to PCt', parkName: 'Donner Memorial State Park' },
    { lat: 19.0760, lng: 72.8777, cityName: 'Suger Pine Point Nature Trail', parkName: 'Donner Memorial State Park' },
    { lat: 37.0902, lng: 95.7129, cityName: 'China Cove', parkName: 'Donner Memorial State Park' },
    { lat: 11.9706, lng: 76.5940, cityName: 'Coldstream  Trail to PCt', parkName: 'Donner Memorial State Park' },
    { lat: 12.9717, lng: 77.5942, cityName: 'Suger Pine Point Nature Trail', parkName: 'Donner Memorial State Park' },
  ];
  async goForModal(componentName, value?) {
    const modal = await this.modalCtrl.create({
      component: componentName,
      componentProps: { data: value }
    });
    return modal;
  }

}


