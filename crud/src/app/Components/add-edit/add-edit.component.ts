import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/Service/http.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  addProductForm!: FormGroup;
  public productId : any;
  data: any;
  public productInfo : Observable<any> = this.activatedRoute.paramMap.pipe(
    switchMap(params=>{
      this.productId = params.get('id');
      return this.http.viewData(this.productId) ;
    })
  );
  constructor(
    private formBuilder : FormBuilder,
    private http: HttpService,
    private route: Router,
    public activatedRoute: ActivatedRoute,
  ){

  }
  ngOnInit(): void {
    this.initForm();
    this.patchProduct();
  }
  initForm(){
    this.addProductForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: ['']
    });
  }

  addData(){
    const value = this.addProductForm.value;
     this.http.addData(value).subscribe((result) => {
      if(result){
        this.route.navigateByUrl('/list');
      }
      else{
        alert("error");
      }      
     });
  }

  patchProduct(){
    this.productInfo.subscribe((result)=>{
      console.log(result);
      this.data = result;
      this.addProductForm.patchValue({
        title: this.data.title,
        description: this.data.description,
        price: this.data.price
      })
    })
  }
  editData(){
    
  }
}
