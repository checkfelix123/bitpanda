import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {FiatAttributes} from '../../model/post.model';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent implements OnInit {
  isLoaded = false;
  fiatAttributes: FiatAttributes[] = [];
  displayedColumns: string[] = ['currency', 'sell amount', 'logo', 'transfer', 'min_withdraw_euro', 'min_deposit_euro'];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.fiatAttributes = this.dataService.getFiat();
    this.dataService.getIsLoaded().subscribe((loaded) => {
      this.isLoaded = loaded;
    });
  }

}
