export const getIncome = (transactions) => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++)
    {
        if (transactions[i].amount > 0)
        {
            income += transactions[i].amount;
        }

    }
    return income;
};

export const getExpense = (transactions) => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++)
    {
        if (transactions[i].amount < 0)
        {
            expense -= transactions[i].amount;
        }
    }
    return expense;
};
