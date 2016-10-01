    var weeks=new Array('日','月','火','水','木','金','土');
    var d = new Date();
    var tmonth  = d.getMonth() + 1;
    var today    = d.getDate();
    var week     = weeks[ d.getDay() ];
    var year      = d.getFullYear();
    var Lstorage=window.localStorage;
    var tmrw = nextday(year,tmonth,today);
    var tabjudge = abjudge(tmonth, today);
   var nabjudge = abjudge(tmrw.month, tmrw.date);
    var i;
    var j;

window.onload = function() {
$(document).ready(function() {
Info = {
	width: 'device-width',
	height: 300,
	debug: false,
	j2sPath: "./JSmol/j2s",
	color: "0xf2f2f2",
  disableJ2SLoadMonitor: true,
  disableInitialConsole: true,
	addSelectionOptions: false,
	serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
	use: "HTML5",
	readyFunction: null,
	script: "load $methane"
}

$("#jsmol").html(Jmol.getAppletHtml("jmolApplet0",Info))
});
Jmol.script(jmolApplet0, 'spin off');

/*イベントリスナー*/
var jsmolbox = document.getElementById("molbox");
var txtel=document.Memo.Mdetail;
var svel=document.getElementById("Save");
var rstel=document.getElementById("reset");
/*var chkel=document.getElementById("check");*/
var sel = document.forms.selectclass.tblclass;
  if (Lstorage !== null){
 var storaged = Lstorage.getItem('yourclass')||0;
 sel.options[storaged].selected = true;
 var SavedMemo=Lstorage.getItem('AlexMemo')||"";
 txtel.innerHTML=SavedMemo;
 }
MakeTbl(sel);
ResetStorage();
jsmolbox.addEventListener('change', function(){dispjsmol(); jsmolbox.blur();});
sel.addEventListener('change', function(){SaveClass(sel);MakeTbl(sel);});
txtel.addEventListener('keyup', function(){SaveMemo(txtel.value,0)});
svel.addEventListener('click', function(){SaveMemo(txtel.value,1)});
rstel.addEventListener('click', function(){txtel.value=''});

var dispel=document.getElementsByClassName("ABdisp");
var psgel=document.getElementsByClassName("ABpsg");
  psgel[0].insertAdjacentHTML("afterbegin", '本日、'+year  + "/" + tmonth + "/" + today + "(" + week + ')は');
  dispel[0].insertAdjacentHTML('afterbegin', tabjudge);
  psgel[1].insertAdjacentHTML('afterbegin', "明日、"+tmrw.month+'/'+tmrw.date+'('+tmrw.week+')は');
  dispel[1].insertAdjacentHTML('afterbegin', nabjudge);

  var schelm = document.getElementById("schedule");
	var nday = [];
	for (i=0; i<5; i++){
	  nday[i] = nextday(year, tmonth, today+1+i);
	  schelm.insertRow(-1);
	  schelm.rows[i].insertCell(-1);
	  schelm.rows[i].insertCell(-1);

 schelm.rows[i].cells[0].innerHTML=nday[i].month+'/'+nday[i].date+'('+nday[i].week+')';
schelm.rows[i].cells[1].innerHTML=abjudge(nday[i].month, nday[i].date)+"\n";
	}
}

function nextday(year, nmonth, today){
   var t = new Date(year, nmonth-1, today+1);
   return {
	month: t.getMonth()+1,
	date: t.getDate(),
	week: weeks[ t.getDay() ]
    };
}

//時間割表作成
function MakeTbl(sel){
  var str;
  var str_y;
 var grade = sel.options[sel.selectedIndex].value;
 var timeTbl=timetable(grade, week , tabjudge);
 var ntimeTbl = timetable(grade, tmrw.week, nabjudge);
  var rowcnt = Math.max(timeTbl.length, ntimeTbl.length);
var table = document.getElementById( "ttable" );

for (i=0 ; i<rowcnt ; i++){
if(timeTbl[i] == undefined)timeTbl[i]="&nbsp;"
if(ntimeTbl[i] == undefined)ntimeTbl[i]="&nbsp;"
}

for ( i=1 ; i<rowcnt+1 ; i++ ){
   table.insertRow( -1 );
   var cellcnt = table.rows[i].cells.length;

   while ( cellcnt<3 ) {
	table.rows[i].insertCell();
	cellcnt = table.rows[i].cells.length;
  }

  table.rows[i].cells[0].innerHTML = i;
  table.rows[i].cells[1].innerHTML = timeTbl[i-1];
  table.rows[i].cells[2].innerHTML = ntimeTbl[i-1]+"\n";

for(j = 1 ; j<3 ; j++){
  table.rows[i].cells[j].addEventListener("click", prmpt);
  var key=(i+"")+(j+"");
str_y=Lstorage.getItem((i+'')+'2'+((today-1)+""));
str = Lstorage.getItem(key+(today+""));
  if(str_y)table.rows[i].cells[1].innerHTML=str_y;
  if(str)table.rows[i].cells[j].innerHTML=str;
}
}
  table.rows[0].cells[0].innerHTML = grade;

function prmpt(){
var ord;
var cell=this.cellIndex;
var row=this.parentNode.rowIndex;
var key =(row+"")+(cell+"")+(today+"");
if (cell==1)ord=timeTbl[row-1];
else if (cell==2)ord=ntimeTbl[row-1];
  var changedclass= prompt("授業変更\n変更後の授業を入力してください。\n変更前："+ord+" → 変更後："+(this.value||"(未変更)"));
    if(changedclass){
	this.innerHTML=changedclass;
	Lstorage.setItem(key, changedclass);
    } else if(changedclass==""){
	this.innerHTML=ord;
      Lstorage.removeItem(key);
    }
}
}

function SaveClass(sel){
if(('localStorage' in window) && (Lstorage !== null))Lstorage.setItem('yourclass',sel.selectedIndex);
else window.alert('ローカルストレージが使えません。');
}

function SaveMemo(txt,btn){
Lstorage.setItem('AlexMemo', txt);
	if(btn)alert("保存しました。\n“"+(txt||"(内容が無いようです。)")+"”");
}

function dispjsmol() {
  var molname = document.forms.molform.molbox.value
  var mol = "load $"+molname;
  Info.script = mol;
  $("#jsmol").html(Jmol.getAppletHtml("jmolApplet0",Info))
}

function ResetStorage(){
var strg=[];
var arr={a:[], b:[], c:[], d:[]};
var arr_y=[arr.a,arr.b];
var arr_t=[arr.c,arr.d];
var tstrg=[arr_y,arr_t];
var key;
  strg[0]=Lstorage.getItem('AlexMemo');
  strg[1]=Lstorage.getItem('yourclass');
for (i=1;i<7;i++){
for (j=1;j<3;j++){
key=(i+"")+(j+"");
  tstrg[0][j-1][i]=Lstorage.getItem(key+((today-1)+""));
  tstrg[1][j-1][i]=Lstorage.getItem(key+(today+""));
}
}
  Lstorage.clear();
  if(strg[0])Lstorage.setItem('AlexMemo', strg[0]);
  if(strg[1])Lstorage.setItem('yourclass', strg[1]);
for (i=1;i<7;i++){
for (j=1;j<3;j++){
key=(i+"")+(j+"");
  if(tstrg[0][j-1][i])Lstorage.setItem((key+((today-1)+"")), tstrg[0][j-1][i]);
  if(tstrg[1][j-1][i])Lstorage.setItem((key+(today+"")), tstrg[1][j-1][i]);
}
}
}
