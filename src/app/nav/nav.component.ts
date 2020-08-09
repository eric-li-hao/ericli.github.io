import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];
  menuActiveItem: MenuItem;
  sidebarItems: MenuItem[];


  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-body'},
      {label: 'Project', icon: 'pi pi-fw pi-th-large'},
      {label: 'Contact Me', icon: 'pi pi-fw pi-id-card'},
    ];

    this.menuActiveItem = this.menuItems[0];


    this.sidebarItems = this.sidebarItems = [
      {label: 'Home', icon: 'pi pi-fw pi-body'},
      {label: 'Project', icon: 'pi pi-fw pi-th-large'},
      {label: 'Contact Me', icon: 'pi pi-fw pi-id-card'},
    ];
  }

}
