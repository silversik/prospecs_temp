/*
 * Common Java Script of nogdoo.com
 *
 * Copyright (c) 2014 gagamel (nogdoo.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2014-06-13 $
 */

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 String 객체에 trim 메소드를 추가한다. trim 메소드는 스트링의 앞과 뒤에
 *           있는 white space 를 제거한다.
 * <pre>
 *     var str = " abcde "
 *     str = str.trim();
 * </pre>
 * 위의 예에서 str는 "abede"가 된다.
 * @return : trimed String.
 * @author :
 */
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 String 객체에 replaceAll 메소드를 추가한다. replaceAll 메소드는
 *           스트링 내에 있는 특정 스트링을 다른 스트링으로 모두 변환한다. String 객체의 replace 메소드를 확장한 것이다.
 * <pre>
 *     var str = "abcde"
 *     str = str.replaceAll("cd", "xx");
 * </pre>
 * 위의 예에서 str는 "abxxe"가 된다.
 * @sig    : oldStr, newStr
 * @param  : oldStr required 바뀌어야 될 기존의 스트링
 * @param  : newStr required 바뀌어질 새로운 스트링
 * @return : replaced String.
 * @author :
 */
String.prototype.replaceAll = function(oldStr, newStr) {
	var rStr = oldStr;

	rStr = rStr.replace(/\\/g, "\\\\");
	rStr = rStr.replace(/\^/g, "\\^");
	rStr = rStr.replace(/\$/g, "\\$");
	rStr = rStr.replace(/\*/g, "\\*");
	rStr = rStr.replace(/\+/g, "\\+");
	rStr = rStr.replace(/\?/g, "\\?");
	rStr = rStr.replace(/\./g, "\\.");
	rStr = rStr.replace(/\(/g, "\\(");
	rStr = rStr.replace(/\)/g, "\\)");
	rStr = rStr.replace(/\|/g, "\\|");
	rStr = rStr.replace(/\,/g, "\\,");
	rStr = rStr.replace(/\{/g, "\\{");
	rStr = rStr.replace(/\}/g, "\\}");
	rStr = rStr.replace(/\[/g, "\\[");
	rStr = rStr.replace(/\]/g, "\\]");
	rStr = rStr.replace(/\-/g, "\\-");

	var re = new RegExp(rStr, "g");

	return this.replace(re, newStr);
};

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 String 객체에 toDate 메소드를 추가한다. toDate 메소드는 날짜를 표현하는
 *           스트링 값을 자바스크립트의 내장 객체인 Date 객체로 변환한다.
 * <pre>
 *     var date = "20020305".toDate();
 *     or
 *     var date = "20020305".toDate("YYYYMMDD");
 *     or
 *     var date = "2002.03.05".toDate("YYYY.MM.DD");
 * </pre>
 * 위의 예에서 date 변수는 실제로 2002년 3월 5일을 표현하는 Date 오브젝트를 가르킨다.
 * @sig    : [pattern]
 * @param  : pattern optional Date를 표현하고 있는 현재의 String을 pattern으로 표현한다. (default : YYYYMMDD)
 * <pre>
 *     # syntex
 *
 *       YYYY : year(4자리)
 *       YY   : year(2자리)
 *       MM   : month in year(number)
 *       DD   : day in month
 *       HH   : hour in day (0~23)
 *       mm   : minute in hour
 *       ss   : second in minute
 *       SS   : millisecond in second
 *
 *     <font color=red>주의)</font> YYYY(YY)는 반드시 있어야 한다. YYYY(YY) 만 사용할 경우는 1월 1일을 기준으로
 *     하고 YYYY와 MM 만사용할 경우는 1일을 기준으로 한다.
 * </pre>
 * @return : 변환된 Date Object.
 * @author :
 */
