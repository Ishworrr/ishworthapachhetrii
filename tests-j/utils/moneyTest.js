import {formatCurrency} from '../../scripts/utils/money.js';

describe('testsuite: formatCurrency', ()=>{
    it('converts cents to dollars', ()=>{
expect(formatCurrency(2095)) 
            .toBe('20.95');
    });

    it('works with zero',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('nearest cents',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});