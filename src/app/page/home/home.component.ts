import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: ApiserviceService) {}

  categoryList: string[] = [
    'all',
    'finance',
    'hosting',
    'course',
    'travel',
    'product',
    'ecommerce',
  ];
  showAllData: string[] = [];
  filterName: string;
  filterData: string[] = [];
  showData: boolean = false;

  ngOnInit(): void {
    this.homeData();
  }
  homeData() {
    this.service.homeapi().subscribe((result) => {
      if (result.length > 0) {
        this.showAllData = result;
        this.showData = true;
      }
    });
  }
  onChange(e) {
    this.filterName = e.target.value;
    this.filterData = [];
    this.showData = false;
    this.showAllData.filter((element: any) => {
      if (this.filterName == 'All') {
        this.filterData.push(element);
      } else {
        element.category == this.filterName.toLowerCase()
          ? this.filterData.push(element)
          : null;
      }
    });
  }
}
