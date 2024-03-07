import { Component, signal } from '@angular/core'

import { ProductComponent } from '../../components/product/product.component'
import { HeaderComponent } from '../../../shared/components/header/header.component'

import { Product } from '../../../shared/model/product.model'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,HeaderComponent,ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  cart = signal<Product[]>([])


  constructor() {
    const products: Product[] = [{
      id: Date.now(),
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 1'
    }, {
      id: Date.now(),
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 2'
    }, {
      id: Date.now(),
      name: 'Product 3',
      price: 300,
      description: 'Description 3',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 3'
    },
    {
      id: Date.now(),
      name: 'Product 4',
      price: 400,
      description: 'Description 4',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 4'
    },
    {
      id: Date.now(),
      name: 'Product 5',
      price: 500,
      description: 'Description 5',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 5'
    },
    {
      id: Date.now(),
      name: 'Product 6',
      price: 600,
      description: 'Description 6',
      image: `https://picsum.photos/640/640?random=${Date.now()}`,
      category: 'Category 6'
    },
  ]

    this.products.set(products)
  }

  addToCart(event:Product) {
    this.cart.update(prev => [...prev, event])
  }
}
