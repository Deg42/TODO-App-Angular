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
  }


  changeSelection(note: Note) {
    note.selected ? note.selected = false : note.selected = true

    this.noteService.putNote(note).subscribe();
  }


  ngOnInit(): void {
    this.noteService.getNotes().subscribe(
      (notes) => {
        this.notes = notes;
      }
    )

    console.table(this.notes)
  }

}
