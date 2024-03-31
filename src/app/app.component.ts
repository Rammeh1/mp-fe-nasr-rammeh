import { Component } from '@angular/core';
import { Produit } from './model/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  actions: Array<any> = [
    { titre: 'Accueil', route: '/accueil' },
    { titre: 'Liste des produits', route: '/produits' },
    { titre: 'Ajouter Produit', route: '/ajouterProduit' },
    { titre: 'Liste des categories', route: '/categories' },
    { titre: 'Ajouter Categories', route: '/ajouterCategories' },
  ];

  actionCourante: any;

  setActionCourante(a: any) {
    this.actionCourante = a;
  }
}
