import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonSearchbar, IonList, IonItem, IonLabel,
  IonBadge, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline, settings } from 'ionicons/icons';
import { DbService } from '../../core/services/db.service';
import { Vehiculo } from '../../core/models/vehiculo.model';

@Component({
  selector: 'app-buscar-placa',
  templateUrl: './buscar-placa.page.html',
  styleUrls: ['./buscar-placa.page.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonButton,
    IonIcon
  ]
})
export class BuscarPlacaPage implements OnInit {
  @ViewChild('searchbar') searchbar: any;

  sugerencias: Vehiculo[] = [];
  sinResultados = false;
  termino = '';

  constructor(private db: DbService, private router: Router) {
    addIcons({ searchOutline, settings });
  }

  async ngOnInit() {
    await this.db.init();
  }

  ionViewDidEnter() {
    setTimeout(() => this.searchbar?.setFocus(), 300);
  }

  async onBuscar(event: any) {
    this.termino = event.detail.value || '';
    if (this.termino.length > 0) {
      this.sugerencias = await this.db.buscarPorPlaca(this.termino);
      this.sinResultados = this.sugerencias.length === 0;
    } else {
      this.sugerencias = [];
      this.sinResultados = false;
    }
  }

  seleccionarVehiculo(v: Vehiculo) {
    this.router.navigate(['/vehiculo', v.id]);
  }

  irAdmin() {
    this.router.navigate(['/admin']);
  }
}