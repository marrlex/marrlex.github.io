function timetable( grd, week, abweek){
  var bs = '物・生', b = '物理', chi = '地理', kg = '化学', su = '数学Ⅲ', t = '体育', c = 'コミュ英', e = '英表', g = '現代文', sg = '総学', kt ='古典';
  var timetbl = new Array(6);
   if (abweek == "A週"){
	switch(grd){
	case "3-1":
		switch(week){
		case '月':
		timetbl =[ g, b, kt, su, t ]; break;
		case '火':
		timetbl = [kg, b, chi, c, kt]; break;
		case '水':
		timetbl = [e,su,su,kg,b,'LHR']; break;
		case '木':
		timetbl = [t, su, kg, b, sg]; break;
		case '金':
		timetbl = [kg,chi,c,su,e]; break;
		}break;
	case "3-2":
		switch(week){
		case '月':
		timetbl =[ bs, chi, kg, su, t ]; break;
		case '火':
		timetbl = [chi, c, e, kg, bs ]; break;
		case '水':
		timetbl = [ e, su, su, g, kg, 'LHR' ]; break;
		case '木':
		timetbl = [ t, su, bs, g, sg ]; break;
		case '金':
		timetbl = [ bs, c, kg, su, kt ]; break;
		}break;
   }
}else if(abweek == "B週"){
	switch(grd){
	case "3-1":
   		switch(week){
		case '月':
		timetbl = [ kt,su,e,b,kg ]; break;
		case '火':
		timetbl = [ b,c,kg,e,chi ]; break;
		case '水':
		timetbl = [su,kg,g,su,b,'LHR']; break;
		case '木':
		timetbl = [su,t,kg,sg,sg]; break;
		case '金':
		timetbl = [ chi,g,su,b,c ]; break;
		}break;
    case "3-2":
		switch(week){
		case '月':
		timetbl = [ kg, su, bs, c, g ]; break;
		case '火':
		timetbl = [ e, kg, c, bs, kt ]; break;
		case '水':
		timetbl = [ su, chi, e, su, kg, 'LHR' ]; break;
		case '木':
		timetbl = [ su, t, bs, sg, sg ]; break;
		case '金':
		timetbl = [ bs, kg, su, chi, kt ]; break;
		}
	}
}else{
	return "授業無し".split("");
	}
		return timetbl;
}