// 버튼 클릭시 실행
const calc = document.getElementById("calculation");
const calcMethod = document.getElementsByName("calcMethod");
const good_result = document.getElementById("goodProf_result");
const bad_result = document.getElementById("badProf_result");
const good_result2 = document.getElementById("goodProf_result2");
const bad_result2 = document.getElementById("badProf_result2");

calc.addEventListener('click', function(){
  
  console.log("calc 가 클릭되었습니다.");

  const inputId = document.getElementById("input_id").value;
  const inputScore = parseInt(document.getElementById("input_score").value);
  const inputAtt = parseInt(document.getElementById("input_att").value);
  const inputCom = parseInt(document.getElementById("input_common").value);
  const resultTitle = document.getElementById("result_ID");
  const result = document.getElementById("result_score");
  const resultTitle2 = document.getElementById("result_ID2");
  const result2 = document.getElementById("result_score2");


  //입력값 없을 경우 경고
  if (!inputId) {
    console.log("ID 입력값이 없습니다.");
    alert("ID 입력해주세요.");
    return false;
  }
  if (!inputScore) {
    console.log("점수 입력값이 없습니다.");
    alert("점수 입력해주세요.");
    return false;

  }
  if (!inputAtt) {
    console.log("결석 횟수 입력값이 없습니다.");
    alert("결석 횟수 입력해주세요.");
    return false;
    
  }
  if (!inputCom) {
    console.log("출석인정 횟수 입력값이 없습니다.");
    alert("출석인정 횟수 입력해주세요.");
    return false;
    
  }

//입력값 검증 
 if (validate(inputScore,0,100)===false) return 0;
 if (validate(inputAtt,0,10)===false) return 0;
 if (validate(inputCom,0,inputAtt)===false) return 0;



// id 중복일경우 안되게 하는거 해야됨
  let temp = new student(
    inputId,
    inputScore,
    inputAtt,
    inputCom
  );

  let addStudent = studentList.length;
  // console.log(temp);
  // console.log(temp.id);
  // console.log(studentList.filter( (x) => x.id === temp.id).map((x)=>x.id)[0]);
  // console.log(!undefined);


    if(!studentList.filter( (x) => x.id === temp.id).map((x)=>x.id)[0]){
      studentList[addStudent] = temp; 

       // 학점 계산
      studentList[addStudent].calcScore = studentList[addStudent].calc();
      studentList[addStudent].goodGrade = studentList[addStudent].goodProf(studentList[addStudent].calcScore);

      ranking(studentList);
      addStudent = studentList.findIndex((x) => x.id === inputId);
      studentList[addStudent].badGrade = studentList[addStudent].badProf(studentList.filter( (x) => x.id === inputId ).map( (x) => x.prize));
    }

    if(studentList.filter( (x) => x.id === temp.id).map((x)=>x.id)[0]){
        addStudent = studentList.findIndex((x) => x.id === inputId);
      if (calcMethod[0].checked === true){
    
        result.innerText = studentList[addStudent].goodGrade;
        result2.innerText = studentList[addStudent].goodGrade;

      } else {
        result.innerText = studentList[addStudent].badGrade;
        result2.innerText = studentList[addStudent].badGrade;
      }
    }
  


  console.log(studentList ,studentList[addStudent]);


  console.log("계산 완료");

  resultTitle.innerText = inputId;

  good_result.innerText = studentList[addStudent].goodGrade;
  bad_result.innerText = studentList[addStudent].badGrade;

  resultTitle2.innerText = inputId;

  good_result2.innerText = studentList[addStudent].goodGrade;
  bad_result2.innerText = studentList[addStudent].badGrade;

  if (calcMethod[0].checked === true){
    
    result.innerText = studentList[addStudent].goodGrade;
    result2.innerText = studentList[addStudent].goodGrade;

  } else {
    result.innerText = studentList[addStudent].badGrade;
    result2.innerText = studentList[addStudent].badGrade;
  }

  //테이블생성
  // console.log(document.getElementById('tableMaker'));
  buildTable(studentList);
  // 테이블 생성시 초기화되게 방법..

  console.log("학점 출력 완료");

});



//   // 결과창 초기화
//   open.onclick = () => {
//     if(calcMethod[0].checked === true){
//        document.querySelectorAll(".bad_select").style.display = "none";
//     } else {
//       document.querySelectorAll(".good_select").style.display = "none";
//     }
// };



// // 등수 상세 보기
// (function (window, document) {
//   'use strict';

//   const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
//   const show = document.getElementById("table_show"); // Return Element
  
//   show.addEventListener('click', function () {
//     toggleElements();
//   });

//   function toggleElements() {
//     [].forEach.call($toggles, function (toggle) {
//       toggle.classList.toggle('on');
//     });
//   }

//   function offElements() {
//     [].forEach.call($toggleBtn, function (toggleBtn) {
//       toggle.classList.remove('on');
//     });
//   }
// })(window, document);

// calc.addEventListener('click', function(){
//   buildTable(studentList);
// };