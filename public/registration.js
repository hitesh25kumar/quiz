

function registernow() {
    var database = firebase.database();
    var ref = database.ref('Registration_Detail');

    var data = {
        FName : field1.value,
        LName  :field2.value,
        Category:category.value,
        Email_id:field3.value,
        Phone_no:field4.value,
        Password:field5.value,
        CPassword:field6.value



    };
    ref.push(data);

}
