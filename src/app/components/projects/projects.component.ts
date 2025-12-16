import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];
  filtered: Project[] = [];
  featured?: Project;
  others: Project[] = [];
  // number of small cards shown in the right column (one per row)
  visibleRightCount: number = 3;
  // when true, show remaining projects below; toggled by Load more / Show less
  showAll: boolean = false;
  categories: string[] = ['All', 'Web Dev', 'Desktop App', 'Mobile App', 'API REST', 'Data Science'];
  active = 'All';

  constructor(private data: Data) {}

  ngOnInit() {
    this.data.getProjects().subscribe(p => {
      this.projects = p;
      this.applyFilter(this.active);
    });
  }

  applyFilter(cat: string){
    this.active = cat;
    if(cat === 'All') this.filtered = this.projects;
    else this.filtered = this.projects.filter(x => x.category === cat);
    // set featured as first item and others the rest
    if(this.filtered && this.filtered.length > 0){
      this.featured = this.filtered[0];
      this.others = this.filtered.slice(1);
    } else {
      this.featured = undefined;
      this.others = [];
    }
  }

  // small cards that appear in the right column (first N items)
  get visibleRight(): Project[] {
    return this.others.slice(0, this.visibleRightCount);
  }

  // projects shown below the top row when expanded
  get visibleBelow(): Project[] {
    return this.showAll ? this.others.slice(this.visibleRightCount) : [];
  }

  // whether there are more projects beyond the right column
  get hasMore(): boolean{
    return this.others.length > this.visibleRightCount && !this.showAll;
  }

  loadMore(){
    this.showAll = !this.showAll;
  }
}
