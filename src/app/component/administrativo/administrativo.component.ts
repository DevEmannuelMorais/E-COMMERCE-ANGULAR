import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Produto} from "../../model/produto.model";
import {MatButton} from "@angular/material/button";
import {ProdutoModalComponent} from "../produto-modal/produto-modal.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-administrativo',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    MatButton,
    CurrencyPipe
  ],
  templateUrl: './administrativo.component.html',
  styleUrl: './administrativo.component.css'
})
export class AdministrativoComponent {
  produtos: Produto[] = [
    new Produto('Produto 1', 'Descrição do Produto 1', 10, 100, 'https://via.placeholder.com/150'),
    new Produto('Produto 2', 'Descrição do Produto 2', 5, 200, 'https://via.placeholder.com/150'),
    new Produto('Produto 3', 'Descrição do Produto 3', 2, 300, 'https://via.placeholder.com/150')
  ];

  constructor(public dialog: MatDialog) {}

  abrirModal(produto: Produto | null, editMode: boolean): void {
    const dialogRef = this.dialog.open(ProdutoModalComponent, {
      width: '400px',
      data: { produto, editMode }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const produtoData = new Produto(
          result.nome,
          result.descricao,
          result.estoque,
          result.valor,
          result.foto
        );

        if (editMode && produto) {
          const index = this.produtos.indexOf(produto);
          if (index !== -1) {
            this.produtos[index] = produtoData;
          }
        } else {
          this.produtos.push(produtoData);
        }
      }
    });
  }

  adicionarProduto() {
    this.abrirModal(null, false);
  }

  editarProduto(produto: Produto) {
    this.abrirModal(produto, true);
  }

  removerProduto(produto: Produto) {
    const index = this.produtos.indexOf(produto);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
