import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-produto-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogTitle
  ],
  templateUrl: './produto-modal.component.html',
  styleUrls: ['./produto-modal.component.css']
})
export class ProdutoModalComponent {
  produtoForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProdutoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { produto: Produto, editMode: boolean }
  ) {
    this.produtoForm = this.fb.group({
      nome: [data.produto ? data.produto.nome : ''],
      descricao: [data.produto ? data.produto.descricao : ''],
      estoque: [data.produto ? data.produto.estoque : 0],
      valor: [data.produto ? data.produto.valor : 0],
      foto: [data.produto ? data.produto.foto : '']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.produtoForm.patchValue({
        foto: file.name
      });
    }
  }

  onSubmit() {
    if (this.produtoForm.valid) {
      const produtoData = this.produtoForm.value;

      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          produtoData.foto = reader.result as string;
          this.dialogRef.close(produtoData);
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        this.dialogRef.close(produtoData);
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
