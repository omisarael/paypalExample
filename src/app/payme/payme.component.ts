import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var paypal: any;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.sass']
})
export class PaymeComponent implements OnInit {

  @ViewChild('paypal') paypalElement: ElementRef;

  product = {
    price: 7.77,
    // tslint:disable-next-line:max-line-length
    description: 'descripcion del producto, descripcion del producto, descripcion del producto, descripcion del producto,descripcion del producto',
    img: 'assets/malibu.jpg'
  };

  paidFor = false;

  constructor() { }

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.product.description,
              amount: {
                currency_code: 'MXN',
                value: this.product.price
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }

}
