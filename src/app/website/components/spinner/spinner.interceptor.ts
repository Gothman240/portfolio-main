import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { SpinnerService } from "src/app/service/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

    constructor(private readonly sprinnerService: SpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.sprinnerService.show();
        return next.handle(req).pipe(
            finalize(()=> this.sprinnerService.hide())
        )
    }
}