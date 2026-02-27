// wlg-jsk-001
var src_path;
var s_uid;
var add_data="";
var ref;
var doc_uid;
var goServer;
var sTime = new Date().getTime();

src_path = window.webObject;  //신규 path 처리
if(src_path == undefined) {
  src_path = document.getElementById('log_script').src;
  
  var uid_start = src_path.indexOf("uid=",src_path);
  
  var add_data_idx_start = 0;
  add_data_idx_start = src_path.indexOf("&",uid_start);
  
  s_uid=src_path.substring(uid_start+4,add_data_idx_start);
}
else {
  s_uid = window.webUid ;
}

var idx_server_end = src_path.indexOf("/weblog.js");
goServer = src_path.substring(0,idx_server_end);

if (add_data_idx_start > 0) {
  add_data = src_path.substring(add_data_idx_start,src_path.length);
}


var s_url = document.URL;

if (document.referrer) {
  ref=document.referrer;
} else {
  try {
    if (opener&&typeof(opener) == "object") {
      if (typeof(opener.document) != "unknown") {
        ref = opener.document.URL;
      }
    }
    if (! ref) {
      if (typeof(parent) == "object" ) {
        if (typeof(parent.document) != "unknown") {
          ref = parent.document.referrer;
        }
      }
      if (! ref) {
        if (parent.opener&&typeof(parent.opener) == "object" ) {
          if (typeof(parent.opener.document) != "unknown") {
            ref = parent.opener.document.referrer;
          }
        }
      }
    }
  }
  catch(e) {
  }
  finally {
    ref = '';
  }
}

if (! ref && opener) {
  try {
    if (typeof(opener) == "object" ) {
      if (typeof(opener.parent) == "object" ) {
        if (typeof(opener.parent.document) != "unknown") {
          ref = opener.parent.document.referrer;
        }
      }
    }
  }
  catch(e) {
  }
  finally {
    ref = '';
  }
}

(function() {
  doc_uid = s_uid+'&udim='+window.screen.width+'*'+window.screen.height+'&uref='+ref+'&url='+s_url+add_data+'&t='+sTime;
  var c = document.createElement('script') ;
  c.type = 'text/javascript' ;
  c.async = !0 ;
  c.src = goServer+'/weblog.html?uid='+doc_uid;
  var a = document.getElementsByTagName('script')[0] ;
  a.parentNode.insertBefore(c, a) ;
})();

