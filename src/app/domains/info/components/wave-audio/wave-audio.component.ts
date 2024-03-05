import { CommonModule } from '@angular/common'
import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core'
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  @Input({ required: true }) audioUrl!: string
  @ViewChild('wave') wave!: ElementRef
  isPLaying = signal(false)

  private ws!: WaveSurfer

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.wave.nativeElement
    })
    this.ws.on('play', () => this.isPLaying.set(true))
    this.ws.on('pause', () => this.isPLaying.set(false))
  }

  playPause(){
    this.ws.playPause()
  }
}
