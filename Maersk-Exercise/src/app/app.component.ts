import { Component, OnInit } from '@angular/core';
import { NumberBox } from './numberbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Maersk-Exercise';
  numberList:any;
  items = [4, 5, 6, 7, 8];


  ngOnInit(): void {

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
       
  }
  }

  

  shuffleItems=(flipList)=> {
    console.log(flipList);
     
      for (var i = 0; i < flipList.length  ; i++) {

        console.log(flipList[i]);
          var j = i + Math.floor(Math.random() * (flipList.length - i));
  
          var temp =  flipList[j];
          flipList[j] = flipList[i];
          flipList[i] = temp;
      }
      this.numberList = {"numberListObj": flipList }
  }

  sortItems=(sortList)=> {
   
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < sortList.length; i += 1) {
        if (sortList[i - 1].num  > sortList[i].num) {
          done = false;
          var tmp = sortList[i - 1].num;
          sortList[i - 1].num = sortList[i].num;
          sortList[i].num = tmp;
//------------------------------------------------------------------------
        var tempCol=sortList[i - 1].color;
        sortList[i - 1].color=sortList[i].color
        sortList[i].color = tempCol;
        }
      }
    }
    this.numberList = {"numberListObj": sortList }
    
  }

}
