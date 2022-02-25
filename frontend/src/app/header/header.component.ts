import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'My Todo List App'
      },
      {
        label: 'TODO Searchbar here'
      },
      {
        label: 'Color themes',
        items: [
          { label: 'Dark' },
          { label: 'Light' },
          { label: 'TODO accessibility'}
        ]
      },
      {
        label: 'Settings TODO icon'
      },      {
        label: 'Logout TODO icon'
      }
      // {
      //     label: 'File',
      //     items: [{
      //             label: 'New', 
      //             icon: 'pi pi-fw pi-plus',
      //             items: [
      //                 {label: 'Project'},
      //                 {label: 'Other'},
      //             ]
      //         },
      //         {label: 'Open'},
      //         {label: 'Quit'}
      //     ]
      // },
      // {
      //     label: 'Edit',
      //     icon: 'pi pi-fw pi-pencil',
      //     items: [
      //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //     ]
      // }
  ];
  }

}
