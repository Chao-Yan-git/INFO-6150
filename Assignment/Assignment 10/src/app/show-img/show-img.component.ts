import { Component, OnInit, Input, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'show-img',
  templateUrl: './show-img.component.html',
  styleUrls: ['./show-img.component.css']
})
export class ShowImgComponent implements OnInit {
  @Input() product!: Product;

  // showImage(): boolean {
  //   console.log("show image" + this.product.name);
  //   return false;
  // }

  @ViewChild('modal_1') modal_1!: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc!: ViewContainerRef;
  backdrop: any

  showDialog(){
    console.log("show image" + this.product.name);

    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open'); 
    this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV')
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop)
  }
  
  closeDialog() {
    this.vc.clear()
    document.body.removeChild(this.backdrop)
  }

  public showNotification: boolean;

  constructor() {
    this.showNotification = true;
    setInterval(() => {
      this.showNotification = true;
    }, 1000);
  }

  public onCloseClick(): void {
    this.showNotification = false;
  }


  ngOnInit(): void {
  }

}
