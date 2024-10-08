import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpecificationDTO } from '../../DTO/specification.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class SpecificationService {
  private baseUrl = 'http://localhost:8080/api/specifications'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all specifications
  getAllSpecifications(): Observable<SpecificationDTO[]> {
    return this.http.get<SpecificationDTO[]>(this.baseUrl);
  }

  // Get specification by ID
  getSpecificationById(specificationId: number): Observable<SpecificationDTO> {
    return this.http.get<SpecificationDTO>(`${this.baseUrl}/${specificationId}`);
  }

  // Create a new specification
  createSpecification(specificationDTO: SpecificationDTO): Observable<SpecificationDTO> {
    return this.http.post<SpecificationDTO>(this.baseUrl, specificationDTO, this.httpOptions);
  }

  // Update an existing specification
  updateSpecification(specificationId: number, specificationDTO: SpecificationDTO): Observable<SpecificationDTO> {
    return this.http.put<SpecificationDTO>(`${this.baseUrl}/${specificationId}`, specificationDTO, this.httpOptions);
  }

  // Delete a specification
  deleteSpecification(specificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${specificationId}`);
  }
}
