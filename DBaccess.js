//month,date,schedule
  var j;
function DBSearch(filename, month, date){
  var schedule;
  var fair
  var csv = [];
  var req = new XMLHttpRequest();
    req.open("get", filename, false); 
    req.onload = function(){
    var db = req.responseText;
  var temp = db.split("\n");
    for( j=0 ; j<temp.length ; j++){
        fair = temp[j].replace( /"/g , "");
        csv[j] = fair.split(",");
    }
    for( j=0 ; j<csv.length ; j++ ){
       if((csv[j][0] == month)&&(csv[j][1] == date)) {
         schedule = csv[j][2]||"授業なし";
         return 0;
       }
    }
    schedule = "授業なし";
};
     req.send(null);
     return schedule;
}

function SPtbl(filename, grd, wnum, schedule){
  var ab = schedule.slice(0, 1);
  var fair;
  var csv = [];
  var timetbl;
  var req = new XMLHttpRequest();
    req.open("get", filename, false); 
    req.onload = function(){
    var db = req.responseText;
    var temp = db.split("\n");
    for( i=0 ; i<temp.length ; i++){
        fair = temp[i].replace( /"/g , "");
        csv[i] = fair.split(",");
    }
    for( i=0 ; i<csv.length ; i++ ){
       if(csv[i][0] == grd) {
    timetbl = (
      (ab=="A") ? csv[0,i+wnum-1].slice(1, 4) 
    : (ab=="B") ? csv[0,i+wnum-1].slice(4, 7)
    : "授業なし".split(""));
      }
    }
};
     req.send(null);
     return timetbl;
}

function Ntbl(filename, grd, week, ab){
  var fair
  var csv = [];
  var timetbl;
  var req = new XMLHttpRequest();
    req.open("get", filename, false); 
    req.onload = function(){
    var db = req.responseText;
    var temp = db.split("\n");
    for( i=0 ; i<temp.length ; i++){
        fair = temp[i].replace( /"/g , "");
        csv[i] = fair.split(",");
    }
    for( i=0 ; i<csv.length ; i++ ){
       if(csv[i][0] == grd) timetbl = csv[i];
    }
};
     req.send(null);
     return timetbl || "授業なし".split("");
}
  
  