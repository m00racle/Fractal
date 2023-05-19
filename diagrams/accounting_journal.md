# Simulation: Accounting JOURNAL
This simulation on journaling the transactions.
The data will be presented in JSON format like below:
```JSON
{
    "date" : "date",
    "id" : 0,
    "tags" : ["tags", "record"]
}
```
## Dec. 1
Registerin new user and new company.
One user can have many company books in one account.

### Analysis
This is the initial record meaning in this date the company is just starting.
The user need to create an account using Google credential 

Then the user register new company:
```json
{
    "company_id" : 1,
    "company_name" : "Susquehanna Rental",
    "company_tax_id" : "123-456-xxx-789",
    "company_structure" : "limited SME"
}
```

### make account structure
```json
{
    "accounts" : {
        "account_id" : 1,
        "parent_acc" : false,
        "default_name" : "Aset",
        "tags" : ["asset", "root"],
        "acc_child" : [
            {
                "account_id" : 10,
                "parent_acc" : 1,
                "defautl_name" : "Aset",
                "tags" : ["asset", "tier_1", "buffer"],
                "acc_child": []
            },
            {
                "account_id" : 11,
                "parent_acc" : 1,
                "defautl_name" : "Aset Lancar",
                "tags" : ["asset", "tier_1"],
                "acc_child": []
            },
            {
                "account_id" : 12,
                "parent_acc" : 1,
                "defautl_name" : "Aset Tetap",
                "tags" : ["asset", "tier_1"],
                "acc_child": []
            }
        ]
    },
    {
        "account_id" : 2,
        "parent_acc" : false,
        "default_name" : "Kewajiban",
        "tags" : ["liability", "root"],
        "acc_child" : []
    },
    {
        "account_id" : 3,
        "parent_acc" : false,
        "default_name" : "Ekuitas",
        "tags" : ["equity", "root"],
        "acc_child" : []
    },
    {
        "account_id" : 4,
        "parent_acc" : false,
        "default_name" : "Pendapatan",
        "tags" : ["revenue", "root"],
        "acc_child" : []
    },
    {
        "account_id" : 5,
        "parent_acc" : false,
        "default_name" : "Pengeluaran",
        "tags" : ["expense", "root"],
        "acc_child" : []
    }
}
```