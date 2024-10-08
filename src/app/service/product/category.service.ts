import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../../DTO/category.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/categories'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all categories
  getAllCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.baseUrl);
  }

  // Get category by ID
  getCategoryById(categoryId: number): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.baseUrl}/${categoryId}`);
  }

  // Create a new category
  createCategory(categoryDTO: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.baseUrl, categoryDTO, this.httpOptions);
  }

  // Update an existing category
  updateCategory(categoryId: number, categoryDTO: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(`${this.baseUrl}/${categoryId}`, categoryDTO, this.httpOptions);
  }

  // Delete a category
  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${categoryId}`);
  }
}
