import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Subject, Observable, of, concat } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VideoFormComponent implements OnInit {

  public banks: Array<string> = ['Сбербанк', 'Газпромбанк', 'АЛЬФА-БАНК', 'Банк ВТБ', 'БИНБАНК'];
  public kms: Array<string> = ['Менее 1 км', '1-2 км', '2-3 км', '3-5 км', 'Более 5 км'];
  public techs: Array<string> = ['Контактная карта', 'Бесконтактная карта', 'Мобильное устройство', 'Сервис "Наличные с покупкой"'];
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  destinations: any[];
  dest: Observable<any[]>;
  geolocationLoading: boolean;
  searchBox: string;
  searchBox$ = new Subject<string>();
  selectGeo: any;
  constructor (private http: HttpClient) {
  }



  getDestinations(search: string) {
    console.log(search);
    this.geolocationLoading = true;
    this.http.get('https://geocode-maps.yandex.ru/1.x/?format=json&lan=ru_RU&geocode=' + search)
    .subscribe((data: any) => this.dest = data['response']['GeoObjectCollection']['featureMember']);
    this.destinations = [];
    this.dest.forEach(x => {
      this.destinations.push(x); });
    this.geolocationLoading = false;
    return this.dest;
  }
  customSearchFn(term: string, item: any) {
    if (term.length > 2){
    console.log(this);
    }
    item = this.destinations;
  }

  ngOnInit(){
    $(document).ready(function() {
      $('#bank').on('change', function() {
        $(this).css('color', '#000');
      });
    });

    $(document).ready(function() {
      $('#mesto').on('change', function() {
        $(this).css('color', '#000');
      });
    });

    $(document).ready(function() {
      $('#dist').on('change', function() {
        $(this).css('color', '#000');
      });
    });

    $(document).ready(function() {
      $('#technic').on('change', function() {
        $(this).css('color', '#000');
      });
    });
    this.dest = this.searchBox$.pipe(
         debounceTime(200),
         distinctUntilChanged(),
         switchMap(term => this.getDestinations(term))
      );

    this.dest.forEach(x => {this.destinations = x; });
  }

  onSearch(event:any)
  {

    //console.log(pos)
    this.http.get('http://95.213.28.144/api/values/45.23424-45.123213' )
      .subscribe(data => {
        console.log(data);
      });
  }
}
