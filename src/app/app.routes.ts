import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProdutosComponent} from "./component/produtos/produtos.component";
import {AdministrativoComponent} from "./component/administrativo/administrativo.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'administrative', component: AdministrativoComponent }
];
