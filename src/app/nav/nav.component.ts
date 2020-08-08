import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Project', icon: 'pi pi-fw pi-th-large'},
      {label: 'Contact Me', icon: 'pi pi-fw pi-id-card'},
    ];

    this.activeItem = this.items[0];
  }

}