String.prototype.toDate = function(pattern) {
	var index = -1;
	var year;
	var month;
	var day;
	var hour = 0;
	var min  = 0;
	var sec  = 0;
	var ms   = 0;
	var newDate;

	if (pattern == null) {
		pattern = "YYYYMMDD";
	}
	
	if ((index = pattern.indexOf("YYYY")) == -1 ) {
		index = pattern.indexOf("YY");
		year = "20" + this.substr(index, 2);
	} else {
		year = this.substr(index, 4);
	}

	if ((index = pattern.indexOf("MM")) != -1 ) {
		month = this.substr(index, 2);
	} else {
		month = 1;
	}

	if ((index = pattern.indexOf("DD")) != -1 ) {
		day = this.substr(index, 2);
	} else {
		day = 1;
	}

	if ((index = pattern.indexOf("HH")) != -1 ) {
		hour = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("mm")) != -1 ) {
		min = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("ss")) != -1 ) {
		sec = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("SS")) != -1 ) {
		ms = this.substr(index, 2);
	}

	newDate = new Date(year, month - 1, day, hour, min, sec, ms);

	if (month > 12) {
		newDate.setFullYear(year + 1);
	} else {
		newDate.setFullYear(year);
	}

	return newDate;
};

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 Date 객체에 format 메소드를 추가한다. format 메소드는 Date 객체가 가진 날짜를
 *           지정된 포멧의 스트링으로 변환한다.
 * <pre>
 *     var dateStr = new Date().format("YYYYMMDD");
 *
 *     참고 : Date 오브젝트 생성자들 - dateObj = new Date()
 *                                   - dateObj = new Date(dateVal)
 *                                   - dateObj = new Date(year, month, date[, hours[, minutes[, seconds[,ms]]]])
 * </pre>
 * 위의 예에서 오늘날짜가 2002년 3월 5일이라면 dateStr의 값은 "20020305"가 된다.
 * default pattern은 "YYYYMMDD"이다.
 * @sig    : [pattern]
 * @param  : pattern optional 변환하고자 하는 패턴 스트링. (default : YYYYMMDD)
 * <pre>
 *     # syntex
 *
 *       YYYY : hour in am/pm (1~12)
 *       MM   : month in year(number)
 *       MON  : month in year(text)  예) "January"
 *       mon  : short month in year(text)  예) "Jan"
 *       DD   : day in month
 *       DAY  : day in week  예) "Sunday"
 *       day  : short day in week  예) "Sun"
 *       hh   : hour in am/pm (1~12)
 *       HH   : hour in day (0~23)
 *       mm   : minute in hour
 *       ss   : second in minute
 *       SS   : millisecond in second
 *       a    : am/pm  예) "AM"
 * </pre>
 * @return : Date를 표현하는 변환된 String.
 * @author :
 */
Date.prototype.format = function(pattern) {
	var GLB_MONTH_IN_YEAR = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var GLB_DAY_IN_WEEK   = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");

	var year      = this.getFullYear();
	var month     = this.getMonth() + 1;
	var day       = this.getDate();
	var dayInWeek = this.getDay();
	var hour24    = this.getHours();
	var hour12    = (hour24 > 12) ? (hour24 - 12) : hour24;
	var min       = this.getMinutes();
	var sec       = this.getSeconds();
	var YYYY = "" + year;
	var YY   = YYYY.substr(2);
	var MM   = (("" + month).length == 1) ? "0" + month : "" + month;
	var MON  = GLB_MONTH_IN_YEAR[month-1];
	var DD   = (("" + day).length == 1) ? "0" + day : "" + day;
	var DAY  = GLB_DAY_IN_WEEK[dayInWeek];
	var HH   = (("" + hour24).length == 1) ? "0" + hour24 : "" + hour24;
	var hh   = (("" + hour12).length == 1) ? "0" + hour12 : "" + hour12;
	var mm   = (("" + min).length == 1) ? "0" + min : "" + min;
	var ss   = (("" + sec).length == 1) ? "0" + sec : "" + sec;
	var a    = (a == 0) ? "AM" : "PM";

	var dateStr;

	if (typeof(pattern) == "undefined") {
		dateStr = "YYYYMMDD";
	} else {
		dateStr = pattern;
	}

	dateStr = dateStr.replace(/a/g,    a);
	dateStr = dateStr.replace(/YYYY/g, YYYY);
	dateStr = dateStr.replace(/YY/g,   YY);
	dateStr = dateStr.replace(/MM/g,   MM);
	dateStr = dateStr.replace(/MON/g,  MON);
	dateStr = dateStr.replace(/DD/g,   DD);
	dateStr = dateStr.replace(/DAY/g,  DAY);
	dateStr = dateStr.replace(/hh/g,   hh);
	dateStr = dateStr.replace(/HH/g,   HH);
	dateStr = dateStr.replace(/mm/g,   mm);
	dateStr = dateStr.replace(/ss/g,   ss);

	return dateStr;
};

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : 현재 Date 객체의 날짜보다 이후날짜를 가진 Date 객체를 리턴한다.
 *           예를 들어 내일 날짜를 얻으려면 다음과 같이 하면 된다.
 * <pre>
 *     var oneDayAfter = new Date.after(0, 0, 1);
 * </pre>
 * @sig    : [years[, months[, days[, hours[, minutes[, seconds[, mss]]]]]]]
 * @param  : years   optional 이후 년수
 * @param  : months  optional 이후 월수
 * @param  : days   optional 이후 일수
 * @param  : hours   optional 이후 시간수
 * @param  : minutes optional 이후 분수
 * @param  : seconds optional 이후 초수
 * @param  : mss     optional 이후 밀리초수
 * @return : 이후날짜를 표현하는 Date 객체
 * @author :
 */
