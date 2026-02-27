/*
 * Inifinite Scroll Java Script of nogdoo.com
 *
 * Copyright (c) 2016 gagamel (nogdoo.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2016-04-28 $
 * 
 * 사용 예)
 * 		// HTML 태그는 다음과 같은 구조로 되어 있어야 하며
 * 		// id 명칭은 container, listBoxOuter, listBox 가 필요하다.
 * 		<section id="container">
 * 			<div id="listBoxOuter">
 * 				<ul id="listBox">
 * 				</ul>
 *			</div>
 *		</section>
 *
 * 		// JQUERY History 파일과 인피니트 스크롤 관련 자바스크립트 파일을 import 되어 있어야 한다.
 * 		<script type="text/javascript" src="/ux/js/lib/jquery.history.min.js"></script>
 * 		<script type="text/javascript" src="/ux/js/ngjf-infinite.scroll.js"></script>
 * 
 * 		<script type="text/javascript">
 * 			// 인피니트 스크롤에 대한 History 정보를 가져오기 위해 함수를 호출한다.
 *			// History 정보가 없을 경우 jfGetInfiniteScrollDataList 함수가 호출된다.
 * 			$(function() { ngjfInifiniteScroll.getHistory(); });
 *
 *			// 인피니트 스크롤 이벤트 발생 시 데이터 가져오기 
 *			var jfGetInfiniteScrollDataList = function(pageNum) {
 *				// 콜백함수인 ngjfInifiniteScroll.jsonToHtml 에서는 jfDrawInfiniteScrollData 함수를 호출한다.
 *				ngjfAjaxSubmitForm(document.searchForm, "/search.do?cmd=getProductSearchAjax", "json", ngjfInifiniteScroll.jsonToHtml);
 *			}
 *
 *			// 인피니트 스크롤 이벤트 발생 시 가져온 데이터를 특정 태그에 append
 *			// jfDrawInfiniteScrollData(dataList, pageNum) 함수 구현
 *			// 		이 함수 내에서의 로직은
 *			//		1. 가져온 데이터로 HTML 태그를 만든다.
 *			// 		2. 만든 태그를 append 하는 ngjfInifiniteScroll.draw() 함수를 호출
 *		</script>
 */

