import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alianzas-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alianzas-home.component.html',
  styleUrls: ['./alianzas-home.component.scss']
})
export class AlianzasHomeComponent {}
