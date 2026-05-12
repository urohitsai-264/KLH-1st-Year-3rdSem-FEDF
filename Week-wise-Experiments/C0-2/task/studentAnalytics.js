const students = [
  { name: 'Ayesha', marks: [88, 92, 79] },
  { name: 'Rohan', marks: [74, 81, 69] },
  { name: 'Meera', marks: [95, 90, 93] },
  { name: 'Vikram', marks: [65, 70, 58] },
  { name: 'Sara', marks: [82, 85, 87] }
];

// 1) Higher-order function to calculate grades
const gradingScale = score => {
  if (score >= 90) return 'A+';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  return 'D';
};

function getGrades(studentList, gradeCalculator) {
  return studentList.map(student => {
    const average = student.marks.reduce((sum, val) => sum + val, 0) / student.marks.length;
    return { name: student.name, average: Number(average.toFixed(2)), grade: gradeCalculator(average) };
  });
}

// 2) Callback-based topper display
function processToppers(gradeData, callback) {
  const highest = Math.max(...gradeData.map(item => item.average));
  const toppers = gradeData.filter(item => item.average === highest);
  callback(toppers);
}

// 3) Memoized GPA calculation
function memoize(fn) {
  const cache = new Map();
  return function(key) {
    if (cache.has(key)) return cache.get(key);
    const result = fn(key);
    cache.set(key, result);
    return result;
  };
}

const calculateGPA = memoize(student => {
  const sum = student.marks.reduce((total, value) => total + value, 0);
  return Number((sum / student.marks.length / 10).toFixed(2));
});

// 4) Closure count of grade evaluations
function createEvaluationCounter() {
  let count = 0;
  return {
    increment() { count += 1; return count; },
    getCount() { return count; }
  };
}

const evaluationCounter = createEvaluationCounter();

// Demo run
const gradeData = getGrades(students, average => {
  evaluationCounter.increment();
  return gradingScale(average);
});

console.log('Student Analytics Result:');
console.table(gradeData);
console.log('Grade evaluation calls:', evaluationCounter.getCount());

processToppers(gradeData, toppers => {
  console.log('Topper(s):');
  toppers.forEach(topper => console.log(`- ${topper.name}: ${topper.average} (${topper.grade})`));
});

console.log('GPA cache demo:');
students.forEach(student => {
  console.log(`${student.name} GPA = ${calculateGPA(student)}`);
});
// repeat to use memoized values
console.log('Repeat GPA fetch to use memoized results:');
students.forEach(student => {
  console.log(`${student.name} GPA = ${calculateGPA(student)}`);
});
