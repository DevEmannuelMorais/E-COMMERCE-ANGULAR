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
      imagemUrl: '/assets/images/img.png'
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição do Produto 2',
      imagemUrl: '/assets/images/img_3.png'
    },
    {
      nome: 'Produto 3',
      descricao: 'Descrição do Produto 3',
      imagemUrl: '/assets/images/televisao.png'
    }
  ];
}
