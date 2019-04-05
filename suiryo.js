const hostname = "s-yoyaku.mie-u.ac.jp";
(location.host !== hostname) && (location.href="http://m068:Jk2Zax00@" + hostname + "/cgi-bin/webcalc3-mieu/schedulec3.cgi");
if (location.title&&!~location.title.indexOf("一覧")) {
const groupName = "管弦楽団";
scheduleTD = document.querySelectorAll("td.schedT");
for (let e of scheduleTD) {
  if (!~e.textContent.indexOf(groupName)) e.parentNode.remove();
}
const timeSpan = document.querySelectorAll("span.schedT");
for (let e of timeSpan) {
  e.previousElementSibling.remove();
  if (!~e.textContent.indexOf(groupName)) {
    e.remove();
  } else {
    e.textContent = e.textContent.substring(0, 12);
    e.style.fontSize = "18px";
  }
}
for (let e of scheduleTD) {
  for (let b of e.querySelectorAll("b")) {
    if(b.nextElementSibling.tagName !== "SPAN") {
      b.nextElementSibling.remove();
      b.remove();
    } else {
      b.textContent = b.textContent.replace(/第|集会室|会議室|楽|賞室/g, "").replace(/一|二|三|四/, str => {return "〇一二三四".split("").indexOf(str)});
    }
  }
}
const schedTH = document.querySelectorAll("th.schedTH")[2];
schedTH.textContent = groupName + "の" + schedTH.textContent;
document.querySelectorAll("td").forEach(e => {
  e.style.fontSize="18px";
});
} else {
document.documentElement.innerHTML=`<head>
<title>翠陵会館スケジュール登録</title>
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width,user-scalable=no">
<style>
html, body{
  width: 100%;
  margin: 0;
}
img {
  width: 1em;
  height: 1em;
}
</style></head>
<body bgcolor="">
<center><span id="ruler" style="visibility:hidden;position:absolute;white-space:nowrap;"></span>
<a name="touroku"></a><form name="form1" action="http://m068:Jk2Zax00@s-yoyaku.mie-u.ac.jp/cgi-bin/webcalc3-mieu/schedulec3.cgi" method="POST" id="form1" accept-charset="Shift_JIS">
<input name="form" value="1" type="hidden">
<input name="year" value="2000" type="hidden">
<input name="mon" value="1" type="hidden">
<input name="day" value="1" type="hidden">
<input name="delfile" value="914122139936" type="hidden">
<input name="action" value="write" type="hidden">
<table width="100%" border="0" cellspacing="1" cellpadding="8">
<tbody><tr><th colspan="2" bgcolor="#804000"><img src="http://www.mie-u.ac.jp/staff/symbol-green.png"><font size="+1" color="#FFFFFE">翠陵予約システム（スマホ版）
</font></th></tr>
<tr bgcolor="#FEE09C"><th nowrap="">予約日</th>
	<td><input id="year" style="width:40px">年&nbsp;<input id="mon" style="width:25px">月&nbsp;<select id="date" style="width:65px" multiple=""></select>日<br />
<div><label for="monday"><input type="checkbox" id="monday" />月曜日を全て選択/解除</label></div>
<div><label for="wednesday"><input type="checkbox" id="wednesday" />水曜日を全て選択/解除</label></div>
<div><label for="saturday"> <input type="checkbox" id="saturday" />土曜日を全て選択/解除</label></div>
	</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="">室　　名</th><td><select name="shubetsu" multiple="">
<option value="9">第一集会室Ａ
</option><option value="8">第一集会室Ｂ
</option><option value="7">第二集会室
</option><option value="6">第三集会室
</option><option value="5">第四集会室
</option><option value="4">大集会室
</option><option value="3">音楽鑑賞室
</option><option value="2">和室Ａ
</option><option value="1">和室Ｂ
</option></select>
</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="" style="font-size:14">団体名・人数</th><td><input name="title" value="" size="10" type="text">
&nbsp;<input name="ninzuu" value="" style="width:25px" type="text">
人</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="">時　　間</th>
<td style="font-size:13px;"><select name="hour_s" onchange="HourInput(this);" style="width:45px">
<option value="" selected="">未選択
</option><option value="08">8
</option><option value="09">9
</option><option value="10">10
</option><option value="11">11
</option><option value="12">12
</option><option value="13">13
</option><option value="14">14
</option><option value="15">15
</option><option value="16">16
</option><option value="17">17
</option><option value="18">18
</option><option value="19">19
</option><option value="20">20
</option></select> : 
<select name="min_s" onchange="MinInput(this);" style="width:45px">
<option value="" selected="">未選択
</option><option value="00">00
</option><option value="10">10
</option><option value="20">20
</option><option value="30">30
</option><option value="45">45
</option><option value="50">50
</option></select><span style="display:inline-block;">〜
<select name="hour_e" onchange="EndHourInput(this);" style="width:45px">
<option value="" selected="">未選択
</option><option value="08">8
</option><option value="09">9
</option><option value="10">10
</option><option value="11">11
</option><option value="12">12
</option><option value="13">13
</option><option value="14">14
</option><option value="15">15
</option><option value="16">16
</option><option value="17">17
</option><option value="18">18
</option><option value="19">19
</option><option value="20">20
</option><option value="21">21
</option></select> : 
<select name="min_e" onchange="EndMinInput(this);" style="width:45px">
<option value="" selected="">未選択
</option><option value="00">00
</option><option value="10">10
</option><option value="20">20
</option><option value="30">30
</option><option value="40">40
</option><option value="50">50
</option></select></span>
　</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="">責任者</th><td></td></tr>
<tr bgcolor="#FEE09C"><td nowrap="" align="RIGHT">学籍番号</td><td><input name="gakuseki" value="" type="text">
</td></tr>
<tr bgcolor="#FEE09C"><td nowrap="" align="RIGHT">氏名</td><td><input name="name" value="" type="text"></td></tr>
<tr bgcolor="#FEE09C"><td nowrap="" align="RIGHT">携帯番号</td><td><input name="tel" value="" size="20" type="text">
</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="">目　　的</th><td><input name="place" value="" type="text">
</td></tr>
<tr bgcolor="#FEE09C"><th nowrap="">パスワード</th><td><input name="passwd" type="password">　
</td></tr>
</tbody></table>
<input value="書　込" type="submit" class="submitter">&nbsp;<input value="9時に書込" type="button" onclick="AutoReserve();" class="submitter">&nbsp;<input value="クリア" type="reset"><p></p></form>
<p id="result">必要事項を入力して「書込」または「9時に書込」を押してください。</p>
<a href="http://m068:Jk2Zax00@s-yoyaku.mie-u.ac.jp/cgi-bin/webcalc3-mieu/webcalc3.cgi?form=2" id="comfirmReserving">予約の確認(予約状況へ)</a>
<hr>
<div id="SubmitLeft"></div>
</center>
</body>`;
}
function HourInput() {
    document.form1.hour_e.selectedIndex = document.form1.hour_s.selectedIndex+1;

    if (document.form1.hour_e.selectedIndex == 14) {
	    document.form1.min_e.selectedIndex = 1;
	}
    if (document.form1.hour_s.selectedIndex == 1) {
	    document.form1.min_s.selectedIndex = 4;
	}
if (document.form1.hour_s.selectedIndex == 2) {
  document.form1.min_s.selectedIndex = 1;
  document.form1.hour_e.selectedIndex = 5;
  document.form1.min_e.selectedIndex = 1;
}
  if (document.form1.hour_s.selectedIndex == 7) {
    document.form1.min_s.selectedIndex = 4;
    document.form1.hour_e.selectedIndex = 14;
    document.form1.min_e.selectedIndex = 1;
  }
	
    return (true);
}

