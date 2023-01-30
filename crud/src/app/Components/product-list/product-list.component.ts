import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public data: any;
  constructor(
    private http : HttpService,
    private route : Router
  ){}
  ngOnInit(){
    this.listData();
  }
  listData(){
    this.http.getAllData().subscribe((result)=>{
      if(result!== null){
        this.data = result.products;
      }
    })
  }
  deleteProduct(id : number){
    this.http.deleteData(id).subscribe((result) =>{
      //console.log("result..........",result);
      if(result){
        alert("Product deleted successfully");
        //this.listData();
      }
    })
  }
  viewProduct(id:number){
    this.route.navigateByUrl('/view/'+id);
  }

  editProduct(id:number){
    this.route.navigateByUrl('/edit/'+ id);
  }
}
