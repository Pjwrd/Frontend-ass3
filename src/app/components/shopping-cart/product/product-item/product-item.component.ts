import { Component, OnInit, Input } from '@angular/core';
import { productItem } from './product-item.interface';
import { ProductItemService } from './product-item.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  productItem: productItem[] = []
  productItemService: any;

  constructor() { }
 
  
  ngOnInit(): void {
    this.productItemService.getProductItem().subscribe((productItem: productItem[]) => {
    this.productItem = productItem;
    })
  }

}
