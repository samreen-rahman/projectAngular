import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer=new Customer();
  boolval: boolean=true;
  isGold(bv:boolean){
    this.boolval=bv
  }
  
  constructor(private customerService:CustomerService,private router:Router) { }
  

  ngOnInit(): void {
  }
  register() {
    
    alert(JSON.stringify(this.customer));
    this.customerService.register(this.customer).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['thankyou'])
      }
      else {
        alert("not register");
      }
     })
    
  }

}
