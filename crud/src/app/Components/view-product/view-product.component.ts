import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public productId : any;
  public data : any;
  constructor(
    private route:ActivatedRoute,
    private http: HttpService
  ){
    this.productId = this.route.snapshot.paramMap.get('id');
    // console.log("productId............",this.productId);
  }

  ngOnInit(): void {
    this.viewData();
  }
  viewData(){
    this.http.viewData(this.productId).subscribe((result) => {
      this.data = result;
    });
  }
}
