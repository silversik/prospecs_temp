/***********************************************************************************************
 * Common URL Definition
************************************************************************************************/
// 20171017 : 임시로 https 제거함.
// 20171018 : 원복 함.

var _PAGE_LOGIN =  _lsnMobUrl + "/member.do?cmd=login";// GNB > 로그인 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
//var _PAGE_LOGIN =  "/member.do?cmd=login";// GNB > 로그인 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.	image.prospecs.com 도메인의 SSL 인증서가 만료되어 일시적으로 https 를 http 로 접속 하도록 변경.
var _PAGE_WELFARE_CHECK = _lsnMobUrl + "/member.do?cmd=getWelFareEmployCheck"; // GNB > 복지몰임직원 인증 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
var _PAGE_WELFARE_LOGIN = _lsnMobUrl + "/member.do?cmd=getWelFareLogin"; // GNB > 복지몰로그인 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
var _PAGE_LOGOUT = "/member.do?cmd=logoutAjax";   // GNB > 로그아웃. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
var _PAGE_PASSWORD_CHANGE = "/member.do?cmd=getPasswordChangeLayer"; // 비밀번호변경 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
var _PAGE_FAMILY_CONFIRM = "/member.do?cmd=getFamilyConfirmLayer"; // 임직원인증 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
var _PAGE_DORMANCY_CLEAR_LAYER = _lsnMobSslUrl + "/member.do?cmd=getDormancyClearLayer"; // 휴면 해제 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.
//var _PAGE_DORMANCY_CLEAR_LAYER = "/member.do?cmd=getDormancyClearLayer"; // 휴면 해제 레이어. 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.	image.prospecs.com 도메인의 SSL 인증서가 만료되어 일시적으로 https 를 http 로 접속 하도록 변경.
var _PAGE_ORANGE_CARD_AUTH = "/member.do?cmd=getOrangeCardAuthLayer"; // E1 오렌지카드 인증 레이어 일반 및 SSL 모두 적용해야 해서 프로토콜 미설정함.

//== 메인 ==/
var _PAGE_MAIN = _lsnMobUrl + "/display.do?cmd=mallMain"; // 메인
var _PAGE_SHOP_MAIN = _lsnMobUrl + "/display.do?cmd=shopMain"; // 샵메인
var _PAGE_CATEGORY_MAIN = _lsnMobUrl + "/display.do?cmd=categoryMain"; // 카테고리 메인
var _PAGE_OUTLET_MAIN = _lsnMobUrl + "/display.do?cmd=outletMain"; // 아울렛 메인
var _PAGE_PERFORMACE_MAIN = _lsnMobUrl + "/display.do?cmd=performanceMain"; // 퍼포먼스 메인
var _PAGE_CATEGORY_BEST = _lsnMobUrl + "/display.do?cmd=getBest"; // 카테고리 메인

//var _PAGE_ITEMKIND_MAIN = _lsnMobUrl + "/display.do?cmd=itemkindMain"; // 품목 메인
//var _PAGE_BRAND_MAIN = _lsnMobUrl + "/display.do?cmd=brandMain"; // 브랜드 메인
//var _PAGE_RUNTOREST_MAIN = _lsnMobUrl + "/display.do?cmd=runtorestMain"; // RUN TO REST 메인
var _PAGE_PRODUCT_LIST_FILTER = _lsnMobUrl + "/product.do?cmd=getProductListFilterLayer"; // 상품리스트 > 필터 레이어

var _PAGE_ORIGINAL_XYOU = _lsnMobUrl + "/display.do?cmd=getPhotoContent"; // 오리지널 컨텐츠

//== 브랜드메인 ==/
var _PAGE_BRAND_MAIN = _lsnMobUrl + "/display.do?cmd=brandMain"; // 브랜드 메인
var _PAGE_BRAND_INDEX = _lsnMobUrl + "/display.do?cmd=brandMainIndex"; // 브랜드index
var _PAGE_BRAND_DNA = _lsnMobUrl + "/display.do?cmd=getBrandDna"; // 브랜드 DNA
var _PAGE_BRAND_LOOKBOOK = _lsnMobUrl + "/display.do?cmd=getBrandLookbook"; // 브랜드 lookbook
var _PAGE_BRAND_MEDIA = _lsnMobUrl + "/display.do?cmd=getBrandMedia"; // 브랜드 media
var _PAGE_BRAND_NEWS = _lsnMobUrl + "/display.do?cmd=getBrandNews"; // 브랜드 NEWS
var _PAGE_BRAND_NEWS_DETAIL = _lsnMobUrl + "/display.do?cmd=getBrandNewsDetail"; // 브랜드 NEWS 상세
var _PAGE_BRAND_TECH_LINE = _lsnMobUrl + "/display.do?cmd=getBrandTechLine"; // 브랜드 technology line
var _PAGE_BRAND_TECH_TECHNOLOGY = _lsnMobUrl + "/display.do?cmd=getBrandTechnology"; // 브랜드 technology

//== 프로스펙스 ==/
var _PAGE_PROSPECS_LOOKBOOK = _lsnMobUrl + "/display.do?cmd=getProspecsLookbook"; // 프로스펙스 lookbook
var _PAGE_PROSPECS_NEWS = _lsnMobUrl + "/display.do?cmd=getProspecsNews"; // 프로스펙스 NEWS
var _PAGE_PROSPECS_NEWS_DETAIL = _lsnMobUrl + "/display.do?cmd=getProspecsNewsDetail"; // 프로스펙스 NEWS 상세

//== 회원 ==/
var _PAGE_MEMBER_JOIN = _lsnMobUrl + "/member.do?cmd=getMemberJoin"; // 회원 > 회원가입
var _PAGE_WELFARE_MEMBER_JOIN = _lsnMobUrl + "/member.do?cmd=getWelfareMemberJoin"; // 회원 > 복지몰 임직원 회원가입
var _PAGE_MEMBER_SIGNUP = _lsnMobUrl + "/member.do?cmd=getMemberSignup"; // 회원 > 회원가입 ( 회원가입유형 선택)
var _PAGE_MEMBER_ID_FIND = _lsnMobUrl + "/member.do?cmd=getMemberIdFind"; // 회원 > 아이디(E-MAIL) 찾기
var _PAGE_MEMBER_PASSWD_FIND = _lsnMobUrl + "/member.do?cmd=getMemberPasswordFind"; // 회원 > 비밀번호 찾기

//== 임시 회원인증 추가 2024.09.23 == ksh
var _PAGE_MEMBER_JOIN_ACCREDITATION = _lsnMobUrl + "/member.do?cmd=getMemberJoinAccreditation";

var _PAGE_MEMBER_FIND_ID_PW = _lsnMobUrl + "/member.do?cmd=getMemberFindIdPw";
// == 임시 회원인증 추가 2024.09.23 == ksh

//== 상품상세 ==/
var _PAGE_PRODUCT_DETAIL = _lsnMobUrl + "/product.do?cmd=getProductDetail&PROD_CD="; // 상품 상세
var _PAGE_QUCIK_PRODUCT_LAYER = _lsnMobUrl + "/product.do?cmd=getProductQuickViewLayer"; // 상품 퀵뷰
var _PAGE_PRODUCT_AI_SHOPPING_LENS = _lsnMobUrl + "/product.do?cmd=getProductaiShoppingLens"; // 쇼핑렌즈 상세페이지

//var _PAGE_CARD_LAYER = _lsnMobUrl + "/product.do?cmd=getCardInfoLayer"; // 상품상세 > 카드혜택 레이어
var _PAGE_SIZE_GUIDE_LAYER = _lsnMobUrl + "/product.do?cmd=getSizeGuideLayer"; // 상품상세 > 브랜드 사이즈 레이어
//var _PAGE_SPECAIL_ORDER_LAYER = _lsnMobUrl + "/product.do?cmd=getSpecailOrderLayer"; // 상품상세 > 스페셜 오더 레이어
var _PAGE_BRANDSTORE = _lsnMobUrl + "/product.do?cmd=getBrandStoreLayer";                                             // 브랜드매장정보 레이어
var _PAGE_PRE_PRICE_CAL_LAYER = _lsnMobUrl + "/product.do?cmd=getProductPrePriceCalLayer";  // 미리계산하기 레이어
//== 장바구니 ==/
var _PAGE_CART_PUT = _lsnMobUrl + "/order.do?cmd=createCartAjax"; // 장바구니담기
var _PAGE_CART_LIST = _lsnMobUrl + "/order.do?cmd=getCartList"; // 장바구니

var _PAGE_CHECK_FAMILY_MEMBER = "/order.do?cmd=getCheckFamilyMemberAjax";
var _PAGE_CHECK_FAMILY_MEMBER_LAYER = "/order.do?cmd=getCheckFamilyMemberLayer";


//== 주문 ==/
//var _PAGE_DIRECT_BUY = _lsnMobUrl + "/order.do?cmd=getOrderMain"; // 바로구매
var _PAGE_DIRECT_BUY = _lsnMobUrl + "/order.do?cmd=getOrderMain"; // 바로구매
var _PAGE_ORDER_MAIN = _lsnMobUrl + "/order.do?cmd=getOrderMain"; // 주문서

//== 마이페이지 ==/
var _PAGE_MYPAGE = _lsnMobUrl + "/mypage.do?cmd=getMypageMain";                                        // 마이페이지 메인
//var _PAGE_TIMELINE = _lsnMobUrl + "/mypage.do?cmd=getTimeline";                                      // 마이페이지 > 타임라인
var _PAGE_ORDER_LIST = _lsnMobUrl + "/mypage.do?cmd=getOrderList";                                   // 마이페이지 > 주문/배송 목록
var _PAGE_ORDER_LIST_MAIN = _lsnMobUrl + "/mypage.do?cmd=getOrderList&MAIN=Y";                                   // 마이페이지 > 주문/배송 목록
var _PAGE_ORDER_DETAIL = _lsnMobUrl + "/mypage.do?cmd=getOrderDetail";                               // 마이페이지 > 주문/배송 상세
var _PAGE_ORDER_ASK = _lsnMobUrl + "/mypage.do?cmd=getOrderCREAsk";                                  // 마이페이지 > 주문 취소/반품/교환 신청 목록
var _PAGE_ORDER_CANCEL = _lsnMobUrl + "/mypage.do?cmd=getOrderCancel";                               // 마이페이지 > 주문 취소 신청
var _PAGE_ORDER_RETURN = _lsnMobUrl + "/mypage.do?cmd=getOrderReturn";                               // 마이페이지 > 반품 신청
var _PAGE_ORDER_EXCHANGE = _lsnMobUrl + "/mypage.do?cmd=getOrderExchange";                           // 마이페이지 > 교환 신청
var _PAGE_ORDER_CRE_ASK_CONFIRM_LAYER = _lsnMobUrl + "/mypage.do?cmd=getOrderCREAskConfirmLayer";           // 마이페이지 > 주문 취소/반품/교환 신청 내용 확인
//var _PAGE_ORDER_ASK_CONFIRM_LAYER = _lsnMobUrl + "/mypage.do?cmd=getOrderAskConfirmLayer";           // 마이페이지 > 주문 취소/반품/교환 신청 내용 확인 레이어
var _PAGE_ORDER_CRE_LIST = _lsnMobUrl + "/mypage.do?cmd=getOrderCREList";                            // 마이페이지 > 주문 취소/반품/교환 내역 목록
var _PAGE_ORDER_CRE_DETAIL = _lsnMobUrl + "/mypage.do?cmd=getOrderCREDetail";                        // 마이페이지 > 주문 취소/반품/교환 상세 내역
var _PAGE_WELFARE_REG_MAIN = _lsnMobUrl + "/mypage.do?cmd=getWelFareCashRegMain";                    // 마이페이지 > 상품권 등록/사용 화면
var _PAGE_WELFARE_LIST = _lsnMobUrl + "/mypage.do?cmd=getWelFareCashList";                           // 마이페이지 > LS 캐쉬
var _PAGE_COUPON_USABLE = _lsnMobUrl + "/mypage.do?cmd=getUsableCouponList";                         // 마이페이지 > 사용가능한 쿠폰리스트
var _PAGE_COUPON_EXPIRED = _lsnMobUrl + "/mypage.do?cmd=getExpiredCouponList";                       // 마이페이지 > 만료된 쿠폰리스트
var _PAGE_COUPON_REG_LAYER = _lsnMobUrl + "/mypage.do?cmd=registerCouponLayer";                      // 마이페이지 > 쿠폰 등록
var _PAGE_MILEAGE = _lsnMobUrl + "/mypage.do?cmd=getMileageList";                                    // 마이페이지 > 마일리지
var _PAGE_MOB_GIFT_TOK_REG = _lsnMobUrl + "/mypage.do?cmd=getMobMyGiftcardList";						 // 마이페이지 > 모바일 상품권 등록
var _PAGE_WISHLIST_PUT = _lsnMobUrl + "/member.do?cmd=createWishListAjax";                           // 위시리스트 담기
var _PAGE_WISHLIST = _lsnMobUrl + "/mypage.do?cmd=getWishlistList";                                  // 마이페이지 > 위시리스트
var _PAGE_WISHLIST_DEL = _lsnMobUrl + "/mypage.do?cmd=deleteWishList";                               // 위시리스트 삭제
var _PAGE_TODAY_PRODUCT_LIST = _lsnMobUrl + "/mypage.do?cmd=getTodayProductList";                    // 마이페이지 > 오늘본상품
var _PAGE_COUNSEL = _lsnMobUrl + "/mypage.do?cmd=getCounselList";                                    // 마이페이지 > 1:1문의
var _PAGE_COUNSEL_DETAIL = _lsnMobUrl + "/mypage.do?cmd=getCounselDetail";                           // 마이페이지 > 1:1문의 상세
var _PAGE_COUNSEL_REG = _lsnMobUrl + "/mypage.do?cmd=registerCounsel";                               // 마이페이지 > 1:1문의 등록
var _PAGE_COUNSEL_MODIFY = _lsnMobUrl + "/mypage.do?cmd=modifyCounsel";                              // 마이페이지 > 1:1문의 수정
var _PAGE_WRITE_REVIEW_LIST = _lsnMobUrl + "/mypage.do?cmd=getWritedReviewList";                     // 마이페이지 > 작성 상품평리스트
var _PAGE_WRITEABLE_REVIEW_LIST = _lsnMobUrl + "/mypage.do?cmd=getWritableReviewList";               // 마이페이지 > 미작성 상품평리스트
var _PAGE_MEMBER_INFO_CONFIRM = _lsnMobUrl + "/mypage.do?cmd=getMemberInfoConfirm&INFO_CONFIRM_GB="; // 마이페이지 > 회원정보 확인
var _PAGE_MEMBER_INFO = _lsnMobUrl + "/mypage.do?cmd=getMemberInfo";                                 // 마이페이지 > 회원정보수정
var _PAGE_MEMBER_SECEDE = _lsnMobUrl + "/mypage.do?cmd=getMemberSecede";                             // 마이페이지 > 회원탈퇴
var _PAGE_MEMBER_SECEDE_LAYER = _lsnMobUrl + "/mypage.do?cmd=getMemberSecedeLayer";                    // 프로스팩스약관동의 > 회원탈퇴 레이어
var _PAGE_REFUND_ACCOUNT = _lsnMobUrl + "/mypage.do?cmd=getRefundAccount";                           // 마이페이지 > 환불계좌관리
var _PAGE_MY_ORDER_PROD = _lsnMobUrl + "/order.do?cmd=getMyOrderProductListLayer";                   // 마이페이지 > 1:1문의 등록 > 나의 주문상품 조회 레이어
var _PAGE_DELIVERY_ADDRESS_LIST = _lsnMobUrl + "/mypage.do?cmd=getDeliveryAddressList";                // 마이페이지 > 배송지관리

