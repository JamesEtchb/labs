// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.

let teachersAssistant = {
    name : 'Many',
    inClass : false,
}

console.log(teachersAssistant)
teachersAssistant.classes = []
teachersAssistant.classes.push('arrays')
console.log(teachersAssistant)