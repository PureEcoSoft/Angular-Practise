import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(
    private registerService:RegistrationService
  ) { }

  ngOnInit() {
  }

  onSubmit(frm:any){
    console.log(frm);
    this.registerService.onRegister(frm).subscribe(res=>{
      console.log(res);
    },err=>{

    });
  }

}
