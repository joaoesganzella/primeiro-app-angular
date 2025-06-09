import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  public mensagem: string;
  public valor: number;
  public link_foto: string;

  public constructor(){
    this.mensagem = "Ola mundo";
    this.valor = 0;
    this.link_foto = "/assets/bellindao.png";
  }

  ngOnInit(): void {
    
  }

  public mudarValor(){
    this.valor++;
    if(this.valor % 2 === 0){
      this.link_foto = "/assets/miazinha.png"
    } else {
      this.link_foto = "/assets/bellindao.png";
    }
  }

}
