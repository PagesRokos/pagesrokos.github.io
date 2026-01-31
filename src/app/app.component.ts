import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoyaltyPopupComponent } from "./components/loyalty-popup/loyalty-popup.component";
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoyaltyPopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'rokos-barber-club';
  showFloating = false; // se mostrarán tras cerrar popup
  showAllianceCta = false; // Solo se mostrará en la página de alianzas después de 5 segundos
  allianceCtaMinimized = false;
  allianceFormUrl = 'https://wa.me/56982512970?text=Hola%2C%20quiero%20ser%20alianza%20con%20Rokos%20Barber%20Club';
  private alianzasPageTimer: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Detectar cambios de página
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.url;
      const isAlianzasPage = url === '/alianzas' || url.startsWith('/alianzas');
      
      // Limpiar temporizador anterior si existe
      if (this.alianzasPageTimer) {
        clearTimeout(this.alianzasPageTimer);
        this.alianzasPageTimer = null;
      }
      
      // Ocultar inmediatamente
      this.showAllianceCta = false;
      
      // Si estamos en la página de alianzas, mostrar después de 2.5 segundos
      if (isAlianzasPage && isPlatformBrowser(this.platformId)) {
        this.alianzasPageTimer = setTimeout(() => {
          this.showAllianceCta = true;
        }, 2500);
      }
    });

    // Verificar página inicial
    if (isPlatformBrowser(this.platformId)) {
      const currentUrl = this.router.url;
      const isAlianzasPage = currentUrl === '/alianzas' || currentUrl.startsWith('/alianzas');
      
      if (isAlianzasPage) {
        this.alianzasPageTimer = setTimeout(() => {
          this.showAllianceCta = true;
        }, 2500);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // No hacer nada - el botón se mantiene visible siempre
  }

  onPopupOpened() { 
    this.showFloating = false;
  }
  
  onPopupClosed() { 
    this.showFloating = true;
  }

  collapseAllianceCta(event?: Event) {
    event?.stopPropagation();
    this.allianceCtaMinimized = true;
  }

  expandAllianceCta() {
    this.allianceCtaMinimized = false;
  }

  closeAllianceCta(event?: Event) {
    event?.stopPropagation();
    this.showAllianceCta = false;
  }
}
