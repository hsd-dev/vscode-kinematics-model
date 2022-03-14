var Student = function() {
    this.name = 'John';
    this.gender = 'M';

    console.log("Created student");
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15
