import { cash } from "./asset_template.mjs";

var today = new Date();
var yesterday = new Date(today).setDate(today.getDate() - 1);

var trial_balance = {
    company_id : 11,
    company_name : "Idekriya CV",
    trial_date : yesterday,
    balances: [
        {
            account_id : 11101,
            account_name : "kas dan ekivalen",
            account_side : "debit",
            account_type : "aset",
            account_subtype : "aset lancar",
            account_group: "kas dan ekivalen",
            open_debit_balance : 0,
            open_credit_balance : 0,
            open_balance : 0,
            closing_debit_balance : 100,
            closing_credit_balance : 50,
            closing_balance : 50
        },
        {
            account_id : 11102,
            account_name : "Sekuritas",
            account_side : "debit",
            account_type : "aset",
            account_subtype : "aset lancar",
            account_group: "kas dan ekivalen",
            open_debit_balance : 0,
            open_credit_balance : 0,
            open_balance : 0,
            closing_debit_balance : 30,
            closing_credit_balance : 10,
            closing_balance : 20
        },
        {
            account_id : 11201,
            account_name : "piutang_usaha",
            account_side : "debit",
            account_type : "aset",
            account_subtype : "aset lancar",
            account_group: "Piutang",
            open_debit_balance : 0,
            open_credit_balance : 0,
            open_balance : 0,
            closing_debit_balance : 20,
            closing_credit_balance : 0,
            closing_balance : 20
        },
        {
            account_id : 11202,
            account_name : "piutang ke pihak berelasi",
            account_side : "debit",
            account_type : "aset",
            account_subtype : "aset lancar",
            account_group: "Piutang",
            open_debit_balance : 0,
            open_credit_balance : 0,
            open_balance : 0,
            closing_debit_balance : 20,
            closing_credit_balance : 0,
            closing_balance : 20
        }
    ]
};
// try to filter the list of balance
var kasBalances = trial_balance.balances.filter(function(account){
    return account.account_group === "kas dan ekivalen"
});
var sumKasBalance = kasBalances.reduce(function(hasil, account){
    return hasil + account.closing_balance;
},0);


console.log(`test run: ${cash.account_id}`);