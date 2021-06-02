//50명 학생 생성
const studentList = [];
const calScore = [];
const hakjeom = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];

class student {
  constructor(id, score, att, com, prize) {
    this.id = id;
    this.score = score;
    this.att = att;
    this.com = com;
    this.calcScore = '';
    this.prize = prize;
    this.goodGrade = "";
    this.badGrade = "";
  }
  calc() {
    let Score = this.score - this.att * 0.5;
    if (Score < 0) Score = 0;
    return Score;
  }
  goodProf(score) {
    if (this.att - this.com >= 5) return "F";
    if (score >= 95) {
      return "A+";
    } else if (score >= 90) {
      return "A0";
    } else if (score >= 85) {
      return "B+";
    } else if (score >= 80) {
      return "B0";
    } else if (score >= 75) {
      return "C+";
    } else if (score >= 70) {
      return "C0";
    } else if (score >= 65) {
      return "D+";
    } else if (score >= 60) {
      return "D0";
    } else {
      return "F";
    }
  }
  badProf(prize) {
    if (this.att - this.com >= 5) return "F";
    let totNum = studentList.length;
    let ratio = 0;
    let cnt = 0;
    while (cnt < 9) {
      // 총인원의 10%를 점수계산비율로 설정
      let temp = Math.round(totNum * 0.1);

      // 8번째일때 나머지인원은 F이므로
      if (cnt === 8) {
        ratio = studentList.length;
      }
      totNum -= temp;
      ratio += temp;
      if (prize <= ratio) {
        return hakjeom[cnt];
      }
      cnt++;
    }
  }
}

// ID 생성
function idmaker(min, max, count) {
  if (max < count) return false;
  let id = [];
  let i = 0;
  while (i < count) {
    let n = Math.floor(Math.random() * (max - min + 1) + min);

    // 앞자리 0 붙이기
    let str = "0";
    for (let i = 1; i < 8 - String(n).length; i++) {
      str += "0";
    }
    str += String(n);

    if (!sameNum(str)) {
      id.push(str);
      i++;
    }
  }
  // 중복 제거
  function sameNum(str) {
    return id.find((e) => e === str);
  }
  return id;
}
let id = idmaker(1, 999, 50);

// 점수 생성
let score = maker(0, 100, 50);
for (let i = 0; i < 50; i++) {
  if (score[i] % 2 !== 0) score[i] += 1;
  if (score[i] > 100) score[i] -= 2;
}

// 결석횟수 생성
let att = maker(0, 10, 50);
// 유고결석 생성 및 50명 난수배치
for (let i = 0; i < 50; i++) {
  let com = maker(0, att[i], 1);
  studentList[i] = new student(id[i], score[i], att[i], com[0]);
}

// 1. 계산된 점수 구하기
// 2. good Prof 성적 구하기
// 3. 계산된 점수로 랭킹
// 4. 계산된 순위로 bad Prof 성적 구하기

for (let i = 0; i < studentList.length; i++) {
  studentList[i].calcScore = studentList[i].calc();
  studentList[i].goodGrade = studentList[i].goodProf(studentList[i].calcScore);
}

ranking(studentList);
for (let i = 0; i < studentList.length; i++) {
  studentList[i].badGrade = studentList[i].badProf(studentList[i].prize);
}

// for (let i = 0; i < studentList.length; i++) {
//   hakjeom.indexOf(studentList[i].goodGrade) <
//   hakjeom.indexOf(studentList[i].badGrade)
//     ? (studentList[i].resultGrade = studentList[i].goodGrade)
//     : (studentList[i].resultGrade = studentList[i].badGrade);
// }

console.log(studentList);
console.log("계산 완료");



// 난수생성 함수
function maker(min, max, count) {
  let number = [];
  for (var i = 0; i < count; i++) {
    number[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return number;
}

//등수 매기기 함수
function ranking(arr) {
  // 내림차순으로 정렬

  let sorted = arr.sort(function(a, b) {
  return b.calcScore - a.calcScore;
});

  let ranks = arr.map(function (v) {
    return sorted.indexOf(v) + 1;
  });
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].prize = ranks.shift();
  }
}

