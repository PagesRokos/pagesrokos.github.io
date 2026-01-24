import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class ConveniosComponent {
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
}
