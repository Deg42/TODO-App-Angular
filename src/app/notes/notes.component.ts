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
  filteredNotes: Note[]= [];
  note = {} as Note;

  constructor(private noteService: NotesService, private dialog: MatDialog) { }

  changeSelection(note: Note) {
    note.selected ? note.selected = false : note.selected = true
    this.noteService.putNote(note).subscribe();
  }

  ngOnInit(): void {
    this.reloadNotes();
  }

  reloadNotes(): void {
    this.noteService.getNotes().subscribe(
      (notes) => {
        this.notes = notes;
        this.filteredNotes = notes;
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


  filterNotes(data: String) {
    let regexp = new RegExp(data.toString(), "i");
    if (data) {
      this.filteredNotes = this.notes.filter((note) => regexp.test(note.title))
    } else {
      this.filteredNotes = this.notes
    }
  }

}
