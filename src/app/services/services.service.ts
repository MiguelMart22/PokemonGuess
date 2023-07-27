import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  rutaAPI = "https://pokeapi.co/api/v2";
  private dataSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public data$ = this.dataSubject.asObservable();

  constructor(private services:HttpClient ) { }

  // metodo para enviar datos entre componentes
  sendDataToOtherComponents(data: string[]) {
    this.dataSubject.next(data);
  } 
  

  getRandomPokemon( id: number) : Observable<any>  {

    return this.services.get(`${this.rutaAPI}/pokemon/${id}`);

  }



}
