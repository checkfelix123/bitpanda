import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {CommodityAttributes} from '../../model/post.model';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {


  commoditiesAttribute: CommodityAttributes[] = [];
  isLoaded = false;
  displayedColumns: string[] = ['currency', 'sell amount', 'logo', 'transfer'];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.commoditiesAttribute = this.dataService.getCommodities();
    this.dataService.getIsLoaded().subscribe((loaded) => {
      this.isLoaded = loaded;
    });
  }

}
