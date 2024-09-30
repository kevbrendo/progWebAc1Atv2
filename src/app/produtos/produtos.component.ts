import { Component } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: Produtos[] = [
    { nome: "Lampada", preco: 110.99, descricao: "Lampada de Aco padrao", emEstoque: true },
    { nome: "Baralho", preco: 30.99, descricao: "Baralho comum", emEstoque: true },
    { nome: "Caneta", preco: 10.99, descricao: "Caneta marca the crown", emEstoque: true },
    { nome: "Mouse", preco: 410.99, descricao: "Mouse ergonomico", emEstoque: true },
  ];

  foraDeEstoque(): boolean {
    return this.produtos.every(produto => !produto.emEstoque);
  }
}
