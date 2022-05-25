import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
@Component({
  selector: 'app-getpatients',
  templateUrl: './getpatients.component.html',
  styleUrls: ['./getpatients.component.css']
})
export class GetpatientsComponent implements OnInit {

  data : any = [];

  constructor(private apiService : ApiService) {     
}
  
  ngOnInit(): void {
    this.apiService.getPatients().subscribe(value => {
      this.data = value;
    });
  }



}
