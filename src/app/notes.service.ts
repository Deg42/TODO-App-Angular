import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; 3
import { Note } from './model/note.interface';
import { Observable } from 'rxjs';

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

}
