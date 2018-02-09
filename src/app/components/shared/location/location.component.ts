import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  isModelActive = false; 
  showLocationPanel = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onChangeLoaction(): void {
    this.isModelActive = true;
  }
  closeModel(): void {
    this.isModelActive = false;
  }
  closeChangeLocation(): void {
    this.isModelActive = false;
  }
  openChangeLocation(): void {
    this.isModelActive = true;
  } 
  goToHome(): void {
    this.isModelActive = false;
    this.router.navigate(['/home']);
  }
}
