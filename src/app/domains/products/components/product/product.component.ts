import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input({ required : true}) image:string = ''
  @Input() title:string = ''
  @Input() price:string = '0'

  @Output() addToCar = new EventEmitter()

  addToCartHandler() {
    console.log('click => addToCartHandler')
    this.addToCar.emit('hola este es un mg desde el componente hijo')
  }
}
