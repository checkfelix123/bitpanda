import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {CommodityAttributes} from '../../model/post.model';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.scss']
})
export class IndexesComponent implements OnInit {

  isLoaded = false;
  indexesAttributes: CommodityAttributes[] = [];
  displayedColumns: string[] = ['currency', 'sell amount', 'logo', 'transfer', 'min_withdraw_euro', 'min_deposit_euro'];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.indexesAttributes = this.dataService.getIndexes();
    this.dataService.getIsLoaded().subscribe((loaded) => {
      this.isLoaded = loaded;
    });
  }
}
