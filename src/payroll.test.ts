import { calculatePayslip, Salary } from "./payroll";

describe('calculatePayslip', () => {
    it('16 Jahriger mit 700. keine Abzüge', () => {
        const salary: Salary = {
            born: new Date('2009-05-01'),
            payday: new Date('2025-05-01'),
            gross: 700,
        };

        const playslip = calculatePayslip(salary);

        expect(playslip.totalDeductions).toBe(0);
        expect(playslip.net).toBe(700);
    })
});
