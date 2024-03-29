import { Component, Input, signal } from '@angular/core'

import { Product } from '../../../shared/model/product.model'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true)
  @Input({ required : true }) cart:Product[] = []

  toogleSideMenu() {
    this.hideSideMenu.update(t => !t)
  }
}
