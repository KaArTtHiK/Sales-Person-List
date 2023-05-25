import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})


export class SalesPersonListComponent {
  SalesPersonList : SalesPerson[] = [
    new SalesPerson("Karthik1", "Sirigiri1", "karthik1@gmail.com", 51000),
    new SalesPerson("Karthik2", "Sirigiri2", "karthik2@gmail.com", 52000),
    new SalesPerson("Karthik3", "Sirigiri3", "karthik3@gmail.com", 53000),
    new SalesPerson("Karthik4", "Sirigiri4", "karthik4@gmail.com", 44000),
  ]
}
