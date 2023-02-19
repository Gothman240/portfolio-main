import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  public isLoadding: Observable<boolean>;
  
  constructor(private spinnerService: SpinnerService){
    this.isLoadding = this.spinnerService.isLoading.asObservable().pipe(
      delay(0)
    );
  }

  ngOnInit(): void {
    
  }


}
