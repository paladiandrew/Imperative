import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit {
    isMobile: boolean = false;
    isMobileMenuOpen: boolean = false;
    isHomePage: boolean = false;
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      this.checkIfMobile();
      this.checkIfHomePage();
  
      // Подписываемся на события роутера, чтобы отслеживать навигацию между страницами
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkIfHomePage();
        }
      });
    }
  
    // Метод для проверки, находимся ли мы на главной странице
    checkIfHomePage() {
      this.isHomePage = (this.router.url === '/about' || this.router.url === '/hall-of-fame');
      console.log(this.isHomePage);
    }
  
    @HostListener('window:resize')
    onResize() {
      this.checkIfMobile();
    }
  
    checkIfMobile() {
        if (typeof window !== 'undefined') {
          this.isMobile = window.innerWidth <= 768;
          console.log('Window width:', window.innerWidth, 'Is mobile:', this.isMobile);
        } else {
          // Handle the case when window is not defined (e.g., during SSR)
          this.isMobile = false; // Default value or logic
          console.log('Window is undefined, setting isMobile to false');
        }
      }
  
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }