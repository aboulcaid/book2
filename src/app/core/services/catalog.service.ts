import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book.model';
import { HttpClient } from '@angular/common/http';


export const catalogUrl='https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
export const catalogApiKey='?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
@Injectable()
export class CatalogService {

  private list$:Observable<Book[]>;
  constructor(private httpclient:HttpClient) { 
    const url=catalogUrl+catalogApiKey;
    this.list$=this.httpclient.get<Book[]>(url);
  }
  getList():Observable<Book[]>{
    return this.list$;
  }

}
