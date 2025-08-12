import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoyaltyPopupComponent } from "./components/loyalty-popup/loyalty-popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoyaltyPopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo
})
export class AppComponent {
  title = 'rokos-barber-club';
}
