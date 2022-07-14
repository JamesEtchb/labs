// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

let teacher = {
    name : 'Damian',
    classes: [],
    currentlyTeaching: true
}
teacher.classes.push('Javascript');
teacher.classes.push('C++');
console.log(`The teachers name is ${teacher.name}.`);
console.log(teacher.classes);
console.log(teacher)

