

  // function toggleElements() {
  //   const $toggles = document.querySelectorAll('.form-control'); // Return NodeList

  //   [].forEach.call($toggles, function (toggle) {
  //     toggle.classList.toggle('on');
  //   });
  // }

// function getTypeCheck(s, spc) {
// //타입비교 (비교문자 , 비교형식 ; ex: getTypeCheck(string , "1234567890") )
//     for(let i=0; i< s.length; i++) {
//         if(spc.indexOf(s.substring(i, i+1)) < 0) {
//             return false;
//         }
//     }
//     return true;
// } 


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


function onlyNum(obj,n=0) {// 숫자만 입력 가능
    var reg = /^[0-9]+/g;
    var NUM = "0123456789";
    var str_space = /\s/;  // 공백체크
 
//  이런거 안되던데??...
//  //1~50
//  // /^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$/

    // if(!getTypeCheck(obj.value, NUM)) {
    //     alert(" 숫자만 입력가능합니다.");
    //     obj.value = obj.value.replace(re,""); // 숫자가 아닌 문자 제거
    //     obj.value = 0;
    //     obj.focus();
    //     return false;
    // }
 
    // if(n && obj.value) {
    //     if(obj.value < n) {
    //         alert(+0+"이상 입력하세요!");
    //         obj.value = 0;
    //         obj.focus();
    //         return false;
    //     }
    // }
 // onkeyup="onlyNum(this,'');" onchange="onlyNum(this,'');"
}