// 버튼 클릭시 실행
const calc = document.getElementById("calculation");
const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("result_ID");
const result = document.getElementById("result_score");
const resultTitle2 = document.getElementById("result_ID2");
const result2 = document.getElementById("result_score2");


// 입력데이터 검사
function checkExistData(value, dataName) {
        if (value == "") {
            alert(dataName + " 입력해주세요!");
            return false;
        }
        return true;
}

function checkUserId(id) {
        //입력되었는지 확인하기
        if (!checkExistData(id, "아이디를"))
            return false;
 
            var idRegExp = /^[0-9]{8}$/; //아이디 유효성 검사
        if (!idRegExp.test(id)) {
            alert("아이디는 숫자 8자리로 입력해야합니다!");
            document.getElementById("input_id").value = "";
            document.getElementById("input_id").focus();
            return false;
        }
        return true; //확인이 완료되었을 때
}

function validate(obj,min,max){
        console.log(obj);
        if (obj>=min && obj<=max) {
      // alert("맞게 입력하셨습니다.")
            return obj;
        }else{
            alert("범위내 숫자만 입력가능합니다.")   
            return false;
        }
}


calc.addEventListener('click', function(){
  
const checkprof = document.querySelector('input[name="calcMethod"]:checked').value;
console.log("calc 가 클릭되었습니다.");

  // checkUserId(document.getElementById("input_id").value);

  if (!checkExistData(document.getElementById("input_score").value, "점수를"))
          return false;
  if (!checkExistData(document.getElementById("input_att").value, "결석횟수를"))
          return false;
  if (!checkExistData(document.getElementById("input_common").value, "유고횟수를"))
          return false;

  //입력값 검증 
   if (validate(document.getElementById("input_score").value,0,100)===false) return 0;
   if (validate(document.getElementById("input_att").value,0,10)===false) return 0;
   if (validate(document.getElementById("input_common").value,0,document.getElementById("input_att").value)===false) return 0;

  const inputId = document.getElementById("input_id").value;
  const inputScore = parseInt(document.getElementById("input_score").value);
  const inputAtt = parseInt(document.getElementById("input_att").value);
  const inputCom = parseInt(document.getElementById("input_common").value);




// id 중복일경우 안되게 하는거 해야됨
  let temp = new student(
    inputId,
    inputScore,
    inputAtt,
    inputCom
  );

  let addStudent = studentList.length;


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
      if (checkprof === "good"){
        studentList.sort(function(a,b){
          return a.goodGrade < b.goodGrade ? -1 : a.goodGrade > b.goodGrade ? 1 : 0 ;
        });
        result.innerText = studentList[addStudent].goodGrade;
        result2.innerText = studentList[addStudent].goodGrade;

      } else {
        studentList.sort(function(a,b){
          return a.badGrade < b.badGrade ? -1 : a.badGrade > b.badGrade ? 1 : 0 ;
        });
        result.innerText = studentList[addStudent].badGrade;
        result2.innerText = studentList[addStudent].badGrade;
      }
    }
  


  console.log(studentList ,studentList[addStudent]);


  console.log("계산 완료");

  resultTitle.innerText = inputId;
  resultTitle2.innerText = inputId;


  if (checkprof === "good"){
    
    result.innerText = studentList[addStudent].goodGrade;
    resultBox.innerText = "Good Prof : " + studentList[addStudent].goodGrade;

    result2.innerText = studentList[addStudent].goodGrade;

  } else {
    result.innerText = studentList[addStudent].badGrade;
    resultBox.innerText = "Bad Prof : " + studentList[addStudent].badGrade;


    result2.innerText = studentList[addStudent].badGrade;
  }

  //테이블생성

  let tableMaker = document.getElementById('tableMaker');

  
  while(tableMaker.firstChild) {
  tableMaker.removeChild(tableMaker.firstChild);
  }
  buildTable(studentList);
  // 테이블 생성시 초기화되게 방법..

  console.log("학점 출력 완료");

});