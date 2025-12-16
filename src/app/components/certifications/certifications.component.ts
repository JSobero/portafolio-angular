import { Component, OnInit } from '@angular/core';
import { Certification } from '../../models/certification.model';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styles: ``
})
export class CertificationsComponent implements OnInit {
  certs: Certification[] = [];
  
  // Lógica de visualización
  showAll: boolean = false;
  initialCount: number = 4; // Muestra solo los 4 primeros inicialmente

  constructor(private data: Data) {}

  ngOnInit() {
    this.data.getCertifications().subscribe((c) => (this.certs = c));
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}