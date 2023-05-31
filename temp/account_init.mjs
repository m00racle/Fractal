
export function AccInit(id, name){
    /*  
    Given :
    id: int = sequence of numbers denoting the account id
    name: string = name of the account 

    Return: object = account 

    WARNING: 
    this funciton will only return account object as long as in the right format.
    it will check the id format and reference to specific account type and sub type.
    IT WILL NOT check if the id is already taken by another (existing) account or not
    THIS IS NOT THE RESPONSIBILITY OF THIS FUNCTION.
    */
    const idString = id.toString();
    let firstDigit = parseInt(idString[0])
    let secondDigit = parseInt(idString[1])
    if (firstDigit < 1 || firstDigit > 6) {throw new RangeError('unknown account type')};
    
    return {
        account_id : id,
        account_name : null, 
        account_type : null, 
        account_subtype : null,
        account_group : null,
        balance_side : null,
        status : 'active',
        open_credit : 0,
        open_debit : 0,
        open_balance : 0,
        close_credit : 0,
        close_debit : 0,
        close_balance :0,
        tags : []
    }
};