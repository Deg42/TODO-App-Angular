import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../model/note.interface';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public note: Note, private noteService: NotesService) { }

  closeDialog(): void {
    this.dialogRef.close();
  }


  comfirmDelete(note: Note, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.noteService.deleteNote(note).subscribe();
    this.dialogRef.close();
  }
}
