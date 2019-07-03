import { Observable } from 'rxjs';
import { DrugsService } from "../service/drugs.service";
import { DrugLocation } from "../common/models";
import { DrugLocationsService } from "../service/drug-locations.service";
import { Component, OnInit } from "@angular/core";
import { Drug } from "../common/models";
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: "app-drug-search",
  templateUrl: "./drug-search.component.html",
  styleUrls: ["./drug-search.component.css"]
})
export class DrugSearchComponent implements OnInit {
  drugs: Drug[] = [];
  drugNameSearchKey: string = "";
  selectedDrug: Drug;
  drugCtrl = new FormControl();
  filteredDrugs: Observable<Drug[]>;
  zipcode: any;

  constructor(
    private drugLocationsService: DrugLocationsService,
    private drugsService: DrugsService
  ) {
    this.filteredDrugs = this.drugCtrl.valueChanges
      .pipe(
        startWith(''),
        map(drugName => drugName ? this.filterDrugs(drugName) : this.drugs.slice())
      );
  }

  ngOnInit() {
    this.getDrugs();
  }

  getDrugs() {
    this.drugsService.getDrugs().subscribe((data: any) => {
      this.drugs = data.drugs;
    });
  }

  filterDrugs(drugName: string): Drug[] {
    return this.drugs.filter(e => {
      return e.drugName
        .toLocaleLowerCase()
        .includes(drugName.toLowerCase());
    });
  }
}
