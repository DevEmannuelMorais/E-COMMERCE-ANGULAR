import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = [
    {
      nome: 'Produto 1',
      descricao: 'Descrição do Produto 1',
      imagemUrl: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição do Produto 2',
      imagemUrl: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Produto 3',
      descricao: 'Descrição do Produto 3',
      imagemUrl: 'https://via.placeholder.com/150'
    }
  ];
}
