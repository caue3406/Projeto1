import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { ListaComprasService } from './services/lista-compras.service';

@NgModule({
    declarations: [
        AppComponent,
        FormularioComponent,
        ListaDeComprasComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [ListaComprasService],
    bootstrap: [AppComponent]
})
export class AppModule { }
