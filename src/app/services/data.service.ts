import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CommodityAttributes, DataAttributes, FiatAttributes, Welcome8} from '../components/model/post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getFiat(): FiatAttributes[] {
    const f: FiatAttributes[] = [];

    this.getData().subscribe(
      (x) => {
        for (const item of x.fiats) {
          f.push(item.attributes);
        }
      }
    );
    return f;
  }

  getCommodities(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.getData().subscribe(
      (x) => {
        for (const item of x.commodities) {
          f.push(item.attributes);
        }
      }
    );
    return f;
  }

  getIndexes(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.getData().subscribe(
      (x) => {
        for (const item of x.indexes) {
          f.push(item.attributes);
        }
      }
    );
    return f;
  }

  getCryptocoins(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.getData().subscribe(
      (x) => {
        for (const item of x.cryptocoins) {
          f.push(item.attributes);
        }
      }
    );
    return f;
  }

  private getData(): Observable<DataAttributes> {
    return this.http
      .get<Welcome8>('https://api.bitpanda.com/v1/masterdata').pipe(
        map((x) => {
            return x.data.attributes;
          }
        )
      );
  }
}
