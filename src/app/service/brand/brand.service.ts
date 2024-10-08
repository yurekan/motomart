import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../Environments/environment';
import { BrandDTO } from '../../DTO/brand.dto';  // Import your BrandDTO model

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = `${environment.apiUrl}/brands`; // Adjust endpoint as necessary

  constructor(private http: HttpClient) {}

  // Fetch all brands
  getAllBrands(): Observable<BrandDTO[]> {
    return this.http.get<BrandDTO[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Fetch a brand by ID
  getBrandById(id: number): Observable<BrandDTO> {
    return this.http.get<BrandDTO>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // Create a new brand
  createBrand(brandDTO: BrandDTO): Observable<BrandDTO> {
    return this.http.post<BrandDTO>(this.apiUrl, brandDTO).pipe(catchError(this.handleError));
  }

  // Update an existing brand
  updateBrand(id: number, brandDTO: BrandDTO): Observable<BrandDTO> {
    return this.http.put<BrandDTO>(`${this.apiUrl}/${id}`, brandDTO).pipe(catchError(this.handleError));
  }

  // Delete a brand
  deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
