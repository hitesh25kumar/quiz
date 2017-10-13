
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyB2xzuct3Pdt-y82llh-rO9P2OECsPbiHg",
    authDomain: "demo1-25.firebaseapp.com",
    databaseURL: "https://demo1-25.firebaseio.com",
    projectId: "demo1-25",
    storageBucket: "demo1-25.appspot.com",
    messagingSenderId: "1014050920298"
};
    firebase.initializeApp(config);
    console.log(firebase);

    const txtemail = document.getElementById('email');
    const txtpassword = document.getElementById('password');
    const txtlogin = document.getElementById('txtlogin');
    const txtsignup = document.getElementById('signup');

    txtlogin.addEventListener('click' , e => {
   const email = txtemail.value;
   const password = txtpassword.value;
    const auth = firebase.auth();
    const promise = signInWithEmailAndPassword(email,pass);
    promise.catch (e => console.log(e.message));
});
    txtsignup.addEventListener('click', e=> {
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    const promise = createUserWithEmailAndPassword(email,pass);
    promise
    .catch (e => console.log(e.message));
});
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
{
    console.log(firebaseUser);

}
else {
        console.log('Not logged in');
}
});


