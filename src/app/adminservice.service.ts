import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  
  getEmplyees():any[]{
    return[
    {empId:1001,empName:'John',empUserName:'San',empPassword :'abc',empemail:'abc@gmail.com',empMobileNo:'90909090',empEdit:'Edit',empDelete:'Delete'},
    {empId:1002,empName:'SJohn',empUserName:'Sant',empPassword :'abc1',empemail:'abc@gmail.com',empMobileNo:'90909066',empEdit:'Edit',empDelete:'Delete'},
    {empId:1003,empName:'NJohn',empUserName:'Santh',empPassword :'abc2',empemail:'abc@gmail.com',empMobileNo:'90909033',empEdit:'Edit',empDelete:'Delete'},
    {empId:1004,empName:'MJohn',empUserName:'Santho',empPassword :'abc3',empemail:'abc@gmail.com',empMobileNo:'90909320',empEdit:'Edit',empDelete:'Delete'},
    {empId:1005,empName:'OJohn',empUserName:'Santhos',empPassword :'abc4',empemail:'abc@gmail.com',empMobileNo:'23432434',empEdit:'Edit',empDelete:'Delete'},
    {empId:1006,empName:'YJohn',empUserName:'Santhosh',empPassword :'abc5',empemail:'abc@gmail.com',empMobileNo:'90909034',empEdit:'Edit',empDelete:'Delete'}
    ];
  }
}
