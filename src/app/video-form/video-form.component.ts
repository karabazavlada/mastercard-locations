import { Component, OnInit,  ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of, concat } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VideoFormComponent implements OnInit {
  destinations: any[];
  dest: Observable<any[]>
  geolocationLoading: boolean;
  searchBox: string;
  searchBox$ = new Subject<string>();
  selectGeo: any;
  constructor (private http:HttpClient){
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
  getDestinations(search:string){
    console.log(search)
    this.geolocationLoading = true
    this.http.get('https://geocode-maps.yandex.ru/1.x/?format=json&lan=ru_RU&geocode=' + search)
    .subscribe((data:any)=> this.dest = data["response"]["GeoObjectCollection"]["featureMember"]);
    this.destinations = [];    
    this.dest.forEach(x => {
      this.destinations.push(x)});
    this.geolocationLoading = false
    return this.dest
  }
  customSearchFn(term: string, item: any){
    if(term.length > 2)
    console.log(this)
    item = this.destinations
  }
  ngOnInit() {
    this.dest = this.searchBox$.pipe(
         debounceTime(200),
         distinctUntilChanged(),
         switchMap(term => this.getDestinations(term))
      )
      
    this.dest.forEach(x => {this.destinations = x});
  }

}
