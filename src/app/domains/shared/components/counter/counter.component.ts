import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number
  @Input({ required: true }) message: string
  counter = signal(0)
  counterRef: number | undefined

  constructor() {

    // NO ASYNC
    // before render
    // una vez

    this.duration = 0
    this.message = ''
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges')
    console.log('-'.repeat(10))
    console.log(changes)
    const { duration } = changes
    if (duration) {
      this.doSomething(duration)
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async , then, subs
    console.log('ngOnInit')
    console.log('-'.repeat(10))
    console.log('dutation', this.duration)
    console.log('message', this.message)

    this.counterRef = window.setInterval(() => {
      console.log('intervale')
      this.counter.update(prev => prev + 1)
    }, 1000)
  }

  ngAfterContentInit() {
    // after render
    // hijos ya fueron renderizados
    console.log('ngAfterContentInit')
    console.log('-'.repeat(10))
  }

  ngOnDestroy() {
    // before destroy
    // una vez
    console.log('ngOnDestroy')
    console.log('-'.repeat(10))
    window.clearInterval(this.counterRef)
  }

  doSomething(duration: any) {
    console.log('doSomething: ',duration)
    console.log('-'.repeat(10))
  }

}
