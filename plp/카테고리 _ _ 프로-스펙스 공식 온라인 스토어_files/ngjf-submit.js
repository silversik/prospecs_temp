/*
 * Submit Java Script of nogdoo.com
 *
 * Copyright (c) 2014 gagamel (nogdoo.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2014-06-13 $
 */
var GV_ENG   = "eng";   // 영문
var GV_UENG  = "ueng";  // 영문대문자
var GV_LENG  = "leng";  // 영문소문자
var GV_ENUM  = "enum";  // 영문자+숫자
var GV_ENUM_ = "enum_"; // 영문자+숫자+_
var GV_UENUM = "uenum"; // 영문대문자+숫자
var GV_LENUM = "lenum"; // 영문소문자+숫자
var GV_TNUM  = "tnum";  // 텍스트숫자(콤마(,) 없다)
var GV_TINT  = "tint";  // 텍스트 양의정수(콤마(,) 없다)
var GV_NUM   = "num";   // 숫자
var GV_PINT  = "pint";  // 양의정수
var GV_INT   = "int";   // 정수
var GV_PREAL = "preal"; // 양의실수
var GV_REAL  = "real";  // 실수
var GV_DATE  = "date";  // 날짜
var GV_POST  = "post";  // 우편번호
var GV_RESI  = "resi";  // 주민등록번호
var GV_UENUM_ = "uenum_";	// 영문 대문자+숫자+_

// 정규표현식
var GV_PATTERN_ENG   = /^[a-zA-Z]+$/;                                                                       // 영문 대소문자
var GV_PATTERN_UENG  = /^[A-Z]+$/;                                                                          // 영문 대문자
var GV_PATTERN_LENG  = /^[a-z]+$/;                                                                          // 영문 소문자
var GV_PATTERN_ENUM  = /^[a-zA-Z0-9]+$/;                                                                    // 영문자+숫자
var GV_PATTERN_ENUM_ = /^[a-zA-Z0-9_]+$/;                                                                   // 영문자+숫자+_
var GV_PATTERN_NUM   = /^[0-9]+\d*$/;                                                                       // 숫자
var GV_PATTERN_PINT  = /(^[1-9]+\d*$)/;                                                                     // 양의정수
var GV_PATTERN_INT   = /(^-?[1-9]+\d*$)|(^-$)/;                                                             // 정수
var GV_PATTERN_PREAL = /^(([1-9]+\.?)|(0\.?)|(\.?))[0-9]*$/;                                                // 양의실수
var GV_PATTERN_REAL  = /^-?(([1-9]+\.?)|(\.?))\d*$/;                                                        // 실수
var GV_PATTERN_DATE  = /([1-9][0-9]{3})((0[1-9]{1})|(1[0-2]{1}))(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-1]{1})/; // 날짜
var GV_PATTERN_POST  = /[0-9]{3}-[0-9]{3}/;                                                                 // 우편번호
var GV_PATTERN_RESI  = /[0-9]{6}(1|2|3|4|5|6|7|8)[0-9]{6}/;                                                 // 주민등록번호
var GV_PATTERN_UENUM_ = /^[A-Z0-9_]+$/;                                                                  	// 영문 대문자+숫자+_

/**
 * @type   : function
 * @access : public
 * @desc   : <input> 태그에 대한 키눌림에 대한 정규표현식을 근거로 validation을 체크한다.
 *           윈도우가 로딩되면 keyup 이벤트에 filter()를 처리기로 등록한다.
 *           단, IE에서는 기존에 정의한 onkeyup 이벤트는 작동되지 않는다.
 *           vtype의 종류에 따라 입력 시점에 체크된다.
 * <pre>
 *     <input type="text" ... vtype="eng"/>   <!-- 영문 -->
 *     <input type="text" ... vtype="ueng"/>  <!-- 영문대문자 -->
 *     <input type="text" ... vtype="leng"/>  <!-- 영문소문자 -->
 *     <input type="text" ... vtype="enum"/>  <!-- 영문자+숫자 -->
 *     <input type="text" ... vtype="uenum"/> <!-- 영문대문자+숫자 -->
 *     <input type="text" ... vtype="lenum"/> <!-- 영문소문자+숫자 -->
 *     <input type="text" ... vtype="tnum"/>  <!-- 텍스트숫자(콤마(,) 없다) -->
 *     <input type="text" ... vtype="tint"/>  <!-- 텍스트 양의정수(콤마(,) 없다) -->
 *     <input type="text" ... vtype="num"/>   <!-- 숫자 -->
 *     <input type="text" ... vtype="pint"/>  <!-- 양의정수 -->
 *     <input type="text" ... vtype="int"/>   <!-- 정수 -->
 *     <input type="text" ... vtype="preal"/> <!-- 양의실수 -->
 *     <input type="text" ... vtype="real"/>  <!-- 실수 -->
 *     <input type="text" ... vtype="date"/>  <!-- 날짜 -->
 *     <input type="text" ... vtype="post"/>  <!-- 우편번호 -->
 *     <input type="text" ... vtype="resi"/>  <!-- 주민등록번호 -->
 * </pre>
 * @param  : None
 * @return : None
 * @since  : 2009/02/13
 * @author : gagamel
 */