ngjfInifiniteScroll = {
	pageStatus : {
		  pageNum : []      // [0,1,2...] 로드된 페이지 (Array)
		, loadPage : 0      // 로드할 페이지
		, loadAlign : 'not' // 로드 상태(prev, next, not)
		, historyScroll : 0 //
		, nowPage : null    // 현재 페이지
		, scroll : 0
		, dataIndex : null
		, pageUrl : {       // page url
		}
	},
	obj : {
		  $ajaxBoxOuter : $('#listBoxOuter')
		, $ajaxBox : $('#listBox')
		, $window : $(window)
		//, $loadingBar : '<div style="width: 100%; padding-top: 50px; text-align: center;" id="loadingBar"><img src="/ux/js/loading_bar.gif" width="25px" height=" 25px"/></div>'
		, $loadingBar : '<div style="width: 100%; padding: 100px 0; text-align: center;" id="loadingBar"><img src="//image.prospecs.com/mobile/images/common/rolling.gif" width="56px" height="56px" style="margin: 0 auto;"/></div>'
		//, $loadingBar : '<div style="width: 100%; padding-top: 50px; text-align: center;" id="loadingBar"></div>'
	},
	scrollCheck : function() {
		var obj = this.obj, stat = this.pageStatus;
		if (obj.$window.scrollTop() >= obj.$ajaxBox.offset().top + obj.$ajaxBox.height() - obj.$window.height()) { // 더보기 
			if (stat.loadAlign == 'not') {
				var pageLen = this.pageStatus.pageNum.length - 1;
				var nextPageNum = this.pageStatus.pageNum[pageLen] + 1;
				this.pageStatus.pageNum.push(nextPageNum);
				this.pageStatus.loadPage = nextPageNum;
				stat.loadAlign = 'next';
				this.getDataList();
			};
		}
	},
	getDataList : function() {
		if (this.pageStatus.loadAlign == 'prev') {
			this.obj.$ajaxBoxOuter.prepend($(this.obj.$loadingBar));
		} else if (this.pageStatus.loadAlign == 'next') {
			this.obj.$ajaxBoxOuter.append($(this.obj.$loadingBar));
		};
		
		// 인피니트 스크롤 이벤트에서 호출될 함수(데이터 가져오기 등)
		// jfGetInfiniteScrollDataList 함수는 개발단에서 구현해야 한다.
		jfGetInfiniteScrollDataList(this.pageStatus.loadPage);
	},
	getHistory : function() {
		var historyData = History.getState();
		
		var saData = historyData.data;
		var htmlAll = ""; 
		for(var key in saData){
			htmlAll += key+" : "+saData[key]+"\n";
		}
		//alert(htmlAll);
		if (historyData.data.dataIndex == 0 || historyData.data.pageNum === undefined || historyData.data.pageNum === '' || historyData.data.htm === undefined || historyData.data.htm == '') {
			this.pageStatus.loadPage = 0;
			this.pageStatus.pageNum[0] = 0;
			this.pageStatus.loadAlign = 'next';
			this.pageStatus.historyScroll = 0;
			this.pageStatus.scroll = 0;
			this.getDataList();
		} else {
			this.pageStatus.loadPage = historyData.data.pageNum;
			this.pageStatus.pageNum[0] = historyData.data.pageNum;
			this.pageStatus.historyScroll = historyData.data.dataIndex; 
			this.pageStatus.scroll = historyData.data.scroll;
			this.pageStatus.loadAlign = 'next';
			ngjfInifiniteScroll.draw(historyData.data.htm);
		};
		
		$(window).on('scroll', function() {
			ngjfInifiniteScroll.scrollCheck();
		});
	},
	getHistoryNoScroll : function() {
		var historyData = History.getState();
		
		var saData = historyData.data;
		var htmlAll = ""; 
		for(var key in saData){
			htmlAll += key+" : "+saData[key]+"\n";
		}
		//alert(htmlAll);
		if (historyData.data.dataIndex == 0 || historyData.data.pageNum === undefined || historyData.data.pageNum === '' || historyData.data.htm === undefined || historyData.data.htm == '') {
			this.pageStatus.loadPage = 0;
			this.pageStatus.pageNum[0] = 0;
			this.pageStatus.loadAlign = 'next';
			this.pageStatus.historyScroll = 0;
			this.pageStatus.scroll = 0;
			this.getDataList();
		} else {
			this.pageStatus.loadPage = historyData.data.pageNum;
			this.pageStatus.pageNum[0] = historyData.data.pageNum;
			this.pageStatus.historyScroll = historyData.data.dataIndex; 
			this.pageStatus.scroll = historyData.data.scroll;
			this.pageStatus.loadAlign = 'next';
			ngjfInifiniteScroll.draw(historyData.data.htm);
		};
	},
	draw : function(htm, scrollTop, containerHeight) {
		if (htm == 'not') {
			$('#loadingBar').remove();
			this.pageStatus.loadAlign = 'top';
		} else {
			var startH = $('#container').height();
			var $addHtm = $(htm);
			var $imgs = $addHtm.find('img');
			var loadCheck = 0;
			var len = $imgs.length;

			if (scrollTop && containerHeight) {
			} else {
			}

			$addHtm.find('img.lazy').lazyload({
				threshold : 100
			});
			
			$.each($imgs, function(index) {
				$imgs.eq(index).on('load',function() {
					loadCheck++;
					imgLpadComp();
				});
			});

			var imgLpadComp = function() {
				if (len - 1 == loadCheck) {
					ngjfInifiniteScroll.pushHistory(
							  ngjfInifiniteScroll.pageStatus.nowPage
							, $(window).scrollTop()
							, $('#container').height()
							, ngjfInifiniteScroll.pageStatus.loadPage
							, 0
							, ngjfInifiniteScroll.obj.$ajaxBox.html());
					if (scrollTop && containerHeight) {
						ngjfInifiniteScroll.obj.$window.scrollTop.scrollTop(0).scrollTop(scrollTop);
					} else {
						ngjfInifiniteScroll.obj.$window.scrollTop(ngjfInifiniteScroll.obj.$window.scrollTop() + 1);
					}
				};
			};
			
			$('#loadingBar').remove();
			
			// Append HTML
			this.obj.$ajaxBox.append($addHtm);
			
			if (scrollTop && containerHeight) {
				ngjfInifiniteScroll.obj.$window.scrollTop.scrollTop(0).scrollTop(scrollTop);
			} else {
				
				 var br = navigator.userAgent.toLowerCase();
				//if (br.indexOf("msie") >= -1){
					if ($(window).scrollTop() >= this.pageStatus.scroll){
						
						$(window).scrollTop($(window).scrollTop() + 1);
					}else{
						
						$(window).scrollTop(this.pageStatus.scroll + 1);
					}

				//}else{
				//	$(window).scrollTop($(window).scrollTop() + 1);
				//}		
			}
			
			this.pageStatus.loadAlign = 'not';
		}
	},
	draw_id : function(htm, scrollTop, containerHeight,id) {
		if (htm == 'not') {
			$('#loadingBar').remove();
			this.pageStatus.loadAlign = 'top';
		} else {
			var startH = $('#container').height();
			var $addHtm = $(htm);
			var $imgs = $addHtm.find('img');
			var loadCheck = 0;
			var len = $imgs.length;

			if (scrollTop && containerHeight) {
			} else {
			}

			$addHtm.find('img.lazy').lazyload({
				threshold : 100
			});
			
			$.each($imgs, function(index) {
				$imgs.eq(index).on('load',function() {
					loadCheck++;
					imgLpadComp();
				});
			});

			var imgLpadComp = function() {
				if (len - 1 == loadCheck) {
					ngjfInifiniteScroll.pushHistory(
							  ngjfInifiniteScroll.pageStatus.nowPage
							, $(window).scrollTop()
							, $('#container').height()
							, ngjfInifiniteScroll.pageStatus.loadPage
							, 0
							, ngjfInifiniteScroll.obj.$ajaxBox.html());
					if (scrollTop && containerHeight) {
						ngjfInifiniteScroll.obj.$window.scrollTop.scrollTop(0).scrollTop(scrollTop);
					} else {
						ngjfInifiniteScroll.obj.$window.scrollTop(ngjfInifiniteScroll.obj.$window.scrollTop() + 1);
					}
				};
			};
			
			$('#loadingBar').remove();
			
			// Append HTML
			if(id){
				$("#"+id).append($addHtm);
			}else{
				this.obj.$ajaxBox.append($addHtm);
			}
			
			
			if (scrollTop && containerHeight) {
				ngjfInifiniteScroll.obj.$window.scrollTop.scrollTop(0).scrollTop(scrollTop);
			} else {
				
				 var br = navigator.userAgent.toLowerCase();
				//if (br.indexOf("msie") >= -1){
					if ($(window).scrollTop() >= this.pageStatus.scroll){
						
						$(window).scrollTop($(window).scrollTop() + 1);
					}else{
						
						$(window).scrollTop(this.pageStatus.scroll + 1);
					}

				//}else{
				//	$(window).scrollTop($(window).scrollTop() + 1);
				//}		
			}
			
			this.pageStatus.loadAlign = 'not';
		}
	},
	pushHistory : function(page, sScrollTop, sHeight, sPageNum, sDataIndex, sHtml) {
		History.replaceState({
			  state: page
			, scroll: sScrollTop
			, height: sHeight
			, pageUrl: ngjfInifiniteScroll.pageStatus.pageUrl
			, name: ngjfInifiniteScroll.pageStatus.nowPage
			, pageNum : sPageNum
			, dataIndex : sDataIndex
			, htm : sHtml
		}, "", "");
	},
	pushLinkHistory : function(pageNum, dataIndex, obj) { // 링크에서 사용
		var $pageNum = (pageNum || pageNum == 0) ? pageNum : '';
		var $dataIndex = (dataIndex || dataIndex == 0) ? dataIndex : '';
		var $html = (obj) ? $(obj).parents('#listBox').html() : '';
		
		History.replaceState({
			  state : ngjfInifiniteScroll.pageStatus.nowPage
			, scroll : $(window).scrollTop()
			, height : $('#container').height()
			, pageUrl : ngjfInifiniteScroll.pageStatus.pageUrl
			, name : ngjfInifiniteScroll.pageStatus.nowPage
			, pageNum : $pageNum
			, dataIndex : $dataIndex
			, htm : $html
		}, "", "");

		return false;
	},
	jsonToHtml : function(result) {
		// Data 가져온 후 실행될 함수
		// jfDrawInfiniteScrollData 함수는 개발단에서 구현해야 한다. 
		if (result.dataList == "not") // data가 더 이상 없으면
			jfDrawInfiniteScrollData('not', result.CURRENT_PAGE - 1);
		else
			jfDrawInfiniteScrollData(result.dataList, result.CURRENT_PAGE - 1);
	}
};
