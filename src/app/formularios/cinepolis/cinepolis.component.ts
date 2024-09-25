import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  formulario!: FormGroup;
  valorAPagar!: number;
  constructor() {}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      numCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      numBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
      tarjetaCineco: new FormControl(false),
    });
  }

  calcularPago(): void {
    const numCompradores = this.formulario.get('numCompradores')?.value;
    const numBoletos = this.formulario.get('numBoletos')?.value;
    const tarjetaCineco = this.formulario.get('tarjetaCineco')?.value;

    const precioBoleto = 12;

    if (numBoletos > 7 * numCompradores) {//limite de 7 boletos por comprador
      alert(`Cada comprador solo puede comprar hasta 7 boletos.`);
      return;
    }

    let total = numBoletos * precioBoleto;

    //desc por cantidad de boletos...
    if (numBoletos > 5) {//si compran mas de 5 boletos les dan 15% de desc del valor a pagar
      total = total * 0.85;
    } else if (numBoletos >= 3 && numBoletos <= 5) {//si compran 3, 4, 5 boletos les dan 10% de desc del total a pagar
      total = total * 0.90;
    }

    //desc extra por tener tarjeta cineco
    if (tarjetaCineco) {//si se cuenta con tarjeta ciceco se dan 10% de desc ademas de los otros descuentos
      total = total * 0.90;
    }
    this.valorAPagar = total;
  }
}
