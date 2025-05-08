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

    it('18 Jahriger mit 1200. Abzüge AHV, IV, EO', () => { 
        const salary: Salary = {
            born: new Date('2006-05-01'),
            payday: new Date('2025-05-01'),
            gross: 1200,
        };

        const playslip = calculatePayslip(salary);
        const expected = 1200 * (8.7 + 1.4 + 0.5) / 100;

        expect(playslip.totalDeductions).toBe(expected);
        expect(playslip.net).toBeCloseTo(1200 - expected, 2);
        expect(playslip.deductions.has('AHV')).toBe(true);
    });
});
