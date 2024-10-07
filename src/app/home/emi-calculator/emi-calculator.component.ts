import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

interface AmortizationPayment {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

@Component({
  selector: 'app-emi-calculator',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;
  emi: number | null = null;
  totalPayment: number = 0;
  totalInterest: number = 0;
  amortizationSchedule: AmortizationPayment[] = [];

  calculateEMI(): void {
    console.log('calculateEMI method called');

    if (this.loanAmount > 0 && this.interestRate > 0 && this.loanTenure > 0) {
      const P = this.loanAmount;
      const annualRate = this.interestRate;
      const n = this.loanTenure;

      const r = annualRate / (12 * 100); // Monthly interest rate

      const numerator = P * r * Math.pow(1 + r, n);
      const denominator = Math.pow(1 + r, n) - 1;

      this.emi = parseFloat((numerator / denominator).toFixed(2));

      this.totalPayment = parseFloat((this.emi * n).toFixed(2));
      this.totalInterest = parseFloat((this.totalPayment - P).toFixed(2));

      this.generateAmortizationSchedule(P, r, n);

      console.log(`EMI Calculated: ${this.emi}`);
      console.log(`Total Payment: ${this.totalPayment}`);
      console.log(`Total Interest: ${this.totalInterest}`);
    } else {
      this.emi = null;
      this.totalPayment = 0;
      this.totalInterest = 0;
      this.amortizationSchedule = [];
      console.log('Invalid input values');
    }
  }

  generateAmortizationSchedule(P: number, r: number, n: number): void {
    this.amortizationSchedule = [];
    let remainingBalance = P;

    for (let month = 1; month <= n; month++) {
      const interest = parseFloat((remainingBalance * r).toFixed(2));
      const principal = parseFloat((this.emi! - interest).toFixed(2));
      remainingBalance = parseFloat((remainingBalance - principal).toFixed(2));
      remainingBalance = remainingBalance < 0 ? 0 : remainingBalance;

      this.amortizationSchedule.push({
        month,
        emi: this.emi!,
        principal,
        interest,
        balance: remainingBalance
      });
    }
  }

  resetForm(): void {
    this.loanAmount = 0;
    this.interestRate = 0;
    this.loanTenure = 0;
    this.emi = null;
    this.totalPayment = 0;
    this.totalInterest = 0;
    this.amortizationSchedule = [];
  }
}
