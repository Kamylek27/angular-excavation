import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubexcavationModel } from './subexcavation-model';

@Injectable({
  providedIn: 'root'
})
export class SubexcavationService {
  constructor(private http: HttpClient) { }

  getAllSubexcavations(): Observable<Array<SubexcavationModel>> {
    return this.http.get<Array<SubexcavationModel>>('http://localhost:8080/api/subexcavation');
  }

  createSubexcavation(subexcavationModel: SubexcavationModel): Observable<SubexcavationModel> {
    return this.http.post<SubexcavationModel>('http://localhost:8080/api/subexcavation',
      subexcavationModel);
  }
}