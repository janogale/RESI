/*
4.	Write a JavaScript function to hide bank account to protect from unauthorized user
a.	E.g. HRG-DB-12-44-1234
b.	Convert it to HRG-DB-12-44-****
*/

// solution

function hideBankAccount(account) {
  if (typeof account !== "string") return "invalid input";
  if (account.length !== 17) return "Invalid Account";

  let hiddenAccount = account.slice(0, account.length - 4) + "****";

  return hiddenAccount;
}

console.log(hideBankAccount("HRG-DB-12-55-1234"));
