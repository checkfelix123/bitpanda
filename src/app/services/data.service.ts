import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {CommodityAttributes, DataAttributes, FiatAttributes, Welcome8} from '../components/model/post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isLoaded = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
  ) {
  }

  getIsLoaded(): BehaviorSubject<boolean> {
    return this.isLoaded;
  }

  getFiat(): FiatAttributes[] {
    const f: FiatAttributes[] = [];
    this.isLoaded.next(false);
    this.getData().subscribe(
      (x) => {
        for (const item of x.fiats) {
          f.push(item.attributes);
        }
        this.isLoaded.next(true);
      }
    );
    return f;
  }

  getCommodities(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.isLoaded.next(false);
    this.getData().subscribe(
      (x) => {
        for (const item of x.commodities) {
          f.push(item.attributes);
        }
        this.isLoaded.next(true);
      }
    );
    return f;
  }

  getIndexes(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.isLoaded.next(false);
    this.getData().subscribe(
      (x) => {
        for (const item of x.indexes) {
          f.push(item.attributes);
        }
        this.isLoaded.next(true);
      }
    );
    return f;
  }

  getCryptocoins(): CommodityAttributes[] {
    const f: CommodityAttributes[] = [];
    this.isLoaded.next(false);
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
