var app = {};

app.exampleOne = function() {


    var sum = (a, b) => a + b;

    console.log(sum(4, 5));
}

app.exampleTwo = function() {

        const names = ['Ramesh', 'Suresh', "vicky"];

        names.forEach(eachName => console.log(eachName));

        var nameCharCount = names.map(eachName => eachName.length);

        console.log(nameCharCount);
    }
    //app.exampleOne();
app.exampleTwo();