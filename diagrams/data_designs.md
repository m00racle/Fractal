What do you need to register:
```json
{
    "name" : "Yanuar Heru P",
    "address" : "Jl. Sulawesi AK 31A, Sono, Sinduadi, Mlati, Sleman",
    "contry" : "Indonesia",
    "tax_id" : "44.527.922.-542.000"
}
```

```javascript
user_data = {
    user_id : 
};
```

How about new book:
```json
{
    "id" : "", // combination of user_id and company_id
    "set_id" :{
        "user_id": "", // UID from google auth
        "company_id": "" // increment last company id on user_id
    },
    "name" : "Idekriya",
    "type" : "CV", // personal
    "address" : "Jl. Sulawesi AK 31A, Sono, Sinduadi, Mlati, Sleman",
    "country" : "Indonesia",
    "tax_id" : "44.527.922.-542.000",
    "currency" : "IDR",
    "business_type" : "Manufacture"
}
```

if business type == "Investment":
Accounts:
```json
{
    "ledger_id" : "", //some id
    "ledger_date": "", //the date fot hte ledger
    
}
```