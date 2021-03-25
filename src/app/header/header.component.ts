import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // collapsed = true;
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFeatureClick(feature: string) {
    this.clickEvent.emit(feature);
  }

  // onShoppingClick() {
  //   this.clickEvent.emit('Shopping');
  // }
}
