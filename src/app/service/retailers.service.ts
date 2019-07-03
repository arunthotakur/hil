import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RetailersService {
  private _url: string = "assetsData\retailers.json";
  constructor(private http: HttpClient) {}

  getRetailers() {
    return this.http.get(this._url);
  }
}