(
function() { // 모듈 전체는 익명 함수 내에 위치한다.
  //윈도우가 로딩되면, 아래의 init() 함수를 호출한다.
  if (window.addEventListener)
    window.addEventListener("load", init, false); // DOM level 2
  else if (window.attachEvent)
    window.attachEvent("onload", init); // IE 5 이상

  //이벤트 처리기를 등록해야 하는 모든 tag를 찾는다.
  function init() {
    for (var k = 0; k < document.forms.length; k++) {
      // form
      var f = document.forms[k];

      for (var i = 0; i < f.elements.length; i++) {
    	var tag = f.elements[i];

        // <input> 태그 중 type이 text인 것만 입력 시점에 바로 validation을 체크하는 처리기를 등록한다.
        if (tag.type != "text") continue;

        var vtype = tag.getAttribute("vtype"); // validation type
        if (vtype) { // vtype attribute가 있는 것만
          // <input> 태그에 대한 이벤트 처리기를 등록한다.
          if (tag.addEventListener) { // DOM level 2
            tag.addEventListener("keyup", filter, false);
            switch (vtype) {
              case GV_NUM:
              case GV_PINT:
              case GV_INT:
              case GV_PREAL:
              case GV_REAL:
                tag.addEventListener("blur", comma, false);
                break;
            }
          } else { // IE 4
            tag.onkeyup = filter;
            switch (vtype) {
              case GV_NUM:
              case GV_PINT:
              case GV_INT:
              case GV_PREAL:
              case GV_REAL:
                tag.onblur = comma;
                break;
            }
          }
        }
      }
    }
  }

  /**
   * 사용자의 입력을 걸러내는 keyup 처리기이다.
   * 입력 시점에 바로 체크된다.
   */
  function filter(event) {
    // 이벤트 객체와 문자 코드를 호환 가능한 방식으로 얻는다.
    var e = event || window.event;      // 키 이벤트 객체
    var code = e.charCode || e.keyCode; // 어떤 키가 눌러졌는가?

    if (e.charCode == 0) return true;       // 기능키
    if (e.ctrlKey || e.altkey) return true; // Ctrl이나 Alt 키가 눌렸다.
    if (code < 32) return true;             // ASCII 제어문자

    var invalid = false;

    var vtype = this.getAttribute("vtype"); // validation type
    var data = this.value;
    data = data.replace(/(^\s*)|(\s*$)/g, "");

    switch (vtype) {
      case GV_ENG: // 영문
        if (!ngjf.checkPattern(GV_PATTERN_ENG, data)) invalid = true;
        break;

      case GV_UENG: // 영문대문자
        if (!ngjf.checkPattern(GV_PATTERN_UENG, data)) invalid = true;
        break;

      case GV_LENG: // 영문소문자
        if (!ngjf.checkPattern(GV_PATTERN_LENG, data)) invalid = true;
        break;

      case GV_ENUM: // 영문+숫자
        if (!ngjf.checkPattern(GV_PATTERN_ENUM, data)) invalid = true;
        break;
        
      case GV_ENUM_: // 영문+숫자
    	  if (!ngjf.checkPattern(GV_PATTERN_ENUM_, data)) invalid = true;
    	  break;

      case GV_UENUM: // 영문대문자+숫자
        this.value = data.toUpperCase();
   	    if (!ngjf.checkPattern(GV_PATTERN_ENUM, data.toUpperCase())) invalid = true;
        break;

      case GV_LENUM: // 영문소문자+숫자
        this.value = data.toLowerCase();
        if (!ngjf.checkPattern(GV_PATTERN_ENUM, data.toLowerCase())) invalid = true;
        break;

      case GV_TNUM: // 텍스트 숫자(콤마(,)가 없다)
        if (!ngjf.checkPattern(GV_PATTERN_NUM, data)) invalid = true;
        break;

      case GV_TINT: // 텍스트 양의정수(콤마(,)가 없다)
        if (!ngjf.checkPattern(GV_PATTERN_PINT, data)) invalid = true;
        break;

      case GV_NUM: // 숫자
        if (!ngjf.checkPattern(GV_PATTERN_NUM, ngjf.hideComma(data))) invalid = true;
        break;

      case GV_PINT: // 양의 정수
        if (!ngjf.checkPattern(GV_PATTERN_PINT, ngjf.hideComma(data))) invalid = true;
        break;

      case GV_INT: // 정수
        if (!ngjf.checkPattern(GV_PATTERN_INT, ngjf.hideComma(data))) invalid = true;
        break;

      case GV_PREAL: // 양의 실수
        if (!ngjf.checkPattern(GV_PATTERN_PREAL, ngjf.hideComma(data))) invalid = true;
        break;

      case GV_REAL: // 실수
        if (!ngjf.checkPattern(GV_PATTERN_REAL, ngjf.hideComma(data))) invalid = true;
        break;

      case GV_DATE: // 날짜
        if (!ngjf.checkPattern(GV_PATTERN_PINT, data)) invalid = true;
        if (data.length == 8) {
          if (!ngjf.checkPattern(GV_PATTERN_DATE, data))
            invalid = true;
          else
            this.value = data.substring(0,4) + "-"
          	           + data.substring(4,6) + "-"
          	           + data.substring(6);
        }
        break;
      
      case GV_RESI: // 주민등록번호
        if (!ngjf.checkPattern(GV_PATTERN_INT, data)) invalid = true;
        if (data.length == 13)
          if (!ngjf.checkPattern(GV_PATTERN_RESI, data)) invalid = true;
        break;
      
      case GV_UENUM_: // 영문 대문자+숫자+_
    	  this.value = data.toUpperCase();
    	  if (!ngjf.checkPattern(GV_PATTERN_UENUM_, data.toUpperCase())) invalid = true;
    	  break;
    }

    // 정규표현식이 맞지 않으면 keyup 이벤트를 거부한다.
    if (invalid) {
      this.value = "";
      if (e.preventDefault) e.preventDefault(); // DOM level 2
      if (e.returnValue) e.returnValue = false; // IE 4
      return false;
    }

    return true;
  }

  /**
   * @type   : function
   * @access : public
   * @desc   : 숫자 데이터에 콤마(,)를 표시한다.
   * @param  : num - 콤마(,)를 추가할 값
   * @return : 콤마(,)가 추가된 값
   * @since  : 2009/02/13
   * @author : gagamel
   */
  function comma() {
    this.value = ngjf.showComma(ngjf.hideComma(this.value));
  }
}
)();

