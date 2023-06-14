# Report
This is the code for the Auth process.

## Main Code
This is the most appropriate code so far:
```javascript
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../firebase";
import SignInWithGoogle from "./SignInWithGoogle";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            // User exists in the "users" collection, navigate to the WelcomeUser page
            navigate("/welcome");
          } else {
            // User does not exist in the "users" collection, redirect to the registration page
            navigate("/register");
          }
        } else {
          // User is not signed in, redirect to the registration page
          navigate("/register");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error, e.g., display an error message or redirect to an error page
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <SignInWithGoogle />
    </>
  );
}

export default Home;
```

Next I need to build the test. 

## Test
In order to create test for the authentication procedure I need to enable **Firebase emulator**. 

**NOTE:**
The firebase emulator setup maybe too frightening thus I will do this step by step.

1. I already put the Firebase (real) console to initiate the Firestore database in production mode. 
2. This will set the project which will be referred later on the **Firebase Emulator**.

Now it is important to state some things:
1. I already have jest testing library installed together with React App.
2. Thus I only need to install the additional library mostly to mock the firebase

So let's start by step-by-step of setting up the test suite for the Home.
1. Begin with creating directory called `__test__` which after this will be used to store all test files.


I think it will be better to setup the emulator first:
1. make sure the terminal is in the root project directory and check if firebase tools is already installed?

```
firebase --version
```

1. Then make sure you already login to your firebase account in local:

```
firebase login
```

2. Then initialize emulator as present

```
firebase init emulators
```

<!-- TODO: Review the code on the log file (docs) and put it in here-->