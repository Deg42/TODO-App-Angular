import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../model/note.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  @Output() searchCriteria = new EventEmitter<String>();
  searchWord: string = "";

  constructor() { }

  search() {
    this.searchCriteria.emit(this.searchWord)
  }
}
