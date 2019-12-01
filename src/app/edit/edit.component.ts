import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { MotorbikeServiceService } from '../Services/Motorbike-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  motorbike: any = [];

  constructor(
    private motorbikeService: MotorbikeServiceService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.motorbikeService.GetMotorbike(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.motorbike = data;
        console.log(this.motorbike);
      }
    );

  }

  onEditMotorbike(form: NgForm) {
    console.log(form.value.model);
    console.log(form.value.year);
    console.log(form.value.price);
    console.log(form.value.description);
    this.motorbikeService.UpdateMotorbike(this.motorbike._id, form.value.model,
      form.value.year, form.value.price, form.value.description, ).subscribe();
  }

}
