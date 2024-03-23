function gradeRemit(marks){
    if (marks >=0 && marks <=100){
        return StudentGrades(marks);
    }
    else {
        return "unrecognised number";
    }

}
function StudentGrades(marks){
    if (marks>79){
        return "A"
    }
    else if(marks>=60 && marks<=79){
        return "B"
    }
    else if(marks>=50 && marks<=59){
        return "C"
    }
    else if(marks>=40 && marks<=49){
        return "D"
    }
    else{
        return "E"
    }
}
//in the brackets bellow where the no. is add the desired no. you intend to know the gradein
console.log("grade for input number is:" +gradeRemit(90))