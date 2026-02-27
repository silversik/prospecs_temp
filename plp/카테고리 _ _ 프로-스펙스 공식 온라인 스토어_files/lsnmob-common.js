/**
 * @type   : function
 * @access : public
 * @desc   : page 이동
 * <pre>
 *     cfMovePage(1, "/product.do?cmd=getProductListFrame", "_self", document.forms[0]);
 * </pre>
 * @param  : currentPage - 현재 페이지
 * @param  : url - URL
 * @param  : tgt - target
 * @param  : formName - document form명
 * @return : None
 * @since  : 2009/03/12
 * @author : gagamel
 */
function cfMovePage(currentPage, url, tgt, formName) {
	formName.CURRENT_PAGE.value = currentPage;

	var actionUrl = ngjfSerializedUrl(url, formName);
	
	if (tgt.indexOf("#") == -1)
		cfGoToPage(actionUrl);
	else
		ngjfAjaxSubmitForm(formName, actionUrl, "html", tgt);
	
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 레이어에서의 page 이동
 * <pre>
 *     cfMovePageLayer(1, "/product.do?cmd=itemkindMain", "#lightbox", document.forms[0]);
 * </pre>
 * @param  : currentPage - 현재 페이지
 * @param  : url - URL
 * @param  : tgt - target
 * @param  : formName - document form명
 * @return : None
 * @since  : 2012/03/21
 * @author : gagamel
 */
function cfMovePageLayer(currentPage, url, tgt, formName) {
	formName.CURRENT_PAGE.value = currentPage;

	var actionUrl = ngjfSerializedUrl(url, formName);

	$(tgt).load(actionUrl);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 상품 목록에서 정렬유형 선택 시
 * <pre>
 *     cfMovePageBySorting("B", "/display.do?cmd=getItemkindMain", "_self", document.productForm);
 * </pre>
 * @param  : sortingType - 정렬유형(PRICE_DESC:가격높은순, PRICE_ASC: 가격낮은순, NEW:신상품순, VIEW:전일자조회건수많은순)
 * @param  : url - URL
 * @param  : tgt - target
 * @param  : formName - document form명
 * @return : None
 * @since  : 2014/10/24
 * @author : gagamel
 */
function cfMovePageBySorting(sortingType, url, tgt, formName) {
	formName.SORTING_TYPE.value = sortingType;
	formName.CURRENT_PAGE.value = 1;
	
	var actionUrl = ngjfSerializedUrl(url, formName);
	
	if (tgt.indexOf("#") == -1)
		cfGoToPage(actionUrl);
	else
		ngjfAjaxSubmitForm(formName, actionUrl, "html", tgt);
	
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 상품 목록에서 LINE NUMBER 콤보박스 선택 시
 * <pre>
 *     cfMovePageByLineNumbers(this, "/display.do?cmd=getItemkindMain", "_self", document.productForm);
 * </pre>
 * @param  : lineNumbers - 조회할 라인수
 * @param  : url - URL
 * @param  : tgt - target
 * @param  : formName - document form명
 * @return : None
 * @since  : 2014/10/24
 * @author : gagamel
 */
function cfMovePageByLineNumbers(lineNumbers, url, tgt, formName) {
	formName.LINE_NUMBERS.value = lineNumbers;
	formName.CURRENT_PAGE.value = 1;
	
	// Serialized된 URL을 가져온다.
	var actionUrl = ngjfSerializedUrl(url, formName);
	
	if (tgt.indexOf("#") == -1)
		cfGoToPage(actionUrl);
	else
		ngjfAjaxSubmitForm(formName, actionUrl, "html", tgt);
	
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 오늘 본 상품을 쿠키에 세팅
 * <pre>
 *     cfSetTodayProductToCookie("HUE00C105GE");
 * </pre>
 * @param  : prodCd - 상품코드
 * @return : None
 * @since  : 2011/03/10
 * @author : gagamel
 */
var COOKIE_TODAY_PROD = _ckPrefix + "_TODAY_PROD";
function cfSetTodayProductToCookie(prodCd) {
	var arrProdCd = new Array;
	var arrTempCd = new Array;
	var j = 0;

	arrProdCd = cfGetCookie(COOKIE_TODAY_PROD).split(",");

	if (arrProdCd.length > 0) {
		for (var i = 0; i < arrProdCd.length; i++) {
			// 쿠키에 없으면
			if (arrProdCd[i] != prodCd && arrProdCd[i] != "")
				arrTempCd[j++] = arrProdCd[i];
		}

		arrTempCd[j++] = prodCd;
	} else {
		cfSetTodayCookie(COOKIE_TODAY_PROD, prodCd);
	}

	cfSetTodayCookie(COOKIE_TODAY_PROD, arrTempCd);
}

/**
 * 오늘본상품 쿠키에서 삭제
 * @Function: lsnmob-common.js
 * @author syson
 * @date: 2014. 8. 21.
 * @param prodCd
 */
function cfDelTodayProductToCookie(prodCd) {
	var arrProdCd = new Array;
	var arrTempCd = new Array;
	var j = 0;

	arrProdCd = cfGetCookie(COOKIE_TODAY_PROD).split(",");

	if (arrProdCd.length > 0) {
		for (var i = 0; i < arrProdCd.length; i++) {
			
			if( arrProdCd[i] == prodCd ) {
				continue;
			}
			
			arrTempCd[j++] = arrProdCd[i];
		}
	}

	cfSetTodayCookie(COOKIE_TODAY_PROD, arrTempCd);
}

/**
 * 오늘본상품 쿠키에서 전체 삭제
 * @Function: lsnmob-common.js
 * @author syson
 * @date: 2022. 2. 25.
 */
function cfAllDelTodayProductToCookie() {
	console.log('cfAllDelTodayProductToCookie init');
	cfSetTodayCookie(COOKIE_TODAY_PROD, new Array);
	console.log('cfAllDelTodayProductToCookie end');
}


/**
 * @type   : function
 * @access : public
 * @desc   : 당일까지 쿠키 Set
 * <pre>
 *     cfSetTodayCookie("COOKIE_TODAY_PROD", "HUE00C105GE");
 * </pre>
 * @param  : name - 쿠키명
 * @param  : value - 쿠키 값
 * @return : None
 * @since  : 2011/03/10
 * @author : gagamel
 */
function cfSetTodayCookie(name, value) {
	var todayDate = new Date();
	todayDate.setHours(23);
	todayDate.setMinutes(59);
	todayDate.setSeconds(59);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

/**
 * @type   : function
 * @access : public
 * @desc   : Set Cookie
 * <pre>
 *     cfSetCookie("COOKIE_TODAY_PROD", "HUE00C105GE", 1);
 * </pre>
 * @param  : name - 쿠키명
 * @param  : value - 쿠키 값
 * @param  : expiredays - 만료기간
 * @return : None
 * @since  : 2011/03/10
 * @author : gagamel
 */
function cfSetCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

/**
 * @type   : function
 * @access : public
 * @desc   : Get Cookie
 * <pre>
 *     cfGetCookie("COOKIE_TODAY_PROD");
 * </pre>
 * @param  : name - 쿠키명
 * @return : None
 * @since  : 2011/03/10
 * @author : gagamel
 */
function cfGetCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x+nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie=document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0) break;
	}
	
	return "";
}

/**
 * @type   : function
 * @access : public
 * @desc   : JQuery를 이용한 Combobox 구성
 *           파라미터의 명칭은 쿼리문과 동일하게 작성해야 한다.
 * <pre>
 *     var params = new Object();
 *     params.cmd = "getCodeDetailComboList";
 *     params.GROUP_CD = "G900";
 *     params.CODE = "0202";
 *     
 *     cfAjaxCombo(params, oTarget, "선택", selectedCode);
 * </pre>
 * @param  : params - 파라미터 오브젝트
 *           oTarget - target 오브젝트
 *           defaultText - default 텍스트(선택/전체)
 *           selectedCode - 선택된 코드 값(option)
 *           codeDisplayYn - 코드 표시 여부(option)
 * @return : None
 * @since  : 2011/03/05
 * @author : gagamel
 */
function cfAjaxCombo(params, oTarget, defaultText, selectedCode) {
	params.DEFAULT_TEXT = defaultText;
	params.SELECTED_CODE = selectedCode;

	$.get("/renderer.do", $.param(params), function(result) { $(oTarget).html(result); try{ fakeselect.initialize();} catch(e) {}}, "html");
}


/**
 * @type   : function
 * @access : public
 * @desc   : JQuery를 이용한 Checkbox 구성
 *           파라미터의 명칭은 쿼리문과 동일하게 작성해야 한다.
 * <pre>
 *     var params = new Object();
 *     params.cmd = "getCodeCheckboxList";
 *     params.GROUP_CD = "G001";
 *     
 *     cfAjaxCheckbox(params, "ROLE_CD", "99");
 * </pre>
 * @param  : params - 파라미터 오브젝트
 *           targetName - target명
 *           checkedCode - 체크된 코드 값(option)
 * @return : None
 * @since  : 2011/08/11
 * @author : gagamel
 */
function cfAjaxCheckbox(params, targetName, checkedCode) {
	params.TARGET_NAME = targetName;
	params.CHECKED_CODE = checkedCode;

	var oTarget = document.getElementById(targetName);

	$.get("/renderer.do", $.param(params), function(result) { $(oTarget).html(result); }, "html");
}


/**
 * 이니시스 전표팝업
 * @Function: hsmob-common.js
 * @author syson
 * @date: 2014. 8. 21.
 * @param tid
 */
function cfShowReceiptInicis(tid){
	window.open( "https://iniweb.inicis.com/app/publication/apReceipt.jsp?noTid="+tid+"&noMethod=1","popWinName","menubar=1,toolbar=no,width=431,height=724,resize=1,left=252,top=116" );
}


/**
 * LG CNS 전표팝업(카카오페이)
 * @Function: hsmob-common.js
 * @author syson
 * @date: 2015. 7. 7.
 * @param tid
 */
function cfCnsprintReceipt(tid) {
	var status = "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=420,height=540";
	var url = "https://mms.cnspay.co.kr/trans/retrieveIssueLoader.do?TID="+tid+"&type=0";
	window.open(url,"popupIssue",status);
}

/**
 * PAYCO 전표 팝업
 * @Function: hsmob-common.js
 * @author syson
 * @date: 2016. 1. 12.
 * @param tid
 * @param serverType
 */
function cfShowReceiptPayco(tid, serverType) {
	var status = "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=500,height=850";
	var url = "https://bill.payco.com/outseller/receipt/" + tid;
	
	if( serverType == "DEV" ) {
		url = "https://alpha-bill.payco.com/outseller/receipt/" + tid;
	}
	
	window.open(url,"PopReceiptPayco",status);
}

/* 데이콤 추가 */
function cfShowReceiptDacom(tid){
	/* 신용카드 매출전표 조회 - U+ */
	    var mertid = '<%//=mertid%>';
	    var tid = noTid;
	    var authdata = auth;
	  //  window.open("http://pgweb.dacom.net/pg/wmp/etc/jsp/Receipt_Link.jsp?mertid="+mertid+"&tid="+tid+"&authdata="+authdata,"eCreditReceipt","toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=450, height=600");

}

/* 갤럭시아 컴즈 추가 */
function cfShowReceiptGalaxia(tid, serviceId) {
	// serviceId : 확인하고자 하는 결제건의 가맹점M ID
	//transNm : 빌게이트 측 거래번호
    var url = "https://cpadmin.billgate.net/billgate/common/authCardReceipt.jsp?mid="+serviceId+"&transNm="+tid+"&currTp=0000"; // 상용
	//var url = "http://tcp.billgate.net/billgate/common/authCardReceipt.jsp?mid="+serviceId+"&transNm="+tid+"&currTp=0000"; // 테스트
   window.open(url, "galaxiaReceipt","toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=450, height=750");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 파일 확장자를 기준으로 허용 여부를 반환한다.
 * <pre>
 *     var ext = "xls|xlsx";
 *     
 *     var isAllow = cfIsAllowFile(document.forms[0].FILE_NM.value.toLowerCase(), ext);
 * </pre>
 * @param  : fileName - file name
 * @param  : sExtension - 파일 확장자 String
 * @return : true - 허용
 *           false - 허용 안 됨.
 * @since  : 2011/08/26
 * @author : gagamel
 */
function cfIsAllowFile(fileName, sExtension) {
	// 파일 확장자 추출
	var extension = fileName.substring(fileName.lastIndexOf(".") + 1);
  
	if (sExtension.indexOf(extension) > -1) {
		return true;		
	}

	return false;
}

/**
 * 입력값이 이메일을 구성할 수 있는 문자들로 구성되어 있는지 체크
 * 단순한 이메일 입력포맷을 확인한다.
 * @param value - 이메일 주소
 * @return true 이메일 구성이 가능한 문자들로 구성되어 있을 경우
 */
function cfIsAvailableEmail(value) {
	var regexp = /^[-!#$%&\'*+\\./0-9=?A-Z^_a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_a-z{|}~]+$/;
	
	if (regexp.test(value))
		return true;

	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : Form 객체를 가지고 JQuery를 이용한 Submit 처리
 * <pre>
 *     cfAjaxSubmitForm(document.loginForm, "/member.do?cmd=loginAjax", "jsonp", jfLoginResult);
 * </pre>
 * 위와같이 사용했을 경우 true를 리턴한다.
 * @param  : formId - document form
 *           actionUrl - The URL to submit
 *           type - The data's type(text, html, xml, json, jsonp)
 *           callback - This attribute is optional.
 *               If type is 'html' then it is target's name when the result success.
 *               Otherwise it is function which calls when the result success.
 * @author : gagamel
 * @since  : 2014/08/21
 */
function cfAjaxSubmitForm(formId, actionUrl, type, callback) {
	if (type === "jsonp") {
		$.ajax({
			type : "POST",
			url : actionUrl,
			data : $("form[name='" + formId.name + "']").serialize(),
			dataType : type,
			jsonp : "callback",
			beforeSend : function() {
				// Button disabled
				
				// ProgressBar show
			},
			complete : function() {
				// Button enabled
				
				// ProgressBar hide
			},
			success : function(result) {
				if (typeof(callback) === "function")
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
			beforeSend : function() {
				// Button disabled
				
				// ProgressBar show
			},
			complete : function() {
				// Button enabled
				
				// ProgressBar hide
			},
			success : function(result) {
				if (type === "html") {
					if (!ngjfIsNull(callback))
						$(document.getElementById(callback)).html(result);
				} else {
					// Callback 함수 호출
					if (typeof(callback) === "function")
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
 * @desc   : Form 객체 없이 JQuery를 이용한 submit 처리
 *           파라미터의 명칭은 쿼리문과 동일하게 작성해야 한다.
 * <pre>
 *     var params = new Object();
 *     params.cmd = "getCodeDetailComboList";
 *     params.GROUP_CD = "G900";
 *     params.CODE = "0202";
 *     
 *     cfAjaxSubmit("/renderer.do", params, "json", jfCallback);
 * </pre>
 * @param  : actionUrl - action url
 * 			 params - 파라미터 오브젝트
 *           type - 처리결과 형식(text, html, xml, json)
 *           callback - type이 text, xml, json 일 때는 콜백함수명
 *                      type이 html일 때는 target명
 * @return : None
 * @since  : 2014/08/24
 * @author : gagamel
 */
function cfAjaxSubmit(actionUrl, params, type, callback) {

	$.post(actionUrl
		, $.param(params)
		, function(result) {

			if (type == "html") {
				if (!ngjfIsNull(callback))
					$(document.getElementById(callback)).html(result);
			} else {
				// Callback 함수 호출
				if (typeof (callback) == "function")
					callback.call(this, result);
			}
		}, type);
}


/**
 * 컨트롤키 막음
 * @Function: exrweb-common.js
 * @author yspark
 * @date: 2014. 8. 25.
 */
function cfCheckControlKey() {
	if (event.keyCode == 17) {
		alert("Ctrl 키는 사용하실 수 없습니다.");
	}
}


/*function cfGetLenByByte(valueR) {
	var byteLength = 0;

	for (var inx = 0; inx < valueR.length; inx++) {
		var oneChar = escape(valueR.charAt(inx));
		if (oneChar.length == 1) {
			byteLength ++;
		} else if (oneChar.indexOf("%u") != -1) {
			byteLength += 3;
			byteLength ++;
		}
	}

	return byteLength;
}*/

/**
 * 입력 받은 폼태그(Object)의 문자열의 길이가 특정 길이(Int) 이면
 * 다른 객체(Object)로 포커스를 이동
 * @param obj   대상 폼태그(Object)
 * @param len   비교할 길이
 * @param dest  포커스를 이동할 폼태그(Object)
 * @return
*/
function cfCheckLengthAndMoveFocus(obj, len, dest) {
	if (obj.value.length == len) {
		dest.focus();
	}
}

function cfCheckLengthAndBlur(obj, len) {
	if (obj.value.length == len) {
		obj.blur();
	}
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!cfContainsCharsOnly(form.blood, "ABO")) {
 *         Alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 * @param obj   Object
 * @return true 특정 문자가 있을 경우
 */
function cfContainsCharsOnly(obj,chars) {
	var val = obj.value.trim();
	
	if (typeof(val) == 'undefined') {
		return false;
	}
	
	if (val.length == 0) {
		return false;
	}
	
	for (var inx = 0; inx < val.length; inx++) {
		if (chars.indexOf(val.charAt(inx)) == -1) {
			return false;
		}
	}
	
	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 입력 필드의 문자열 길이를 바이트로 체크한다.
 * <pre>
 *     cfCheckTextByte(document.forms[0].CONTENTS, 4000);
 *     
 *     or
 *     
 *     <span id="CONTENTS_LENGTH"></span>
 *     cfCheckTextByte(document.forms[0].CONTENTS, 4000, 'CONTENTS_LENGTH');
 * </pre>
 * @param  : obj - 입력 필드 오브젝트
 * @param  : maxLen - 최대길이(bytes 수)
 * @param  : dpLoc - optional. 현재의 길이를 표시할 곳
 * @return : None
 * @since  : 2011/09/19
 * @author : gagamel
 */
function cfCheckTextByte(obj, maxLen, dpLoc) {
	var valLen = obj.value.length;

	var len = 0;
	var newtext = "";

	if (valLen > 0) {
		for (var i = 0 ; i < valLen; i++) {
			var c = escape(obj.value.charAt(i));
			if (c.length == 1) len ++;
			else if (c.indexOf("%u") != -1) len += 3;
			else if (c.indexOf("%") != -1) len++; //len += c.length/3;

			if (len <= maxLen) { 
				newtext += unescape(c);

				if (typeof(dpLoc) != "undefined") {
					document.getElementById(dpLoc).innerHTML = len;
				}
			}
		}
	} else {
		if (typeof(dpLoc) != "undefined")
			document.getElementById(dpLoc).innerHTML = valLen;
	}

	if (len > maxLen) {
		obj.value = newtext;
		obj.focus();
		return false;
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 입력 필드의 글자수를 체크한다.
 * <pre>
 *     cfCheckTextLength(document.forms[0].CONTENTS, 4000);
 *     
 *     or
 *     
 *     <span id="CONTENTS_LENGTH"></span>
 *     cfCheckTextLength(document.forms[0].CONTENTS, 4000, 'CONTENTS_LENGTH');
 * </pre>
 * @param  : obj - 입력 필드 오브젝트
 * @param  : maxLen - 최대길이(글자 수)
 * @param  : dpLoc - optional. 현재의 길이를 표시할 곳
 * @return : true: 최대길이를 넘지 않음
 * @since  : 2016/03/10
 * @author : gagamel
 */
function cfCheckTextLength(obj, maxLen, dpLoc) {
	var valLen = obj.value.length;

	if (typeof(dpLoc) != "undefined") {
		if (valLen <= maxLen) { 
			$('#' + dpLoc).html(valLen);
		}
	}

	if (valLen > maxLen) {
		obj.value = obj.value.substr(0, obj.value.length - 1);
		obj.focus();
		return false;
	}
	
	return true;
}

/**
 * 비밀번호 형식 검증
 * @Function: exrweb-common.js
 * @author yspark
 * @date: 2014. 9. 2.
 * @param el
 * @returns {Boolean}
 */
function cfIsValidPassword(el) {
	var pattern  = /^[a-zA-Z0-9,~,!,@,#,$,%,^,&,*,?,+,_]{6,20}$/;
	var pattern1 = /[a-z,A-z]{1,}/;
	var pattern2 = /[0-9]{1,}/;

	if (!pattern.test(el.value)) {
		alert("비밀번호는 영문 대/소문자,숫자로 조합하여 8자리 이상이여야 합니다.\n(특수문자 ~!@#$%^&*? 입력가능)");
		return false;
	}

	var patternCnt = 0;

	if (pattern1.test(el.value)) {
		patternCnt++;
	}

	if (pattern2.test(el.value)) {
		patternCnt++;
	}

	if (patternCnt < 2 || el.value.length < 8) {
		alert("비밀번호는 영문 대/소문자,숫자로 조합하여 8자리 이상이여야 합니다.\n(특수문자 ~!@#$%^&*? 입력가능)");
		return false;
	} else {
		return true;
	}
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 * @param obj   Object
 * @return true : 공백
 */
/*function cfIsEmpty(obj) {
	if (obj.value == null || obj.value.replace(/ /gi,"") == "") {
		return true;
	}
	
	return false;
}*/

// 상품쿠폰받기
/*function cfAjaxDownCoupon(couponid) {
	var params = new Object();
	params.cmd = "createAjaxCouponDown";
	params.COUPON_ID = couponid;
	$.get("/product.do", $.param(params), 
	function(result) { 
		if( result == "Y" ) {
			alert("상품쿠폰을 성공적으로 받았습니다.\n주문결제 시 사용 가능하며,\n[MY PAGE > 쿠폰조회]에서도 확인 가능합니다.");
		} else if (result == "A") {
			alert("이미 쿠폰을 발급 받으셨습니다.\n[MY PAGE > 쿠폰조회]에서 확인해 주세요.");
		} else if (result == "B" || result == "C") {
			alert("다운로드할 수 없는 쿠폰입니다.");
		} else if (result == "L") {
			alert("발행횟수제한 초과 쿠폰입니다.");
		} else if (result == "X") {
			alert("유효기간이 만료된 쿠폰입니다.");
		} else {
			alert("이미 다운로드되었거나 다운로드 할수 없는 쿠폰입니다.");
		}	
	}, "text");
}*/

function MM_findObj(n, d) { //v4.0 
	var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) { 
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);} 
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n]; 
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); 
	if(!x && document.getElementById) x=document.getElementById(n); return x; 
} 

function cfOff(div,off){
	var fun = (document.all) ? "document.getElementById" : "MM_findObj";
	var obj = (document.all) ? document.getElementById(div) : MM_findObj(div);
	var dw = null;
	var div2 = "#" + div;;
	var objxsize = 0;

	if (obj) {
		if (document.all) { 
			dw = document.body.clientWidth; 
		} else {
			dw = innerWidth; 
		}
		
		dw = (dw/2)-0;

		//x = (document.layers) ? ".left" : ".style.left";
		
		if (off != '100%' && off != '-100%') {
			off = off-0;
			if (dw>off) {
				objxsize = dw + off;
			} else {
				objxsize = 0;
			}
			
			$(div2).each(function() {
				$(div2).css('left',objxsize);
			});
		}
	}	
	
}

function cfAddEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else {
		// assign each event handler a unique ID
		if (!handler.$$guid) handler.$$guid = cfAddEvent.guid++;
		// create a hash table of event types for the element
		if (!element.events) element.events = {};
		// create a hash table of event handlers for each element/event pair
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			// store the existing event handler (if there is one)
			if (element["on" + type]) {
				handlers[0] = element["on" + type];
			}
		}
		// store the event handler in the hash table
		handlers[handler.$$guid] = handler;
		// assign a global event handler to do all the work
		element["on" + type] = cfHandleEvent;
	}
};

function cfHandleEvent(event) {
	var returnValue = true;
	// grab the event object (IE uses a global event object)
	event = event || cfFixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
	// get a reference to the hash table of event handlers
	var handlers = this.events[event.type];
	// execute each event handler
	for (var i in handlers) {
		this.$$handleEvent = handlers[i];
		if (this.$$handleEvent(event) === false) {
			returnValue = false;
		}
	}
	return returnValue;
};

//offsetTop = e8에선 제대로 되는데 e7에선 안된다.
//e7 or e8 에서 offsetTop의 두 값은 동일하나  e7에서는 제대로 안된다.
//그래서 이 함수 선언 
function cfFindoffsetTop(obj){
	var vTop = 0;                
if(obj.offsetParent){            
do{
   vTop += obj.offsetTop;            
 } while(obj = obj.offsetParent);        
}        
return vTop;    
}
/**
 * @type   : function
 * @access : public
 * @desc   : 값이 null 이거나 white space 문자로만 이루어진 경우 true를 리턴한다.
 * <pre>
 *     cfIsNull("  ");
 * </pre>
 * 위와같이 사용했을 경우 true를 리턴한다.
 * @param  : value - 필수 입력 값
 * @return : boolean. null(혹은 white space) 여부
 * @author :
 */
function cfIsNull(value) {
	if (value == null || (typeof(value) == "string" && value.trim() == "")) {
		return true;
	}

	return false;
}
/**
 * 입력값을 숫자로만 입력 가능하게 한다
 */
function cfOnlyNumber(obj) {	
	obj.value = obj.value.trim();
	if(!cfIsNull(obj.value) && cfIsNumber(obj) != true){
		alert("숫자만 입력 가능합니다.");
		obj.value = "";
    }
}
/**
 * 입력된 문자열이 숫자 만을 포함하고 있는지 여부 리턴
 * @param obj   Object
 * @return true - 숫자만을 포함하고 있는 경우
*/
function cfIsNumber(obj) {
	var chars = "0123456789";
	return cfContainsCharsOnly(obj,chars);
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         Alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 * @param obj   Object
 * @return true 특정 문자가 있을 경우
 */
function cfContainsCharsOnly(obj,chars) {
	
	var val = obj.value.trim();
	
	if( typeof(val) == 'undefined' ) {
		return false;
	}
	
	if( val.length == 0 ) {
		return false;
	}
	
	for (var inx = 0; inx < val.length; inx++) {
		if (chars.indexOf(val.charAt(inx)) == -1) {
			return false;
		}
	}
	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 입력 필드의 문자열 길이를 체크한다.
 * <pre>
 *     cfLengthCheck(document.forms[0].CONTENTS, 4000);
 *     
 *     or
 *     
 *     <span id="CONTENTS_LENGTH"></span>
 *     cfLengthCheck(document.forms[0].CONTENTS, 4000, 'CONTENTS_LENGTH');
 * </pre>
 * @param  : obj - 입력 필드 오브젝트
 * @param  : maxLen - 최대길이(bytes 수)
 * @param  : dpLoc - optional. 현재의 길이를 표시할 곳
 * @return : None
 * @since  : 2011/09/19
 * @author : gagamel
 */
function cfLengthCheck(obj, maxLen, dpLoc) {
  var valLen = obj.value.length;
  
  var len = 0;
  var newtext = "";

  if (valLen > 0) {
    for (var i = 0 ; i < valLen; i++) {
      var c = escape(obj.value.charAt(i));
      if (c.length == 1) len ++;
      else if (c.indexOf("%u") != -1) len += 3;
      else if (c.indexOf("%") != -1) len++; //len += c.length/3;
    
      if (len <= maxLen) { 
    	  newtext += unescape(c);
    	  
    	  if (typeof(dpLoc) != "undefined") {
    		  document.getElementById(dpLoc).innerHTML = len;
    	  }
      }
    }
  } else {
    if (typeof(dpLoc) != "undefined")
      document.getElementById(dpLoc).innerHTML = valLen;
  }

  if (len > maxLen) {
    obj.value = newtext;
    obj.focus();
    return false;
  }
}


/**
 * @type   : function
 * @access : public
 * @desc   : 입력 필드의 글자수를 체크한다.
 * <pre>
 *     cfLengthCheck2(document.forms[0].CONTENTS, 4000);
 *     
 *     or
 *     
 *     <span id="CONTENTS_LENGTH"></span>
 *     cfLengthCheck2(document.forms[0].CONTENTS, 4000, 'CONTENTS_LENGTH');
 * </pre>
 * @param  : obj - 입력 필드 오브젝트
 * @param  : maxLen - 최대길이(글자 수)
 * @param  : dpLoc - optional. 현재의 길이를 표시할 곳
 * @return : None
 * @since  : 2014/08/25
 * @author : syson
 */
function cfLengthCheck2(obj, maxLen, dpLoc) {
  var valLen = obj.value.length;
  
  if (typeof(dpLoc) != "undefined") {
	  if (valLen <= maxLen) { 
		  document.getElementById(dpLoc).innerHTML = valLen;
	  }
  }

  if (valLen > maxLen) {
	obj.value = obj.value.substr(0, obj.value.length-1);
	obj.focus();
	return false;
  }
}

/**
 * 입력값을 콤마가 포함된 문자열로 변환하여 리턴
 * @param str   숫자
 * @return ret  콤마를 추가한 숫자
*/
function cfStrAddComma(val) {
	var ret;

	//숫자앞에 있는 "0"을 먼저 삭제함. - 2004.9.12		
	var numstr = val + "";
	var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
	var arrNumber = numstr.split('.');
	arrNumber[0] += '.';
	do {
			arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
	}		
	while (rxSplit.test(arrNumber[0]));

	if (arrNumber.length > 1) {
			ret = arrNumber.join('');
	} else {
			ret = arrNumber[0].split('.')[0];
	}

	return ret;
}