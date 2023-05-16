const transactionRef = db.collection("Transactions");
const query = transactionRef.where("credits", "array-contains", { acc_id: 31 })
                            .orWhere("debits", "array-contains", { acc_id: 31 });

query.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const transactionData = doc.data();
    // Do something with the transaction data
    console.log("Transaction:", transactionData);
  });
}).catch((error) => {
  console.log("Error retrieving transactions:", error);
});