Date.prototype.after = function(years, months, days, hours, miniutes, seconds, mss) {
	if (years == null) years = 0;
	if (months == null) months = 0;
	if (days == null) days = 0;
	if (hours == null) hours = 0;
	if (miniutes == null) miniutes = 0;
	if (seconds == null) seconds = 0;
	if (mss == null) mss = 0;
	return new Date(this.getFullYear() + years,
			this.getMonth() + months,
			this.getDate() + days,
			this.getHours() + hours,
			this.getMinutes() + miniutes,
			this.getSeconds() + seconds,
			this.getMilliseconds() + mss
	);
};

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : 현재 Date 객체의 날짜보다 이전날짜를 가진 Date 객체를 리턴한다.
 *           예를 들어 어제 날짜를 얻으려면 다음과 같이 하면 된다.
 * <pre>
 *     var oneDayBefore = new Date.before(0, 0, 1);
 * </pre>
 * @sig    : [years[, months[, days[, hours[, minutes[, seconds[, mss]]]]]]]
 * @param  : years   optional 이전으로 돌아갈 년수
 * @param  : months  optional 이전으로 돌아갈 월수
 * @param  : days   optional 이전으로 돌아갈 일수
 * @param  : hours   optional 이전으로 돌아갈 시간수
 * @param  : minutes optional 이전으로 돌아갈 분수
 * @param  : seconds optional 이전으로 돌아갈 초수
 * @param  : mss     optional 이전으로 돌아갈 밀리초수
 * @return : 이전날짜를 표현하는 Date 객체
 * @author :
 */
Date.prototype.before = function(years, months, days, hours, miniutes, seconds, mss) {
	if (years == null) years = 0;
	if (months == null) months = 0;
	if (days == null) days = 0;
	if (hours == null) hours = 0;
	if (miniutes == null) miniutes = 0;
	if (seconds == null) seconds  = 0;
	if (mss == null) mss = 0;
	return new Date(this.getFullYear() - years,
			this.getMonth() - months,
			this.getDate() - days,
			this.getHours() - hours,
			this.getMinutes() - miniutes,
			this.getSeconds() - seconds,
			this.getMilliseconds() - mss
	);
};

