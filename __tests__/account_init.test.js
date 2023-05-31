
import { AccInit } from "../temp/account_init.mjs";

/* 
Testing for account init template
*/

test('test_asset_account_template', () => {
    /*  
    test creating asset account
    */
   const result = AccInit(11001, "Kas");
   expect(result).toBe(
    {
    account_id : 11001,
    account_name : "Kas",
    account_type : "Aset",
    account_subtype : "Aset Lancar",
    balance_side : "debit",
    closing_type : "permanent",
    status : 'active',
    open_credit : 0,
    open_debit : 0,
    open_balance : 0,
    close_credit : 0,
    close_debit : 0,
    close_balance : 0,
    tags : []
   }
   );
});

test('test_wrong_id_format_throws_range_error', () => {
    expect(() => AccInit(110111, "Kas")).toThrowError(RangeError);
    expect(() => AccInit(110111, "Kas")).toThrowError("wrong id format");
    expect(() => AccInit(1101, "Kas")).toThrowError(RangeError);
    expect(() => AccInit(1101, "Kas")).toThrowError("wrong id format")
});