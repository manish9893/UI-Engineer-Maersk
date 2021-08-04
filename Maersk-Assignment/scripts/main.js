//populate data by OnInit function
function OnInit (){
  this.numberList = {
    "numberListObj":
      [
      { num: "1", color: "#99A3A4" },
      { num: "2", color: "#5499C7" },
      { num: "3", color: "#566573" },
      { num: "4", color: "#5499C7" },
      { num: "5", color: "#566573" },
      { num: "6", color: "#BDC3C7" },
      { num: "7", color: "#BDC3C7" },
      { num: "8", color: "#5499C7" },
      { num: "9", color: "#566573" }
    
    ]
     
};
displayGrid(numberList.numberListObj);
document.getElementById("listVar").value=numberList.numberListObj;

}

function displayGrid(numberList){
  var myHTML = '';
  var wrapper = document.getElementById("myHTMLWrapper");

  for (var i = 0; i < numberList.length; i++) {
    myHTML += ' <a class="card" style= "background-color:' + numberList[i].color + '" >' +
      '<span class="box-num">' + numberList[i].num + '</span>' +
      '</a>  ';
  }
  wrapper.innerHTML = myHTML
  document.getElementById("listVar").value=numberList.numberListObj;

}

//Shuffle List Items
function shuffleItems(flipList){
          
  for (var i = 0; i < flipList.length  ; i++) {
   var j = i + Math.floor(Math.random() * (flipList.length - i));
   var temp =  flipList[j];
   flipList[j] = flipList[i];
   flipList[i] = temp;
}

this.numberList = {"numberListObj": flipList }
displayGrid(numberList.numberListObj);
document.getElementById("listVar").value=numberList.numberListObj;
}


//sort  List Items
function sortItems(sortList){
   
   var done = false;
   while (!done) {
     done = true;
     for (var i = 1; i < sortList.length; i += 1) {
       if (sortList[i - 1].num  > sortList[i].num) {
         done = false;
         var tmp = sortList[i - 1].num;
         sortList[i - 1].num = sortList[i].num;
         sortList[i].num = tmp;
//---------------------------------------------------
        var tempCol=sortList[i - 1].color;
        sortList[i - 1].color=sortList[i].color
        sortList[i].color = tempCol;

       }
     }
   }
   
   this.numberList = {"numberListObj": sortList }
   displayGrid(numberList.numberListObj);
   document.getElementById("listVar").value=numberList.numberListObj;
    
   
 }