/**
 * @type   : function
 * @access : public
 * @desc   : submit 시 진행상태를 표시해 주고 정상 처리 시 callback 함수를 호출,
 *           오류 시는 진행상태를 제거.
 * @return : None
 * @date   : 2009/03/11
 * @author : gagamel
 */
if (!ngjf) var ngjf = {};

var GV_SUBMIT_STATUS = false;   //reset/post 중복방지
var GV_OBJECT        = document.all;
var GV_INTERVAL      = "";
var GV_FORM          = "";      // form ID
var GV_URL           = "";      // URL
var GV_CALL_BACK     = "";      // call back function
var GV_TARGET        = "_self"; // target
var GV_DOC           = null;

/**
 * location.href
 * <pre>
 *     ngjf.href("/retrieveList.jsp", "_self"); 또는
 *     ngjf.href("/retrieveList.jsp");
 * </pre>
 * @param  : action - URL to submit
 *           target - target(optional)
 */
ngjf.href = function(action, target) {
  GV_URL = action;
  GV_TARGET = target;
  if (typeof(GV_TARGET) == "undefined") GV_TARGET = "_self";

  // ngjf.post() 처리 후에 ngjf.get()을 할 경우 progress bar 제거
  if (typeof(GV_OBJECT.oProgressBar) != "undefined") {
    GV_OBJECT.oProgressBar.outerHTML = "";
  }

  var contents = ngjf.init();

  ngjf.open(contents);

  GV_OBJECT.oProgressBar.style.visibility = "visible";

  GV_INTERVAL = window.setTimeout(ngjf.gotopage,300);
};

/**
 * GET 방식 처리
 * <pre>
 *     ngjf.get(document.frm, "/retrieveList.jsp", "_self"); 또는
 *     ngjf.get(document.frm, "/retrieveList.jsp");
 * </pre>
 * @param  : formId - document form
 *           action - URL to submit
 *           target - target(optional)
 */
