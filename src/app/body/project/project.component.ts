import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProjectModel} from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const project = new ProjectModel();
    project.name = 'Personal Website';
    project.id = 1;
    project.languages = 'angular';
    project.level = 'high';
    project.date = new Date('02 / 02 / 2019');
    this.initForm(project);
  }

  initForm(project: ProjectModel): void {
    this.projectForm.addControl('nameControl', new FormControl(project.name, []));
    this.projectForm.addControl('languageControl', new FormControl(project.languages, []));
    this.projectForm.addControl('levelControl', new FormControl(project.level, []));
    this.projectForm.addControl('indexControl', new FormControl(project.id, []));
    this.projectForm.addControl('timeControl', new FormControl(project.date, []));
  }

}
