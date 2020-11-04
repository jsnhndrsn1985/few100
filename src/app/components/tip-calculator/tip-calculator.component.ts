import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  billAmount = 0;
  tipPercentage = 0.2;
  tipAmount = 0;
  totalToBePaid = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(amount: number): void {
    this.billAmount = amount;
  }

  changeTipPercentage(amount: number): void {
    this.tipPercentage = amount;
  }

  update(): void {
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.totalToBePaid = this.billAmount + this.tipAmount;
  }

}
