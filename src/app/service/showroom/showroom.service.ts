import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowroomDTO } from '../../DTO/showroom.dto'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
  private baseUrl = 'http://localhost:8080/api/showrooms'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all showrooms
  getAllShowrooms(): Observable<ShowroomDTO[]> {
    return this.http.get<ShowroomDTO[]>(this.baseUrl);
  }

  // Get showroom by ID
  getShowroomById(showroomId: number): Observable<ShowroomDTO> {
    return this.http.get<ShowroomDTO>(`${this.baseUrl}/${showroomId}`);
  }

  // Create a new showroom
  createShowroom(showroomDTO: ShowroomDTO): Observable<ShowroomDTO> {
    return this.http.post<ShowroomDTO>(this.baseUrl, showroomDTO, this.httpOptions);
  }

  // Update an existing showroom
  updateShowroom(showroomId: number, showroomDTO: ShowroomDTO): Observable<ShowroomDTO> {
    return this.http.put<ShowroomDTO>(`${this.baseUrl}/${showroomId}`, showroomDTO, this.httpOptions);
  }

  // Delete a showroom
  deleteShowroom(showroomId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${showroomId}`);
  }
}
