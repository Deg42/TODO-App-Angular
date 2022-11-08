import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../model/note.interface';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note = {} as Note;
  @Output("reloadNotes") reloadNotes: EventEmitter<any> = new EventEmitter();

  constructor(private noteService: NotesService) { }

  addNote() {
    this.note.title != null
      ? this.note.title = this.note.title.trim()
      : this.note.title;

    if (this.note.title) {
      this.note.selected = false;
      this.noteService.postNote(
        this.note
      ).subscribe(
        () => {
          this.reloadNotes.emit();
        }
      )
    }
  }
}
