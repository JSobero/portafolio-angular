import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from '../../models/experience.model';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent implements OnInit {
  items: ExperienceItem[] = [];
  constructor(private data: Data) {}
  ngOnInit() {
    this.data.getExperience().subscribe((x) => (this.items = x));
  }
}
