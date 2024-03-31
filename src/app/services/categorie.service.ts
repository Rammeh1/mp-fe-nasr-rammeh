import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie'; // Assuming you have a Category model
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // URL of the category management web service
  // common for all methods
  urlHost = 'http://localhost:3333/categories/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Array<Categorie>> {
    return this.http.get<Array<Categorie>>(this.urlHost, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
    });
  }

  deleteCategory(id: number | undefined) {
    return this.http.get(this.urlHost + 'delete/' + id);
  }

  addCategory(newCategory: Categorie) {
    return this.http.post<Array<Categorie>>(this.urlHost, newCategory);
  }

  updateCategory(id: number | undefined, updatedCategory: Categorie) {
    return this.http.put(this.urlHost, updatedCategory);
  }
}
