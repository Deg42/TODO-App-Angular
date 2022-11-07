import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerHandlerService } from './spinner-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {

  constructor(
    public spinnerHandler: SpinnerHandlerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.spinnerHandler.handleRequest('plus');
    return next
      .handle(req)
      .pipe(
        finalize(this.finalize.bind(this))
      );
  }

  finalize = (): void => this.spinnerHandler.handleRequest();

 
}