import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {
  private itens: string[] = []; // Inicializa a lista de itens

  constructor() { }

  // Método para adicionar um item à lista
  adicionarItem(item: string) {
    this.itens.push(item);
  }

  // Método para obter a lista de itens
  getItens(): string[] {
    return this.itens;
  }
}
