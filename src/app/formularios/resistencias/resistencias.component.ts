import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent implements OnInit {
  formularioRes!: FormGroup;
  resultado: any = {
    color1: '',
    color2: '',
    color3: '',
    tolerancia: '',
    valor: 0,
    valorMaximo: 0,
    valorMinimo: 0
  };

  colorHex: { [key: string]: string } = {//Asignar colores a los colores
    negro: '#000000',
    marron: '#8B4513',
    naranja: '#FFA500',
    amarillo: '#FFFF00',
    verde: '#008000',
    azul: '#0000FF',
    violeta: '#EE82EE',
    gris: '#808080',
    blanco: '#FFFFFF'
  };

  valorColor: { [key: string]: number } = {//Asignar valores a los colores de la primera y segunda banda
    negro: 0,
    marron: 1,
    naranja: 3,
    amarillo: 4,
    verde: 5,
    azul: 6,
    violeta: 7,
    gris: 8,
    blanco: 9
  };

  valoresMulti: { [key: string]: number } = {//Asignar valores a la tercer banda que es la del multiplicador
    negro: 1,
    marron: 10,
    naranja: 1000,
    amarillo: 10000,
    verde: 100000,
    azul: 1000000,
    violeta: 10000000,
    gris: 100000000,
    blanco: 1000000000
  };

  toleValores: { [key: string]: number } = {//Asignar valores para el porcentaje de las resistencias
    oro: 5,
    plata: 10
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioRes = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });
  }

  registro(): void {
    const color1 = this.formularioRes.get('color1')?.value;
    const color2 = this.formularioRes.get('color2')?.value;
    const color3 = this.formularioRes.get('color3')?.value;
    const tolerancia = this.formularioRes.get('tolerancia')?.value;

    if (color1 === 'negro' && color2 === 'negro' && color3 === 'negro') {
      alert('Las tres bandas son negras, esto representa una resistencia de 0 Ω.');
      this.resultado = {
        color1,
        color2,
        color3,
        tolerancia,
        valor: 0,
        valorMaximo: 0,
        valorMinimo: 0
      };
      return;
    }

    const valorBase = (this.valorColor[color1] * 10) + this.valorColor[color2];//En valorBase se concatena el primer y segundo color
    const valor = valorBase * this.valoresMulti[color3];//En valor se multiplica valor por el multiplicador (color3)
    const valorTole = this.toleValores[tolerancia] || 0;//Aqui se toma el valor de tolerancia, que si no se selecciona lo toma como 0
    const valorMaximo = valor + (valor * valorTole) / 100;//Aqui se calcula valorMaximo 
    const valorMinimo = valor - (valor * valorTole) / 100;//Aqui se calcular valorMinimo

    this.resultado = {
      color1,
      color2,
      color3,
      tolerancia,
      valor,
      valorMaximo,
      valorMinimo
    };
  }
}
