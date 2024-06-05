import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data: any;
  error: string | undefined;
  city: string = 'Pune';

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.fetchData(this.city).subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        this.error = error;
        console.error('Error fetching data:', this.error);
      }
    );
  }
}
