import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Product } from '../../../shared/model/product.model'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {

  @Input({ required : true}) product!:Product
  @Output() addToCar = new EventEmitter()

  addToCartHandler() {
    console.log('click => addToCartHandler')
    this.addToCar.emit(this.product)
  }
}
