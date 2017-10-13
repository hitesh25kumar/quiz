function askquestion() {
    var database = firebase.database();
    var ref =  database.ref('Ask_Questions');

    var askque = {
        Name: field1.value,
        Email : field2.value,
        Question:field3.value

    };
    ref.push(askque);

}