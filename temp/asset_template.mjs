/* 
    accounts template for assets
*/

// export function AccInit(id, name, acc_type, acc_subtype, acc_group, bal_side){
//     const idString = id.toString();
    
//     return {
//         account_id : id,
//         account_name : name, 
//         account_type : acc_type, 
//         account_subtype : acc_subtype,
//         account_group : acc_group,
//         balance_side : bal_side,
//         status : 'active',
//         open_credit : 0,
//         open_debit : 0,
//         open_balance : 0,
//         close_credit : 0,
//         close_debit : 0,
//         close_balance :0,
//         tags : []
//     }
// };

// export let cash = AccInit(
//     11101, 'cash' 
// );

// console.log(cash)

// export let available_for_sale_securities = AccInit(11201, "sekuritas tersedia untuk dijual", "aset", "aset lancar")
// export let available_for_sale_securities = {
//     account_id : 11201,
//     account_name : "sekuritas tersedia untuk dijual",
//     account_type : "aset",
//     account_subtype : "aset lancar",
//     account_group : "sekuritas",
//     balance_side : "debit",
//     status : 'active',
//     open_credit : 0,
//     open_debit : 0,
//     open_balance : 0,
//     close_credit : 0,
//     close_debit : 0,
//     close_balance : 0,
//     tags : []
// };

user_data = {
    id : null, //UID from the firebase auth
    email: "", // email from the firebase auth
    country: "", // user residence country
    phone: "+xx-xxx-xxxx-xxx", // I want to check if this is phone format
    address: "", // user address
    tax_id : "xx.xxx.xxx-xxx.xxx", // x is number digits I want the tax id to be formatted this way
};

book_data = {
    id : "", // combination of: user_id-book_num in string
    id_set : {
        user_id : null, // user id from auth
        book_num : null // book incremented numbering
    },
    user_name: "", // name of the company or personal user using this book
    user_code: "", // Three letters to represent user
    user_type: "", // PT, CV, Firm, UD or personal
    start_date: new Date(), // Date which the book is created (using ),
    business_type: "", // short description on what kind of business to record (manufacture, finance, invest, personal, general),
    tax_id : "xx.xxx.xxx-xxx.xxx", // x is number digits I want the tax id to be formatted this way
    currency_code: "", // currency used in the book
};

ledger = {
    id : "", // combination of year month date and book id.
    date: new Date(), // date of the ledger posted
    book: user_code, // user code 
    user_name: book_data.user_name,
    accounts: [
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11002,
            account_name : "Piutang Usaha", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11003,
            account_name : "Sekuritas untuk dijual", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11004,
            account_name : "Sekuritas untuk Diperdagangkan", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11005,
            account_name : "Persediaan", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11006,
            account_name : "Barang Jadi", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 11007,
            account_name : "Beban belum Diakui (deferal)", 
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
            close_balance :0,
            tags : []
        },
        {
            account_id : 12001,
            account_name : "Sekuritas hingga Jatuh Tempo", 
            account_type : "Aset", 
            account_subtype : "Aset Tetap",
            balance_side : "debit",
            closing_type : "permanent",
            status : 'active',
            open_credit : 0,
            open_debit : 0,
            open_balance : 0,
            close_credit : 0,
            close_debit : 0,
            close_balance :0,
            tags : []
        }
    ]
}