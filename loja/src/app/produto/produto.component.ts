import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {

  mostrarRes: boolean = true;
  cards: string[] = ["Card 1", "Card 2", "Card 3"];


  constructor() { }

  ngOnInit() {
  }

  public mostrarResultado(){
    this.mostrarRes = false;
  }

  public voltarResultado(){
    this.mostrarRes = true;
  }

  public fazerLogin(){
    alert("Senha ou usuário inválido");
  }
}
