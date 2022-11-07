import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
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

  constructor(private noteService: NotesService, private dialog: MatDialog) { }

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
          this.ngOnInit();
        }
      )
    }
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
  }

  openDialog(note: Note, event: MouseEvent): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: note
    });

    dialogRef.afterClosed().subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }

}
