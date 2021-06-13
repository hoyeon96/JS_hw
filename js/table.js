
const eraser = document.getElementById('eraser');
const table = document.getElementById('tableMaker');

function buildTable(data) { 


  for (let i=0; i < data.length; i++) { 
    const row = `<tr> 
    <td>${i+1}</td> 
    <td>${data[i].id}</td> 
    <td>${data[i].calcScore}</td> 
    <td>${data[i].att - data[i].com}</td> 
    <td>${data[i].goodGrade}</td> 
    <td>${data[i].badGrade}</td> 
    </tr>`
     table.innerHTML += row;
    // console.log(table.rows.length);  
   } 
 }

eraser.addEventListener('click', function(){
  var row_index = table.rows.length-1;      // 테이블(TR) row 개수 

    if(row_index > 0) table.deleteRow(row_index);   
});