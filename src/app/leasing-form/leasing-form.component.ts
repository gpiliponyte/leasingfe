import { Component, OnInit, ElementRef, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { VehicleService } from "../services/vehicle.service";

@Component({
  selector: "app-leasing-form",
  templateUrl: "./leasing-form.component.html",
  styleUrls: ["./leasing-form.component.css"]
})
export class LeasingFormComponent implements OnInit {

  customerType;
  assetType;
  make;
  model;
  year;
  enginePower;
  assetPrice;
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriod;
  margin;
  contractFee;
  paymentDate;
  brands;
  modelsBySelectedBrand;
  selectedBrand: string = "";
  selectedModel: string= "";

  listVehicle;

  constructor(private vehicleService: VehicleService) { }



  loadVehicles(){
    this.vehicleService.getAllVehicleInfo()
    .then(data => {
      this.listVehicle = data;
      var temp = [];
      this.listVehicle.forEach(data => temp.push(data["groupValue"]));
      this.brands = Array.from( new Set(temp))
    })}


  ngOnInit() {
    this.loadVehicles();
  }

  getCarModelsByBrand(brand){
    this.selectedModel = "";
    this.modelsBySelectedBrand = [];
    this.listVehicle.forEach(data => {
    if(data["groupValue"] === brand){
      this.modelsBySelectedBrand.push(data["text"])
    }})
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
