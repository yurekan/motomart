import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariantDTO } from '../../DTO/variant.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class VariantService {
  private baseUrl = 'http://localhost:8080/api/variants'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all variants
  getAllVariants(): Observable<VariantDTO[]> {
    return this.http.get<VariantDTO[]>(this.baseUrl);
  }

  // Get variant by ID
  getVariantById(variantId: number): Observable<VariantDTO> {
    return this.http.get<VariantDTO>(`${this.baseUrl}/${variantId}`);
  }

  // Create a new variant
  createVariant(variantDTO: VariantDTO): Observable<VariantDTO> {
    return this.http.post<VariantDTO>(this.baseUrl, variantDTO, this.httpOptions);
  }

  // Update an existing variant
  updateVariant(variantId: number, variantDTO: VariantDTO): Observable<VariantDTO> {
    return this.http.put<VariantDTO>(`${this.baseUrl}/${variantId}`, variantDTO, this.httpOptions);
  }

  // Delete a variant
  deleteVariant(variantId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${variantId}`);
  }
}
