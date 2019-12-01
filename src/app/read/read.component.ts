import { Component, OnInit } from '@angular/core';
import { MotorbikeServiceService } from '../Services/Motorbike-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyMotorbikes: any = [];
  constructor(private motorbikeService: MotorbikeServiceService) { }

  ngOnInit() {
    this.motorbikeService.GetMotorbikeInformation().subscribe((data) => {
      this.MyMotorbikes = data.motorbikes;
      console.log(data.motorbikes);
    })
  }

  onDelete(id:String){
    console.log("Deleting motorbike with id: "+id);
    this.motorbikeService.DeleteMotorbike(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}
