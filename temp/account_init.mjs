
export function AccInit(id, name){
    const idString = id.toString();
    
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