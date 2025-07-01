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
  private autoCloseTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    console.log('🎯 LoyaltyPopupComponent iniciado');
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Mostrar el popup inmediatamente al cargar la página
      setTimeout(() => {
        console.log('📢 Mostrando popup automáticamente al cargar la página');
        this.showPopup(true); // true = con cierre automático
      }, 1000); // Esperar 1 segundo después de cargar la página
    }
  }

  showPopup(autoClose: boolean = false) {
    this.isVisible = true;
    
    if (autoClose) {
      console.log('✨ Popup mostrado automáticamente - se cerrará en 5 segundos');
    } else {
      console.log('✨ Popup mostrado manualmente - permanecerá abierto');
    }
    
    // Prevenir scroll del body cuando el popup está abierto (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    // Solo programar cierre automático si fue abierto automáticamente
    if (autoClose) {
      this.autoCloseTimeout = setTimeout(() => {
        console.log('⏰ Cerrando popup automáticamente después de 5 segundos');
        this.closePopup();
      }, 5000);
    }
  }

  closePopup() {
    this.isVisible = false;
    console.log('❌ Popup cerrado');
    
    // Cancelar el cierre automático si el usuario cierra manualmente
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
      this.autoCloseTimeout = null;
    }
    
    // Restaurar scroll del body (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  openPopupManually() {
    console.log('🔘 Popup abierto manualmente desde el botón');
    // Método para abrir el popup manualmente desde el botón (sin cierre automático)
    this.showPopup(false); // false = sin cierre automático
  }

  onWhatsAppClick() {
    // Cerrar popup cuando se hace clic en WhatsApp
    this.closePopup();
  }

  ngOnDestroy() {
    // Limpiar timeout al destruir el componente
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
    }
  }
}
