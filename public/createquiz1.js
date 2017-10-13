
function questions()
{
var database = firebase.database();
    var title = document.getElementById('titlecategory').value;


    if(title == 'R')
    {
        var ref = database.ref('Questions/R');

    }
    else if (title=='Java') {
        var ref = database.ref('Questions/Java');

    }
    else if (title=='HTML') {
        var ref = database.ref('Questions/HTML');

    }
    else if (title=='CSS') {
        var ref = database.ref('Questions/CSS');

    }
    else if (title=='C') {
        var ref = database.ref('Questions/C');

    }
    else if (title=='C++') {
        var ref = database.ref('Questions/C++');

    }
    else if (title=='Firebase') {
        var ref = database.ref('Questions/Firebase');

    }
    else if (title=='Python') {
        var ref = database.ref('Questions/Python');

    }
    else if (title=='Android') {
        var ref = database.ref('Questions/Android');

    }
    else
    {
        var ref = database.ref('Questions/JavaScript');
    }
    var question = {
        Title:titlecategory.value,
        Question: field1.value,
        Option1: field2.value,
        Option2:field3.value,
        Option3:field4.value,
        Option4: field5.value,
        Correct_Answer:field6.value,
        description:field7.value
};

    ref.push(question);
    }