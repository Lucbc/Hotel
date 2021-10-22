import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hospede } from '../model/hospede.model';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  urlBase: string = 'http://localhost:8080/hospedes/';
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',
    {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    }
    )
  }

  //Create
  create(hospede: Hospede) : Observable<Hospede>{
    return this.http.post<Hospede>(this.urlBase, hospede);
  }
  //Read
    //findAll
    findAll() : Observable<Hospede[]>{
      return this.http.get<Hospede[]>(this.urlBase);
    }

    //findById
    findById(id: string ) : Observable<Hospede>{
      let url = `${this.urlBase}/${id}`;
      return this.http.get<Hospede>(url);
    }

  //Update
  update(hospede: Hospede) : Observable<Hospede>{
    return this.http.put<Hospede>(this.urlBase, hospede);
  }

  //Delete
  delete(hospede: Hospede): Observable<Hospede>{
    let url = `${this.urlBase}/${hospede.idHospede}`;
    console.log(url);
    return this.http.delete<Hospede>(url);
  }
}
