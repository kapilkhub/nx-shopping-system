import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'nx-shopping-system-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
