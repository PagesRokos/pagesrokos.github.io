import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
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
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    console.log('🎯 LoyaltyPopupComponent iniciado');
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Mostrar el popup inmediatamente al cargar la página
      setTimeout(() => {
        console.log('📢 Mostrando popup automáticamente al cargar la página');
        this.showPopup(); // Sin cierre automático
      }, 1000); // Esperar 1 segundo después de cargar la página
    }
  }

  showPopup() {
    this.isVisible = true;
    this.opened.emit();
    console.log('✨ Popup mostrado - permanecerá abierto');
    
    // Prevenir scroll del body cuando el popup está abierto (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closePopup() {
    this.isVisible = false;
    this.closed.emit();
    console.log('❌ Popup cerrado');
    
    // Restaurar scroll del body (solo en navegador)
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  openPopupManually() {
    console.log('🔘 Popup abierto manualmente desde el botón');
    // Método para abrir el popup manualmente desde el botón
    this.showPopup();
  }

  onWhatsAppClick() {
    // Mantener abierto o cerrar según preferencia. Si quieres que se cierre al ir a WhatsApp, descomenta:
    // this.closePopup();
  }

  ngOnDestroy() {
    // nothing to clear now
  }
}
