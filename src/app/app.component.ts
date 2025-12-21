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
  showFloating = false; // se mostrarán tras cerrar popup
  showAllianceCta = true;
  allianceCtaMinimized = false;
  allianceFormUrl = 'https://wa.me/56982512970?text=Hola%2C%20quiero%20ser%20alianza%20con%20Rokos%20Barber%20Club';

  onPopupOpened() { this.showFloating = false; }
  onPopupClosed() { this.showFloating = true; }

  collapseAllianceCta(event?: Event) {
    event?.stopPropagation();
    this.allianceCtaMinimized = true;
  }

  expandAllianceCta() {
    this.allianceCtaMinimized = false;
  }
}