function MinInput() {
    document.form1.min_e.selectedIndex = document.form1.min_s.selectedIndex;

    if (document.form1.hour_e.selectedIndex == 14) {
	    document.form1.min_e.selectedIndex = 1;
	}

    return (true);
}

function EndHourInput() {
    if (document.form1.hour_e.selectedIndex == 14) {
	    document.form1.min_e.selectedIndex = 1;
	}
    return (true);
}

function EndMinInput() {
    if (document.form1.hour_e.selectedIndex == 14) {
	    document.form1.min_e.selectedIndex = 1;
	}

    return (true);
}

function daySelect() {
  const formElm = document.form1;
  const daySelectElms = getElmsById(["monday", "wednesday", "saturday"]);
  const isCheckedArray = [];
  for (let e of daySelectElms) {
    let dayStr;
    isCheckedArray.push(e.checked);
    switch (e.id) {
      case "monday":
        dayStr = "月";
        break;
      case "wednesday":
        dayStr = "水";
        break;
      case "saturday":
        dayStr = "土";
        formElm.shubetsu.options[4].selected = e.checked;
    }
    for (let option of formElm.date.options) {
      if(~option.textContent.indexOf(dayStr)) {
        option.selected = e.checked;
      }
    }
  }
  for (let no of [0, 1, 2]) {
    formElm.shubetsu.options[no].selected = isCheckedArray[0] || isCheckedArray[1];
  }
}

const img = document.querySelector("img");
img.src = img.src + "?" + Date.now();
img.onerror = () => {
  const resultElm = document.getElementById("result");
  resultElm.textContent = "学内ネットワークに未接続…クリックで再確認";
  disableSubmit();
  resultElm.ontouchstart = () => {
    resultElm.textContent = "確認中…";
    img.src = img.src;
  };
};
img.onload = () => {
  disableSubmit(false);
  const resultElm = document.getElementById("result");
  resultElm.textContent = "学内ネットワークへの接続 確認済み";
  resultElm.ontouchstart = null;
};

