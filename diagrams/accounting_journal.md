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
## Dec. 1: Company Registration
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
## Dec. 1: Capital Stock
Issued to John and Patty Driver 20.000 shares of capital stock in exchange for a total of $200.000 cash

## Dec. 1: Equipment
Purchased for $240.000 all of the equipment formerly owned by Rent-It. Paid $140.000 cash and issued a one-year note payable for $100.000. 
The note, plus all 12-months of accrued interest, are due November 30, 2012

## Dec. 1: Rent
Paid $12.000 to Shapiro Realty as three months' advance rent on the rental yard and office formerly occupied by Rent-It.

## Dec. 4
Purchased office supplies on account from Modern Office Co., $1.000. Payment due in 30 days. \
(These supplies are expected to last for several months; debit the Office Supplies asset account.)

## Dec. 8
Received $8.000 cash as advance payment of equipment rental from McNamer Construction Company. (Credit Unearned Rental Fees.)

## Dec. 12 
Paid salaries for the first two weeks in December, $5.200

## Dec. 15
Excluding the McNamer advance, equipment rental fees earned during the first 15 days of December amounted to $18.000, of which $12.000 was received in cash.

## Dec. 17
Purchased on account from Earth Movers, Inc., $600 i parts needed to repair a rental tractor. (Debit an expense account.) Payment is due in 10 days

## Dec. 23
Collected $2.000 of the accounts receivable recorded on December 15.

## Dec. 26
Rented a backhoe to Mission Landscaping at a price of $250 per day, to be paid when the backhoe is returned. Mission Landscaping expects to keep the backhoe for about two or three weeks.

## Dec. 26
Paid biweekly salaries, $5.200 

## Dec. 27
Paid the account payable to Earth Movers, Inc., $600

## Dec. 28
Declared a dividend of 10 cents per share, payable on January 15, 2012

## Dec. 29
Susquehanna Equipment Rentals was named, along with Mission Landscaping and Collier Construction, as a co-defendant in a $25.000 lawsuit filed on behalf of Kevin Davenport. 
Mission Landscaping had left the rented backhoe in a fenced construction site owned by Collier Construction. 
After working hours on December 26, Davenport had climbed the fence to play on parked construction equipment. 
While playin on the backhoe, he fell and broke his arm. The extent of the company's legal and financial responsibility for this accident, if any, cannot be determined at this time. 
(Note: This event does not require a journal entry at this time, but may require disclosure in notes accompanying the statements.)

## Dec. 29
Purchased a 12-month public-liability insurance policy for $9.600. This policy protects the company against liability for injuries and property damage caused by its equipment. 
However, the policy goes into effect on January 1, 2012, and affords no coverage for the injuries sustained by Kevin Davenport on December 26.

## Dec. 31
Received a bill from Universal Utilities for the month of December, $700. Payment is due in 30 days.

## Dec. 31
Equipment rental fees earned during the second half of December amounted to $20.000, of which $15.000 was received in cash.

## ADJUSMENTS
Here are the adjustment entries:
## Dec. 1 Rental Equipment
The $100.000 note payable to Rent-It has annual interest rate of 6 percent.

The rental equipment is being depeciated by the straight line method over a period of 8 years.
## Dec. 1 Rents
The advanced payment of rent on December 1 covered a period of three months
## Dec. 4 Office Supplies
Office supplies on hand at December 31 are estimated at $600
## Dec. 8 Earned Revenue
During December, the company earned $3.700 of the rental fees paid in advanced by mcNamer Construction on December 8
## Dec. 26 Rental Equipment
As of December 31, six days' rent on the backhoe rented to Mission Landscaping on December 26 has been earned.
## Dec. 31 Payroll
Salaries earned by employees since the last payroll date (December 26) amounted to $1.400 at month-end.
## Dec. 31 Income Tax
It is estimated that the company is subject to a combined federal and state income tax rate of 40 percent of income before taxes (total revenue minus all expenses other than income taxes). These taxes will be payable in 2012