ngjf.get = function(formId, action, target) {
  GV_FORM = formId;
  GV_URL = action;
  GV_TARGET = target;
  if (typeof(GV_TARGET) == "undefined") GV_TARGET = "_self";

  // ngjf.post() 처리 후에 ngjf.get()을 할 경우 progress bar 제거
  if (typeof(GV_OBJECT.oProgressBar) != "undefined") {
    GV_OBJECT.oProgressBar.outerHTML = "";
  }

  var contents = ngjf.init();

  ngjf.open(contents);

  GV_OBJECT.oProgressBar.style.visibility = "visible";

  GV_INTERVAL = window.setTimeout(ngjf.submit,300);
};

/**
 * POST 방식 처리
 * <pre>
 *     ngjf.post(document.frm, "/saveUserInfo.jsp", "jfList", "hiddenframe");
 * </pre>
 * @param  : formId   - document form
 *           action   - URL to submit
 *           callback - call back function(optional)
 *           target   - target(optional)
 */
ngjf.post = function(formId, action, callback, target) {
  if (GV_SUBMIT_STATUS)  {
    alert("처리중입니다. 잠시만 기다려 주십시오.");
    return;
  }
  
  GV_SUBMIT_STATUS = true;

  GV_FORM = formId;
  GV_URL = action;
  
  GV_TARGET = target;
  if (typeof(GV_TARGET) == "undefined") GV_TARGET = "_self";
  
  GV_CALL_BACK = callback;
  if (GV_CALL_BACK != "")
    if (typeof(GV_CALL_BACK) != "undefined" && GV_CALL_BACK.indexOf("()") == -1)
      GV_CALL_BACK += "()";

  var contents = ngjf.init();

  ngjf.open(contents);

  GV_OBJECT.oProgressBar.style.visibility = "visible";

  GV_INTERVAL = window.setTimeout(ngjf.submit, 300);
};

/**
 * JQuery를 이용한 POST 방식 처리
 * <pre>
 *     ngjf.ajax(document.frm, "/saveUserInfo.jsp", "json", jfSearch);
 * </pre>
 * @param  : formId   - document form
 *           actionUrl   - URL to submit
 *           dataClass - data's type(text, html, xml, json)
 *           callback - optional.
 *               If dataClass is 'html' then it is target's name.
 *               Otherwise it is function which calls when the result success.
 */
ngjf.ajax = function(formId, actionUrl, dataClass, callback) {
  if (GV_SUBMIT_STATUS)  {
    alert("처리중입니다. 잠시만 기다려 주십시오.");
    return;
  }

  GV_SUBMIT_STATUS = true;

  GV_FORM = formId;
  GV_URL = actionUrl;
  GV_CALL_BACK = callback;

  $.ajax({
      type: "POST"
    , url: GV_URL
    , data: $("form[name='" + GV_FORM.name + "']").serialize()
    , dataType: dataClass
    , beforeSend: function() {
	    var contents = ngjf.init();
        ngjf.open(contents);
        GV_OBJECT.oProgressBar.style.visibility = "visible";
        
        // Button disabled
        for (var i = 0; i < GV_OBJECT.length; i++) {
          try {
            if (GV_OBJECT[i].type.toUpperCase() == "BUTTON") {
              GV_OBJECT[i].disabled = true;
            }
          } catch (exception) {}
        }
      }
    , complete: function() {
	    ngjf.close();
      }
    , success: function(result) {
        if (dataClass == "html") {
          if (typeof(GV_CALL_BACK) == "string")
            $(document.getElementById(GV_CALL_BACK)).html(result);
        } else {
          // Callback 함수 호출
          if (typeof(GV_CALL_BACK) == "function")
            GV_CALL_BACK.call(this, result);
        }
      }
    , error: function() {
	    alert("오류로 인해 처리되지 않았습니다.");
      }
  });
};

/**
 * JQuery를 이용한 POST 방식 처리 (동기화 방식)
 * <pre>
 *     ngjf.ajax.sync(document.frm, "/saveUserInfo.jsp", "json", jfSearch);
 * </pre>
 * @param  : formId   - document form
 *           actionUrl   - URL to submit
 *           dataClass - data's type(text, html, xml, json)
 *           callback - optional.
 *               If dataClass is 'html' then it is target's name.
 *               Otherwise it is function which calls when the result success.
 */
