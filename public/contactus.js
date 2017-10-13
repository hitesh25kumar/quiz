function contactnow() {
    var database = firebase.database();
    var ref = database.ref('Contact_Us');

   var contact1 = {
        Name:field1.value,
        Email:field2.value,
        Contact_no:field3.value
    };
    ref.push(contact1);
}
