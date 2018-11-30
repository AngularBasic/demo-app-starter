import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercept', req);
    const responseStream = next.handle(req);

    const newStream: Observable<HttpEvent<any>> = responseStream.pipe(

      map((response) => {

        console.log('map', response);
        if (response instanceof HttpResponse) {
          // manipulate response here
          // return response.clone({body: {}});
          return response;
        }
        return response;
      })
    );

    newStream.subscribe(resp => {
      // manipulation of response here has no effect
      console.log('response:', resp);
    });

    return newStream;

    // return responseStream;
  }

}