ngjf.ajax.sync = function(formId, actionUrl, dataClass, callback) {
  if (GV_SUBMIT_STATUS)  {
    alert("처리중입니다. 잠시만 기다려 주십시오.");
    return;
  }

  GV_SUBMIT_STATUS = true;

  GV_FORM = formId;
  GV_URL = actionUrl;
  GV_CALL_BACK = callback;

  $.ajax({
      type: "POST"
    , url: GV_URL
    , data: $("form[name='" + GV_FORM.name + "']").serialize()
    , dataType: dataClass
    , async: false
    , beforeSend: function() {
	    var contents = ngjf.init();
        ngjf.open(contents);
        GV_OBJECT.oProgressBar.style.visibility = "visible";
        
        // Button disabled
        for (var i = 0; i < GV_OBJECT.length; i++) {
          try {
            if (GV_OBJECT[i].type.toUpperCase() == "BUTTON") {
              GV_OBJECT[i].disabled = true;
            }
          } catch (exception) {}
        }
      }
    , complete: function() {
	    ngjf.close();
      }
    , success: function(result) {
        if (dataClass == "html") {
          if (typeof(GV_CALL_BACK) == "string")
            $(document.getElementById(GV_CALL_BACK)).html(result);
        } else {
          // Callback 함수 호출
          if (typeof(GV_CALL_BACK) == "function")
            GV_CALL_BACK.call(this, result);
        }
      }
    , error: function() {
	    alert("오류로 인해 처리되지 않았습니다.");
      }
  });
};

/**
 * Return contents of progress bar
 */
ngjf.init = function() {
  var progressHtml = "<img src=\"/sys/js/ngjf-loader.gif\" />";
  return progressHtml;
};

/**
 * Open progress bar
 */
ngjf.open = function(contents) {
  var progressFrame = '<iframe id=oProgressBar style="position:absolute;visibility:hidden;" marginwidth="0" marginheight="0" scrolling="no" frameborder=0></iframe>';  

  for (var i = 0; i < GV_OBJECT.length; i++) {
    if (GV_OBJECT[i].tagName.toLowerCase() == "body") {
      GV_OBJECT[i].insertAdjacentHTML("beforeEnd", progressFrame);
   
      // cross-domain-access에 따른 try~catch문 삽입
      try {
    	  GV_DOC = oProgressBar.document;
      } catch (exception) {
      }
      
      break;
    }
  }

  if (GV_DOC == null) {
    // cross-domain-access에 따른 주석 처리
    //alert("HTML Document에 body 태그가 없습니다.");
    return;
  }

  GV_DOC.open("text/html");
  GV_DOC.write(contents);

  var w = 32;
  var h = 32;
  var l = (document.body.offsetWidth - w) / 2;
  var t = (document.body.offsetHeight - h) / 2;
  GV_OBJECT.oProgressBar.style.width  = w;
  GV_OBJECT.oProgressBar.style.height = h;
  GV_OBJECT.oProgressBar.style.left   = l;
  GV_OBJECT.oProgressBar.style.top    = t;
};

/**
 * Submit
 */
ngjf.submit = function() {
  // Button disabled
  for (var i = 0; i < GV_OBJECT.length; i++) {
    try {
      if (GV_OBJECT[i].type.toUpperCase() == "BUTTON") {
        GV_OBJECT[i].disabled = true;
      }
    } catch (exception) {}
  }

  //window.clearInterval(GV_INTERVAL);
  window.clearTimeout(GV_INTERVAL);

  // Add call back function to elements
  if (GV_CALL_BACK != "") ngjf.callback(GV_FORM);
  
  // ie 9에서 잘 처리 안 됨.
  // Get a target frame
  if (GV_TARGET == "") GV_TARGET = ngjf.target();
  
  GV_FORM.action = GV_URL;
  GV_FORM.target = GV_TARGET;
  //GV_FORM.method = "post";
  GV_FORM.submit();
};

/**
 * document.location.href
 */
ngjf.gotopage = function() {
  // Button disabled
  for (var i = 0; i < GV_OBJECT.length; i++) {
    try {
      if (GV_OBJECT[i].type.toUpperCase() == "BUTTON") {
        GV_OBJECT[i].disabled = true;
      }
    } catch (exception) {}
  }

  //window.clearInterval(GV_INTERVAL);
  window.clearTimeout(GV_INTERVAL);

  document.location.href = GV_URL;
};

/**
 * Add call back function to elements
 */
ngjf.callback = function(formId) {
  var HIDDEN_CALL_BACK = "CALLBACK";
  if (document.getElementById(HIDDEN_CALL_BACK) == null) {
    //var cbElement = document.createElement("<input type='hidden' id='" + HIDDEN_CALL_BACK + "' name='" + HIDDEN_CALL_BACK + "' value='" + GV_CALL_BACK + "'>");
    var cbElement = document.createElement("input");
    cbElement.setAttribute("type", "hidden");
    cbElement.setAttribute("id", HIDDEN_CALL_BACK);
    cbElement.setAttribute("name", HIDDEN_CALL_BACK);
    cbElement.setAttribute("value", GV_CALL_BACK);
    formId.appendChild(cbElement);
  } else {
	document.getElementById(HIDDEN_CALL_BACK).value = GV_CALL_BACK;
  }
};

