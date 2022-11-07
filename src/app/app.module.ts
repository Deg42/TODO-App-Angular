import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NotesComponent } from './notes/notes.component';
import { SpinnerInterceptorService } from './spinner-interceptor.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DeleteDialogComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
