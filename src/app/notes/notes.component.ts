import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { throttleTime } from 'rxjs';
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
    let title: string = this.note.title.trim();
    if (title.length){
    this.note.selected = false;
    this.noteService.postNote(
      this.note
    ).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }}

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

  openDialog(note: Note): void {
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
