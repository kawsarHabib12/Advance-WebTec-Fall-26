const studentName = "Kawsar";
const marks = [85, 90, 75, 60, 45];


function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}

function calculateAverage(marks) {
    return calculateTotal(marks) / marks.length;
}


function calculateGrade(average) {
    if (average >= 80) {
        return "A+";
    } else if (average >= 70) {
        return "A";
    } else if (average >= 60) {
        return "A-";
    } else if (average >= 50) {
        return "B";
    } else {
        return "F";
    }
}

function checkResult(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 50) {
            return "Fail";
        }
    }
    return "Pass";
}


function findHighestMark(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}


function countPassedSubjects(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }

    return count;
}

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Total Marks:", calculateTotal(marks));
console.log("Average:", calculateAverage(marks));
console.log("Grade:", calculateGrade(calculateAverage(marks)));
console.log("Result:", checkResult(marks));
console.log("Highest Mark:", findHighestMark(marks));
console.log("Passed Subjects:", countPassedSubjects(marks));