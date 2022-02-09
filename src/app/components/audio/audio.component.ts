import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit, AfterViewInit {
  data;
  audio: HTMLAudioElement;
  valueMax;
  currentValue;

  @ViewChild('progress', { static: true }) progress: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.audio.ontimeupdate = (data) => {
      this.currentValue = (this.audio.currentTime / this.audio.duration) * 100;

      function percentageToDegrees(percentage) {
        return (percentage / 100) * 360;
      }

      var value = this.currentValue;
      var left = this.progress.nativeElement.querySelector(
        '.progress-left .progress-bar'
      );
      var right = this.progress.nativeElement.querySelector(
        '.progress-right .progress-bar'
      );
      if (value > 0) {
        if (value <= 50) {
          right.style.transform =
            'rotate(' + percentageToDegrees(value) + 'deg)';
        } else {
          right.style.transform = 'rotate(180deg)';
          left.style.transform =
            'rotate(' + percentageToDegrees(value - 50) + 'deg)';
        }
      }

    };
  }

  ngOnInit(): void {
    this.audio = new Audio(this.data.audio);
  }

  play() {
    this.audio.play();
  }

  resume() {
    this.audio.load();
  }

  pause() {
    this.audio.pause();
  }
}
