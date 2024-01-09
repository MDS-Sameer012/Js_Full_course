const accountId = 3873;
let customerEmail = "mds@gmail.com"; // ---> this can be accessed within blocks
{
   
    var customerPass = "3983";
    customerCity = "Delhi"; // ----> this can be accessed outside block
}

// Updating Variables

// accountId=393; // ---> this will throw error because try to changing constant
console.log(accountId);

// customerEmail = "Sohail@gmail.com";
// customerPass = "3293";
// customerCity = "Mumbai";


// console.table([]); // ---> it is used to print variables in table format

console.table([accountId, customerEmail,customerPass,customerCity]);
// the above will show with index 0,1,2

// the below will show with index which we define i.e. by name
console.table({Account_ID : accountId,
    Customer_Email : customerEmail,
    Customer_Password : customerPass,
    Customer_City : customerCity});


