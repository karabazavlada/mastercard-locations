import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#bank").on("change", function(){
        $(this).css("color", "#000");
      });
    });

    $(document).ready(function(){
      $("#mesto").on("change", function(){
        $(this).css("color", "#000");
      });
    });

    $(document).ready(function(){
      $("#dist").on("change", function(){
        $(this).css("color", "#000");
      });
    });

    $(document).ready(function(){
      $("#technic").on("change", function(){
        $(this).css("color", "#000");
      });
    });
  }


}
