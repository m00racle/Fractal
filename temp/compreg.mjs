const firedb = firebase.firestore();
// find out how to fetch all data
// maybe ask how to build simple html structure for inputs
company_data = {
    company_id : null, //int: company id or uid hash
    company_name : "", // string: company name
    company_type : "", //string company type: PT, Tbk, CV, UD
    business_sector : "", // string
    tax_id : "", // string for company tax id
    start_date : Date.now, // timestame meaning the data start is now.
    currency_main : "", // string: IDR
    language_main : "", // string: Indonesian
    tags : [], // [string]
    admin : [], // [string] : list of emails of admin
    manager : [], // [string] : lisr of emails of managers
    view_only : [] // [string] : list of emails of viewer
}

// querry the last company id

// add new company doc in companies collection.
data_account : [
    // {
    //     account_id : , //int
    //     account_name: , // string ex: cash
    //     account_type: , // string ex : asset
    //     account_subtype : , //string : current_asset
    //     account_group : , // string : cash_and_equivalent
    //     is_active : false, //boolean
    //     account_currency :  // string : IDR
    //     account_date : , //date/time of opening
    //     open_balance : , // number balance of money in the account
    //     balance : , // last balance
    //     transactions : [], //list of transactions
    // }
]