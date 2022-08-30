import { Component, Input, OnInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { throttleTime } from 'rxjs';
import { Note } from '../model/note.interface';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[] = [];
  note = {} as Note;

  constructor(private noteService: NotesService) { }

  addNote() {
    this.note.selected = false;

    this.noteService.postNote(
      this.note
    ).subscribe(
      () => {
        this.ngOnInit();
      }
    )
    console.table(this.notes);
  }


  changeSelection(note: Note) {
    if (note.selected) {
      note.selected = false;
    }
    else {
      note.selected = true;
    }
    console.table(this.notes)
  }


  ngOnInit(): void {
    this.noteService.getNotes().subscribe(
      (notes) => {
        this.notes = notes;
      }
    )
  }


}
