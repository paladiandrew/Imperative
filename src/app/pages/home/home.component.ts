import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SquareRedirectComponent } from '../components/square-redirect/square-redirect.component';
import { HeaderComponent } from '../components/header/header.component';
import { AmbassadorSliderComponent } from '../components/ambassador-slider/ambassador-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SquareRedirectComponent, AmbassadorSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    images = [
      'assets/images/place1.jpg',
      'assets/images/place2.jpg',
      'assets/images/place3.jpg',
      'assets/images/place4.jpg',
    ];
    currentIndex = 0;
    slideInterval: any;
    transform: string = '';
  
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
      private ngZone: NgZone
    ) {}
  
    ngOnInit() {
      this.updateTransform();
      if (isPlatformBrowser(this.platformId)) {
        this.ngZone.runOutsideAngular(() => this.startAutoSlide());
      }
    }
  
    ngOnDestroy() {
      if (isPlatformBrowser(this.platformId)) {
        if (this.slideInterval) {
          clearInterval(this.slideInterval);
        }
      }
    }
  
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.ngZone.run(() => this.nextImage());
      }, 20000);
    }
  
    prevImage() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
      this.updateTransform();
    }
  
    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.updateTransform();
    }
  
    goToImage(index: number) {
      this.currentIndex = index;
      this.updateTransform();
    }
  
    updateTransform() {
      this.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }