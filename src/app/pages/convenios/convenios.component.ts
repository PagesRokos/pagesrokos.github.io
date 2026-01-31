import { CommonModule, isPlatformBrowser, Location } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

interface Convenio {
  nombre: string;
  logo: string;
  descripcion: string;
  linkFormulario?: string;
}

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {
  convenios: Convenio[] = [
    {
      nombre: 'Ispeakcenter',
      logo: 'assets/logo.png',
      descripcion: 'Escuela de inglés.',
      linkFormulario: '#' // La empresa enviará el link del formulario
    },
    {
      nombre: 'Bares',
            logo: 'assets/logo.png',
      descripcion: '15% de descuento de lunes a miércoles mostrando tarjeta de socio Rokos Barber Club.'
    },
    {
      nombre: 'Alimentos Saludables',
      logo: 'assets/logo.png',
            descripcion: 'Descuentos especiales en alimentos saludables.'
    },
    {
      nombre: 'Centro Deportivo',
      logo: 'assets/logo.png',
            descripcion: 'Beneficios exclusivos en centro deportivo.'
    },
    {
      nombre: 'Welly Protein',
      logo: 'assets/logo.png',   
         descripcion: 'Suplementos para el bienestar.'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private location: Location
  ) {}

  // Eliminamos estas variables porque ahora se manejan desde app.component
  // showAllianceCta = true;
  // allianceCtaMinimized = false;

  ngOnInit(): void {
    // No forzamos el scroll al inicio para mantener la posición "sobre" la sección anterior
  }

  volver(): void {
    // Usamos Location.back() para aprovechar el scroll restoration
    this.location.back();
  }

  // Minimizar el CTA (solo oculta el contenido grande, muestra el icono pequeño)
  // Estos métodos ya no se usan aquí, se manejan desde app.component
  /*
  minimizeAllianceCta(event?: Event): void {
    if (event) event.stopPropagation();
    this.allianceCtaMinimized = true;
  }

  // Expandir el CTA (muestra el contenido grande)
  expandAllianceCta(): void {
    this.allianceCtaMinimized = false;
  }

  // Cerrar completamente (ya no se muestra nada en esta sesión)
  closeAllianceCta(event?: Event): void {
    if (event) event.stopPropagation();
    this.showAllianceCta = false;
  }
  */
}