//== 쿠폰 ==/
var _PAGE_MEMBER_COUPON_LIST = "/order.do?cmd=getMemberCouponListLayer"; // 회원 쿠폰 목록 레이어
var _PAGE_ORDER_DOWNABLE_COUPON_LIST = "/order.do?cmd=getOrderDownableCouponListLayer"; // 주문서에서 다운로드 가능한 쿠폰 목록 레이어(상품쿠폰)
var _PAGE_DOWNABLE_PROD_COUPON_LIST = "/product.do?cmd=getProductDownableCouponListLayer"; // 다운로드가능한 상품쿠폰 목록 레이어
var _PAGE_FAMILLY_COUPON_LIST = "/order.do?cmd=getFamillyCouponListLayer"; 
//== 상품평 ==/
var _PAGE_REVIEW_REG = "/product.do?cmd=getReviewRegisterLayer"; // 상품상세 > 상품평 등록 레이어
var _PAGE_QATERM_LAYER = "/product.do?cmd=getProductQualityTermLayer"; // 상품상세 > 품질보증기간 레이어
var _PAGE_REVIEW = "/product.do?cmd=getReviewList"; // 상품평모아보기
//== 검색 ==/
//var _PAGE_PRODUCT_SEARCH = "/search.do?cmd=getProductSearch"; // 상품 검색
//var _PAGE_POST_SEARCH = "/common.do?cmd=getPostFindLayer"; // 우편번호 찾기

//== 기획전 ==/
var _PAGE_PLANNING_MAIN = _lsnMobUrl + "/planning.do?cmd=planningMain"; // 기획전 메인
var _PAGE_PLANNING_DETAIL = _lsnMobUrl + "/planning.do?cmd=getPlanningDetail"; // 기획전 상세

var _PAGE_PLANNING_QUESTION = _lsnMobUrl + "/planning.do?cmd=getPlanningDetail&datacls=1547";                    // 기획전 문의 리스트
var _PAGE_PLANNING_QUESTION_DETAIL = _lsnMobUrl + "/planning.do?cmd=getPlanningQuestionDetail";                  // 기획전 문의 상세 
var _PAGE_PLANNING_QUESTION_REG = _lsnMobUrl + "/planning.do?cmd=registerQuestion";                              // 기획전 문의 등록
var _PAGE_PLANNING_QUESTION_MODIFY = _lsnMobUrl + "/planning.do?cmd=modifyQuestion";                             // 기획전 문의수정



//== 고객센터 ==/
var _PAGE_CALLCENTER = _lsnMobUrl + "/callcenter.do?cmd=getCallcenterMain";  // 고객센터 메인
var _PAGE_NOTICE = _lsnMobUrl + "/callcenter.do?cmd=getNoticeList";  // 고객센터 > 공지사항 목록
var _PAGE_NOTICE_DETAIL = _lsnMobUrl + "/callcenter.do?cmd=getNoticeDetail"; // 고객센터 > 공지사항 > 공지사항 상세
var _PAGE_FAQ = _lsnMobUrl + "/callcenter.do?cmd=getFAQList&FAQ_TYPE="; // 고객센터 > FAQ
var _PAGE_MEMBERSHIP_GUIDE = _lsnMobUrl + "/callcenter.do?cmd=getMembershipGuide"; // 고객센터 > 회원혜택안내
var _PAGE_AS_GUIDE = _lsnMobUrl + "/callcenter.do?cmd=getASGuide"; // 고객센터 > 서비스안내 > AS 안내
var _PAGE_GRPORD_GUIDE = _lsnMobUrl + "/callcenter.do?cmd=getGroupOrderGuide";  // 고객센터 > 단체납품 안내

//== 기타 ==/
var _PAGE_USE_TERMS = _lsnMobUrl + "/display.do?cmd=getUseTerms"; // Footer > 이용약관
var _PAGE_PRIVACY_POLICY = _lsnMobUrl + "/display.do?cmd=getPrivacyPolicy"; // Footer > 개인정보처리방침
//var _PAGE_EMAIL_POLICY = _lsnMobUrl + "/display.do?cmd=getEmailPolicy"; // Footer > 이메일주소 무단수집거부
//var _PAGE_STORE_INFO = _lsnMobUrl + "/display.do?cmd=getStoreInfo&TCAT_CD="; // Footer > 매장정보
//var _PAGE_STORE_INFO = _lsnMobUrl + "/display.do?cmd=getStoreInfo&TCAT_CD="; // Footer > 매장정보 --내위치 정보찾기시 https로 처리해야함
var _PAGE_STORE_INFO = _lsnMobUrl  + "/display.do?cmd=getStoreInfo&TCAT_CD="; // Footer > 매장정보 --내위치 정보찾기시 https로 처리해야함
//var _PAGE_SOCIAL_NOW = _lsnMobUrl + "/display.do?cmd=socialNowMain"; // Footer > SOCIAL NOW
//var _PAGE_MOBILE_SHOP = _hsMobUrl + "/display.do?cmd=mallMain"; // Footer > SOCIAL NOW

//var PAGE_PAY_FORM_WAIT = _lsnMobUrl + "/mypage.do?cmd=getPayFormWaitList";            // 마이페이지 > 결제생성 - 결제대기
//var PAGE_PAY_FORM_COMPLETE = _lsnMobUrl + "/mypage.do?cmd=getPayFormCompleteList";    // 마이페이지 > 결제생성 - 결제완료
//var PAGE_PAY_FORM_ORDER = _lsnMobUrl + "/order.do?cmd=getPayFormOrderMain";           // 결제생성 - 주문서

var _PAGE_LS_NETWORK_MOBILE_COUPON_LAYER = _lsnMobUrl + "/common.do?cmd=getLsNetworkMobileCouponLayer"; //LS네트웍스 모바일상품권 조회/등록
var _PAGE_JUSO_ADDRESS_LAYER = _lsnMobUrl + "/common.do?cmd=getJusoAddressLayer"; // 우편번호레이어
var _PAGE_PREVIOUS_USE_TERMS = _lsnMobUrl + "/display.do?cmd=getPreviousUseTermsLayer";	//이전 약관 보기 레이어
var _PAGE_PRIVACY_POLICY_TERMS = _lsnMobUrl + "/display.do?cmd=getPreviousPrivacyPolicyLayer";	//이전 약관 보기 레이어
var _PAGE_BOOK_MARK_INFO = _lsnMobUrl + "/display.do?cmd=getBookmarkInfo"; // 즐겨찾기 안내

var _PAGE_STEADY = _lsnMobUrl + "/display.do?cmd=getSteady";
var _PAGE_BEST = _lsnMobUrl + "/display.do?cmd=getBest";
var _PAGE_NEWSHOESROOM = "/display.do?cmd=getNewShoesRoom";//NEWSHOESROOM
var _PAGE_SPORTSMAGAZINE = "/display.do?cmd=getSportsMagazine";//스포츠매거진
var _PAGE_WALKINGMAP = "/display.do?cmd=getWalkingMap";//워킹여지도
var _PAGE_RANKINGBEST = "/display.do?cmd=getRankingBest";//랭킹베스트
var _PAGE_COLLABORATION = "/display.do?cmd=getCollaboration";//콜라보레이션
var _PAGE_SMART_FIT = "/display.do?cmd=getOneSpec";//SMART FIT /display.do?cmd=getOneSpec
var _PAGE_SPONSORSHIP = "/product.do?cmd=getSponsorship";//SPONSORSHIP
var _PAGE_GIFT_CARD = "/product.do?cmd=getGiftCard";//GIFT CARD
var _PAGE_GIFT_CARD_DTL = "/product.do?cmd=getGiftCardDtl";//GIFT CARD DTL
var _PAGE_ISSUE = "/product.do?cmd=getIssue";//ISSUE

//스마트 스토어
var _PAGE_SMART_STORE_CHECK = _lsnMobUrl + "/display.do?cmd=getSmartStoreCheck";			//스마트스토어 검증로직
var _PAGE_SMART_STORE_POLICY_LAYER = _lsnMobUrl + "/display.do?cmd=getSmartStorePolicy";	//스마트스토어 정책 레이어

//앱다운로드
var _PAGE_APP_DOWN = "/display.do?cmd=appDown";					//앱다운로드

//브랜드소개 메인페이지
var _PAGE_ABOUT_PROSPECS = "/display.do?cmd=getAboutProspecs";  // bottom > ABOUT PRO-SPECS

/**********************************************************************************************/
/**
 * @type   : function
 * @access : public
 * @desc   : page 이동
 * <pre>
 *     cfGoToPage(PAGE_LOGIN);
 * </pre>
 * @param  : page - page
 * @return : None
 * @since  : 2016. 11. 23
 * @author : gagamel
 */
