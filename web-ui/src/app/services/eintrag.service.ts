import {Eintrag} from "./eintrag";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

const API_URL: string = 'http://localhost:8080/api/eintraege/';

@Injectable()
export class EintragService {
  constructor(private http: HttpClient) {
  }

  public getEintraege(): Observable<Array<Eintrag>> {
    return this.http.get<Array<Eintrag>>(API_URL);
  }

  public getEintragById(id: number): Observable<Eintrag> {
    return this.http.get<Eintrag>(API_URL + "/" + id);
  }

  public createEintrag(eintrag: Eintrag): Observable<Eintrag> {
    return this.http.post<Eintrag>(API_URL, eintrag);
  }

  public updateEintrag(eintrag: Eintrag): Observable<Eintrag> {
    return this.http.put<Eintrag>(API_URL + '/' + eintrag.id, eintrag);
  }

  public deleteEintrag(eintrag: Eintrag): Observable<void> {
    return this.http.delete<void>(API_URL + '/' + eintrag.id);
  }





}
