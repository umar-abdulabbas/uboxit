import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class PlaceList {
  id: string;
  name: string;
  menuActive: boolean;
}

const PLACELIST: PlaceList[] = [
  {id: '001', name: 'Amstelveen',  menuActive: true},
  {id: '002', name: 'Hoofdorp',  menuActive: false},
  {id: '003', name: 'Aalsmeer',  menuActive: false},
  {id: '004', name: 'Bijlmer Arena',  menuActive: false},
];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public isModelActive = false;
  public showLocationPanel: boolean;
  public placeTitle = 'Amstelveen';
  placeList = PLACELIST;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.showLocationPanel = true;
  }

  onChangeLoaction() {
    this.isModelActive = true;
    this.showLocationPanel = false;
  }

  closeModel(): void {
    this.isModelActive = false;
  }

  closeChangeLocation(): void {
    this.isModelActive = false;
    this.showLocationPanel = false;
  }

  openChangeLocation(): void {
    this.isModelActive = true;
  }

  goToHome(place: string, id: string): void {
    this.placeTitle = place;
    this.isModelActive = false;
    this.showLocationPanel = false;

    const placeItem = this.placeList.find(item => item.id === id);
    placeItem.menuActive = true;
    this.placeList.filter(item => item.id !== id).forEach(i => i.menuActive = false);
    this.router.navigate(['/home']);
  }
}
