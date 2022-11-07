import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Note } from './model/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private url = `${environment.apiUrl}`;
  public result: Note[] = [];

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.url}/notes`);
  }

  postNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.url}/note`, note);
  }

  putNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/note/${note._id}`, note);
  }

  deleteNote(note: Note): Observable<Note> {
    return this.http.delete<Note>(`${this.url}/note/${note._id}`);
  }

}
