import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Folha } from "../models/folha";

@Injectable({
    providedIn: "root",
})
export class FolhaService {
    private baseURL = "http://localhost:5000/api/folha";

    constructor(private http: HttpClient) {}

    list(): Observable<Folha[]> {
        return this.http.get<Folha[]>(`${this.baseURL}/list`);
    }
    getbyid(id: Number): Observable<Folha[]> {
        return this.http.get<Folha[]>(`${this.baseURL}/getbyid`+'/'+id);
    }

    create(folha: Folha): Observable<Folha> {
        return this.http.post<Folha>(`${this.baseURL}/create`, folha);
    }

    uptade(folha: Folha): Observable<any> {
        return this.http.put(`${this.baseURL}/update`, folha);
    }

    delete(id: Number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/deleteById` +'/'+id);
    }
}
