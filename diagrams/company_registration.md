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
### Analysis: Register new company
Collection: Companies
```json
{
    "company_id" : 1,
    "tags" : ["active"],
    "company_name" : "Susquehanna Equipment Rentals",
    "tax_id" : "123-456-xxx-789",
    "description" : "Rental Equipment Company owned privately by John and Patty Driver",
    "admin" : ["johndriver@gmail.com"],
    "manager" : [],
    "auditor" : ["pattydriver@gmail.com"]
}
```
to add the data to collection companies when company_id is determined by the last company_id under johndriver@gmail.com + 1 we use:
```javascript
const adminEmail = "johndriver@gmail.com"; // Replace with the actual admin email
const firestore = firebase.firestore(); // Initialize your Firestore instance

// Get the next company_id value based on your logic (e.g., querying the existing companies)
const nextCompanyId = ...; // Replace with your logic to determine the next company_id

const customDocumentId = adminEmail + "_" + nextCompanyId;

const companyData = {
  company_id: nextCompanyId,
  user_id: 1,
  tags: ["active"],
  company_name: "Susquehanna Equipment Rentals",
  tax_id: "123-456-xxx-789",
  description: "Rental Equipment Company owned privately by John and Patty Driver",
  admin: [adminEmail],
  manager: [],
  auditor: ["pattydriver@gmail.com"]
};

const collectionRef = firestore.collection("companies"); // Replace "companies" with the actual collection name

collectionRef.doc(customDocumentId)
  .set(companyData)
  .then(() => {
    console.log("Company document created with ID:", customDocumentId);
  })
  .catch((error) => {
    console.error("Error creating company document:", error);
  });

```
to add the nextCompanyId:
```javascript
const firestore = firebase.firestore();
const companiesRef = firestore.collection("companies");
const userEmail = "johndriver@gmail.com"; // Replace with the actual user's email

companiesRef
  .where("admin", "array-contains", userEmail)
  .orderBy("company_id", "desc")
  .limit(1)
  .get()
  .then((querySnapshot) => {
    let initialCompanyId;
    if (!querySnapshot.empty) {
      const latestCompany = querySnapshot.docs[0];
      const latestCompanyId = latestCompany.data().company_id;
      initialCompanyId = latestCompanyId + 1;
    } else {
      initialCompanyId = 1;
    }

    const initialDocumentId = `${userEmail}-${initialCompanyId}`;

    const initialCompanyData = {
      company_id: initialCompanyId,
      admin: [userEmail],
      // Add other fields as needed
    };

    companiesRef
      .doc(initialDocumentId)
      .set(initialCompanyData)
      .then(() => {
        console.log("Initial company document created with ID:", initialDocumentId);
        // Proceed with further operations or redirect the user
      })
      .catch((error) => {
        console.error("Error creating initial company document:", error);
      });
  })
  .catch((error) => {
    console.error("Error querying companies:", error);
  });

```