import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MotorbikeServiceService } from '../Services/Motorbike-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private motorbikeService: MotorbikeServiceService) { }

  ngOnInit() {
  }
  myDate : Date;
  onAddMotorbike(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

   

    this.motorbikeService.AddMotorbikeInformation(form.value.model,
      form.value.year, form.value.price, form.value.description, ).subscribe(
        ()=>{
          //do something after out operation has finished 
        }
      );
    console.log(form.value);
    form.resetForm(); 

    //Store the imput value and reset the fields onclick.
  }

}
