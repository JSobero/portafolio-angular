import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill.model';
import { Data } from '../../services/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [] // Sin estilos CSS, todo es Tailwind
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  
  // ESTADO VISUAL
  showAll: boolean = false;
  initialCount: number = 10; // Muestra las primeras 10 por defecto

  constructor(private data: Data) {}

  ngOnInit() {
    this.data.getSkills().subscribe(s => {
      this.skills = s;
    });
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}