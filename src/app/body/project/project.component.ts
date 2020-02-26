import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Project} from './project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectGroup: FormGroup;
  projectName: Project;
  constructor() { }

  initForm() {
    this.projectGroup.addControl('projectName', new FormControl(this.projectName,[]));
  }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<FormArray>): void {
    // moveItemInArray(
    //   (this.generalSettingsGroup.get('editionsFormControl') as FormArray).controls,
    //   event.previousIndex,
    //   event.currentIndex
    // );
    // this.generalSettingsGroup.markAsDirty();
  }
}
