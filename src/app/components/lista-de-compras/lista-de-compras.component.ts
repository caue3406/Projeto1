import { Component } from '@angular/core';
import { ListaComprasService } from '../../services/lista-compras.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent {
  itens: string[] = [];

  constructor(private listaService: ListaComprasService) {
    this.itens = this.listaService.getItens(); // Obtém os itens do serviço
  }
}
