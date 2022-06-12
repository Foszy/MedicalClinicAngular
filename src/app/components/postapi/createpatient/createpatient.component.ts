import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent {
  
  constructor(private http : HttpClient){    
  }
  
  onSubmit(userData : any){
    console.warn(userData);
    this.http.post('http://127.0.0.1:8080/API/createPatient', userData).subscribe((result)=>{
      console.warn("result", result)
    });    
  }

}