/**
 * Get a target frame
 */
ngjf.target = function() {
  var HIDDEN_FRAME = "hiddenframe";
  var hiddenFrame = document.getElementById(HIDDEN_FRAME);
  if (typeof(hiddenFrame) != "undefined") {
	//hiddenFrame = document.createElement("<iframe name='" + HIDDEN_FRAME + "' width='0' height='0'></iframe>");
    hiddenFrame = document.createElement("iframe");
    hiddenFrame.setAttribute("name", HIDDEN_FRAME);
    hiddenFrame.setAttribute("width", "0");
    hiddenFrame.setAttribute("height", "0");
    document.body.appendChild(hiddenFrame);
  }

  return hiddenFrame.name;
};

/**
 * Close progress bar
 */
ngjf.close = function() {
  GV_SUBMIT_STATUS = false;

  try {
    GV_DOC.close();
  } catch (exception) {}

  try {
    GV_OBJECT.oProgressBar.outerHTML = "";
  } catch (exception) {}

  // Button enabled
  for (var i = 0; i < GV_OBJECT.length; i++) {
    try {
      if (GV_OBJECT[i].type.toUpperCase() == "BUTTON") {
        GV_OBJECT[i].disabled = false;
      }
    } catch (exception) {}
  }
};


/**
 * @type   : function
 * @access : public
 * @desc   : 필수 입력 항목 체크
 *           Transaction(저장, 수정, 삭제 등)이 필요한 경우만 사용된다.
 * <pre>
 *     ngjf.checkField(document.forms[0]);
 *     ngjf.checkField(document.forms[0], "checFlag");
 * </pre>
 * @param  : oFormId - document form ID
 *           checkBoxName - 리스트에서 선택된 것만 처리하고 싶을 때 사용하는 것으로서 체크박스의 명칭 (optional)
 * @return : validation 성공 시 true
 * @since  : 2009/03/16
 * @author : gagamel
 */
