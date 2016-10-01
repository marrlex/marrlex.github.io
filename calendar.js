//週を判定する
function abjudge(month, day) {
	switch (month){
/*6月*/
	   case 6:
		switch (day){
		  case 7:
		  case 8:
		  case 20:
		  case 21:
		  case 22:
		  case 23:
		  case 24:
		    return "A週";
		    break;

		  case 6:
		  case 9:
		  case 10:
		  case 27:
		  case 28:
		  case 29:
		  case 30:
			return "B週";
			break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			return "中間テスト"
			break;
		case 11:
			return "3年 進研マーク模試"
			break;
		  default:
		    return "授業のない日"
		}
		break;
/*7月*/
	   case 7:
		switch (day){
		  case 4:
		  case 5:
		  case 6:
		  case 7:
		  case 8:
		    return "A週";
		    break;

		  case 1:
		  case 11:
		  case 14:
			return "B週";
			break;

		case 2:
			return "全学年 進研総合学力テスト";
			break;
		case 12:
			return "スポレク";
		case 13:
			return "B週(午後からスポレク)";
			break;

		  default:
		    return "授業のない日";
		}
		break;
/*8月*/
	   case 8:
		switch (day){
		  case 7:
		    return "3年生 第2回全統マーク模試(公開会場)";
		    break;
		case 9:
			return "三重県吹奏楽コンクール";
		case 21:
			return "1・2年生 全統模試(公開会場)";
			break;
		case 28:
			return "3年生 第2回全統記述模試";
			break;

		case 25:
			return "課題テスト";
			break;
		  case 26:
			return "課題テスト(午前中授業)";
			break;
		  case 29:
		  case 30:
		  case 31:
			return "B週";
			break;
		case 27:
			return "授業のない日";
			break;

		  default:
		    return "授業のない日(夏休み)"
		}
		break;
/*9月*/
	   case 9:
		switch (day){
		  case 5:
		  case 6:
		  case 7:
		  case 23:
		  case 26:
		  case 27:
		  case 28:
		  case 29:
		  case 30:
		    return "A週";
		    break;

		  case 1:
		  case 2:
		  case 12:
		  case 13:
		  case 14:
		  case 15:
		  case 16:
		  case 20:
		  case 21:
			return "B週";
			break;

		  case 8: 
			return "合唱コンクール予選(午前)";
		  case 9:
			return "文化祭(伊賀市文化会館)";
		  case 10:
			return "文化祭(一般公開)";
		  case 17:
			return "土曜講座Ⅰ期\n3年生 ベネッセ駿台共催マーク模試";
		  case 18:
			return "3年生 ベネッセ駿台共催マーク模試";
		  case 19:
			return "敬老の日";
		  case 22:
			return "秋分の日";
		  case 24:
			return "高校生活入門講座(午前)";
		  case 26:
			return "期末考査時間割発表";
			break;

		  default:
		    return "授業のない日";
		}
		break;
/*10月*/
	  case 10:
		switch (day){
		  case 12:
		  case 13:
		  case 14:
		  case 24:
		  case 25:
		  case 26:
		  case 28:
		  case 31:
		    return "A週";

		  case 17:
		  case 18:
		  case 19:
		  case 20:
		  case 21:
			return "B週";

		  case 3:
		  case 4:
		  case 5:
		  case 6:
		  case 7:
			return "前期末考査";
		  case 1:
			return "3年生 第2回駿台全国模試(希望者)";
		  case 8:
			return "3年 第3回全統記述模試\n2年 第2回駿台全国模試(希望者)";
		  case 10:
			return "体育の日";
		  case 11:
			return "後期始業式\n生徒会役員選挙立会演説会";
		  case 15:
			return "3年生 ベネッセ駿台共催記述模試";
		  case 23:
			return "明日から3日間 2年生修学旅行";
		  case 27:
			return "授業振替(文化祭分)";
		  case 29:
		  case 30:
			return "3年生 第3回全統マーク模試";


		  default:
		    return "授業のない日";
		}
		break;
/*11月*/
	   case 11:
		switch (day){
		  case 1:
		  case 2:
		  case 7:
		  case 8:
		  case 9:
		  case 10:
		  case 11:
		  case 21:
		  case 22:
		  case 24:
		  case 25:
		    return "A週";
		    break;

		  case 4:
		  case 14:
		  case 15:
		  case 16:
		  case 17:
		  case 18:
		  case 28:
		  case 29:
		  case 30:
			return "B週";
			break;

		  case 3:
			return "文化の日";
		  case 5:
			return "1,2年生 進研総合学力テスト";
		  case 12:
			return "崇広中学校区ヒューマンフェスタ";
		  case 23:
			return "勤労感謝の日";
		  case 26:
			return "3年生 全統センタープレ";
		  case 27:
			return "明日、中間考査時間割発表";

		  default:
		    return "授業のない日";
		}
		break;
/*12月*/
	   /*case 12:
		switch (day){
		  case 7:
		  case 
		  case 
		  case 
		  case 
		    return "A週";
		    break;

		  case 
		  case 
		  case 
		  case 
			return "B週";
			break;

		  default:
		    return "授業のない日";
		}
		break;
/*1月*/
	  /* case 1:
		switch (day){
		  case 7:
		  case 
		  case 
		  case 
		  case 
		    return "A週";
		    break;

		  case 
		  case 
		  case 
		  case 
			return "B週";
			break;

		  default:
		    return "授業のない日";
		}
		break;
/*2月*/
	   /*case 2:
		switch (day){
		  case 7:
		  case 
		  case 
		  case 
		  case 
		    return "A週";
		    break;

		  case 
		  case 
		  case 
		  case 
			return "B週";
			break;

		  default:
		    return "授業のない日"
		}
		break;
/*3月*/
	   /*case 3:
		switch (day){
		  case 7:
		  case 
		  case 
		  case 
		  case 
		    return "A週";
		    break;

		  case 
		  case 
		  case 
		  case 
			return "B週";
			break;

		  default:
		    return "授業のない日"
		}
		break;*/


	  default:
	    return "コンピュータの日付設定が不明";
	    break;
	}
}