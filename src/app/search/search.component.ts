import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  array = [
    {
      id: 1,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.25,
      Address: 'Невский проспект, 16',
      WorkTime: 'Круглосуточно',
      Money: 'Прием наличных'
    },
    {
      id: 2,
      Name: 'Банкомат, Банк ВТБ, ПАО',
      Distance: 0.35,
      Address: 'Большая Морская, 11',
      WorkTime: '7:00-23:00',
      Money: 'Без приема наличных'
    },
    {
      id: 3,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.35,
      Address: 'ТРК Адмирал, Малая Морская, 4',
      WorkTime: '10:00-22:00',
      Money: 'Прием наличных'

    },
    {
      id: 4,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.5,
      Address: 'ТОЦ Невский 25, Казанская, 1',
      WorkTime: 'Круглосуточно',
      Money: 'Прием наличных'
    },
    {
      id: 5,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.65,
      Address: 'Гороховая, 15',
      WorkTime: 'Круглосуточно',
      Money: 'Без приема наличных'

    },
    {
      id: 6,
      Name: 'Банкомат, Тинькофф Банк, АО',
      Distance: 0.85,
      Address: 'Невский проспект, 29-31, лит А',
      WorkTime: '9:00-22:00',
      Money: 'Прием наличных'
    },
    {
      id: 7,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.85,
      Address: 'Невский проспект, 33 лит А',
      WorkTime: '7:00-23:00',
      Money: 'Прием наличных'

    },
    {
      id: 8,
      Name: 'Банкомат, Сбербанк, ПАО',
      Distance: 0.85,
      Address: 'Думская, 1-3',
      WorkTime: 'Круглосуточно',
      Money: 'Прием наличных'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
