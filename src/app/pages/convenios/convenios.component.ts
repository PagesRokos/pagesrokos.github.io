import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Convenio {
  nombre: string;
  beneficio: string;
  detalle: string;
  condiciones: string;
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
      nombre: 'Club Deportivo Titanes',
      beneficio: '-15% en cualquier servicio',
      detalle: 'Beneficio exclusivo para socios activos y cuerpo técnico.',
      condiciones: 'Presenta tu credencial vigente al momento de agendar.'
    },
    {
      nombre: 'Gimnasio IronBox',
      beneficio: 'Combo Grooming + Peinado',
      detalle: 'Precio preferente para mantener el look post entrenamiento.',
      condiciones: 'Disponible de lunes a jueves hasta las 17:00 hrs.'
    },
    {
      nombre: 'Universidad San Andrés',
      beneficio: 'Corte + perfilado a tarifa estudiante',
      detalle: 'Para alumnos y staff que muestren credencial institucional.',
      condiciones: 'No acumulable con otras promos.'
    },
    {
      nombre: 'TechNova Partners',
      beneficio: 'Upgrade a toalla caliente de cortesía',
      detalle: 'Para colaboradores y proveedores certificados.',
      condiciones: 'Válido en servicios de barbería premium.'
    },
    {
      nombre: 'Hotel Central',
      beneficio: 'Atención express para huéspedes',
      detalle: 'Bloques prioritarios y styling antes de eventos.',
      condiciones: 'Reserva a través de la conserjería del hotel.'
    },
    {
      nombre: 'Red de Emprendedores Locales',
      beneficio: '10% en grooming + bebida de cortesía',
      detalle: 'Queremos que los vecinos emprendedores se vean impecables.',
      condiciones: 'Menciona el convenio al reservar.'
    }
  ];
}