ngjf.checkField = function(oFormId, checkBoxName) {
  // 리스트에서 선택된 것만 처리하고 싶을 때 사용
  var oCheckBox;
  if (typeof(checkBoxName) != "undefined") {
    oCheckBox = eval("oFormId." + checkBoxName);

    if (oCheckBox.length == null) {
      alert("처리할 데이터가 없습니다.");
      return false;
    }

    if (!ngjf.checkElements(oCheckBox)) {
      alert("처리할 항목을 선택하십시오.");
      return false;
    }
  }

  // 필수 입력 항목 체크 Start -------------------------------------------------
  for (var i = 0; i < oFormId.elements.length; i++) {
    var field = oFormId.elements[i];
    // 필수 입력
    var required = (field.getAttribute("required") != null);
    if (!required) continue; // required attribute가 있는 것만

    // 리스트에서 선택된 것만 처리하고 싶을 때 사용
    if (typeof(checkBoxName) != "undefined") {
      var oTag = ngjf.getParentTag(oFormId.elements[i], "TR");
      var oElement = ngjf.getTagByName(oTag, "input", checkBoxName);
      if (!oElement.checked) continue; // checked 된 것만
    }

    // field name
    var fieldname = field.getAttribute("vname");

    switch (field.type) {
      case "text":
      case "password":
      case "textarea":
      case "select-one":
        var data = field.value;
        if (data.search("\\S") == -1) {
          alert(fieldname + "을(를) 입력하십시오.");
          field.focus();
          return false;
        }
        break;
      case "checkbox":
      case "radio":
        var element = eval("oFormId." + field.getAttribute("name"));
        if (!ngjf.checkElements(element)) {
      	  alert(fieldname + "을(를) 선택하십시오.");
      	  return false;
        }
        break;
    }
  }
  // 필수 입력 항목 체크 End ---------------------------------------------------

  // 필드 입력 값 체크 Start ---------------------------------------------------
  for (var i = 0; i < oFormId.elements.length; i++) {
    var field = oFormId.elements[i];

    // 필수 입력
    var required = (field.getAttribute("required") != null);
    if (!required) continue; // required attribute가 있는 것만
    
    // 리스트에서 선택된 것만 처리하고 싶을 때 사용
    if (typeof(checkBoxName) != "undefined") {
      var oTag = ngjf.getParentTag(oFormId.elements[i], "TR");
      var oElement = ngjf.getTagByName(oTag, "input", checkBoxName);
      if (!oElement.checked) continue; // checked 된 것만
    }

    var fieldname = field.getAttribute("vname"); // field name
    var vtype = field.getAttribute("vtype");     // validation type

    var data = field.value;
    data = data.replace(/(^\s*)|(\s*$)/g, "");

    if (data.length > 0) {

      switch (vtype) {
        case GV_ENG: // 영문
          if (!ngjf.checkPattern(GV_PATTERN_ENG, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_UENG: // 영문대문자
          if (!ngjf.checkPattern(GV_PATTERN_UENG, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_LENG: // 영문소문자
          if (!ngjf.checkPattern(GV_PATTERN_LENG, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_ENUM: // 영문+숫자
          if (!ngjf.checkPattern(GV_PATTERN_ENUM, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_UENUM: // 영문대문자+숫자
          this.value = data.toUpperCase();
     	    if (!ngjf.checkPattern(GV_PATTERN_ENUM, data.toUpperCase())) {
            ngjf.alertMessage(field, fieldname);
               return false;
          }
          break;

        case GV_LENUM: // 영문소문자+숫자
          this.value = data.toLowerCase();
          if (!ngjf.checkPattern(GV_PATTERN_ENUM, data.toLowerCase())) {
            ngjf.alertMessage(field, fieldname);
             return false;
          }
          break;

        case GV_TNUM: // 텍스트 숫자(콤마(,)가 없다)
          if (!ngjf.checkPattern(GV_PATTERN_NUM, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_TINT: // 텍스트 양의정수(콤마(,)가 없다)
          if (!ngjf.checkPattern(GV_PATTERN_PINT, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_NUM: // 숫자
          if (!ngjf.checkPattern(GV_PATTERN_NUM, ngjf.hideComma(data))) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_PINT: // 양의 정수
          if (!ngjf.checkPattern(GV_PATTERN_PINT, ngjf.hideComma(data))) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_INT: // 정수
          if (!ngjf.checkPattern(GV_PATTERN_INT, ngjf.hideComma(data))) {
            ngjf.alertMessage(field, fieldname);
            
            return false;
          }
          break;

        case GV_PREAL: // 양의 실수
          if (!ngjf.checkPattern(GV_PATTERN_PREAL, ngjf.hideComma(data))) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_REAL: // 실수
          if (!ngjf.checkPattern(GV_PATTERN_REAL, ngjf.hideComma(data))) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;

        case GV_DATE: // 날짜
          if (!ngjf.checkPattern(GV_PATTERN_PINT, data)) {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          if (data.length == 8) {
            if (!ngjf.checkPattern(GV_PATTERN_DATE, data)) {
              ngjf.alertMessage(field, fieldname);
              return false;
            } else {
              this.value = data.substring(0,4) + "-"
            	           + data.substring(4,6) + "-"
            	           + data.substring(6);
            }
          }
          break;
        case GV_RESI: // 주민등록번호
          if (!ngjf.checkPattern(GV_PATTERN_INT, data))  {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          if (data.length == 13) {
            if (!ngjf.checkPattern(GV_PATTERN_RESI, data))  {
              ngjf.alertMessage(field, fieldname);
              return false;
            }
          }
          break;
        
        case GV_UENUM_: // 영문 대문자+숫자+_
          this.value = data.toUpperCase();
      	  if (!ngjf.checkPattern(GV_PATTERN_UENUM_, data.toUpperCase()))  {
            ngjf.alertMessage(field, fieldname);
            return false;
          }
          break;
      }
    }
  }
  // 필드 입력 값 체크 End -----------------------------------------------------
  return true;
};

/**
 * @type   : function
 * @access : public
 * @desc   : data 값이 정규표현식에 부합하는지는 체크한다.
 * @param  : regexp - 정규표현식
 *           data - 데이터
 * @return : 부합하는 경우 true, 그 외 false
 * @since  : 2009/02/13
 * @author : gagamel
 */
ngjf.checkPattern = function(regexp, data) {
  if (regexp.test(data)) return true;
  return false;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 숫자 데이터에 콤마(,)를 제거한다.
 * @param  : data - 콤마(,)를 제거할 값
 * @return : 콤마(,)가 제거된 값
 * @since  : 2009/02/13
 * @author : gagamel
 */
ngjf.hideComma = function(data) {
  var len = data.length;
  var result = "";

  for (var i = 0; i < len; i++) {
    if (data.charAt(i) != ",")
      result += data.charAt(i);
  }

  return result;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 숫자 데이터에 콤마(,)를 표시한다.
 * <pre>
 *     var num = ngjf.showComma("-12345678.123");
 *     결과 num은 "-12,345,678.123"이 된다.
 * </pre>
 * @param  : num - 콤마(,)를 추가할 값
 * @return : 콤마(,)가 추가된 값
 * @since  : 2009/02/13
 * @author : gagamel
 */
ngjf.showComma = function(num) {
  var sign  = ""; //부호
  var ptNum = ""; //소숫점 이하 값
  var temp  = "";
  var data  = num.toString();

  if (data.substr(0,1) == '-') {
    sign = '-';
    data = data.substr(1,data.length-1);
  }

  var index = data.indexOf('.');

  if (index >= 0) {
    ptNum = data.substr(index,data.length);
    data = data.substr(0,index);
  }

  var len = data.length;

  if (len > 3) {
    var rest = len%3;
    var commaCnt = (len-rest)/3;

    if (rest == 0) {
      temp = data.substr(0,3);
      commaCnt--;
      rest = 3;
    } else {
      temp = data.substr(0,rest);
    }

    for (var i = 0; i < commaCnt; i++) {
      temp = temp + "," + data.substr(rest,3);
      rest += 3;
    }

    return sign + temp + ptNum;
  }

  return sign + data + ptNum;
};

/**
 * @type   : function
 * @access : public
 * @desc   : checkbox, radio 버튼 등에서 element의 체크 여부를 리턴한다.
 * <pre>
 *     var bFlag = ngjf.checkElements(document.forms[0].radioElement);
 * </pre>
 * 위와 같이 사용했을 경우 element가 체크되었다면 true가 리턴된다.
 * @param  : e - element 객체
 * @return : 체크가 되었으면 true를 리턴하고 그 외는 false를 리턴한다.
 * @since  : 2009/03/17
 * @author : gagamel
 */
ngjf.checkElements = function(e) {
  for (var i = 0; i < e.length; i++) {
    if (e[i].checked) return true;
  }
  return false;
};

/**
 * @type   : function
 * @access : public
 * @desc   : oTag을 기준으로 상위의 node 중 tagName과 이름이 같은 tag를 찾는다.
 * <pre>
 *     <script>
 *     function jfSearch() {
 *       var formId = ngjf.getParentTag(event.srcElement, "form");
 *     }
 *     </script>
 *
 *     <form name="frm">
 *     <input type="button" name="btnSearch" value="검색" onClick="jfSearch();"/>
 *     </form>
 * </pre>
 * 위와 같이 사용했을 경우 formId는 document.frm을 가리킨다.
 * @param  : oTag - tag 객체
 *           tagName - 찾고자 하는 tag명
 * @return : 찾은 tag 객체
 * @since  : 2009/03/17
 * @author : gagamel
 */
ngjf.getParentTag = function(oTag, tagName) {
  while (oTag && oTag.tagName != "BODY") {
    if (oTag.tagName == tagName.toUpperCase()) return oTag;
      oTag = oTag.parentNode;
  }

  return null;
};

/**
 * @type   : function
 * @access : public
 * @desc   : oTag을 기준으로 tagName을 가지는 하위의 node 중 name과 이름이 같은 node를 가져온다.
 * <pre>
 *     var oTag = ngjf.getParentTag(document.frm.useYn, "TR");
 *     var oNode = ngjf.getTagByName(oTag, "input", "checFlag");
 * </pre>
 * 위와 같이 사용했을 경우 oNode는 document.frm.useYn과 동일한 라인에 있는 document.frm.checFlag을 가리킨다.
 * @param  : oTag - tag 객체
 *           tagName - 찾고자 하는 tag명
 *           fieldName - 필드명
 * @return : 찾은 node 객체
 * @since  : 2009/03/18
 * @author : gagamel
 */
ngjf.getTagByName = function(oTag, tagName, fieldName) {
  var tags = oTag.getElementsByTagName(tagName);

  for (var idx = 0; idx < tags.length; idx++) {
    if (tags[idx].name == fieldName) return tags[idx];
  }

  return null;
};

/**
 * @type   : function
 * @access : public
 * @desc   : fieldname의 메시지 alert
 * <pre>
 *     ngjf.alertMessage(document.forms[0].memId, "고객ID");
 * </pre>
 * @param  : field - 필드ID
 *           fieldname - 필드명
 * @return : None
 * @since  : 2011/03/01
 * @author : gagamel
 */
ngjf.alertMessage = function(field, fieldname) {
  alert(fieldname + "의 형식이 틀립니다.");
  field.select();
  field.focus();
};
