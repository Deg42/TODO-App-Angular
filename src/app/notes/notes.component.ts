import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: string[];
  note: string = '';

  constructor() {
    this.notes = [];
  }

  addNote() {
    if (this.note) { 
      this.notes.push(this.note);
      this.note = '';
    }
  }

  ngOnInit(): void {
  }

}
