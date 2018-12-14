import {Eintrag} from "./eintrag";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

const API_URL: string = 'http://localhost:8080/api/eintraege';

@Injectable()
export class EintragService {
  constructor(private http: HttpClient) {
  }

  public getEintraege(): Observable<Array<Eintrag>> {
    return this.http.get<Array<Eintrag>>(API_URL);
  }
}