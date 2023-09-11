import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  currentIndex: number = 0;
  intervalId: any;

  images: string[] = [
    'assets/img/dragonball1.jpeg',
    'assets/img/dragonball2.jpeg',
    'assets/img/dragonball4.jpeg',
  ]

  ngOnInit(){
    this.startRotating();
  }

  ngOnDestroy(){
    this.startRotating();
  }

  startRotating(){
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
   }, 6000)
  }
  stopRotating() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getImageClasses(index: number): string {
    return index === this.currentIndex ? 'slide active' : 'slide';
  }

}
