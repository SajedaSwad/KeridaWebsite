import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: ApiserviceService) {}

  categoryList:any= ['all','finance','hosting','course','travel','product','ecommerce'];
 showAllData:any=[];
 
  ngOnInit(): void {
    this.homeData();
  }
  homeData(){
    this.service.homeapi().subscribe((result) => {
      console.log('resdata', result);
      if(result.length > 0){
        this.showAllData = result;
        
      }
    });
    
  }
}