function disableSubmit(isEnable = true) {
  for (let e of document.querySelectorAll(".submitter")) {
    e.disabled = isEnable;
  }
}

for (let e of getElmsById(["monday", "wednesday", "saturday"])) {
  e.onchange = daySelect;
}

var intID;
var isReserved = false;
function AutoReserve() {
  const reserveDate = new Date();
  reserveDate.setHours(9, 0, 0, 0);
  const reserveTime = reserveDate.getTime();
  isReserved = true;
  if (reserveTime > Date.now()) {
    setTimeout(submitter, reserveTime - Date.now());
    disableSubmit();
  }
}

function submitter() {
  const url="http://s-yoyaku.mie-u.ac.jp/cgi-bin/webcalc3-mieu/schedulec3.cgi";
  const formElm = document.forms.form1;
  const roomElm = formElm.shubetsu;
  const dateElm = document.getElementById("date");
  let room = [];
  let date = [];

  for (let i = 0; i < roomElm.options.length; i++) {
    if (roomElm.options[i].selected) {
      room.push(i);
    }
  }
  for (let i = 0; i < dateElm.options.length; i++) {
    if (dateElm.options[i].selected) {
      date.push(i + 1);
    }
  }
  isReserved = false;
  disableSubmit();
  document.getElementById("result").textContent = "書込中……";

  const result = {
    success: 0, busy: 0, duplicate: 0,
    error: 0
  };
  const loopTime = date.length * room.length;
  for (let i = 0; i < date.length; i++) {
    formElm.day.value = date[i];
    for (let j = 0; j < room.length; j++) {
      roomElm.selectedIndex = room[j];
      
      const DataPairs = [];
      for (let k = 0; k < formElm.length; k++) {
        let e = formElm.elements[k];
        if (e.name) {
          DataPairs.push(e.name + "=" + EscapeSJIS(e.value));
        }
      }
      const sendData = DataPairs.join("&").replace(/%20/g, "+");
      fetch(url, {
        method: "POST",
        body: sendData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=Shift_JIS",
          "Authorization": "Basic " + btoa("m068:Jk2Zax00")
        }
      }).then(response => {
        if(!response.ok) {
          alert("失敗しました");
          result.error++;
          showResult(result, loopTime);
        }
        response.blob().then(blob => {
const reader = new FileReader();
reader.onload = () => {
  console.log(reader.result);
  const str = reader.result;
  switch (true) {
    case /スケジュール/.test(str):
      result.success++; break;
    case /重複/.test(str):
      result.duplicate++; break;
    case /混雑/.test(str):
      result.busy++; break;
    default:
      result.error++;
  }
  showResult(result, loopTime);
};
reader.readAsText(blob, "shift-jis");
}).catch(err=>console.log(err))
      }).catch(error => {
        console.log(error);
        result.error++;
        showResult(result, loopTime);
      });
    }
  }
  for (let roomIndex in room) {
    roomElm[roomIndex].selected = true;
  }
  disableSubmit(false);
}

let d = new Date();
    d = new Date(d.getFullYear(), d.getMonth() + 1, 1);
let InputNames = ["title", "ninzuu", "gakuseki", "name", "tel", "place", "passwd"];
let SelectNames= ["shubetsu", "hour_s", "min_s", "hour_e", "min_e"];
let InputElms  = getElms(InputNames);
let SelectElms = getElms(SelectNames);
const formElm = document.forms.form1;
const InputVals = [
  "管弦楽団",
  "40",
  810360,
  "鳩サブレー",
  080810360,
  "練習",
  ""
];

let DateElms = getElmsById(["year", "mon"]);
let dateElm = document.getElementById("date");
let year = d.getFullYear();
let month =  d.getMonth() + 1;
DateElms[0].value = year;
DateElms[1].value = month;
const lastDay = new Date(year, month, 0);
const weeks = "日月火水木金土".split("");
for (let i = 1; i <= lastDay.getDate(); i++) {
  dateElm.add(new Option(`${i}（${weeks[(i + lastDay.getDay() + (7 - lastDay.getDate() % 7)) % 7]}）`, i, 0, 0));
}

DateElms.forEach((e, i, a)=>{
  document.getElementsByName(e.id)[0].value = e.value;
  e.onkeyup = event => {
    if (event.target.value) {
      document.getElementsByName(event.target.id)[0].value = event.target.value;
      dateElm.textContent = "";
      let end = new Date(a[0].value, a[1].value, 0);
      for (let j = 1; j <= end.getDate(); j++) {
        dateElm.add(new Option(`${j}（${weeks[(j + end.getDay() + (7 - end.getDate() % 7)) % 7]}）`, j, 0, 0));
      }
      daySelect();
    }
  };
});

