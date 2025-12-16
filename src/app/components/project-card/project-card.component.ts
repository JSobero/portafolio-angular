import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styles: ``,
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() size: 'small' | 'large' = 'small';
  // Inline SVG placeholder (dark background + muted text)
  public placeholder: string = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' preserveAspectRatio='xMidYMid slice'><rect width='100%25' height='100%25' fill='%230c0f10'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239aa3a6' font-family='Inter, Arial, sans-serif' font-size='32'>NO%20IMAGE</text></svg>";
}
