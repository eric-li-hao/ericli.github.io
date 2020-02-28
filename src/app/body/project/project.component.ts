import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Project} from './project.model';
import {ProjectList} from './project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: ProjectList[];
  onDrop(event: CdkDragDrop<FormArray>): void {
    // moveItemInArray(
    //   (this.projectForm.get('editionsFormControl') as FormArray).controls,
    //   event.previousIndex,
    //   event.currentIndex
    // );
    // this.projectForm.markAsDirty();
  }

  ngOnInit(): void {
    this.projects = Project;
  }

}
