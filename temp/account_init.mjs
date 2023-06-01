
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
    if (idString.length != 5) {throw new RangeError('wrong id format')};
    let firstDigit = parseInt(idString[0])
    let secondDigit = parseInt(idString[1])
    // if (firstDigit < 1 || firstDigit > 6) {throw new RangeError('unknown account type')};
    if (firstDigit === 1) {
        // asset
        var accType = "Aset";
        if (secondDigit === 1) {
            // Aset Lancar
            var accSubtype = "Aset Lancar";
        } else if (secondDigit === 2) {
            // Aset Tetap
            var accSubtype = "Aset Tetap";
        } else {
            throw new RangeError('unknown account sub type')
        }
        var balSide = "debit";
        var closeType = "permanent";

    } else if (firstDigit === 2) {
        // liability
        var accType = "Kewajiban";
        if (secondDigit === 1) {
            // kewajiban lancar
            var accSubtype = "Kewajiban Lancar";
        } else if (secondDigit === 2) {
            // Kewjiban jangka panjang
            var accSubtype = "Kewajiban Jangka Panjang";
        } else {
            throw new RangeError('unknown account sub type');
        }
        var balSide = "credit";
        var closeType = "permanent";

    } else if (firstDigit === 3) {
        // equity
        var accType = "Ekuitas";
        if (secondDigit === 1) {
            // Stockhoder's Equity
            var accSubtype = "Ekuitas Pemilik";
        } else if (secondDigit === 2) {
            // minority interest
            var accSubtype = "Kepentingan non Pengendali";
        } else {
            throw new RangeError('unknown account sub type');
        }
        var balSide = "credit";
        var closeType = "permanent";
        
    } else if (firstDigit === 4) {
        // revenue
        var accType = "Pendapatan";
        if (secondDigit === 1) {
            // Opeartional Revenue
            var accSubtype = "Pendapatan Operasional";
        } else if (secondDigit === 2) {
            // non-Operational Revenue
            var accSubtype = "Pendapatan Lain-lain";
        } else {
            throw new RangeError('unknown account sub type');
        }
        var balSide = "credit";
        var closeType = "temporary";
        
    } else if (firstDigit === 5) {
        // expenses
        var accType = "Pengeluaran";
        if (secondDigit === 1) {
            // Operational Costs
            var accSubtype = "Beban Operasional";
        } else if (secondDigit === 2) {
            // Non-Operational Costs
            var accSubtype = "Beban Lain-lain";
        } else if (secondDigit === 3){
            // tax expense (income)
            var accSubtype = "Pajak";
        } else {
            throw new RangeError('unknown account sub type');
        }
        var balSide = "credit";
        var closeType = "temporary";
        
    } else if (firstDigit === 6) {
        // special accounts
        var accType = "Akun Khusus";
    } else {
        throw new RangeError('unknown account type');
    }
    
    return {
        account_id : id,
        account_name : name, 
        account_type : accType, 
        account_subtype : accSubtype,
        balance_side : balSide,
        closing_type : closeType,
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