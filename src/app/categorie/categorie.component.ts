import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlHost = "http://localhost:3333/categories/";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<Categorie>> {
    return this.http.get<Array<Categorie>>(this.urlHost, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' }
    });
  }

  deleteCategory(id: number | undefined) {
    return this.http.get(this.urlHost + "delete/" + id);
  }

  addCategory(newCategory: Categorie) {
    return this.http.post<Array<Categorie>>(this.urlHost, newCategory);
  }

  updateCategory(id: number | undefined, updatedCategory: Categorie) {
    return this.http.put(this.urlHost, updatedCategory);
  }
}
