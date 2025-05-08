export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {

  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };

  let age = salary.payday.getFullYear() - salary.born.getFullYear();
  const birthday = new Date(salary.born.getFullYear(), salary.born.getMonth(), salary.born.getDate());

  if (salary.payday < birthday) age--;

  if (age < 18) {
    return result;
  }
  
  return result;
}
