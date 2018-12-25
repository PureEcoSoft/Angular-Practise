import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[RegistrationService]
})
export class DashboardComponent implements OnInit {
  empDetail:any;
  strData: string;
  constructor(private registerService:RegistrationService) { 
    this.strData="Hi this is angular";
  }

  ngOnInit() {
    this.registerService.getAllemployee().subscribe(res=>{
      console.log(res);
      this.empDetail=res;
    },err=>{
      console.log(err);
    })

    
  }

 

}