const comfirmUrl = `http://m068:Jk2Zax00@s-yoyaku.mie-u.ac.jp/cgi-bin/webcalc3-mieu/webcalc3.cgi?form=2&year=${year}&mon=${month}`;
document.getElementById("comfirmReserving").href = comfirmUrl;

// 初期値読み込み
for (let i = 0; i < InputVals.length; i++) {
let inputData = localStorage.getItem(InputNames[i]);
  if (inputData) {
    InputVals[i] = inputData;
  }
}

// 初期値代入
formElm.hour_s.selectedIndex = 2;
formElm.min_s.selectedIndex = 1;
formElm.hour_e.selectedIndex = 5;
formElm.min_e.selectedIndex = 1;
formElm.shubetsu.selectedIndex = 0;
for (var i = 0; i < InputElms.length; i++){
  InputElms[i].value = InputVals[i];
}

document.forms.form1.addEventListener("change",(e)=>{
  if (e.target.tagName === "INPUT") {
    localStorage.setItem(e.target.name, e.target.value || "");
  }
});

timer();
setTimeout(() => {
  timer();
  intID = setInterval(timer, 1000);
}, 1000 - new Date().getUTCMilliseconds());

function timer() {
  let d = new Date();
  let Hour= d.getHours();
  let Min = d.getMinutes();
  let Sec = d.getSeconds();

  let string = "";
  let n = 9* 60 * 60 - ((Hour * 60 + Min) * 60 + Sec);
  if (n <= 0) {
    string = "既に９時を過ぎています。「書込」を押してください";
  }
  if (n > 0) {
    string = n + "秒後に書き込みます。そのまま操作しないでください";
  }
  document.getElementById("SubmitLeft").innerHTML = `現在 ${Hour}時 ${Min} 分 ${Sec}秒 です。`;
  if (isReserved) {
  document.getElementById("result").textContent = string;
  }
}

document.forms.form1.addEventListener("submit", event => {
  event.preventDefault();
  const formElm = document.forms.form1;
  const roomElm = formElm.shubetsu;
  const dateElm = document.getElementById("date");
  if (~roomElm.options.selectedIndex && ~dateElm.options.selectedIndex) {
    submitter();
  } else {
    document.getElementById("result").textContent = "予約日または部屋を一つ以上選択してください";
  }
});

function showResult(result, time) {
  document.getElementById("result").textContent = `書込${Object.values(result).reduce((sum, item) => sum + item) < time ? "中" : "完了"}：成功${result.success}, 重複${result.duplicate}, 回線混雑${result.busy}, エラー${result.error}`;
}

function getElms(Names) {
  let Elements = [];
  for (let i = 0 ; i < Names.length ; i++) {
    var ElmArr = document.getElementsByName(Names[i]);
      Elements[i] = ElmArr[ElmArr.length-1];
    }
  return Elements;
}

function getElmsById(Ids) {
  let Elements = [];
  for (var i = 0 ; i < Ids.length ; i++) {
    let ElmArr = document.getElementById(Ids[i]);
      Elements.push(ElmArr);
    }
  return Elements;
}


/*****************************
******     Encoding     ******
*****************************/

EscapeSJIS=function(str){
    return str.replace(/[^*+.-9A-Z_a-z-]/g,function(s){
        var c=s.charCodeAt(0),m;
        return c<128?(c<16?"%0":"%")+c.toString(16).toUpperCase():65376<c&&c<65440?"%"+(c-65216).toString(16).toUpperCase():(c=JCT11280.indexOf(s))<0?"%81E":"%"+((m=((c<8272?c:(c=JCT11280.lastIndexOf(s)))-(c%=188))/188)<31?m+129:m+193).toString(16).toUpperCase()+(64<(c+=c<63?64:65)&&c<91||95==c||96<c&&c<123?String.fromCharCode(c):"%"+c.toString(16).toUpperCase())
    })
};
UnescapeUnicode=function(str){
    return str.replace(/%u[0-9A-F]{4}|%[0-9A-F]{2}/ig,function(s){
        return String.fromCharCode("0x"+s.substring(s.length/3))
    })
};
JCT11280=function() {var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s=[],u=String.fromCharCode,t=u(12539);while(++c<127)C[u(c)]=c^39&&c^92?i++:0;i=0;while(0<=(c=C[a.charAt(i++)]))if(16==c)if((c=C[a.charAt(i++)])<87){if(86==c)c=1879;while(c--)s.push(u(++p))}else s.push(s.join("").substr(8272,360));else if(c<86)s.push(u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]));else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s.push(u(p=c<40960?c:c|57344));else{c&=511;while(c--)s.push(t);p=12539}return s.join("");}();