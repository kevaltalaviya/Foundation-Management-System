import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgroToolService {
  uri = 'http://localhost:4000/agro-tool'; 

  constructor(private http: HttpClient) { }

  addAgroTool(tool_name, tool_mrp,tool_discount,tool_sell_price,tool_address,tool_photo){
    const obj = {
      tool_name: tool_name,
      tool_mrp: tool_mrp,
      tool_discount: tool_discount,
      tool_sell_price: tool_sell_price,
      tool_address: tool_address,
      tool_photo: tool_photo,

    }
    console.log(obj);
    this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('Done'));
  }


  getAgroTools() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editAgroTool(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  deleteAgroTool(id){
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
  updateAgroTool(tool_name,tool_mrp,tool_discount,tool_sell_price,tool_address,tool_photo,id){
    const obj = {
      tool_name: tool_name,
      tool_mrp: tool_mrp,
      tool_discount: tool_discount,
      tool_sell_price: tool_sell_price,
      tool_address: tool_address,
      tool_photo: tool_photo,
    };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));

  }
} 
