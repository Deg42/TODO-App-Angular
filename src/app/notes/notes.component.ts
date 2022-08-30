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
  //newNoteTitle: string;

  constructor(private noteService: NotesService) {

  }

  addNote() {
    // if (this.newNoteTitle) {
    //   this.notes.push(
    //   //  new Note(this.newNoteTitle)
    //   );
    // }

    // console.table(this.notes);
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
