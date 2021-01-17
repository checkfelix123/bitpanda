import {Component, OnInit} from '@angular/core';
import {CommodityAttributes} from '../../model/post.model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-cryptocoins',
  templateUrl: './cryptocoins.component.html',
  styleUrls: ['./cryptocoins.component.scss']
})
export class CryptocoinsComponent implements OnInit {

  cryptocoinsAttribute: CommodityAttributes[] = [];
  isLoaded = false;
  displayedColumns: string[] = ['currency', 'sell amount', 'logo', 'transfer'];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.cryptocoinsAttribute = this.dataService.getCryptocoins();
    this.dataService.getIsLoaded().subscribe((loaded) => {
      this.isLoaded = loaded;
    });
  }

}
