import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoyaltyPopupComponent } from "./components/loyalty-popup/loyalty-popup.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoyaltyPopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo
})
export class AppComponent implements AfterViewInit {
  title = 'rokos-barber-club';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        document.body.classList.add('app-loaded');
        const preloader = document.getElementById('app-preloader');
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => preloader.remove(), 500);
        }
      });
    }
  }
}
