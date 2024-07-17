import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  projectTitle: string = "Calculator";
  displayValue: string = "0";

  onButtonClick(value: string){
    if(this.displayValue == '0'){
      this.displayValue = value;
    }
    else if(this.displayValue == 'Invalid Input'){
      this.onButtonClickClr();
      this.onButtonClick(value);
    }
    else{
      this.displayValue = this.displayValue + value;
    }
  }

  onButtonClickClr(){
    this.displayValue = "0";
  }

  onButtonClickAns(){
    // let result = eval(this.displayValue);
    // this.displayValue = result;

    let result: string = "";
  try{
    result = eval(this.displayValue);
    this.displayValue = result;
  }
  catch(error){
    this.displayValue = "Invalid Input";
  }

  }

}
