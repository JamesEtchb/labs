function assignGrade (x){

switch(x){
    case 10:
    return 'A'
    break;

    case  9:
    return 'B'
    break;

    case  8:
    return 'C'
    break;

    case 7:
    return 'D'
    break;

   default:
    return 'F'
    break;
}
}

let result = assignGrade(10)
console.log(result)