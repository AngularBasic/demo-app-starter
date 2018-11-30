import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercept', req);
    const responseStream = next.handle(req);

    responseStream.pipe(

      map((response) => {
        // manipulate response here
        // ???
        if (response instanceof HttpResponse) {
          console.log('map', response);
          return response.clone({body: {}});
        }
        return response;
      })
    ).subscribe(resp => {
      // manipulation of response here has no effect
      console.log('response:', resp);
    });

    return responseStream;
  }

}
