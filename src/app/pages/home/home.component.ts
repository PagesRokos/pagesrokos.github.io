import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from '../marcas/marcas.component';
import { ServiciosComponent } from "../servicios/servicios.component";
import { InicioComponent } from "../inicio/inicio.component";
import { QuienesComponent } from "../sobreNosotros/quienes.component";
import { UbicacionComponent } from "../ubicacion/ubicacion.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { ConveniosComponent } from "../convenios/convenios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MarcasComponent, ServiciosComponent, InicioComponent, QuienesComponent, UbicacionComponent, ContactoComponent, ConveniosComponent], // incluye el componente aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
}
