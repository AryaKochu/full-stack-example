import { Component } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServicesService]
})
export class AppComponent {
	title = 'ASFdfdf';
 constructor(private service: AppServicesService) {
    this.service.fetchData().subscribe( res => {
      this.title = res;
    });
  }
  
}
