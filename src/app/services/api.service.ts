import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPatients(){
    return this.httpClient.get('http://127.0.0.1:8080/API/getPatients'); // API from https://github.com/Foszyx/MedicalClinicJava
  }

}





