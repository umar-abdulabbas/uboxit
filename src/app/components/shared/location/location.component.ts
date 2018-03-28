import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class PlaceList {
  id: string;
  name: string;
  menuActive: boolean;
}

const PLACELIST: PlaceList[] = [
  {id: '001', name: 'Amstelveen', menuActive: true},
  {id: '004', name: 'Amsterdam Bijlmer', menuActive: false},
  {id: '006', name: 'Amsterdam Zuid', menuActive: false},
  {id: '006', name: 'Schiphol', menuActive: false},
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
    const findcurrentpath = location.pathname.split('/').pop();
    if (findcurrentpath === 'home') {
      this.showLocationPanel = true;
      setTimeout(() => {
        this.showLocationPanel = false;
      }, 3000);
    }
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
