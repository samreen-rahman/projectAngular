import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  message: string;
  constructor(private loginService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  adminLogin() {
    if (this.login.email == "admin" && this.login.password == "Admin@123") {
      this.router.navigate(['adminLogin'])
    }
    else {
      alert("Wrong Id password");
    }
  }

  loginUser() {
    alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let customerId = data.customerId;
        let customerName = data.name;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('customerId', String(customerId));
        //sessionStorage.getItem('customerId');
        sessionStorage.setItem('customerName', customerName);
        this.router.navigate(['dashboardLink']);
      }
      else {
        this.message = data.message;
      }
    })
  }

}