/**
 * @type   : function
 * @access : public
 * @desc   : 기간별 조회일자를 세팅한다.
 *           시작오브젝트(fromObj)와 종료오브젝트(toObj)에 일자를 세팅한다. 
 * <pre>
 *     년월일 설정
 *     ngjfSetDate(document.templateForm.START_DATE, document.templateForm.END_DATE, 0, 0, -1);
 *     ngjfSetDate(document.templateForm.START_DATE, document.templateForm.END_DATE, 0, 0, 1);
 *     
 *     년월 설정
 *     ngjfSetDate(document.templateForm.START_MON, document.templateForm.END_MON, 0, -1);
 *     ngjfSetDate(document.templateForm.START_MON, document.templateForm.END_MON, 0, 1);
 * </pre>
 * @param  : fromObj - 시작일자 오브젝트
 * @param  : toObj - 종료일자 오브젝트
 * @param  : years - optional 이전으로 돌아갈 년수
 * @param  : months - optional 이전으로 돌아갈 월수
 * @param  : days - optional 이전으로 돌아갈 일수
 * @return : 시작일자 오브젝트와 종료일자 오브젝트에 일자 값을 세팅한다.
 * @author : gagamel
 */
function ngjfSetDate(fromObj, toObj, years, months, days) {
	var date = new Date();
	
	if (typeof(years) == "undefined") {
		fromObj.value = "";
		toObj.value = "";
		return;
	}
	
	//if (years < 0) years *= -1;
	//if (months < 0) months *= -1;
	//if (days < 0) days *= -1;

	if (typeof(months) == "undefined") { // 월수가 없으면 년도만 설정하는 것으로 간주
		if (years < 0) {
			fromObj.value = date.before(-1 * years).after(1).format("YYYY");
			toObj.value = date.format("YYYY");
		} else if (years > 0) {
			fromObj.value = date.format("YYYY");
			toObj.value = date.after(years).before(1).format("YYYY");
		}
	} else if (typeof(days) == "undefined") { // 일수가 없으면 년월을 설정하는 것으로 간주
		if (months < 0) {
			fromObj.value = date.before(-1 * years, -1 * months).after(0, 1).format("YYYY.MM");
			toObj.value = date.format("YYYY.MM");
		} else if (months == 0) {
			if (years < 0) {
				fromObj.value = date.before(-1 * years).after(0, 1).format("YYYY.MM");
				toObj.value = date.format("YYYY.MM");
			} else if (years > 0) {
				fromObj.value = date.format("YYYY.MM");
				toObj.value = date.after(years).before(0, 1).format("YYYY.MM");
			}
		} else if (months > 0) {
			fromObj.value = date.format("YYYY.MM");
			toObj.value = date.after(years, months).before(0, 1).format("YYYY.MM");
		}
	} else { // 년월일 설정
		if (days < 0) {
			fromObj.value = date.before(-1 * years, -1 * months, -1 * days).after(0, 0, 1).format("YYYY.MM.DD");
			toObj.value = date.format("YYYY.MM.DD");
		} else if (days == 0) {
			if (months < 0) {
				fromObj.value = date.before(-1 * years, -1 * months).after(0, 0, 1).format("YYYY.MM.DD");
				toObj.value = date.format("YYYY.MM.DD");
			} else if (months == 0) {
				if (years < 0) {
					fromObj.value = date.before(-1 * years).after(0, 0, 1).format("YYYY.MM.DD");
					toObj.value = date.format("YYYY.MM.DD");
				} else if (years > 0) {
					fromObj.value = date.format("YYYY.MM.DD");
					toObj.value = date.after(years).before(0, 0, 1).format("YYYY.MM.DD");
				}
			} else if (months > 0) {
				fromObj.value = date.format("YYYY.MM.DD");
				toObj.value = date.after(years, months).before(0, 0, 1).format("YYYY.MM.DD");
			}
		} else if (days > 0) {
			fromObj.value = date.format("YYYY.MM.DD");
			toObj.value = date.after(years, months, days).before(0, 0, 1).format("YYYY.MM.DD");
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 기간별 조회일자를 세팅한다.
 *           시작오브젝트(fromObj)와 종료오브젝트(toObj)에 일자를 세팅한다. 
 * <pre>
 *     년월일 설정
 *     ngjfSetDate(document.templateForm.START_DATE, document.templateForm.END_DATE, 0, 0, -1);
 *     ngjfSetDate(document.templateForm.START_DATE, document.templateForm.END_DATE, 0, 0, 1);
 *     
 *     년월 설정
 *     ngjfSetDate(document.templateForm.START_MON, document.templateForm.END_MON, 0, -1);
 *     ngjfSetDate(document.templateForm.START_MON, document.templateForm.END_MON, 0, 1);
 * </pre>
 * @param  : fromObj - 시작일자 오브젝트
 * @param  : toObj - 종료일자 오브젝트
 * @param  : years - optional 이전으로 돌아갈 년수
 * @param  : months - optional 이전으로 돌아갈 월수
 * @param  : days - optional 이전으로 돌아갈 일수
 * @return : 시작일자 오브젝트와 종료일자 오브젝트에 일자 값을 세팅한다.
 * @author : gagamel
 */
function ngjfSetDate2(fromObj, toObj, years, months, days) {
	var date = new Date();
	
	if (typeof(years) == "undefined") {
		fromObj.value = "";
		toObj.value = "";
		return;
	}
	
	//if (years < 0) years *= -1;
	//if (months < 0) months *= -1;
	//if (days < 0) days *= -1;

	if (typeof(months) == "undefined") { // 월수가 없으면 년도만 설정하는 것으로 간주
		if (years < 0) {
			fromObj.value = date.before(-1 * years).after(1).format("YYYY");
			toObj.value = date.format("YYYY");
		} else if (years > 0) {
			fromObj.value = date.format("YYYY");
			toObj.value = date.after(years).before(1).format("YYYY");
		}
	} else if (typeof(days) == "undefined") { // 일수가 없으면 년월을 설정하는 것으로 간주
		if (months < 0) {
			fromObj.value = date.before(-1 * years, -1 * months).after(0, 1).format("YYYY-MM");
			toObj.value = date.format("YYYY-MM");
		} else if (months == 0) {
			if (years < 0) {
				fromObj.value = date.before(-1 * years).after(0, 1).format("YYYY-MM");
				toObj.value = date.format("YYYY-MM");
			} else if (years > 0) {
				fromObj.value = date.format("YYYY-MM");
				toObj.value = date.after(years).before(0, 1).format("YYYY-MM");
			}
		} else if (months > 0) {
			fromObj.value = date.format("YYYY-MM");
			toObj.value = date.after(years, months).before(0, 1).format("YYYY-MM");
		}
	} else { // 년월일 설정
		if (days < 0) {
			fromObj.value = date.before(-1 * years, -1 * months, -1 * days).after(0, 0, 1).format("YYYY-MM-DD");
			toObj.value = date.format("YYYY-MM-DD");
		} else if (days == 0) {
			if (months < 0) {
				fromObj.value = date.before(-1 * years, -1 * months).after(0, 0, 1).format("YYYY-MM-DD");
				toObj.value = date.format("YYYY-MM-DD");
			} else if (months == 0) {
				if (years < 0) {
					fromObj.value = date.before(-1 * years).after(0, 0, 1).format("YYYY-MM-DD");
					toObj.value = date.format("YYYY-MM-DD");
				} else if (years > 0) {
					fromObj.value = date.format("YYYY-MM-DD");
					toObj.value = date.after(years).before(0, 0, 1).format("YYYY-MM-DD");
				}
			} else if (months > 0) {
				fromObj.value = date.format("YYYY-MM-DD");
				toObj.value = date.after(years, months).before(0, 0, 1).format("YYYY-MM-DD");
			}
		} else if (days > 0) {
			fromObj.value = date.format("YYYY-MM-DD");
			toObj.value = date.after(years, months, days).before(0, 0, 1).format("YYYY-MM-DD");
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 기간별 조회일자를 어제일자로 세팅한다.
 *           시작오브젝트(fromObj)와 종료오브젝트(toObj)에 일자를 세팅한다. 
 * <pre>
 *     ngjfSetYesterday(document.templateForm.START_DATE, document.templateForm.END_DATE);
 * </pre>
 * @param  : fromObj - 시작일자 오브젝트
 * @param  : toObj - 종료일자 오브젝트
 * @author : gagamel
 */
function ngjfSetYesterday(fromObj, toObj) {
	var date = new Date();

	fromObj.value = date.before(0, 0, 1).format("YYYY.MM.DD");
	toObj.value = date.before(0, 0, 1).format("YYYY.MM.DD");
}

/**
 * @type   : function
 * @access : public
 * @desc   : Date 형식의 시작일자와 종료일자 사이의 일수를 반환한다.
 * <pre>
 *     ngjfGetDaysBetween(fromDate, toDate);
 * </pre>
 *
 * @param  : fromDate - Date 형식의 시작일자 값
 * @param  : toDate - Date 형식의 종료일자 값
 * @author : gagamel
 */
function ngjfGetDaysBetween(fromDate, toDate) {
	return Math.floor((toDate - fromDate) / (60*60*24*1000));
}

/**
 * @type   : function
 * @access : public
 * @desc   : Date 형식의 시작년월과 종료년월 사이의 월수를 반환한다.
 * <pre>
 *     ngjfGetMonthsBetween(fromDate, toDate);
 * </pre>
 *
 * @param  : fromDate - Date 형식의 시작년월 값
 * @param  : toDate - Date 형식의 종료년월 값
 * @desc   : (30*60*60*24*1000)-> (28*60*60*24*1000) 수정, 2월달이 30일 이하로 날계산에서 차이 발생 
 * @author : gagamel
 */
function ngjfGetMonthsBetween(fromDate, toDate) {
	return Math.ceil((toDate - fromDate) / (28*60*60*24*1000));
}

/**
 * @type   : function
 * @access : public
 * @desc   : Date 형식의 시작시분초와 종료시분초 사이의 분을 반환한다.
 * <pre>
 *     ngjfGetMinutesBetween(fromTime, toTime);
 * </pre>
 *
 * @param  : fromTime - Date 형식의 시분초 값. 예) "15:32:17".toDate("HH:mm:ss")
 * @param  : toTime - Date 형식의 시분초 값. 예) "16:42:17".toDate("HH:mm:ss")
 * @author : gagamel
 */
function ngjfGetMinutesBetween(fromTime, toTime) {
	var time = toTime.format("HH") - fromTime.format("HH");
	var minute = toTime.format("mm") - fromTime.format("mm");
	return (time * 60 + minute);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 Number 객체에 addComma 메소드를 추가한다.
 *           값에서 콤마(,)를 추가한다.
 * <pre>
 *     -12345678.123.addComma();
 * </pre>
 * @return : 콤마(,)가 추가된 값
 * @since  : 2014/10/15
 * @author : gagamel
 */
Number.prototype.addComma = function(){
	var num = this.toString();
	
	if (isNaN(num)) return 0;

	return num.addComma();
}

/**
 * @type   : function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 String 객체에 addComma 메소드를 추가한다.
 *           스트링에서 콤마(,)를 추가한다.
 * <pre>
 *     "-12345678.123".addComma();
 * </pre>
 * @return : 콤마(,)가 추가된 값
 * @since  : 2014/10/15
 * @author : gagamel
 */
String.prototype.addComma = function(){
	var reg = /(^[+-]?\d+)(\d{3})/;
	var num = this;

	while (reg.test(num))
		num = num.replace(reg, '$1' + ',' + '$2');

	return num;
}

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 String 객체에 removeComma 메소드를 추가한다.
 *           스트링에서 콤마(,)를 제거한다.
 * <pre>
 *     "-123,456,789.123".removeComma();
 * </pre>
 * @return : 콤마(,)가 제거된 스트링
 * @author :
 */
String.prototype.removeComma = function() {
	return this.replace(/,/gi,"");
}


/**
 * @type   : function
 * @access : public
 * @desc   : 자바스크립트의 내장 객체인 Number 객체에 addComma 메소드를 추가한다.
 *           값에서 콤마(,)를 추가한다.
 * <pre>
 *     "".ngjfConvNull();
 * </pre>
 * @return : '' 값
 * @since  : 2012/12/05
 * @author : kes
 */
function ngjfConvNull(value){
	if (value == null || (typeof(value) == "string" && value.trim() == ""))
	return "";
}

/**
 * @type   : function
 * @access : public
 * @desc   : 값이 null 이거나 white space 문자로만 이루어진 경우 true를 리턴한다.
 * <pre>
 *     ngjfIsNull("  ");
 * </pre>
 * 위와같이 사용했을 경우 true를 리턴한다.
 * @param  : value - 필수 입력 값
 * @return : boolean. null(혹은 white space) 여부
 * @author :
 */
function ngjfIsNull(value) {
	if (value == null || (typeof(value) == "string" && value.trim() == ""))
		return true;

	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : Serialize된 URL을 리턴한다.
 * <pre>
 *     ngjfSerializedUrl("/display.do?cmd=getItemkindMain", document.forms[0]);
 * </pre>
 * @param  : url - URL. 필수 입력 값
 * @param  : formName - form name. 필수 입력 값
 * @return : Serialize된 URL
 * @since  : 2014/10/24
 * @author : gagamel
 */
function ngjfSerializedUrl(url, formName) {
	var params = url.indexOf("?") > -1 ? "&" : "";
	params += $("form[name='" + formName.name + "']").serialize();
	
	return url + params;
}

/**
 * @type   : function
 * @access : public
 * @desc   : JQuery를 이용한 submit 처리
 *           파라미터의 명칭은 쿼리문과 동일하게 작성해야 한다.
 * <pre>
 *     var params = new Object();
 *     params.GROUP_CD = "G900";
 *     params.CODE = "0202";
 *     
 *     ngjfAjaxSubmit("/renderer.do?cmd=getCodeDetailComboList", "json", jfCallback, params);
 *     
 *     or
 *     
 *     ngjfAjaxSubmit("/renderer.do?cmd=getCodeDetailComboList", "json", jfCallback);
 * </pre>
 * @param  : actionUrl - action url. 필수
 *           type - 처리결과 형식(text, html, xml, json). 필수
 *           callback - type이 text, xml, json 일 때는 콜백함수명
 *                      type이 html일 때는 target명. 필수
 *           params - 파라미터 오브젝트. 옵션
 * @return : None
 * @since  : 2014/10/14
 * @author : gagamel
 */
function ngjfAjaxSubmit(actionUrl, type, callback, params) {
	if (!params) params = new Object();
	
	$.post(actionUrl
		, $.param(params)
		, function(result) {
			if (type == "html") {
				if (!ngjfIsNull(callback))
					$(document.getElementById(callback)).html(result);
			} else {
				// Callback 함수 호출
				if (typeof(callback) == "function")
					callback.call(this, result);
			}
		}
		, type);
}

/**
 * @type   : function
 * @access : public
 * @desc   : Form 객체를 가지고 JQuery를 이용한 Submit 처리
 * <pre>
 *     ngjfAjaxSubmitForm(document.loginForm, "/member.do?cmd=loginAjax", "jsonp", jfLoginResult);
 * </pre>
 * 위와같이 사용했을 경우 true를 리턴한다.
 * @param  : formId - document form
 *           actionUrl - The URL to submit
 *           type - The data's type(text, html, xml, json, jsonp)
 *           callback - This attribute is optional.
 *               If type is 'html' then it is target's name when the result success.
 *               Otherwise it is function which calls when the result success.
 *           isDisabledEvent - This attribute is optional.
 *               If isDisabledEvent is true then you can not click all event.
 *               Otherwise you can click event.
 * @author : gagamel
 * @since  : 2014/08/21
 */
function ngjfAjaxSubmitForm(formId, actionUrl, type, callback, isDisabledEvent) {
	var progressbarId;
	
	if (type == "jsonp") {
		$.ajax({
			type : "POST",
			url : actionUrl,
			data : $("form[name='" + formId.name + "']").serialize(),
			dataType : type,
			jsonp : "callback",
			beforeSend : function(jqXHR, settings) {
				if (isDisabledEvent) {
					// Button disabled & progressBar show
					progressbarId = "progressbar";
					ngjfCreateProgressbar('body', progressbarId);
				} else {
					if (type == "html") {
						// ProgressBar show
						progressbarId = ngjfGetUUID();
						$('#' + progressbarId).remove();
						ngjfCreateProgressbar('#' + callback, progressbarId);
					}
				}
			},
			complete : function() {
				// ProgressBar remove
				$('#' + progressbarId).remove();
			},
			success : function(result) {
				if (typeof(callback) == "function")
					callback.call(this, result);
			},
			error : function() {
				alert("오류로 인해 처리되지 않았습니다.");
			}
		});
	} else {
		$.ajax({
			type : "POST",
			url : actionUrl,
			data : $("form[name='" + formId.name + "']").serialize(),
			dataType : type,
			beforeSend : function(jqXHR, settings) {
				if (isDisabledEvent) {
					// Button disabled & progressBar show
					progressbarId = "progressbar";
					ngjfCreateProgressbar('body', progressbarId);
				} else {
					if (type == "html") {
						// ProgressBar show
						progressbarId = ngjfGetUUID();
						$('#' + progressbarId).remove();
						ngjfCreateProgressbar('#' + callback, progressbarId);
					}
				}
			},
			complete : function() {
				// ProgressBar remove
				$('#' + progressbarId).remove();
			},
			success : function(result) {
				if (type == "html") {
					if (!ngjfIsNull(callback))
						$(document.getElementById(callback)).html(result);
				} else {
					// Callback 함수 호출
					if (typeof(callback) == "function")
						callback.call(this, result);
				}
			},
			error : function() {
				alert("오류로 인해 처리되지 않았습니다.");
			}
		});
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : progressbar 화면에 보이기
 * <pre>
 *     ngjfCreateProgressbar('body', 'progressbar1');
 * </pre>
 * @param  : targetId - target ID(div 태그 ID 또는 body)
 * @param  : progressbarId - Progressbar ID
 * @author : gagamel
 * @since  : 2014/09/17
 */
function ngjfCreateProgressbar(targetId, progressbarId) {
	var progressbar = '<div id="' + progressbarId + '" '
		+ 'style="width: 100%; height: 100%; text-align: center; vertical-align: middle;">'
		+ '<img style="width: 10%;" src="' + _uxUrl + '"/js/ngjf-loader.gif">'
		+ '</div>';
	
	$(targetId).append(progressbar);
}

/**
 * @type   : function
 * @access : public
 * @desc   : UDID 생성
 * <pre>
 *     ngjfGetUUID();
 * </pre>
 * @author : gagamel
 * @since  : 2014/09/17
 */
function ngjfGetUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d/16);
		return (c == 'x' ? r : (r&0x7|0x8)).toString(16);
	});
	
	return uuid;
}

/**
 * @type   : function
 * @access : public
 * @desc   : QueryString을 json Object로 리턴
 * <pre>
 *     ngjfQueryString2Json('cmd=getTodayProductListAjax&PROD_CD=LME05B400DE');
 * </pre>
 * @param  : queryString - Query String
 * @return : None
 * @since  : 2015/05/11
 * @author : jeongjaejin
 */
var ngjfQueryString2Json = function(queryString) {
	var j = {};
	
	if (!queryString) return j;
	
	var q = queryString.split('&');

	$.each(q, function(i, arr) {
		arr = arr.split('=');
		return j[arr[0]] = arr[1];
	});

	return j;
}

/**
 * @type   : onload
 * @access : document
 * @desc   : numberOnly="true" 속성 지정시 숫자만 입력 가능
 * <pre>
 *     <input type="text" numberOnly="true" />
 * </pre>
 * @author : gagamel
 * @since  : 2014/11/11
 */
$(document).on("keyup", "[numberOnly=true]", function() {
	$(this).val( $(this).val().replace(/[^0-9]/gi,"") );
});

/**
 * @type   : onload
 * @access : document
 * @desc   : numberComma="true" 속성 지정시 숫자만 입력 가능하며 천단위로 콤마 구분
 * <pre>
 *     <input type="text" numberComma="true" />
 * </pre>
 * @author : gagamel
 * @since  : 2014/11/11
 */
$(document).on("keyup", "[numberComma=true]", function() {
	$(this).val( $(this).val().replace(/[^0-9]/gi,"") );
	$(this).val( $(this).val().addComma());
});