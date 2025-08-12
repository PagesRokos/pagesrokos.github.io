import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loyalty-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loyalty-popup.component.html',
  styleUrls: ['./loyalty-popup.component.scss']
})
export class LoyaltyPopupComponent implements OnInit, OnDestroy {
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    console.log('🎯 LoyaltyPopupComponent iniciado');
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Mostrar y dejar fijo hasta que el usuario cierre
      setTimeout(() => {
        console.log('📢 Mostrando popup automáticamente al cargar la página');
        this.showPopup();
      }, 800); // ligera demora para evitar salto inicial
    }
  }

  showPopup() {
    if (this.isVisible) return;
    this.isVisible = true;
    
    // Prevenir scroll del body cuando el popup está abierto (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closePopup() {
    if (!this.isVisible) return;
    this.isVisible = false;
    
    // Restaurar scroll del body (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  openPopupManually() {
    console.log('🔘 Popup abierto manualmente desde el botón');
    // Método para abrir el popup manualmente desde el botón (sin cierre automático)
    this.showPopup();
  }

  onWhatsAppClick() {
    // Cerrar popup cuando se hace clic en WhatsApp
    this.closePopup();
  }

  ngOnDestroy() {
    // Nada que limpiar ahora
  }
}
