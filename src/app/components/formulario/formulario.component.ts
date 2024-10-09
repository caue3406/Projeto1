import { Component } from '@angular/core';
import { ListaComprasService } from '../../services/lista-compras.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  novoItem: string = '';

  constructor(private listaService: ListaComprasService) { }

  adicionarItem() {
    if (this.novoItem.trim()) {
      this.listaService.adicionarItem(this.novoItem);
      this.novoItem = ''; // Limpa o campo após adicionar
    }
  }
}