function cfGoToPage(page, ithrCd) {
	var params = page;
	if (ithrCd) params += "&ITHR_CD=" + ithrCd;
	document.location.href = params;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 띄우기
 * <pre>
 *     cfOpenLayer(_PAGE_LOGIN, "layer_popup_login");
 * </pre>
 * @param  : page - page. 필수
 * @param  : tgt - 레이어가 표시될 위치(예, div 태크의 ID). 필수
 * @param  : oParam - Parameter Object. 옵션
 * @param  : callbackFnc - 콜백함수. 옵션
 * @since  : 2016. 11. 24
 * @author : gagamel
 */
function cfOpenLayer(page, tgt, oParam, callbackFnc) {
	if (!oParam) oParam = new Object();

	$.post(page
		, oParam
		, function(result) {
			$('#' + tgt).html(result);
			if (tgt == 'layer_popup_myorderprodutlist'){
				qna_lpopOpen(tgt);
			}else if (tgt == 'layer_popup_filter'){
				filterView($('.btn_filter button')); 
			}else if (tgt == 'zip_code') {
				post_lpopOpen(tgt);
			}else if(tgt == 'layer_popup_check_family_member') {
				

				$('#'+tgt).animate({
					'right':'0%'
				},400,'easeOutCubic', function(){
					//$('#wrap').css('position','fixed')
					$('#'+tgt).find('.close').addClass('on');
				})
				
				var wh = $(window).innerHeight();
				var scrollCont = $('#'+tgt+' .provision_scroll');
				$(scrollCont).css('height', (wh-46) + 'px');
				var swiper = new Swiper(scrollCont, {// swiper set
					direction: 'vertical',
					slidesPerView: 'auto',
					mousewheelControl: true,
					freeMode: true
				});
			
			}else{	
				lpopOpen(tgt);
			}	

			if (callbackFnc && $.isFunction(callbackFnc))
				callbackFnc();
		}
		, "html");
	
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 타겟 생성이 필요한 레이어 띄우기
 * <pre>
 *     // 카드무이자안내 레이어
 *     cfOpenLayerForTargetCreation(_PAGE_CARD_GUIDE, "ui_interest-free");
 * </pre>
 * @param  : page - page. 필수
 * @param  : tgt - 레이어가 표시될 위치(예, div 태크의 ID). 필수
 * @since  : 2016/03/08
 * @author : gagamel 
 */
function cfOpenLayerForTargetCreation(page, tgt, oParam, callbackFnc) {
	if ($('#' + tgt).length == 0) {
		$('#wrap').append('<div class="layer_pop_wrap" id="' + tgt + '"></div>');
	}
	
	cfOpenLayer(page, tgt, oParam, callbackFnc);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 닫기(레이어 숨기기)
 * <pre>
 *     cfCloseLayer("pop_login");
 * </pre>
 * @param  : tgt - 숨길 레이어 ID(예, div 태크의 ID). 필수
 * @since  : 2016/03/08
 * @author : gagamel
 */
function cfCloseLayer(tgt) {
	if( tgt == "tb_cart" ){
		$('#' + tgt).remove();
	}else{
		lpopClose(tgt);
	}
	return false;
}


// 기존 cfCloseLayer 대체 함수 
function cfCloseModalLayer(id) {
	$('#' + id).remove();
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 로그인 레이어 오픈
 * <pre>
 *     cfOpenLoginLayer();
 * </pre>
 * @param  : returnUrl - RETURN URL
 * @since  : 2016/03/09
 * @author : gagamel
 */
function cfOpenLoginLayer(returnUrl) {
	// RETURN URL이 있으면 쿠키 설정
	if (returnUrl)
		cfSetCookie(_ckPrefix + "_RETURN_URL", returnUrl, 1);

	var str = '<div class="layer_wrap" id="layer_popup_login"></div>';
	if ($('#layer_popup_login').length == 0) {
		$('#wrap').append(str);
	}

	cfOpenLayer(_PAGE_LOGIN, "layer_popup_login");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 로그인 체크 후 page 이동
 *           로그인이 안 된 상태이면 로그인 레이어 오픈
 * <pre>
 *     cfGoToPageForLogin(_PAGE_MYPAGE);
 * </pre>
 * @param  : page - page
 * @param  : callbackFnc - This attribute is optional.
 *           값이 있으면 callback 함수를 호출하고 아닐 때는 페이지를 이동한다.
 * @return : None
 * @since  : 2016/03/14
 * @author : gagamel
 */
function cfGoToPageForLogin(page, callbackFnc) {
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				if (page) cfSetCookie(_ckPrefix + "_RETURN_URL", page, 1);
				
				// 로그인이 안 된 경우 로그인 페이지로 이동
				cfGoToPage(_PAGE_LOGIN);
			} else {
				// Callback 함수일 때는 callback 함수 호출
				if (callbackFnc && typeof(callbackFnc) == "function")
					callbackFnc.call(this, result);
				else { // 아닐 때는 페이지 이동
					cfGoToPage(page);
				}
			}
		}
		, "json");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 팝업 레이어
 * <pre>
 *     cfPopupLayer("3363", "3363");
 * </pre>
 * @param  : cateCd - 카테고리코드. 필수
 * @param  : tcateCd - 대카테고리코드
 * @param  : preview - 미리보기여부(true/false)
 * @param  : stdt - 시작일자
 * @param  : sttime - 시작시간
 * @since  : 2016/04/11
 * @author : gagamel
 */
function cfPopupLayer(cateCd, tcateCd, preview, stdt, sttime) {
	var params = new Object();
	if (cateCd) params.CATE_CD = cateCd;
	if (tcateCd) params.TCAT_CD = tcateCd;
	if (preview) params.PREVIEW = preview;
	if (stdt) params.STDT = stdt;
	if (sttime) params.STTIME = sttime;
	
	$.post('/common.do?cmd=popup'
		, $.param(params)
		, function(result) {
			$('#psWrap').after(result);
			return false;
		}
		, "html");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카테고리 메인으로 이동
 * <pre>
 *		cfGoToCategoryMain('10003', '3216');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드
 * @param  : scateCd - 소카테고리코드
 * @since  : 2016/03/04
 * @author : gagamel
 */
function cfGoToCategoryMain(cateGb, tcateCd, mcateCd, scateCd, foucsview, ithrCd, ikindCd) {
	var params = "&CAT_GB=" + cateGb;
	params += "&TCAT_CD=" + tcateCd;
	if (mcateCd) params += "&MCAT_CD=" + mcateCd;
	if (scateCd) params += "&SCAT_CD=" + scateCd;
	if (foucsview) params += "&SEARCH_YN="+ foucsview;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	if (ikindCd) params += "&ITEMKIND_CD="+ ikindCd;
	
	ngjfAjaxSubmit("/display.do?cmd=getTcatNm&TCAT_CD="+tcateCd, "json", function cfcallback(result){
		/*params += "&TCAT_NM=" + result.TCAT_NM;*/
		cfGoToPage(_PAGE_CATEGORY_MAIN + params);
	}, new Object());
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카테고리 메인으로 이동
 */
function cfCategoryItmKinds(gnbId, excepDepth, foucsview, ithrCd, ikindCd) {
	var params = "&GNB_ID=" + gnbId+"&EXCEP_DEPTH=" + excepDepth;
	if (foucsview) params += "&SEARCH_YN="+ foucsview;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	if (ikindCd) params += "&ITEMKIND_CD="+ ikindCd;
	cfGoToPage(_PAGE_CATEGORY_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 퍼포먼스 메인으로 이동
 * <pre>
 *		cfGoToPerformaceMain('10003', '3216');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드
 * @param  : scateCd - 소카테고리코드
 * @since  : 2016/12/06
 * @author : kes
 */
function cfGoToPerformaceMain(cateGb, tcateCd, mcateCd, scateCd, foucsview, ithrCd) {
	var params = "&CAT_GB=" + cateGb;
	params += "&TCAT_CD=" + tcateCd;
	if (mcateCd) params += "&MCAT_CD=" + mcateCd;
	if (scateCd) params += "&SCAT_CD=" + scateCd;
	if (foucsview) params += "&SEARCH_YN="+ foucsview;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	cfGoToPage(_PAGE_PERFORMACE_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 아울렛 메인으로 이동
 * <pre>
 *		cfGoToOutletMain('10003', '3216');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드
 * @param  : scateCd - 소카테고리코드
 * @since  : 2016/12/06
 * @author : kes
 */
function cfGoToOutletMain(cateGb, tcateCd, mcateCd, scateCd, foucsview, ithrCd) {
	var params = "&CAT_GB=" + cateGb;
	params += "&TCAT_CD=" + tcateCd;
	if (mcateCd) params += "&MCAT_CD=" + mcateCd;
	if (scateCd) params += "&SCAT_CD=" + scateCd;
	if (foucsview) params += "&SEARCH_YN="+ foucsview;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	cfGoToPage(_PAGE_OUTLET_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 품목 메인으로 이동
 * <pre>
 *		cfGoToItemkindMain('10003', '3216', '3217');
 *		cfGoToItemkindMain('10003', '3216', '3217', '3219');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드. 필수
 * @param  : scateCd - 소카테고리코드
 * @since  : 2016/03/04
 * @author : gagamel
 */
function cfGoToItemkindMain(cateGb, tcateCd, mcateCd, scateCd) {
	var params = "&CAT_GB=" + cateGb;
	params += "&TCAT_CD=" + tcateCd;
	if (mcateCd) params += "&MCAT_CD=" + mcateCd;
	if (scateCd) params += "&SCAT_CD=" + scateCd;
	
	cfGoToPage(_PAGE_ITEMKIND_MAIN + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 상품 상세 화면으로 이동
 * <pre>
 * 		cfGoToProductDetail('PR611444PKWPK', 'HS08_01');
 * 		or
 * 		cfGoToProductDetail('PR611444PKWPK', 'HS08_01', '10002');
 * 		or
 * 		cfGoToProductDetail('PR611444PKWPK', 'HS08_01', '10002', 'N');

 * </pre>
 * @param  : prodCd - 상품코드
 * @param  : ithrCd - 유입경로코드(공통코드G004)
 * @param  : catGb - 카테고리구분
 * @param  : target - 새창열기
 * @since  : 2016/03/04
 * @author : gagamel
 */
function cfGoToProductDetail(prodCd, ithrCd, catGb, target) {
	// 오늘 본 상품 쿠키에 세팅
	cfSetTodayProductToCookie(prodCd);
	var params = prodCd;
	if (ithrCd) params += "&ITHR_CD=" + ithrCd;
	if (catGb) params += "&CAT_GB=" + catGb;
    if (target){
    	//cfWindowOpen(_PAGE_PRODUCT_DETAIL + params);
   	     window.open(_PAGE_PRODUCT_DETAIL + params);
    }else{	
    	cfGoToPage(_PAGE_PRODUCT_DETAIL + params);
   }	
}

function cfGoProductAi(prodCd, ithrCd, catGb) {
	window.open(_PAGE_PRODUCT_AI_SHOPPING_LENS + '&PROD_CD=' + prodCd + '&ITHR_CD=' + ithrCd + '&CAT_GB=' + catGb);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 메인으로 이동
 * <pre>
 *		cfGoToBrandMain('10003', '3216');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드
 * @param  : scateCd - 소카테고리코드
 * @since  : 2016/03/04
 * @author : gagamel
 */
function cfGoToBrandMain(brandCd, ithrCd) {
	var params = "&CAT_GB=10005";
	params += "&TCAT_CD=" + brandCd;
	if (ithrCd) params += "&ITHR_CD=" + ithrCd;
	
	cfGoToPage(_PAGE_BRAND_MAIN + params);
}

/**
 * 송장추적
 */
function cfInvoiceTracking(inv, url) {
	if (url == "" || url == " ") {
		alert('송장추적이 안되는 상품입니다.');
		return;
	} else {
		var actionUrl = url + inv;
		cfWindowOpen(actionUrl, "InvoiceTracking", 700, 600, 1, 100, 100, "yes");
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 우편번호찾기 레이어
 * <pre>
 *		cfOpenAddressLayer('MEM_INFO'); ==> 미사용
 *
 *      cfPostAddressLayer(callPosition) 대체
 * </pre>
 * @param  : callGb - 호출구분. 필수
 *               MEM_INFO - 회원정보수정
 *               ORDER_ORD - 주문서 주문자 주소
 *               ORDER_RCP - 주문서 받는사람(수령자) 주소
 *               ADDR_LAYER - 배송주소록 레이어
 * @since  : 2016/03/16
 * @author : gagamel
 */
/*function cfOpenAddressLayer(callGb) {
	var actionUrl = _PAGE_POST_SEARCH + "&CALL_GB=" + callGb;
	
	cfOpenLayerForTargetCreation(actionUrl, "pop_zipcode");
}*/

/**
 * 기획전메인 화면으로 이동
 * @param planGb - 기획전구분
 * @param ithrCd - 유입경로
 */
function cfGoToPlanningMain(planGb, endState, ithrCd) {
	var params = "";
	if (planGb) {
		params += "&PLAN_GB=" + planGb;				
	}
	
	if (endState){
		params += "&END_STATE=" + endState;
	}
	
	if (ithrCd) params += "&ITHR_CD=" + ithrCd;
	
	cfGoToPage(_PAGE_PLANNING_MAIN + params);
}

/**
 * 기획전상세 화면으로 이동
 * @param planSq - 기획전번호
 */
function cfGoToPlanningDetail(planSq, ithrCd) {
	var params = "&datacls=" + planSq;
	if (ithrCd) params += "&ITHR_CD=" + ithrCd;
	
	cfGoToPage(_PAGE_PLANNING_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 장바구니 담기
 * <pre>
 *     // 사이즈 미선택 시 사용 (단품)
 *     cfPutCart('HZU04D501NV', 'HZU04D501NV', 'N', 'Y', '10');
 *     
 *     // 사이즈 미선택 시 사용 (세트상품)
 *     cfPutCart('0MST4C527GE', '0MST4C527GE', 'Y', 'Y', '10');
 *     
 *     // 상품상세와 상품퀵뷰에서 사이즈 선택 시 사용 (단품)
 *     cfPutCart('HZU04D501NV', 'HZU04D501NV;095', 'N', 'Y', '10');
 *     cfPutCart('HZU04D501NV', 'HZU04D501NV;095', 'N', 'Y', '10', 1, 'DIRECT');
 *     
 *     // 상품상세와 상품퀵뷰에서 사이즈 선택 시 사용 (세트상품)
 *     cfPutCart('0MST4C527GE', 'MAJ14B527GE;R77`MAJ14B527GE;095', 'Y', 'Y', '10');
 *     cfPutCart('0MST4C527GE', 'MAJ14B527GE;R77`MAJ14B527GE;095', 'Y', 'Y', '10', 1, 'DIRECT');
 * </pre>
 * @param  : prodCd - 상품코드
 * @param itemSizeCds - '상품코드;사이즈코드;상품수량'의 문자열. 필수
 *     사이즈 미 선택 시는 '0MST4C527GE'와 같이 구성
 *     상품상세와 상품퀵뷰에서 사이즈 선택 시는 'MAJ14B527GE;R77`MAJ14B527GE;095...'와 같이 구성
 * @param  : setYn - 세트여부
 * @param  : selfProdYn - 자사상품여부(Y:자사상품, N:타사상품). 필수
 * @param  : formalGb - 정상이월구분. 필수
 * @param  : prodQty - 상품수량. 옵션
 * @param  : btnType - 버튼유형(DIRECT:바로구매, SOCIAL:소셜구매). 옵션
 * @param  : planSq - 기획전번호. 옵션
 * @date   : 2016/03/09
 * @author : gagamel
 */
function cfPutCart(prodCd, itemSizeCds, setYn, selfProdYn, formalGb, prodQty, btnType, planSq) { 
	if (ngjfIsNull(prodCd)) return;
	
	/*prodQty = typeof(prodQty) == "undefined" ? "" : prodQty;
	btnType = typeof(btnType) == "undefined" ? "" : btnType;
	planSq  = typeof(planSq)  == "undefined" ? "" : planSq;*/
	if (!prodQty) prodQty = "";
	if (!btnType) btnType = "";
	if (!planSq) planSq = "";

	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false && btnType == 'DIRECT') {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_ckPrefix + "_RETURN_URL", document.location.href, 1);
				cfGoToPage(_PAGE_LOGIN);
			} else {
				cfPutCartAjax(prodCd, itemSizeCds, setYn, selfProdYn, formalGb, prodQty, btnType, planSq);
			}
		}
		, "json");

	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 장바구니 담기
 * <pre>
 *     // 사이즈 미선택 시 사용 (단품)
 *     cfPutCartAjax('HZU04D501NV', 'HZU04D501NV', 'N', 'Y', '10');
 *     
 *     // 사이즈 미선택 시 사용 (세트상품)
 *     cfPutCartAjax('0MST4C527GE', '0MST4C527GE', 'Y', 'Y', '10');
 *     
 *     // 상품상세와 상품퀵뷰에서 사이즈 선택 시 사용 (단품)
 *     cfPutCartAjax('HZU04D501NV', 'HZU04D501NV;095', 'N', 'Y', '10');
 *     cfPutCartAjax('HZU04D501NV', 'HZU04D501NV;095', 'N', 'Y', '10', 1, 'DIRECT');
 *     
 *     // 상품상세와 상품퀵뷰에서 사이즈 선택 시 사용 (세트상품)
 *     cfPutCartAjax('0MST4C527GE', 'MAJ14B527GE;R77`MAJ14B527GE;095', 'Y', 'Y', '10');
 *     cfPutCartAjax('0MST4C527GE', 'MAJ14B527GE;R77`MAJ14B527GE;095', 'Y', 'Y', '10', 1, 'DIRECT');
 *     
 *     // 기획전상세에서 정상몰 바로구매 이동시 몰번호, 기획전번호 전달
 *     cfPutCartAjax('0MST4C527GE', 'MAJ14B527GE;R77`MAJ14B527GE;095', 'Y', 'Y', '10', 1, 'DIRECT', 'IT0701', '29095');
 * </pre>
 * @param  : prodCd - 상품코드
 * @param  : itemSizeCds - '상품코드;사이즈코드;상품수량'의 문자열. 필수
 *     사이즈 미 선택 시는 '0MST4C527GE'와 같이 구성
 *     상품상세와 상품퀵뷰에서 사이즈 선택 시는 'MAJ14B527GE;R77`MAJ14B527GE;095...'와 같이 구성
 * @param  : setYn - 세트여부
 * @param  : selfProdYn - 자사상품여부(Y:자사상품, N:타사상품). 필수
 * @param  : formalGb - 정상이월구분. 필수
 * @param  : prodQty - 상품수량
 * @param  : btnType - 버튼유형(DIRECT:바로구매, SOCIAL:소셜구매)
 * @param  : planSq - 기획전번호. 옵션
 * @since  : 2016/03/09
 * @author : gagamel
 */
function cfPutCartAjax(prodCd, itemSizeCds, setYn, selfProdYn, formalGb, prodQty, btnType, planSq) {
	//var offset = $(".p_info .size .form_wrap").offset().top - 500;
	if (setYn == "N") { // 단품
		var arrSizeCds = itemSizeCds.split(";");
		if (arrSizeCds.length > 0) {
			if (ngjfIsNull(arrSizeCds[1])) {
				alert("사이즈를 선택해 주십시오.");
				$('.size .form_wrap li').first().focus();
				//$(window).scrollTop(offset);
				return;
			}
			
			if (ngjfIsNull(prodQty)) {
				alert("수량을 선택해 주십시오.");
				$('.quantity .form_wrap #stock_'+prodCd).focus();
				//$(window).scrollTop(offset);
				return;
			}
		}
	} else { // 세트상품
		var arrItemSizeCds = itemSizeCds.split("`");
		
		if (arrItemSizeCds.length > 0) {
			for (var i = 0; i < arrItemSizeCds.length; i++) {
				var arrSizeCds = arrItemSizeCds.split(";");
				
				if (arrSizeCds.length > 0) {
					if (ngjfIsNull(arrSizeCds[1])) {
						alert("사이즈를 선택해 주십시오.");
						$('.size .form_wrap li').first().focus();
						//$(window).scrollTop(offset);
						return;
					}
					
					if (ngjfIsNull(prodQty)) {
						alert("수량을 선택해 주십시오.");
						$('.quantity .form_wrap #stock_'+prodCd).focus();
						//$(window).scrollTop(offset);
						return;
					}
				}
			}
		}
	}

	var cartGb = "B"; // 장바구니구분
	
	if (selfProdYn == "Y") { // 자사상품이면
		if (btnType == "DIRECT") cartGb = "W"; // 버튼유형이 바로구매이면 W:일반바로구매장바구니
		else if (btnType == "SOCIAL") cartGb = "X"; // 버튼유형이 소셜이면 X:자사소셜바로구매장바구니
	} else {
		//입점도 자사장바구니 처리
		cartGb = "B";
		//cartGb = "C"; // C:타사일반장바구니
		
		//몽벨상품은 자사장바구니로
		if (prodCd.substring(0,1) == "M") {
			cartGb = "B";
			// 버튼유형이 바로구매이면
			if (btnType == "DIRECT") cartGb = "W"; // 버튼유형이 바로구매이면 W:일반바로구매장바구니
			else if (btnType == "SOCIAL") cartGb = "X"; // 버튼유형이 소셜이면 Y:타사소셜바로구매장바구니
		}else{
			// 버튼유형이 바로구매이면
			if (btnType == "DIRECT") cartGb = "Z"; // 버튼유형이 바로구매이면 Z:일반바로구매장바구니
			else if (btnType == "SOCIAL") cartGb = "Y"; // 버튼유형이 소셜이면 Y:타사소셜바로구매장바구니
		}
	}
	
	var params = new Object();
	params.CART_GB = cartGb;
	params.PROD_CD = prodCd;
	params.ITEMSIZE_CDS = itemSizeCds;
	params.SET_YN = setYn;
	params.PROD_QTY = prodQty;
	params.PLAN_SQ = planSq;

	ngjfAjaxSubmit(_PAGE_CART_PUT, "json", cfProcessAfterPutCartAjax, params);
	
	return false;
}

/**
 * 장바구니담기 후처리
 * @param result - 결과값
 */
function cfProcessAfterPutCartAjax(result) {
	if (result.RESULT_CD == "EXEC_SUCC" || result.RESULT_CD == "EXIST") {
		// GNB > 장바구니 수량 증가
		if ($("#cart-cnt").val() > 0) {
			// 장바구니에 담긴 상품수 조회
			cfGetCartProductTotalCount();
		}
		//20170214 소셜유형이 예약상품일경우 바로구매처리
		if (result.CART_GB == "Z" || result.CART_GB == "W" ||  result.CART_GB == "X" || result.CART_GB == "Y") {
			cfGoToPage(_PAGE_DIRECT_BUY + "&CART_GB=" + result.CART_GB
					+ "&ITHR_CD=" + result.ITHR_CD
					+ "&PLAN_SQ=" + result.PLAN_SQ);
		} else {
/*
			//<!-- 장바구니 - LayerPopup -->
			var str = '<div class="layerpop_wrap" id="tb_cart" >\n';
			str += '	<div class="hd">\n';
			str += '		<h1>장바구니 담기</h1>\n';
			str += '		<a href="javascript:void(0);" class="close on" onclick="cfCloseLayer(\'tb_cart\');">CLOSE</a >\n';
			str += '	</div>\n';
			str += '	<div class="content pop_brand">\n';
			str += '		<div class="provision_scroll">\n';
			str += '			<div class="swiper-wrapper">\n';
			str += '				<div class="swiper-slide">\n';
			str += '					<div class="cart">\n';
			str += '						<p>장바구니에 담겼습니다.</p>\n';
			str += '						<p>확인하시겠습니까?</p>\n';
			str += '					</div>\n';
			str += '					<div class="btn_box">\n';
			str += '					<a href="javascript:void(0);" onclick="cfCloseLayer(\'tb_cart\');">계속 쇼핑하기</a >\n';
			str += '					<a href="javascript:void(0);" onclick="cfGoToPage(_PAGE_CART_LIST);">장바구니 가기</a>\n';
			str += '					</div>\n';
			str += '				</div><!--//swiper-slide-->\n';
			str += '			</div>\n';
			str += '		</div><!--//provision_scroll-->\n';
			str += '	</div><!--//content-->\n';
			str += '</div>\n';

			var str = "";
			str += '<div class="ps-layer-msg" id="tb_cart">';
			str += '	<div class="inner">';
			str += '		<p class="msg">장바구니에 담겼습니다.<br>장바구니로 이동하시겠습니까?</p>';
			str += '		<div class="ps-btn-wrap ">';
			str += '			<a href="javascript:void(0)" class="ps-btn type1 etc fs-14" onclick="cfCloseLayer(\'tb_cart\');">쇼핑 계속하기</a>';
			str += '			<a href="javascript:void(0)" class="ps-btn type2 fs-14" onclick="cfGoToPage(_PAGE_CART_LIST);">장바구니 가기</a>';
			str += '		</div>';
			str += '	</div>';
			str += '</div>';
			*/
			
			$("[data-open-layer='addCart']").click();
			//if ($('#layer_cart').length == 0) {
			//	$('body').append(str);
			//}
			
			//장바구니 상품 갯수 조회
			cfGetCartProductTotalCount();
			//lpopOpen('tb_cart');
		}
	} else {
		alert("오류로 인해 처리되지 않았습니다.");
	}
}


/**
 * 장바구니에 담긴 상품수 조회
 */
function cfGetCartProductTotalCount() {
	// 장바구니에 담긴 상품수 조회
	ngjfAjaxSubmit("/order.do?cmd=getCartProductTotalCountAjax", "json", cfProcessAfterGetCartProductTotalCount, new Object());
}

/**
 * 장바구니에 담긴 상품수 조회 후처리
 * 
 */
function cfProcessAfterGetCartProductTotalCount(result) {
	
	if($('.cart-cnt').length > 0){
		processAfterGetCartProductTotalCount(result);
	}
	else{
		const hsCtq = document.querySelector('.has-cart');
		if (result.CART_PROD_CNT > 0) {
			$('#cart-cnt').val(result.CART_PROD_CNT);
			hsCtq.classList.remove('hide-indicator');
		} else {
			hsCtq.classList.add('hide-indicator');
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : 위시리스트 담기
 * <pre>
 *     cfPutWishlist('HZU04D501NV');
 *     cfPutWishlist('HZU04D501NV;095');
 *     cfPutWishlist('HZU04D501NV;095;1');
 *     cfPutWishlist('HZU04D501NV`HZU04D501BK');
 *     cfPutWishlist('HZU04D501NV;095`HZU04D501BK;090');
 *     cfPutWishlist('HZU04D501NV;095;1`HZU04D501BK;090;2');
 * </pre>
 * @param  : prodCd - 상품코드. 필수
 * @param  : sizeCd - 사이즈코드. 옵션
 * @param  : prodQty - 상품수량. 옵션
 * @since  : 2016/03/09s
 * @author : gagamel
 */
function cfPutWishlist(prodSizeCds) {
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_chPrefix + "_RETURN_URL", document.location.href, 1);
				
				// Open Login Layer
				cfGoToPage(_PAGE_LOGIN);
			} else {
				// 2. 로그인이 되어 있다면
				var params = new Object();
				params.PRODSIZE_CDS = prodSizeCds;
				
				ngjfAjaxSubmit(_PAGE_WISHLIST_PUT, "json", cfProcessAfterPutWishlist, params);
			}
		}
		, "json");
	
	return false;
}

function cfDelWishlist(params) {
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_chPrefix + "_RETURN_URL", document.location.href, 1);
				
				// Open Login Layer
				cfGoToPage(_PAGE_LOGIN);
			} else {
				// 2. 로그인이 되어 있다면
				ngjfAjaxSubmit(_PAGE_WISHLIST_DEL, "json", cfProcessAfterDelWishlist, params);
			}
		}
		, "json");
	
	return false;
}

/**
 * 위시리스트 삭제 후처리
 * @param result
 */
function cfProcessAfterDelWishlist(result) {

	if (result.RESULT_CODE == 1) {
		var $heart = $("."+result.PROD_CD+".heart-btn");

		//위시취소시 팝업 없음
		if($heart.length > 0){
			if($heart.hasClass("on")){
				$heart.removeClass("on");
				return false;
			}
		}
	}
}

/**
 * 위시리스트 담기 후처리
 * @param result
 */
function cfProcessAfterPutWishlist(result) {
	if (result.RESULT_CD == "EXEC_SUCC") {
		// GNB > 위시리스트 수량 증가
	/*	if ($(".side_area").length > 0) {
			// 위시리스트에 담긴 상품수 조회
			cfGetWishlistTotalCount();
		}
	*/	
        //위쉬취소시 팝업 없음
        if(!$('.wishlist').hasClass("on")){
            return false;
        }
//		var str = '<div class="layerpop_wrap" id="tb_wish" >\n';
//	    str += '	<div class="hd">\n';
//	    str += '		<h1>위시리스트 담기</h1>\n';
//		str += '		<a href="javascript:void(0);" class="close on" onclick="cfCloseLayer(\'tb_wish\');">CLOSE</a >\n';
//		str += '	</div>\n';
//	    str += '	<div class="content pop_brand">\n';
//	    str += '		<div class="provision_scroll">\n';
//	    str += '			<div class="swiper-wrapper">\n';
//	    str += '				<div class="swiper-slide">\n';
//	    str += '					<div class="wishlist">\n';
//	    str += '						<p>위시리스트에 담겼습니다.</p>\n';
//	    str += '						<p>확인하시겠습니까?</p>\n';	
//	    str += '					</div>\n';
//	    str += '					<div class="btn_box">\n';
//	    str += '						<a href="javascript:void(0);" onclick="cfCloseLayer(\'tb_wish\');">계속 쇼핑하기</a >\n';
//	    str += '						<a href="javascript:void(0);" onclick="cfGoToPage(_PAGE_WISHLIST)" >위시리스트 가기</a>\n';
//	    str += '					</div>\n';	
//	    str += '				</div><!--//swiper-slide-->\n';						
//	    str += '			</div>\n';
//	    str += '		</div><!--//provision_scroll-->\n';
//	    str += '	</div><!--//content-->\n';
//	    str += '</div>';

		var str = '<div class="popup-wrap active" id="tb_wish">';
			str += '<div class="ps-layer-msg">';
			str += '<div class="inner">';
			str += '<p class="msg">';
			str += '위시리스트에 담겼습니다.<br>';
			str += '확인하시겠습니까?';
			str += '</p>';
			str += '<div class="ps-btn-wrap ">';
			str += '<a href="javascript:void(0)" class="ps-btn type1 etc fs-14" onclick="cfCloseModalLayer(\'tb_wish\');">쇼핑 계속하기</a>';
			str += '<a href="javascript:void(0)" class="ps-btn type2 fs-14" onclick="cfGoToPage(_PAGE_WISHLIST)">위시리스트 가기</a>';
			str += '</div>';
			str += '</div>';
			str += '</div>';
			str += '</div>';
		
	    if ($('#tb_wish').length == 0) {
	    	$('body').append(str);
		}
		

	    // lpopOpen('tb_wish');

	} else if (result.RESULT_CD == "EXEC_COUNT_OVER") {
		alert("위시리스트는 최대 60개 까지만 등록할 수 있습니다.");
	} else {
		alert("오류로 인해 처리되지 않았습니다.");
	}
}

/**
 * 위시리스트에 담긴 상품수 조회
 */
function cfGetWishlistTotalCount() {
	// 장바구니에 담긴 상품수 조회
	ngjfAjaxSubmit("/member.do?cmd=getWishListProductTotalCountAjax", "html", "wishlist-cnt");
	//$('#wishlist-cnt').removeClass('hide');
}


/**
 * 상품평 등록 레이어 
 */
function cfRegisterReview(prodCd, prodNm, reviewSq, ordNo) { 
	return;
	
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_ckPrefix + "_RETURN_URL", document.location.href, 1);
				cfGoToPage(_PAGE_LOGIN);
				
			} else { 
				
				var params = new Object();
				params.PROD_CD = prodCd;
				params.PROD_NM = prodNm;
		        params.REVIEW_SQ = reviewSq ;
		        params.ORD_NO = ordNo ;
				$.post("/product.do?cmd=checkReview"
						, params
						, function(resultreview) {
							// LSNdms 이미 작성한 내역이 있으면 상세 리뷰 수정팝업으로
							/*if (resultreview.REVIEWCHECK == "D") {
								alert("이미 작성한 내역이 있는지\n마이페이지>문의/후기 내역에\n상품후기 페이지에서 확인하여 주십시오.");
								return false;
							} else 
							*/
							
							if (resultreview.REVIEWCHECK == "X") {
								alert("상품평 작성 정보 조회중 오류가 발생했습니다.\n관리자에게 문의하세요.");
								return false;
							}else if (resultreview.REVIEWCHECK == "O" || resultreview.REVIEWCHECK == "" || resultreview.REVIEWCHECK == null )  {
								alert(prodNm  + " 상품에 대한 구매 이력이 없습니다.");
								return false;
							} else{
                                
								var str = '<div class="layerpop_wrap" id="write_review" data-layer-target="review-write-popup"></div>';
								if ($('#write_review').length == 0) {
									$('body').append(str);
								}
								cfOpenLayer(_PAGE_REVIEW_REG, 'write_review', params);
                            }
						}
						, "json");

			}
		}
		, "json");

	return false;
}



/**
 * 상품쿠폰 다운로드 레이어 
 */
/*function cfProdCouponDownLayer(prodCd) { 
	if (ngjfIsNull(prodCd)) return;
	
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_ckPrefix + "_RETURN_URL", document.location.href, 1);
				cfGoToPage(_PAGE_LOGIN);
			} else { 
				
				var str = '<div class="layer_pop_wrap" id="layer_popup_prodcoupondownload" ></div>';
				if ($('#layer_popup_prodcoupondownload').length == 0) {
					$('body').append(str); 
				}
				var params = new Object();
				params.PROD_CD = prodCd;
				cfOpenLayer(_PAGE_DOWNABLE_PROD_COUPON_LIST, 'layer_popup_prodcoupondownload', params);
			}
		}
		, "json");

	return false;
}*/
/**
 * 미리계산
 */
function cfProductPrePriceCalculator(prodCd) {
if (ngjfIsNull(prodCd)) return;

	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_ckPrefix + "_RETURN_URL", document.location.href, 1);
				if(confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")) {
					cfGoToPage(_PAGE_LOGIN);
				} else {
					return false;
				}
			} else {  
				
				
				var params = new Object();
				params.PROD_CD = prodCd;
				
				var str = '<div class="layer_wrap" id="price_cal_wrap"></div>';
				if ($('#price_cal_wrap').length == 0) {
					$('#wrap').append(str);
				}
			
				 cfOpenLayer(_PAGE_PRE_PRICE_CAL_LAYER, 'price_cal_wrap', params);
			}
		}
		, "json");

	return false;
}
/**
 * 상품쿠폰 다운로드 레이어 
 * 쿠폰 다운로드가 모두 받을수 있도록 조치
 */
function cfProdCouponDownLayer(prodCd) { 
	if (ngjfIsNull(prodCd)) return;
	
	$.post("/common.do?cmd=checkLogin"
		, null
		, function(result) {
			if (result.IS_LOGIN == false) {
				// 로그인이 안 된 경우 로그인 레이어 띄움
				//cfSetCookie(_ckPrefix + "_RETURN_URL", document.location.href, 1);
				if(confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")) {
					cfGoToPage(_PAGE_LOGIN);
				} else {
					return false;
				}
			} else {  
				
				/*var str = '<div class="layer_pop_wrap" id="layer_popup_prodcoupondownload" ></div>';
				if ($('#layer_popup_prodcoupondownload').length == 0) {
					$('body').append(str); 
				}
				var params = new Object();
				params.PROD_CD = prodCd;
				cfOpenLayer(_PAGE_DOWNABLE_PROD_COUPON_LIST, 'layer_popup_prodcoupondownload', params);
				*/
				var params = new Object();
				params.PROD_CD = prodCd;
				// 상품과 회원에 대한 상품쿠폰 모두 받을 수 있도록 처리 
				ngjfAjaxSubmit("/product.do?cmd=createAjaxCouponDown", "json", cfCreateCouponResult, params);
			}
		}
		, "json");

	return false;
}


//쿠폰 등록 후 결과 처리
function cfCreateCouponResult(result) {

	var result_msg = new Array();
	result_msg = result.msg.split('/');
	var coupon_nm = "";
	var detail_msg = new Array();
	var show_msg = "";
	for (var i = 0; i < result_msg.length; i++) {
		detail_msg = result_msg[i].split('>');  // 쿠폰ID>쿠폰명>쿠폰결과
		//coupon_nm = $("#coupon_"+detail_msg[0]).attr("text");
		 // 
		coupon_nm = detail_msg[1];
		if (detail_msg[2] == "Y") {
			show_msg += "쿠폰이 다운로드 되었습니다.[" + coupon_nm + "]\n";
		} else if (detail_msg[2] == "L") {
			show_msg +="총발행횟수제한을 초과한 쿠폰입니다.[" + coupon_nm + "]\n";
	  	} else if (detail_msg[2] == "A") {
	  		show_msg +="쿠폰이 발급되어 있습니다..[" + coupon_nm + "]\n";
	  	} else if (detail_msg[2] == "Z") {
	  		show_msg +="다운로드 기간이 아닙니다.[" + coupon_nm + "]\n";
	  	} else if (detail_msg[2] == "X") {
	  		show_msg +="유효기간이 만료된 쿠폰입니다.[" + coupon_nm + "]\n";
	  	} else {
	  		show_msg +="입력하신 쿠폰번호는 등록되어 있지 않습니다.[" + coupon_nm + "]\n";
	  	}


	}
	
	alert(show_msg);
	//cfCloseLayer('layer_popup_prodcoupondownload');
}

/**
 * 상품 퀵뷰 레이어 
 */
function cfProdQuickViewLayer(prodCd, ithrCd, obj){
	var str = '<div class="layer_wrap" id="product_detail_wrap" ></div>';

//	if ($(obj).parents('ul').next('.product_detail_wrap').length == 0) {
		//$('.product_list_wrap').append(str);
//		$(obj).parents('ul').parents('.product_list_wrap').append(str);
//	}

	var params = new Object();
	params.PROD_CD = prodCd; 
	params.ITHR_CD = ithrCd;
	var str = '<div class="layer_wrap" id="product_detail_wrap"></div>';
	if ($('#product_detail_wrap').length == 0) {
		$('#wrap').append(str);
	}

	 cfOpenLayer(_PAGE_QUCIK_PRODUCT_LAYER, 'product_detail_wrap', params);
	
}

/**
 * 계좌인증 - 이니시스
 * 이니시스 페이지에 계좌 관련 정보를 넘겨 계좌 인증 결과를 form에 설정된 rltURL 페이지로 넘겨 받는다.
 * 인증 결과는 jfAuthAccountResult(strRet, strErrMsg) 함수를 호출해 주기 때문에 호출 페이지에 jfAuthAccountResult 함수를 만들어야 한다.
 * - strRet : 결과 코드(000 : 계좌 인증 성공)
 * - strErrMsg : 결과메세지
 *                    
 * @author syson
 * @date: 2014. 9. 19.
 * @param bankCd    : 은행코드(G940)
 * @param accountNo : 계좌번호
 * @param accountNm : 예금주명
 */
function cfCallAuthAccount(bankCd, accountNo, accountNm) {
	var rltURL = location.protocol + "//" + location.host + "/paygate/authAccount.jsp";
//	alert("jdfladjflajflasd");

//	if ($('#authAccountDiv').length == 0) {
//		var str = '<div id="authAccountDiv">';
//		str += '	<form name="authAccountForm" id="authAccountForm">';
//		str += '	<input type="hidden" name="mid" id="mid" value="lsnmall000" />';
//		str += '	<input type="hidden" name="banksett" id="banksett" value="" />';
//		str += '	<input type="hidden" name="noacct" id="noacct" value="" />';
//		str += '	<input type="hidden" name="nmcomp" id="nmcomp" value="" />';
//		str += '	<input type="hidden" name="rltURL" id="rltURL" value="' + rltURL + '" />';
//		str += '	</form>';
//		str += '	<iframe name="authAccountframe" id="authAccountframe" width="0" height="0" frameborder="no"></iframe>';
//		str += '</div>';
//		$("body").append(str);
//	}

	var authAccountForm = document.authAccountForm;
	authAccountForm.rltURL.value = rltURL;
	authAccountForm.banksett.value = bankCd;
	authAccountForm.noacct.value = accountNo;
	authAccountForm.nmcomp.value = accountNm;

	// 한글 파라미터 처리 관련
	if (authAccountForm.canHaveHTML) { // IE 
		authAccountForm.setAttribute("acceptCharset","EUC-KR"); 
		document.charset = "EUC-KR";
	} else {
		authAccountForm.setAttribute("accept-charset","EUC-KR"); 
	} 

	authAccountForm.action = "https://iniweb.inicis.com/DefaultWebApp/service/acct_cfrm/inicis.jsp";
	authAccountForm.method = "GET";
	authAccountForm.target = "authAccountframe";
	authAccountForm.submit();

	if (authAccountForm.canHaveHTML) { // IE 
		document.charset = "UTF-8";
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : facebook 연동
 * <pre>
 *     cfSendToFaceBook( location.protocol + '//locd.shop.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=G25D121S9S9','SNEAKERS SUPER STAR','//img.luxeplus.com/prod/G/G2/G25D/G25D121S9S9/imageq/R_0x200/C5_200x200/G25D121S9S9_01.jpg')
 * </pre>
 * @param  : linkUrl - 연동 URL. 필수
 * @param  : prodNm - 상품명. 필수
 * @param  : prodImg - 상품이미지. 옵션
 */
function cfSendToFaceBook(linkUrl, prodNm, prodImg, description) {
	var pageUrl = location.protocol + "//www.facebook.com/dialog/feed?app_id="+_snsFacebookClientId; 
	var caption = _lsnMobUrl.replaceAll("https://", "").replaceAll("http://", "").toUpperCase();
	
	if (!ngjfIsNull(prodNm)) pageUrl += "&name="+ encodeURIComponent(prodNm);
	if (!ngjfIsNull(prodImg)) pageUrl += "&picture=" + encodeURIComponent(prodImg);
	if (!ngjfIsNull(linkUrl)) pageUrl += "&link="+ encodeURIComponent(linkUrl);
	if (!ngjfIsNull(description)) pageUrl += "&link="+ encodeURIComponent(description);
	if (!ngjfIsNull(caption)) pageUrl += "&caption="+ encodeURIComponent(caption);
	
	window.open(pageUrl, "facebook", "width=" + 600 + ", height=" + 450 + ", scrollbars=yes, status=yes, resizable=1");
}

function naverBlogShare(url, title) {
	var shareURL = "https://share.naver.com/web/shareView?url=" + encodeURI(encodeURIComponent(url)) + "&title=" + encodeURIComponent(title);

	window.open(shareURL, "naver", "width=" + 600 + ", height=" + 450 + ", scrollbars=yes, status=yes, resizable=1");
}

function twitterShare(url, title) {
	var shareURL = "http://twitter.com/share?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url);

	window.open(shareURL, "twitter", "width=" + 600 + ", height=" + 450 + ", scrollbars=yes, status=yes, resizable=1");
	// http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카카오스토리 공유하기
 * <pre>
 *     cfSendToKakaoStory(_PAGE_PRODUCT_DETAIL + 'HZU04D501NV', 'CRISS CROSS SANDAL (MIX)');
 * </pre>
 * @param  : page - page. 필수
 * @param  : prodNm - 상품명. 필수
 * @since  : 2016/03/28
 * @author : gagamel
 */
var kakaoInitCnt = 0; //카카오 초기화 카운트, 재실행 방지를 위해 사용함
function cfSendToKakaoStory(page, prodNm) {
	if ( kakaoInitCnt == 0 ) {
		Kakao.init(_snsKakaoClientId);
		kakaoInitCnt++;
	}
	
	Kakao.Story.share({
		url: page,
		text: prodNm
	});
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카카링크 공유하기
 * <pre>
 *     cfSendKaKaoLink(_PAGE_PRODUCT_DETAIL + 'HZU04D501NV', 'CRISS CROSS SANDAL (MIX)');
 * </pre>
 * @param  : page - page. 필수
 * @param  : prodNm - 상품명. 필수
 * @since  : 2017/05/17
 * @author : brandon
 */
function cfSendKaKaoLink(imgurl,linkurl,prodnm, descript) {
	if ( kakaoInitCnt == 0 ) {
		Kakao.init(_snsKakaoClientId); 
		kakaoInitCnt++;
	}
	
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: prodnm,
			description: descript,
			imageUrl: imgurl,
			link: {
					mobileWebUrl: linkurl,
					webUrl: linkurl
					}
			},
			social: {
				likeCount: 286,
				commentCount: 45,
				sharedCount: 845
			},
			buttons: [{
				title: '바로가기',
				link: {
						mobileWebUrl: linkurl,
						webUrl: linkurl
						}
			}]
	});
}

/**
 * @type   : function
 * @access : public
 * @desc   : 1대1 문의 상세화면으로 이동
 * <pre>
 *		cfCounselDetail('10003');
 * </pre>
 * @param  : counselSq - 1대1 문의 키. 필수
 */
function cfCounselDetail(counselSq) {
	var params = "&COUNSEL_SQ=" + counselSq;
	cfGoToPage(_PAGE_COUNSEL_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 1대1 문의 수정화면으로 이동
 * <pre>
 *		cfCounselDetail('10003');
 * </pre>
 * @param  : counselSq - 1대1 문의 키. 필수
 */
function cfUpdateCounsel(counselSq){
	var params = "&COUNSEL_SQ=" + counselSq;
	cfGoToPage(_PAGE_COUNSEL_MODIFY + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 기획전 문의 상세화면으로 이동
 * <pre>
 *		cfQuestionDetail('10003');
 * </pre>
 * @param  : counselSq - 1대1 문의 키. 필수
 */
function cfQuestionDetail(counselSq) {
	var params = "&COUNSEL_SQ=" + counselSq;
	cfGoToPage(_PAGE_PLANNING_QUESTION_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 기획전 문의 수정화면으로 이동
 * <pre>
 *		 cfUpdateQuestion('10003');
 * </pre>
 * @param  : counselSq - 1대1 문의 키. 필수
 */
function cfUpdateQuestion(counselSq){
	var params = "&COUNSEL_SQ=" + counselSq;
	cfGoToPage(_PAGE_PLANNING_QUESTION_MODIFY + params);
}



/**
 * @type   : function
 * @access : public
 * @desc   : 카드혜택보기
 * <pre>
 *		cfCardInfo();
 * </pre>
 */
function cfCardInfo() {
	var str = '<div class="layer_pop_wrap" id="layer_popup_cardinfo" ></div>';

	if ($('#layer_popup_cardinfo').length == 0) {
		$('body').append(str);
	}
	
	cfOpenLayer(_PAGE_CARD_LAYER, 'layer_popup_cardinfo');
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 사이즈 보기
 * <pre>
 *		cfCardInfo();
 * </pre>
 */

function cfBrandSizeInfo(brandCd,nitylecd){
	var str = '<div class="layer_pop_wrap" id="layer_popup_brandsize"></div>';
	
	if ($('#layer_popup_brandsize').length == 0) {
		$('body').append(str);
	}
	
	var params = "&BRAND_CD=" + brandCd;
	params += "&NI_TYPE_CD=" + nitylecd;
	
	cfOpenLayer(_PAGE_BRAND_SIZE_LAYER+params, 'layer_popup_brandsize');
}

/**
 * @type   : function
 * @access : public
 * @desc   :  사이즈 조견표 보기
 * <pre>
 *		cfCardInfo();
 * </pre>
 */

function cfSizeGuideLayerInfo(prodcd){

	var str = '<div id="layer_size_guide" class="layerpop_wrap"></div>';
	
	if ($('#layer_size_guide').length == 0) {
		$('#wrap').append(str);
	}
	
	var params = new Object();
	params.PROD_CD = prodcd;  
	
	cfOpenLayer(_PAGE_SIZE_GUIDE_LAYER, 'layer_size_guide',params);
}
/**
 * 쿠폰 등록 레이어 팝업
 */
function cfCouponRegisterLayer() {
    var str = '<div id="layer_coupon_reg" class="layer_wrap"></div>';
	
	if ($('#layer_coupon_reg').length == 0) {
		$('#wrap').append(str);
	}
	
	cfOpenLayer(_PAGE_COUPON_REG_LAYER, 'layer_coupon_reg');
}
/**
 * @type   : function
 * @access : public
 * @desc   :  품질보증기간 레이어 
 * <pre>
 *		cfCardInfo();
 * </pre>
 */

function cfQatermLayerInfo(){

//	var str = '<div id="layer_qaterm" class="layer_wrap"></div>';
//	
//	if ($('#layer_qaterm').length == 0) {
//		$('#wrap').append(str);
//	}
	
	var str = "";
	str += '<div class="popup-wrap active" data-layer-target="qaterm-popup" id="layer_qaterm">';
	str += '	<div class="ps-layer-full">';
	str += '		<div class="ps-layer-full--header">';
	str += '			<h4 class="title font-bold">품질보증기간 안내</h4>';
	str += '		</div>';
	str += '		<div class="ps-layer-full--content">';
	str += '			<div class="ps-inven">';
	str += '				<h4 class="title font-bold">품질보증기간이란?</h4>';
	str += '				<ul class="ps-list type1 mt-20">';
	str += '					<li>제조사 과실(봉제, 원단, 부자재)로 발생된 불량일 경우 고객께서 제조회사에 보상(무료수선, 교환, 환불)을 청구할 수 있는 기간을 의미합니다.</li>';
	str += '					<li>보상은 구입가격을 기준으로 함.</li>';
	str += '					<li>보상순서는 정상회복가능한 경우에 무료수선 해드리며, 정상회복이 불가능할 경우에는 동일상품 또는 동종상품으로 교환해 드립니다.</li>';
	str += '					<li>간혹, 보상과정에서 가격산정에 다소 의견차이가 발생될 수 있으니, 최초 상품구입 하실 때 영수증을 제시하여 주시기 바랍니다.</li>';
	str += '					<li>품질보증기간 경과 후에는 기획재정부에서 고시한 피해보상기준에 준하여 감가하여 보상해 드립니다.</li>';
	str += '					<li>상세기준은 한국소비자원 홈페이지 www.kca.go.kr을 참조하세요.</li>';
	str += '					<li>명확한 상품불량(봉제불량, 원단불량, 부자재불량, 사이즈불량)은 고객센터에서 조치해 드립니다.</li>';
	str += '					<li>단, 불량판정과정에서 의견차이가 발생될 수 있습니다.</li>';
	str += '					<li>이 경우에는 고객센터로 원인규명을 요구하시면 고객센터 판정소견서 또는 소비자단체의 심의결과를 알려 드립니다.</li>';
	str += '				</ul>';
	str += '				<h4 class="title font-bold mt-40">소비자단체 심의제도란?</h4>';
	str += '				<ul class="ps-list type1 mt-20">';
	str += '					<li>소비자 권익을 옹호하는 민간소비자단체인 소비자단체에서 매주 화요일에 분쟁의류 상품에 대하여 상의를 하여 결과를 의뢰자(고객 또는 제조회사)에게 알려드리고 있습니다.</li>';
	str += '					<li>저희 고객센터에서는 고객의 요구 시 소비자단체에 심의 의뢰를 무료로 대행하고 있습니다.</li>';
	str += '				</ul>';
	str += '			</div>';
	str += '		</div>';
	str += '		<button class="ps-btn icon close" data-close-layer="qaterm-popup" onclick="cfCloseLayerQaterm();"><span>닫기</span></button>';
	str += '	</div>';
	str += '</div>';
	
	if( $('#layer_qaterm').length == 0 ){
		$('body').append(str);
	}else{
		$('#layer_qaterm').addClass("active");
	}
	
	//cfOpenLayer(_PAGE_QATERM_LAYER, 'layer_qaterm');
}
function cfCloseLayerQaterm(){
	$('#layer_qaterm').removeClass("active");
}
/**
 * @type   : function
 * @access : public
 * @desc   : 매장목록 창(Layer) 오픈  
 *  @param : v_locCd    - 호출 위치, P : 상품상세, B: 브랜드 매장
 * @param  : v_tbrandCd - 대표브랜드코드(M)
 * @param  : v_prodCd - 상품코드
 * @param  : v_sizeCd 
 * @param  : v_areaCd  - 시도 코드
 * @param  : v_cornerNm - 코너명
 * @author : kbog2089
 */
function cfBrandStore(v_locCd, v_tbrandCd, v_prodCd, v_sizeCd, v_areaCd, v_cornerNm){

    if ($('#storeinfo').length == 0) {
        var str = '<div id="storeinfo" class="layer_wrap"></div>';
        $('body').append(str); 
    }
    if( v_tbrandCd == undefined ){ // 정의되지 않음으로 넘어오는 매개변수 처리
    	v_tbrandCd = "P";  // 프로스펙스 브랜드
    }
    if( v_locCd ==undefined ){
    	v_locCd = "P"; // 상품 
    }
    if(v_locCd == "P" &&  (v_sizeCd == undefined || v_sizeCd == '')) {
    	alert("사이즈를 선택하세요.");
    	return false;
    }
    
    v_tbrandCd = "P";
    //cfOpenLayer(actionUrl, 'storeinfo', 'fix', '');

    var params = new Object();
    params.LOC_CD       = v_locCd;     
    params.TBRAND_CD  = v_tbrandCd;
    params.PROD_CD     = v_prodCd;
    params.SIZE_CD      = v_sizeCd;
    params.AREA_CD     = v_areaCd
    params.CORNER_NM = v_cornerNm;
    cfOpenLayer(_PAGE_BRANDSTORE, "storeinfo", params);

}
/**
 * @type   : function
 * @access : public
 * @desc   : 스페셜 오더 보기
 * <pre>
 *		cfSpecialOrder();
 * </pre>
 */
function cfSpecialOrder(){
	var str = '<div class="layer_pop_wrap" id="layer_popup_specialorder"  ></div>';
	
	if ($('#layer_popup_specialorder').length == 0) {
		$('body').append(str);
	}
	
	cfOpenLayer(_PAGE_SPECAIL_ORDER_LAYER, 'layer_popup_specialorder');
}

/**
 * 서울보증보험가입내역 보기 팝업
 */
function cfInsuranceLayer(mallId, ordNo) {
	var actionUrl = "https://gateway.usafe.co.kr/esafe/InsuranceView.asp?mall_id=" + mallId + "&order_id=" + ordNo;
	var iXos = (window.screen.width - 700) / 2;
	var iYos = (window.screen.height - 600) / 2;

	cfWindowOpen(actionUrl, "InsuranceViewPopup", 700, 600, 1, iXos, iYos, "yes"); 
}

/**
 * 새창열기 
 * window.open 에서 사용되는 방식으로 features 설정
 * @param theURL		새창의 Url
 * @param winName	새창의 name
 * @param width		넓이
 * @param height		높이
 * @param center		위치센터여부 1: 센터 else 임의 0
 * @param left			center 1 이 아닐경우 세팅
 * @param top			center 1 이 아닐경우 세팅
 * @param scrollbars			스크롤 사용여부 'yes' or 'no'
 * @param fstate	새창의 기타 세부 설정
 * @return
 * EX) cfWindowOpen('/popup.do?cmd=getIDPassword', 'popup', 710, 610);
 * EX) cfWindowOpen('/popup.do?cmd=getIDPassword', 'popup', 710, 610,1, 400, 200, 'no', '');
 */
function cfWindowOpen(theURL, winName, width, height, center, left, top, scrollbars, fstate) {
	var features = "width=" + width ;
	features += ",height=" + height ;

	var state = "";
	if (center == undefined) center = 1;
	if (scrollbars == undefined) scrollbars = 'no';
	if (fstate == undefined) fstate = '';
	if (left == undefined) left = 100;
	if (top == undefined) top = 100;

	if (center == 1) {
		if (fstate == "") {
			state = features + ", left=" + (screen.width-width)/2 + ",top=" + (screen.height-height)/2+",scrollbars=" + scrollbars;
		} else {
			state = fstate + ", " + features + ", left=" + (screen.width-width)/2 + ",top=" + (screen.height-height)/2+",scrollbars=" + scrollbars + ",resizable=no";
		}
	} else {
		if (fstate == "") {
			state = features + ", left=" + left + ",top=" + top +",scrollbars=" + scrollbars;
		} else {
			state = fstate + ", " + features + ", left=" + left + ",top=" + top +",scrollbars=" + scrollbars + ",resizable=no";
		}
	}

	var win = window.open(theURL,winName,state);
	win.focus();
}

/**
 * @type   : function
 * @access : public
 * @desc   : 비밀번호변경 레이어 오픈
 * <pre>
 *     cfOpenPasswordChangeLayer();
 * </pre>
 * @since  : 2016/08/08
 * @author : gagamel
 */
function cfOpenPasswordChangeLayer() {
	var str = '<div class="layerpop_wrap" id="layer_popup_passwdchange"></div>';
	if ($('#layer_popup_passwdchange').length == 0) {
		$('body').append(str); 
	}

	cfOpenLayer(_PAGE_PASSWORD_CHANGE, "layer_popup_passwdchange");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 패밀리 인증 레이어
 * <pre>
 *     cfFamilyConfirmLayer;
 * </pre>
 * @since  : 2016/12/08
 * @author : kes
 */
function cfFamilyConfirmLayer() {
	var str = '<div class="layerpop_wrap popup-wrap active" id="layer_popup_familyconfirm" data-layer-target="familyconfirm-popup"></div>';
	if ($('#layer_popup_familyconfirm').length == 0) {
		$('body').append(str); 
	}

	cfOpenLayer(_PAGE_FAMILY_CONFIRM, "layer_popup_familyconfirm");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 회원탈퇴 레이어
 * <pre>
 *     cfMemberSecedeLayer;
 * </pre>
 * @since  : 2016/12/12
 * @author : kes
 */
function cfMemberSecedeLayer() {
	var str = '<div class="layerpop_wrap" id="layer_popup_membersecede"></div>';
	if ($('#layer_popup_membersecede').length == 0) {
		$('body').append(str); 
	}

	cfOpenLayer(_PAGE_MEMBER_SECEDE_LAYER, "layer_popup_membersecede");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 휴면계정 해제 안내 레이어
 * <pre>
 *     cfDormancyClearLayer;
 * </pre>
 * @since  : 2016/12/14
 * @author : kes
 */
function cfDormancyClearLayer() {
	
	var str = '<div class="layerpop_wrap" id="layer_popup_dormancy"></div>';
	if ($('#layer_popup_dormancy').length == 0) {
		$('body').append(str); 
	}
	cfOpenLayer(_PAGE_DORMANCY_CLEAR_LAYER, "layer_popup_dormancy");
}

/**
 * @type   : function
 * @access : public
 * @desc   : 우편번호  레이어
 * <pre>
 *     cfPostAddressLayer(callPosition) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param postCd - 우편번호
 *       @param fixAddr - 고정주소
 *       @param callPosition - 호출위치(한 화면에서 우편번호 팝업을 여러 군데서 호출할 경우 필요). optional.
 *       받는 페이지는 해당페이지 맞게 수정한 jfSetPostValue를 선언한다.
 *          callPosition 함수가 있을경우 function jfSetPostValue(postCd, fixAddr, dtlAddr, addrGb, abFixAddr, etcBuilAddr){	
 *          callPosition 함수가 없을경우 function jfSetPostValue(postCd, fixAddr, dtlAddr, callPosition, addrGb, abFixAddr, etcBuilAddr){			
 *            
 *            var form = document.form;
 *            if (callPosition == "setHomeAddr"){
 *              form.HOMEZIP1.value = postCd.substring(0,3);
 *              form.HOMEZIP2.value = postCd.substring(4,7);
 *              form.HOMEFIXADDR.value = fixAddr;
 *              form.HOMEDTLADDR.value = dtlAddr;
 *              form.ZIPCODEGB.value = addrGb;
 *              form.HOMEJIBUNADDR.value=abFixAddr;
 *              form.HOMEETCADDR.value=etcBuilAddr;
 *            }
 *          } *     
 * </pre>
 * @since  : 2016/12/15
 * @author : kes
 */
function cfPostAddressLayer(callPosition) {

	$.post("/common.do?cmd=checkPost"
		, null
		, function(result) {
			if (result.IS_POST_API == "Y") {	//juso.go.kr API 연동
				cfJusoApiLayer(callPosition);
			} else {	//// daum api 방식
				cfPopupPostDaumApi(callPosition); // (https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js)
			}
		}
		, "json");
	
	return false;
		
	
}


/**
 * @type   : function
 * @access : public
 * @desc   : juso.go.kr API 연동 
 * <pre>
 *     cfJusoApiLayer("setHomeAddr");
 *     

 * </pre>
 * @param callPosition - 호출위치(한 화면에서 우편번호 팝업을 여러 군데서 호출할 경우 필요). optional.
 * @return : None
 */
function cfJusoApiLayer(callPosition) {
	
	// var str = '<div class="layerpop_wrap" id="zip_code"></div>';
	var str = '<div class="popup-wrap zipcode-popup active" id="zip_code"></div>'
	if ($('#zip_code').length == 0) {
		$('body').append(str); 
	}
	var params = new Object();
	params.CALL_POSITION = callPosition;
	
	cfOpenLayer(_PAGE_JUSO_ADDRESS_LAYER, "zip_code", params);
	
}

//http://postcode.map.daum.net/guide  가이드 주소
//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
function cfPopupPostDaumApi(callPosition) {
	
	var str = '<div id="layer_popup_jusopost" style="position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:99;"></div>';
	if ($('#layer_popup_jusopost').length == 0) {
		$('#wrap').append(str); 
	}
	//우편번호 찾기 찾기 화면을 넣을 element
	var element_wrap = document.getElementById('layer_popup_jusopost');
	
  // 현재 scroll 위치를 저장해놓는다.
  var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 도로명 조합형 주소 변수

//(XX동) 나오는부분인데,, 기존 www.juso.go.kr 과 동일하게 표시되어야해서 막음
//          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
//          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
//          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
//              extraRoadAddr += data.bname;
//          }
//          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
           extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
//          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
//          if(extraRoadAddr !== ''){
//              extraRoadAddr = ' (' + extraRoadAddr + ')';
//          }
//          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
//          if(fullRoadAddr !== ''){
//              fullRoadAddr += extraRoadAddr;
//          }
//
//          // 우편번호와 주소 정보를 해당 필드에 넣는다.
//          document.getElementById('sample4_postcode').value = data.zonecode; //5자리 새우편번호 사용
//          document.getElementById('sample4_roadAddress').value = fullRoadAddr;
//          document.getElementById('sample4_jibunAddress').value = data.jibunAddress;

			var rtnObj = new Object();
			rtnObj.postcode = data.zonecode;
			rtnObj.zip1 = data.zonecode.substring(0, 3);
			rtnObj.zip2 = data.zonecode.substring(3, 5);
			rtnObj.roadAddress = fullRoadAddr;
			rtnObj.jibunAddress = data.jibunAddress;
			

          // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
          if(data.autoRoadAddress) {
              //예상되는 도로명 주소에 조합형 주소를 추가한다.
              var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
              //document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

				rtnObj.guide = '(예상 도로명 주소 : ' + expRoadAddr + ')';

          } else if(data.autoJibunAddress) {
              var expJibunAddr = data.autoJibunAddress;
              //document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

				rtnObj.guide = '(예상 지번 주소 : ' + expJibunAddr + ')';

          } else {
              //document.getElementById('guide').innerHTML = '';

				rtnObj.guide = '';
          }

          //주소return 방식 다른화면에 수정을 적게 하기위해.. 기존 함수 호출, 그리고 우편번호에 '-'추가도 기존방식에 맞추느라..
          //jfPopupPostDaumApiResult(rtnObj);
          //jfSetPostValue(rtnObj.zip1+'-'+rtnObj.zip2, rtnObj.roadAddress, callPosition, "2", "", "");
          if (callPosition == "")
  			jfSetPostValue(rtnObj.zip1+rtnObj.zip2, rtnObj.roadAddress, "", "2", extraRoadAddr, "");
  		else
  			jfSetPostValue(rtnObj.zip1+rtnObj.zip2, rtnObj.roadAddress, "", callPosition, "2", extraRoadAddr, "");
          
          //iframe을 넣은 element를 안보이게 한다.
          // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
          element_wrap.style.display = 'none';
          // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
          document.body.scrollTop = currentScroll;
			
      },
      width: '100%',
      height: '100%'
     
  }).embed(element_wrap);
  
  element_wrap.style.display = 'block';
}


/**
 * @type   : function
 * @access : public
 * @desc   : FAQ READ COUNT
 * <pre>
 *     cfFaqReadCnt(62);
 * </pre>
 * @since  : 2016/12/15
 * @author : kes
 */
function cfFaqReadCnt(faqsq){
	
	var params = new Object();
	params.FAQ_SQ = faqsq;
	
	ngjfAjaxSubmit("/callcenter.do?cmd=updateFaqReadAjax", "text", "", params);

	
}

/**
 * @type   : function
 * @access : public
 * @desc   : 카카오 계정 연동
 * @since  : 2016/12/23
 * @author : kny4118
 */
function cfLoginWithKakao(){
	if ( kakaoInitCnt == 0 ) {
		Kakao.init(_snsKakaoClientId);
		kakaoInitCnt++;
	}

    Kakao.Auth.login({
    	success: function(authObj) {
            // 로그인 성공시, API를 호출합니다.
            Kakao.API.request({
              url: '/v2/user/me',
              success: function(res) {

            	  var res_acc = res.kakao_account;	// 이메일 정보 (없는 경우 존재)
            	  var res_prop = res.properties;	//닉네임 정보(없는 경우 존재)
            	  var nickname = "";
            	  var email = "";
            	  
            	  if( null != res_acc && undefined != res_acc ){
            		  if( null != res_acc.email && undefined != res_acc.email ){
            			  email = res_acc.email;
                	  }
            	  }

            	  if( null != res_prop && undefined != res_prop ){
            		  nickname = res_prop.nickname;
            	  }
            	
                  jfBtnClickCheck("KK", res.id, email, nickname);
              },
              fail: function(error) {
                alert(JSON.stringify(error));
              }
            });
          },
          fail: function(err) {
            alert(JSON.stringify(err));
          }
    });
}

/**
 * @type   : function
 * @access : public
 * @desc   : 페이스북 계정 연동
 * @since  : 2016/12/23
 * @author : kny4118
 */
function cfLoginWithFacebook(){
	FB.login(function(response) {
		if (response.authResponse) {
			access_token = response.authResponse.accessToken; //get access token
			user_id = response.authResponse.userID; //get FB UID
			//console.log('access_token = '+access_token);
			//console.log('user_id = '+user_id);
			
			FB.api('/me', {fields: 'name,email,gender,birthday'}, function(response) {
				jfBtnClickCheck('FB', response.id, response.email,  response.name, response.gender, response.birthday);
			});
		}
	}, {scope: 'email,public_profile,user_birthday', 
		return_scopes: true});
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 뉴스 상세 보기
  * <pre>
 *     cfGoToBrandNewsDetail(noticdSq, listType ) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param noticdSq - 뉴스 번호
 *       @param listType - 브랜드 뉴스 메인 보기유형 : B:블러그형  L:리스트형
 * </pre>
 * @since  : 2017/01/12
 * @author : kes
 */
function cfGoToBrandNewsDetail(noticdSq, listType) {
	var params = "&NOTICE_SQ=" + noticdSq;
	if (listType) params += "&LIST_TYPE=" + listType;
	
	cfGoToPage(_PAGE_BRAND_NEWS_DETAIL + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 보기
  * <pre>
 *     cfGoToBrandNewsDetail(noticdSq) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param noticdSq - 뉴스 번호
 * </pre>
 * @since  : 2017/01/12
 * @author : kes
 */
function cfGoToBrandNews(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_NEWS + params);
}


//이미지 상세보기
function cfProductImageView(imgurl){
	if (_isApp){
		document.location.href = "imgload://?link=" + location.protocol + imgurl;
		
	}else{
		 window.open("/product.do?cmd=getProductImageViewLayer&PRODUCTIMG="+imgurl,"_blank");
	}	
	

}

/**
 * @type   : function
 * @access : public
 * @desc   : 공지사항 상세보기
  * <pre>
 *     cfGoToNoticeDetail(noticdSq, currPage) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param noticdSq - 공지사항 번호
 *       @param currPage - 해당 페이비
 * </pre>
 * @since  : 2017/01/14
 * @author : kes
 */
function cfGoToNoticeDetail(noticdSq, currPage) {
	var params = "&NOTICE_SQ=" + noticdSq;
	if (currPage) params += "&CURRENT_PAGE=" + currPage;
	
	cfGoToPage(_PAGE_NOTICE_DETAIL + params);
}

/**
 * 계좌인증 - 갤럭시아 컴즈 로 계좌 인증 변경
 * @param bankCd    : 은행코드(G940)
 * @param accountNo : 계좌번호
 * @param accountNm : 예금주명
 * 계좌인증 : 갤럭시아 컴즈 로 계좌 인증 변경
 */
function cfCallAuthAccountGala(bankCd, accountNo, accountNm) {

	if (ngjfIsNull(bankCd)) return;
	if (ngjfIsNull(accountNo)) return;
	if (ngjfIsNull(accountNm)) return;
	//045 9002999999059
	
	var params = new Object();
	params.cmd = "getAjaxAuthAccountGala";
	params.BANK_CD = bankCd; 
	params.ACCOUNT_NO = accountNo;
	params.ACCOUNT_NM = accountNm;
	
    cfAjaxSubmit("/order.do", params, "json", jfAuthAccountResult);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 보기
  * <pre>
 *     cfGoToBrandIndex(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandIndex(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_INDEX + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 dna 보기
  * <pre>
 *     cfGoToBrandDns(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandDns(tcatCd, dnaGbn) {
	var params = "&TCAT_CD=" + tcatCd;
	if (dnaGbn) params += "&DNA_GBN=" + dnaGbn;
	
	cfGoToPage(_PAGE_BRAND_DNA + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 tech line 보기
  * <pre>
 *     cfGoToBrandTechLine(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandTechLine(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_TECH_LINE + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 Technology 보기
  * <pre>
 *     cfGoToBrandTechnology(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandTechnology(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_TECH_TECHNOLOGY + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 룩북 보기
  * <pre>
 *     cfGoToBrandNewsDetail(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandLookbook(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_LOOKBOOK + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 브랜드 미디어 상세 보기
  * <pre>
 *     cfGoToBrandMedia(tcatCd) 함수가 구현되어 있어야 한다.
 *     ※ opener에서
 *       @param tcatCd - 브랜드카테고리
 * </pre>
 * @since  : 2017/01/25
 * @author : kes
 */
function cfGoToBrandMedia(tcatCd) {
	var params = "&TCAT_CD=" + tcatCd;
	
	cfGoToPage(_PAGE_BRAND_MEDIA + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : 공통 레이어 열기(레이어 보이기)
 * <pre>
 *     cfShowLayer("pop_login");
 * </pre>
 * @param  : tgt - 보일 레이어 ID(예, div 태크의 ID). 필수
 * @since  : 2017/01/18
 * @author : realk
 */
function cfShowLayer(tgt) {
	$('#' + tgt).show();
	return false;
}

function cfOpenLayerLsn(page, tgt, oParam) {
	var str = '<div class="layer_wrap" id="'+tgt+'"  style="z-index:99990;"></div>';
	if ($('#'+tgt).length == 0) {
		$('body').append(str);
	}
	cfOpenLayer(page, tgt, oParam);

}
/**
 * @type   : function
 * @access : public
 * @desc   : Best30 이동
 * <pre>
 *		cfGoToCategoryBest('10003', '3216');
 * </pre>
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : mcateCd - 중카테고리코드. 필수
 * @param  : ithrCd - 
 * @since  : 2017/08/22
 * @author : qkwlstktma
 */
function cfGoToCategoryBest(cateGb, mcateCd, ithrCd) {
	var params = "&CAT_GB=" + cateGb;
	params += "&MCAT_CD=" + mcateCd;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	cfGoToPage(_PAGE_CATEGORY_BEST + params);
}




/**
 * @type   : function
 * @access : public
 * @desc   : GA 쇼핑전환 장바구니 추가 제거
 * @sincd  : 2017.11.20
 */

function fn_GacartAdd(prodcd,prodnm,brandcd,price,prodqty){
	ga('ec:addProduct', {
	  'id': prodcd,
	  'name':prodnm,
	  'brand':brandcd,
	  'price': price,
	  'quantity': prodqty
	});
	ga('ec:setAction', 'add');
	ga('send', 'event', 'UX', 'click', 'add to cart');     // Send data using an event.
}


/**
 * @type   : function
 * @access : public
 * @desc   : 복지몰 임직원 인증 레이어 오픈
 * <pre>
 *     cfOpenWelFareEmployCheckLayer(returnUrl, email);
 * </pre>
 * @param  : returnUrl - RETURN URL
 * @since  : 2020/08/06
 * @author : choimj
 */
function cfOpenWelFareEmployCheckPage(returnUrl, email) {
	// RETURN URL이 있으면 쿠키 설정
	if (returnUrl)
		cfSetCookie(_ckPrefix + "_RETURN_URL", returnUrl, 1);

	var params = "&EMP_EMAIL=" + email;
	
	cfGoToPage(_PAGE_WELFARE_CHECK + params);
}

/**
 * @type   : function
 * @access : public
 * @desc   : HOT SPOT 카테고리
 * <pre>
 *		cfGoToHotSpotMain('NEW','10003', '3216');
 * </pre>
 * @param  : hotspotGb - 카테고리구분코드. 필수
 * @param  : cateGb - 카테고리구분코드. 필수
 * @param  : tcateCd - 대카테고리코드. 필수
 * @param  : mcateCd - 중카테고리코드
 * @param  : scateCd - 소카테고리코드
 * @since  : 2020/12/31
 * @author : smlee
 */
function cfGoToHotSpotMain(hotspotGb,cateGb, tcateCd, mcateCd, scateCd, foucsview, ithrCd) {
	var params = "&HOT_SPOT_CAT_CD=" + hotspotGb;
	params += "&CAT_GB=" + cateGb;
	params += "&TCAT_CD=" + tcateCd;
	if (mcateCd) params += "&MCAT_CD=" + mcateCd;
	if (scateCd) params += "&SCAT_CD=" + scateCd;
	if (foucsview) params += "&SEARCH_YN="+ foucsview;	
	if (ithrCd) params += "&ITHR_CD="+ ithrCd;
	
	cfGoToPage(_PAGE_CATEGORY_MAIN + params);
	/*
	ngjfAjaxSubmit("/display.do?cmd=getTcatNm&TCAT_CD="+tcateCd, "json", function cfcallback(result){
		params += "&TCAT_NM=" + result.TCAT_NM;
		cfGoToPage(_PAGE_CATEGORY_MAIN + params);
	}, new Object());
	*/
}

/**
 * @type   : function
 * @access : public
 * @desc   : 스마트 스토어 새창 띄우기
 * <pre>
 *     cfOpenSmartStorePage();
 * </pre>
 * @param  : returnUrl - RETURN URL
 * @since  : 2021/01/14
 * @author : choimj
 */
function cfOpenSmartStorePage(email, name){
	location.href = _smartFitUrl + "/p/fm/starter?email=" + email + "&name=" + name;
}

/**
 * @type   : function
 * @access : public
 * @desc   : E1 오렌지 포인트카드 인증 Layer
 * <pre>
 *     cfOpenOrangeCardAuthLayer();
 * </pre>
 * @since  : 2022/03/02
 * @author : choimj
 */
function cfOpenOrangeCardAuthLayer() {
	var str = '<div class="layerpop_wrap" id="layer_popup_orangecard_auth"></div>';
	if ($('#layer_popup_orangecard_auth').length == 0) {
		$('body').append(str); 
	}

	cfOpenLayer(_PAGE_ORANGE_CARD_AUTH, "layer_popup_orangecard_auth");
}
