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

3. This will open the dialog on the CLI to setup the Firebase Emulator. 

Note that I forgot how the options available for the Firebase emulator. 

<!-- TODO: Review the code on the log file (docs) and put it in here-->

4. Configure the Firestore emulator rules since by default it will be using the production setting which decline all writes and read in `firestore.rules`.

<!-- TODO: I want the rules changed here to allow uid. this will be a challenge later on -->

5. Start the Firebase emulators by running the following command.
```
firebase emulators:start
```
This will start all services selected in the configuration.

### Test File
Make file named `Home.test.js` inside the `__test__` folder. This will required us to 

Install the dependency:
```
npm install --save-dev firebase-mock
```
#### WARNING:
I haven't verify if the firebase-mock is what the Firebase use officially or not.

#### GPT:
The `firebase-mock` library is a JavaScript library that provides a mock implementation of the Firebase SDK. It allows you to write unit tests for Firebase-related code without needing to connect to the actual Firebase services or use the Firebase Emulator Suite.

If you are using `firebase-mock` in your tests, you don't necessarily need to use the Firebase emulator. The purpose of the Firebase emulator is to provide a local development environment that emulates the Firebase services, allowing you to test and develop your application against the emulated services.

However, there are some differences between using `firebase-mock` and the Firebase emulator:

1. `firebase-mock` provides a lightweight, in-memory mock implementation of the Firebase SDK. It is suitable for writing isolated unit tests for Firebase-related code.

2. The Firebase emulator provides a more comprehensive local development environment that emulates various Firebase services, such as Firestore, Realtime Database, Authentication, and Cloud Functions. It allows you to test your application end-to-end, including interactions between different Firebase services.

If you only need to test specific Firebase-related code in isolation, using `firebase-mock` may be sufficient. However, if you want to test the integration and interactions between different Firebase services or have more comprehensive testing of your application, using the Firebase emulator can be beneficial.

Consider your testing requirements and choose the approach that best fits your needs. If you primarily want to focus on front-end testing and isolate Firebase-related code, `firebase-mock` can be a good choice. If you need to test the interaction between your front-end code and emulated Firebase services, the Firebase emulator provides a more realistic testing environment.

#### NOTE: mock-firebase failed
