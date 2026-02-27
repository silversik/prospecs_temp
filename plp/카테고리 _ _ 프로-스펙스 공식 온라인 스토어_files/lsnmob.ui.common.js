$(function(){
    navScr();//nav
    if($('label.checkbox').size() > 0){
        checkBox_Ck();//checkbox
    }
    if($('label.radio').size() > 0){
        radioBtn_Ck();//radio
    }

    $(window).resize(function(){//resize 체크
        $('.tooltip').removeClass('active');//툴팁 hidden
    })


    //Cart Accodion
    $('.cart_wp >.btn_accodion button').on('click',function(){
        if($(this).parent('span').hasClass('active')){
            $(this).parent('span').removeClass('active');
            $(this).parent('span').next('.prod_wrap').stop(true,false).animate({
                'height':'0'
            },400,'easeOutCubic');
        }else{
            $(this).parent('span').addClass('active');
            $(this).parent('span').next('.prod_wrap').stop(true,false).animate({
                'height': $(this).parent('span').next('.prod_wrap').find('.prod_list').height() + 20 + 'px'
            },400,'easeInCubic');
        }
    });

    $('.cart_wp .total_amount .btn_accodion button').on('click',function(){
        console.log($(this).parentsUntil($('dl.total_amount','yes')).next('.price_wrap').find('.price').height());
        if($(this).parent('span').hasClass('active')){
            $(this).parent('span').removeClass('active');
            $(this).parentsUntil($('dl.total_amount','yes')).next('.price_wrap').stop(true,false).animate({
                'height':'0'
            },400,'easeOutCubic');
        }else{
            $(this).parent('span').addClass('active');
            $(this).parentsUntil($('dl.total_amount','yes')).next('.price_wrap').stop(true,false).animate({
                'height': $(this).parentsUntil($('dl.total_amount','yes')).next('.price_wrap').find('.price').height()
            },400,'easeInCubic');
        }
    });

    //Product Accodion
	/*
    $('.containbox >.btn_accodion button').on('click',function(){
        if($(this).parent('span').hasClass('active')){
            $(this).parent('span').removeClass('active');
            $(this).parent('span').next('.content_wrap').stop(true,false).animate({
                'height':'20'
            },400,'easeOutCubic');
        }else{
            $(this).parent('span').addClass('active');
            $(this).parent('span').next('.content_wrap').stop(true,false).animate({
                'height': $(this).parent('span').next('.content_wrap').find('.content').height() + 30
            },400,'easeInCubic');
        }
    });
	*/
	$('.containbox > h2').on('click',function(){
        if($(this).next('span').hasClass('active')){
            $(this).next('span').removeClass('active');
            $(this).next('span').next('.content_wrap').stop(true,false).animate({
                'height':'20'
            },400,'easeOutCubic');
        }else{
            $(this).next('span').addClass('active');
            $(this).next('span').next('.content_wrap').stop(true,false).animate({
                'height': $(this).next('span').next('.content_wrap').find('.content').height() + 30
            },400,'easeInCubic');
        }
    });

    //Product Share link Layer
    $('.product_detail_wrap .sns,.closeshare button').on('click',function(){
        if($('body').hasClass('sharelink')) {
            $('body').removeClass('sharelink')
        }else{
            $('body').addClass('sharelink')
        }

    });

    //Help Layer
    $('.product_detail_wrap .help button').on('click',function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).next('.layer_help').hide(300);
        }else{
            $(this).parent().addClass('active');
            $(this).next('.layer_help').show(300);
        }
    });
    $('.product_detail_wrap .help .btn_close').on('click',function(){
        if($(this).closest('.help').hasClass('active')){
            $(this).closest('.help').removeClass('active');
            $(this).closest('.layer_help').hide(300);
        }else{
            $(this).closest('.help').addClass('active');
            $(this).closest('.layer_help').show(300);
        }
    });
/*
    if($('.topbanner').css('display') == 'block') {
        $('.topbanner').css({'top': '0px'});
        $('#head').css({'top': '26px'});
        $('#container').css({'marginTop':'86px'});
    }else{
        $('#head').css({'top':'0px'});
        $('#container').css({'marginTop':'60px'});
    }
*/

    if($('dd .button_type1 .addr').length > 0){//배송지관리
        $('dd .button_type1 .addr').on('click',function(){
            console.log($(this).parent().parent().find('.addr_regi_form'));
            $('.addr_regi_form').hide();
            $(this).parent().parent().find('.addr_regi_form').show();
            return false;
        });
        $('.btn_wrap .addr_cancel').on('click',function(){
            $('.addr_regi_form').hide();
            return false;
        });
    }

})

function navScr(){//nav
    var UserAgent = navigator.userAgent;
    if(UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
    {clickEvent = 'touchstart'}
    else{clickEvent = 'mousedown'}

    var curruntPosY = 0;

    $(window).scroll(function(){
        naviHide()
    });

    function naviHide(){
        if(curruntPosY > 100){
            if($(window).scrollTop() > curruntPosY){
                
                $('.tabbar').stop();
                
                if($('.tabbar').hasClass('order') == true){
                    if($(window).scrollTop() > -($(window).scrollTop() - $(document).height() + 300)){
                        $('.tabbar').animate({
                            'bottom':'-38px'
                        },200,'easeOutCubic');
                    }
                }else if($('.tabbar').hasClass('product') == true){

                }else{
                    $('.tabbar').animate({
                        'bottom':'-38px'
                    },200,'easeOutCubic');
					$('.layer_tabbar').hide();
                }

            }else{
                
                $('.tabbar').stop();

                $('.tabbar').animate({
                    'bottom':'0px'
                },200,'easeOutCubic');
            }
        }else{

        }
        curruntPosY = $(window).scrollTop();
    }

    var nav = $('#nav_wrap'),
        navWrap = nav.find('.nav_list_wrap'),
        navTab = nav.find('.nav_tab'),
        navSearch = $('#nav_wrap .nav_search input[type="search"]');

    var swiper = new Swiper('.nav_scroll', {// swiper set
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        autoHeight: true
    });
    
    $('.btn_sidemenu_close').on('click', function(){
        $('#wrap').removeClass('open_sidemenu');
        $('#nav_wrap').removeClass('open');
        $('#nav_wrap').addClass('close');
        $('.btn_sidemenu').removeClass('on');
    });
    $('.btn_sidemenu_category').on('click', function(){
        $(this).addClass('on');
        $('.btn_sidemenu_brand').removeClass('on');
        $('#brand').hide();
        $('#category').show();
        swiper.onResize();
    });
    $('.btn_sidemenu_brand').on('click', function(){
        $(this).addClass('on');
        $('.btn_sidemenu_category').removeClass('on');
        $('#category').hide();
        $('#brand').show();
        swiper.onResize();
    });

    $('#brand > ul > li').on('click', function(){
        $('#brand > ul > li').removeClass('on');
        $('.lnb_icon').attr("src",function(i, src) {
            return src.replace("_on.png",".png");
        });
        $(this).addClass('on');
        $(this).find(".lnb_icon").attr("src",function(i, src) {
            return src.replace(".png","_on.png");
        });
        $('.sub_menu').hide();
        $(this).find('.sub_menu').show();
    });

    $('#category > ul > li').on('click', function(){
        $('#category > ul > li').removeClass('on');
        $('.lnb_icon').attr("src",function(i, src) {
            return src.replace("_on.png",".png");
        });
        $(this).addClass('on');
        $(this).find(".lnb_icon").attr("src",function(i, src) {
            return src.replace(".png","_on.png");
        });
        $('.sub_menu').hide();
        $(this).find('.sub_menu').show();
    });
    
    $(navWrap).find('>div >ul >li').each(function(){
        if($(this).find('.dp2').length == 0){
            $(this).find('.dp1').addClass('link');
        }

    })

    $(navWrap).find('.dp2 >ul >li').each(function(){
        if($(this).find('.dp3').length == 0){
            $(this).find('>a').addClass('link');
        }
    })

    $(window).on("orientationchange",function(){
        if(nav.hasClass('open')){
            navResize();
            swiper.onResize();
            //alert("The orientation has changed!");
        }
    });


    $('#head .btn_sidemenu').on('click',function(){// nav open
        navResize();
        swiper.onResize();

        if($(this).hasClass('on')){
            /*
             setTimeout(function(){
             $('body').removeClass('fixed').off('touchmove');
             $('#wrap').removeClass('open_sidemenu');
             $('#head .btn_sidemenu').removeClass('on').addClass('off');
             },400)
             */
            $('body').removeClass('fixed').off('touchmove');
            $('#wrap').removeClass('open_sidemenu');
            $('#head .btn_sidemenu').removeClass('on').addClass('off');
            nav.removeClass('open');
            //$(this).removeClass('show');
        }else{
            //$(this).addClass('show');
            $('body').addClass('fixed').on('touchmove', function(e){e.preventDefault()});
            $('#wrap').addClass('open_sidemenu');
            nav.addClass('open');
            $('#head .btn_sidemenu').removeClass('off').addClass('on');

            /*
             setTimeout(function(){
             $('#head .btn_sidemenu').removeClass('off').addClass('on');
             },350)
             */

        }

        if($('#nav_wrap .nav_list_wrap >div >ul >li a.dp1').hasClass('open')){

        }else{
            $('#nav_wrap #category >ul >li:nth-child(5) a.dp1').trigger('click');
        }
    })

    navWrap.find('.dp1').on('click', function(){// nav view
        var eft = 'easeOutCubic',
            spd = 400;
        swiper.onResize();
        navWrap.find('.dp2 >ul >li >a').removeClass('open');
        navWrap.find('.dp3').attr('style','');
        if($(this).next('.dp2').size() == 1){
            var dp2H = $(this).next('.dp2').find('ul').innerHeight();
            if($(this).hasClass('open')){
                dp2Close();
                setTimeout(function(){swiper.onResize();},400)
                return false;
            }else{
                dp2Close();
                $(this).addClass('open');
                $(this).next('.dp2').animate({
                    'height':dp2H+'px'
                },spd,eft,function(){
                    swiper.onResize();
                    if($(this).parent('li').index() == $('#nav_brand >div >ul >li').size()){
                        var winH = $(window).innerHeight();
                        var navH = $('.nav_scroll .swiper-wrapper').innerHeight();
                        var dp2H = $(this).next('.dp2').innerHeight();
                        var maxH = (winH-navH)+dp2H;
                        $('.nav_scroll .swiper-wrapper').css('transform','translate3d(0px, '+maxH+'px, 0px)');
                        //$('.nav_scroll .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)');
                    }
                });
                return false;
            }
        }
    })

    navWrap.find('.dp2 >ul >li >a').on('click', function(){// nav view
        var eft = 'easeOutCubic',
            spd = 400;
        swiper.onResize();
        if($(this).next('.dp3').size() == 1){
            var dp3H = $(this).next('.dp3').find('ul').innerHeight();
            if($(this).hasClass('open')){
                dp3Close();
                setTimeout(function(){swiper.onResize();},400)
                return false;
            }else{
                dp3Close();
                $(this).addClass('open');
                $(this).parents('.dp2').css('height','auto')
                $(this).next('.dp3').animate({
                    'height':dp3H+'px'
                },spd,eft,function(){
                    swiper.onResize();
                });
                return false;
            }
        }
    })

    navSearch.on('focusin', function(){// Nav Search Suggest
        $('.nav_search_suggest').delay(500).animate({
            'height':'100%'
        },600,'easeOutCubic');
    })
    navSearch.on('focusout', function(){// Nav Search Suggest
        $('.nav_search_suggest').delay(500).animate({
            'height':'0'
        },600,'easeOutCubic');
    })

    $('#nav_wrap .btn_suggest').on('click', function(){// // Nav Search Suggest Close
        $('.nav_search_suggest').delay(500).animate({
            'height':'0'
        },600,'easeOutCubic');
    })

    $('#t_cate').on('click',function(){
        document.getElementById("category").style.display = "block";
        document.getElementById("brand").style.display = "none";
        $("#t_cate").addClass('on');
        $("#t_brand").removeClass('on');
        $('.nav_scroll .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)');
        swiper.onResize();
    });

    $('#t_brand').on('click',function(){
        console.log('test');
        document.getElementById("category").style.display = "none";
        document.getElementById("brand").style.display = "block";
        $("#t_brand").addClass('on');
        $("#t_cate").removeClass('on');
        $('.nav_scroll .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)');
        swiper.onResize();
    });

    $('.category_title.sub >p').on(clickEvent,function(){// Sub Depth Open
        var objIndex = $(this).index() + 1;
        $('.category_depth').stop();
        if($('.category_depth.open').length < 1){
            $('.category_depth.depthbox'+objIndex).delay(100).animate({
                'height':$('.category_depth.depthbox'+objIndex+' .inner').height()
            },600,'easeOutCubic');
            $('.category_title >p').removeClass('open');
            $(this).addClass('open');
            $('.category_depth.depthbox'+objIndex).addClass('open');
        }else{

            if($('.category_depth.depthbox'+objIndex).hasClass('open')){
                $('.category_depth').delay(100).animate({
                    'height':'0'
                },600,'easeOutCubic');
                $('.category_title >p').removeClass('open');
                $('.category_depth').removeClass('open');
            }else{
                $('.category_depth').delay(100).animate({
                    'height':'0'
                },600,'easeOutCubic');
                $('.category_title >p').removeClass('open');
                $('.category_depth').removeClass('open');
                $('.category_depth.depthbox'+objIndex).delay(100).animate({
                    'height':$('.category_depth.depthbox'+objIndex+' .inner').height()
                },600,'easeOutCubic');
                $(this).addClass('open');
                $('.category_depth.depthbox'+objIndex).addClass('open');
            }

        }

    })

    function navResize(){// nav resize
        var wdH = $(window).innerHeight(),
            hdH = nav.find('.hd').innerHeight()+38; //175
        $('#nav_brand').css({'paddingTop':nav.find('.hd').innerHeight()});
    }

    function dp2Close(){// nav close
        var eft = 'easeOutCubic',
            spd = 400;
        navWrap.find('.dp1').removeClass('open');
        navWrap.find('.dp2').animate({
            'height':'0px'
        },{duration:spd,easing:eft,queue:false});
    }

    function dp3Close(){// nav close
        var eft = 'easeOutCubic',
            spd = 400;
        navWrap.find('.dp2 >ul >li >a').removeClass('open');
        navWrap.find('.dp3').animate({
            'height':'0px'
        },{duration:spd,easing:eft,queue:false});
    }

    $(".detail_info .size .form_wrap ul li").click(function () {
        
        if($(this).hasClass('soldout')){	//이부분은 꼭 적용해주세요 kes
        }else{
        	$(".detail_info .size .form_wrap ul li").removeClass('active');
        	$(this).addClass('active');	
        }
        
        
    });
}

function checkBox_Ck(){//checkbox
    $('label.checkbox').each(function(){
        if($(this).find('input[type=checkbox]').is(':checked')){
            $(this).addClass('active')
        }
    })

    $('label.checkbox').on('click', function(){
        if($(this).find('input[type=checkbox]').is(':checked')){
            $(this).addClass('active')
            $(this).find('input[type=checkbox]').attr('checked',true);
        }else{
            $(this).removeClass('active')
            $(this).find('input[type=checkbox]').attr('checked',false);
        }
    });
}

function radioBtn_Ck(){//radio
    radioCk();
    $('label.radio input[type=radio]').on('click',function(){
        radioCk();
    });
    function radioCk(){
        $('label.radio input[type=radio]').each(function(){
            if($(this).is(':checked')){
                $(this).parent('label').addClass('active')
            }else{
                $(this).parent('label').removeClass('active')
            }
        })
    }
}

function tabView(obj){//tab
    var tg = $(obj).attr('href');
    $(obj).parents('.tabwrap').find('.tabview_cont').hide();
    $(obj).parents('.tab').find('li').removeClass('active');
    $(obj).parent('li').addClass('active');
    $(tg).show();
}

function tooltipView(obj){//tool tip
    var tooltip = $(obj).parent('.tooltip'),
        smr = $(obj).next('.summ'),
        h = $(obj).offset().top;
    if($(tooltip).hasClass('active')){
        $(tooltip).removeClass('active');
    }else{
        $('.tooltip').removeClass('active');
        $(tooltip).addClass('active');
        $(smr).css('top',h+'px')
    }
    return false;
}

function lpopOpen(obj){// layerpop open
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }
    var scrollCont = $(tg).find('.provision_scroll');
    var wh = $(window).innerHeight();
    
    $(scrollCont).find('.swiper-wrapper').attr('style','');
    $(scrollCont).css('height',(wh-44)+'px');
    
    var swiper = new Swiper(scrollCont, {// swiper set
        direction: 'vertical',
        slidesPerView: 'auto',        
        freeMode: true,
        mousewheel: true
    });

    $(tg).animate({
        'right':'0%'
    },400,'easeOutCubic', function(){
        //$('#wrap').css('position','fixed')
        $(tg).find('.close').addClass('on')
        //swiper.onResize();
    })
    return false;
}

function lpopClose(obj){// layerpop close
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }
    $(tg).find('.close').removeClass('on');
    $(tg).removeClass('active');
    $(tg).css('position','fixed').delay(250).animate({
        'right':'-100%'
    },500,'easeOutCubic', function(){
        //$('#wrap').attr('style','fixed');

    })
    return false;
}

function post_lpopOpen(obj){// 우편번호 layerpop open
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }

    $(tg).animate({
        'right':'0%'
    },400,'easeOutCubic', function(){
        //$('#wrap').css('position','fixed')
        $(tg).find('.close').addClass('on')
    })
    return false;
}


function post_lpopClose(obj){// 우편번호 layerpop close
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }

    $(tg).find('.close').removeClass('on');
    $(tg).css('position','fixed').delay(250).animate({
        'right':'-100%'
    },500,'easeOutCubic', function(){
        //$('#wrap').attr('style','fixed');

    })
    return false;
}

function qna_lpopOpen(obj){// qna layerpop open
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }
    $(tg).animate({
        'right':'0%'
    },400,'easeOutCubic', function(){
        $(tg).find('.close').addClass('on');
        $(tg).addClass('show');
		document.location.href="#top";
        $('#wrap').addClass('fixed')
    })
}

function qna_lpopClose(obj){// layerpop close
    var tg;
    if ($(obj).length){
        tg = $(obj).attr('href');
    }else{
        tg = $('#' + obj);
    }
    $(tg).find('.close').removeClass('on');
    $('#wrap').removeClass('fixed');
    $(tg).removeClass('show').delay(250).animate({
        'right':'-100%'
    },500,'easeOutCubic', function(){

    })
    return false;
}

function postSearch(){//우편번호 검색
    var wH = $(window).innerHeight(),
        scrH = wH-184;

    $('.layerpop_wrap .post_scroll').show().animate({
        'height':scrH+'px'
    },100, function(){
        var swiper = new Swiper('.layerpop_wrap .post_scroll', {// swiper set
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true
        });
    })
}


function deliverInfo(obj){//배송지 관리
    var h = $('.delivery_addr_form .cont').innerHeight();
    if ($(obj).hasClass("on")) {
        $(obj).removeClass("on");
        $('.delivery_addr_form').stop(true,false).animate({
            'height':'0px'
        },500,'easeOutCubic',function(){
            $('.delivery_addr_form').removeClass('on')
        })
    } else {
        $(obj).addClass("on");
        $('.delivery_addr_form').addClass('on').stop(true,false).animate({
            'height':h+'px'
        },500,'easeOutCubic')
    }
}

function addr_regi(ob){//신규배송지등록
    $('.delivery_addr_form .addr_regi_form').show();
    $('.delivery_addr_form').css('height','auto')
    return false;
}

function addr_close(ob){//신규배송지 닫기
    $('.button.deliver').removeClass("on");
    $('.delivery_addr_form .addr_regi_form').hide();
    $('.delivery_addr_form').stop(true,false).animate({
        'height':'0px'
    },500,'easeOutCubic',function(){
        $('.delivery_addr_form').removeClass('on')
    })
    return false;
}

function addr_close2(ob){//신규배송지등록
    $('.addr_regi_form').hide();
    return false;
}


function fileAdd(obj){//파일첨부 미리보기

    $(obj).change(function (e) {
        fileURL(this,$(this).attr('data-target'));

        if($(obj).hasClass('comment')){// 파일첨부

            setTimeout(function(){
                $('.fileadd_view').animate({
                    'opacity':'1'
                },300);
                $('input.fileAdd').hide();
            },500)
        }
    });

    function fileURL(input,target) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(''+target).attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        } else {
            alert('미리보기를 지원하지 않습니다.');
        }
    }
}

function fileView_close(){//파일첨부 닫기
    $('.fileadd_view').animate({
        'opacity':'0'
    },300);
    $('input.fileAdd').show();
}

function filterView(obj){// filter
    if($(obj).parent().hasClass('open')){
        $(obj).parent().removeClass('open');
        $('.filter_detail_view').stop(true,false).animate({
            'height':'0px'
        },700,'easeOutCubic');
    }else{
        var h = $('.filter_detail_view .ct').innerHeight();
        $(obj).parent().addClass('open');
        $('.filter_detail_view').stop(true,false).animate({
            'height':'100%'
        },700,'easeOutCubic');
    }
}

function filterViewClose(obj){// filter Close
    $('.btn_filter.open').removeClass('open');
    $('.filter_detail_view').stop(true,false).animate({
        'height':'0px'
    },500,'easeOutCubic');
}

function sortView(obj){
    $('.filter_wrap .filter_detail .btn_filter').removeClass('open');
    $('.filter_wrap .filter_detail_view').stop(true,false).attr('style','');
}

function pdList_add(idx,total){//상품더보기 idx:현재페이지 , total:전체페이지
    $(window).scroll(function(){
        if(idx == total){
            return false;
        }else{
            if(parseInt($(window).scrollTop() + $(window).height()) >= parseInt($("#foot").offset().top)){
                ajax(idx);
                idx++;
            }else{
                return false;
            }
        }
    });
}

function ajax(idx){//상품 더보기 ajax
    $.ajax({
        type : "get",
        dataType : "json",
        url : "pd_list"+idx+".txt",
		cache : false,
        data : {"cPage":idx},
        success : function(data){
            var html = '';
            if(data.length > 0){
                $.each(data, function(key, row){
                    html +='<li>';
                    html +='<a href="#none" onclick="pd_detailView();">';
                    html +='<span class="img"><img src="'+row.PROD_IMG+'" onerror="this.src='+row.NO_IMG+'"  alt="'+row.PROD_NM+'" /></span>';
                    html +='<span class="tit">'+row.PROD_NM+'</span>';
                    html +='<p class="price_wp">';
                    html +='<span class="pre"><del>￦ '+row.LIST_PRICE+'</del></span>';
                    html +='<span>￦ '+row.PROD_PRICE+'</span>';
                    html +='</p>';
                    html +='</a>';
                    html +='</li>';
                });
            }
            $(".product_list_cont ul").append(html);
            return;

        },
        beforeSend:function(){
            $(".product_list_cont").append('<div class="loding"><img src="//image.prospecs.com/mobile/images/images/common/loading_bar_01.gif" /></div>')
        },
        complete:function(){
            $(".product_list_cont .loding").remove();
            return;
        },
        error : function(){
            alert("error");
        }
    });
}

function push_switch(obj){// push 알림
    if($(obj).hasClass('on')){
        $(obj).removeClass('on')
    }else{
        $(obj).addClass('on')
    }
}

function alarm_view(obj){// FAQ
    if($(obj).hasClass('active')){
        $(obj).removeClass('active');
        $(obj).parents('tr').next('tr').find('.td_view .alarm_view').removeClass('on')
    }else{
        $('.tit').removeClass('active');
        $('.alarm_view').removeClass('on');
        $(obj).addClass('active')
        $(obj).parents('tr').next('tr').find('.td_view .alarm_view').addClass('on')
    }
}

function mymenu(obj){// mypage 전체메뉴보기
    var dp2H = $(obj).next('.dp2').find('ul').innerHeight();
    if($(obj).parent('li').hasClass('active')){
        $(obj).parent('li').removeClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

    }else{
        $(obj).parents('.my_menu').find('li').removeClass('active');
        $(obj).parents('.my_menu').find('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

        $(obj).parent('li').addClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':dp2H+'px'
        },400,'easeOutCubic')
    }
}

function accodion(obj){// Accodion
    var dp2H = $(obj).next('.dp2').find('.slide_event_wrap').innerHeight();
    if($(obj).parent('li').hasClass('active')){
        $(obj).parent('li').removeClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

    }else{
        $(obj).parents('.accodion_list_wrap').find('li').removeClass('active');
        $(obj).parents('.accodion_list_wrap').find('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

        $(obj).parent('li').addClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':dp2H+'px'
        },400,'easeOutCubic')
    }
}

function mainGnb(){//main gnb bar
    mainGnbReset();

    $(window).on('resize',function(){
        mainGnbReset()
    })
}

function mainGnbReset(){//main gnb reset
    var gnbSize = $('.gnb_scroll_bar  li').size();
    var wdW = $(window).innerWidth();
    if(gnbSize <= 6){
        $('.gnb_scroll_bar li').css('width',(wdW/gnbSize)+'px');
        return false;
    }else{
        $('.gnb_scroll_bar').append('<div class="arr"></div>');
        $('.gnb_scroll_bar li').css('width',(wdW/6)+'px');
        $('.gnb_scroll_bar .swiper-wrapper').css('width',((wdW/6)*gnbSize)+'px');
        var swiper = new Swiper('.gnb_scroll_bar', {// swiper set
            direction: 'horizontal',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            onTouchEnd:function(){
                if(swiper.isEnd == true){
                    $('.gnb_scroll_bar .arr').hide();
                }else{
                    $('.gnb_scroll_bar .arr').show();
                }
            }
        });
    }
}

function provTab(tg){//구매이용약관 탭
    if(tg == 'prov01'){
        $('#provision01 .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)')
    }else{
        var tgTop = $('#prov02').position().top;
        $('#provision01 .swiper-wrapper').css('transform','translate3d(0px, -'+tgTop+'px, 0px)')
    }
}

function pd_detailVidew(obj){// 상품상세 탭
    $('.product_detail_wrap .subDepth_area.detail_menu ul li a').removeClass('on');
    $(obj).addClass('on');
    $('.detail_info02 .v_cont').hide();
    var tg = $(obj).attr('href');
    $(tg).show();
    $("#prodInfoAccodion").next('.content_wrap').height($("#prodInfoAccodion").next('.content_wrap').find('.content').height() +30); //구매정보 탭 때문에 여기에다 넣음 
}

function topbannerClose(){//상단배너 닫기
    if ($('.topbanner').css('display') == 'block') {
        $('.topbanner').css({'top': '-57px'}).hide();
        $('#head').css({'top': '0'});
        $('#container').css({'marginTop': '60px'});
    } else {
        $('.topbanner').css({'top': '0'});
        $('#head').css({'top': '26px'});
        $('#container').css({'marginTop': '86px'});
    }

    /*
     $('#wrap').removeClass('tbanner_show');
     if($(document).find('.tbanner_show').length > 0){
     $('#head').css({'top':'57px'});
     }else{
     $('#head').css({'top':'0'});
     }
     */
}

function mainpopOpen(){// 메인팝업 열기
    $('#wrap').addClass('fixed');

    $('#mainpop_wrap').delay(500).animate({
        'top':'0%',
        'height':'100%'
    },600,'easeOutCubic');
    $('#mainpop_wrap .img').delay(500).animate({
        'top':'75px'
    },600,'easeOutCubic');
}

function mainpopClose(){// 메인팝업 닫기
    $('#wrap').removeClass('fixed');

    $('#mainpop_wrap').animate({
        'top':'50%',
        'height':'0%'
    },500,'easeOutCubic',function(){
        $('#mainpop_wrap').hide();
    });
}

function topScroll(){//상단으로 이동
    if($(window).scrollTop() > 0){
        $('#foot .top_scroll').show();
    }else{
        $('#foot .top_scroll').hide();
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('#foot .top_scroll').show();
        }else{
            $('#foot .top_scroll').hide();
        }
    })

    $('#foot .top_scroll').on('click', function(){
        $('html,body').animate({
            'scrollTop':'0px'
        },500,'easeOutCubic')
    })
}

function categoryDepth(){

    if($(obj).parent('li').hasClass('active')){
        $(obj).parent('li').removeClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

    }else{
        $(obj).parents('.accodion_list_wrap').find('li').removeClass('active');
        $(obj).parents('.accodion_list_wrap').find('.dp2').stop(true,false).animate({
            'height':'0px'
        },400,'easeOutCubic');

        $(obj).parent('li').addClass('active');
        $(obj).next('.dp2').stop(true,false).animate({
            'height':dp2H+'px'
        },400,'easeOutCubic')
    }
}

function filterSet(){// filter
    var ck = $('.filter_detail_view .ck_area ul li label'),
        ckClear = $('.filter_detail_view .ck_area .clear'),
        allClear = $('.filter_detail_view .clearAll');

    $('.filter_detail_view .ck_area input').each(function(){
        if($(this).is(':checked')){
            $(this).parent('label').addClass('active')
        }
    })

    $(ck).on('click',function(){//filter checkbox
        if($(this).find('input').is(':checked')){
            $(this).addClass('active');
            $(this).find('input').attr('checked', true);
        }else{
            $(this).removeClass('active');
            $(this).find('input').attr('checked', false);
        }
    })

    $(allClear).on('click', function(){//filter all clear
        $('.filter_detail_view label').removeClass('active');
        $('.filter_detail_view .ck_area input').attr('checked', false);
        $('.filter_detail_view .ck_area li').removeClass('active');
    })

    $(ckClear).on('click', function(){//filter clear
        $(this).parent('.ck_area').find('label').removeClass('active');
        $(this).parent('.ck_area').find('input').attr('checked', false);
        $(this).parent('.ck_area').find('li').removeClass('active');
    })
}

function colorPicker(obj){//filter color picker
    if($(obj).parent('li').hasClass('active')){
        $(obj).parent('li').removeClass('active');
    }else{
        $(obj).parent('li').addClass('active');
    }
}

function faq_ans(num){
    max=$("#faq .ansline").length;

    if (document.getElementById('answer'+num).style.display == ""){
        document.getElementById("answer"+num).style.display = "none";
        document.getElementById("icon"+num).src = "//image.prospecs.com/mobile/images/common/icon_plus.png";
    } else {
        $('#faq .ansline').each(function(){
            $(this).css('display','none');
            $(this).find('.ans > img').attr('src','//image.prospecs.com/mobile/images/common/icon_plus.png');
        });
        document.getElementById("answer"+num).style.display = "";
        document.getElementById("icon"+num).src = "//image.prospecs.com/mobile/images/common/icon_minus.png";
    }
}

function mem_grade(num){
    max=document.getElementById("grade").getElementsByTagName("a").length;

    for(i=1;i<=max;i++){
        document.getElementById("grade_cont"+i).style.display = "none";
        document.getElementById('grade_icon'+i).src = document.getElementById('grade_icon'+i).src.replace("_on.jpg", "_off.jpg");
    }
    document.getElementById("grade_cont"+num).style.display = "block";
    document.getElementById('grade_icon'+num).src = document.getElementById('grade_icon'+num).src.replace("_off.jpg", "_on.jpg");
}


function checkBox() {
    var check_Box = document.getElementsByName("ckbox");
    for (j = 0; j < check_Box.length; j++) {
        var disign = document.getElementById([j+1]);
        if(check_Box[j].checked == true ){
            disign.style.display = "table";
        }else{
            check_Box[j].checked = false;
            disign.style.display = "none";
        }
    }
}

$(window).load(function() {
    initList();
});

function initList() {
    tmp_line_w = 0;
    tmp_line = 0;
    tmp_con_max = 0;

    $(".review_contents .review_cont").each(function() {
        if($(this).index() != 0){
            tmp_line_w = tmp_line_w + $(this).width() + 14;

            //if(tmp_line_w < $("#contentsBox").width()){

            if(tmp_line_w < $(".review_index").width() + 14){
                //if(tmp_line_w < $(".headerCon").width()){
                $(this).css({"left" : $(this).prev().position().left + $(this).prev().width() + 14 + "px", "top" : "0px"});
            }else{
                if(tmp_line < 1){
                    tmp_line = $(this).index();
                }

                if($(this).index()%tmp_line == 0){
                    $(this).css({"left" : "0px", "top" : $(".review_contents .review_cont").eq($(this).index() - tmp_line).position().top + $(".review_contents .review_cont").eq($(this).index() - tmp_line).height() + 45 + "px"});
                }else{
                    $(this).css({"left" : $(this).prev().position().left + $(this).prev().width() + 14 + "px", "top" : $(".review_contents .review_cont").eq($(this).index() - tmp_line).position().top + $(".review_contents .review_cont").eq($(this).index() - tmp_line).height() + 45 + "px"});
                }
            }

            //$(this).fadeIn(800);
            $(this).fadeIn(0);
        }else{
            tmp_line_w = tmp_line_w + $(this).width() + 14;
            $(this).fadeIn(0);
        }
        tmp_con_max = Math.max(parseInt($(this).css("top")) + $(this).height() + 45, tmp_con_max);
    });

    $(".review_contents").css({"height" :  tmp_con_max + "px"});
}


function datepicker_order(){// order 일자조회
    var showOn = 'button',
        btnSrc = '//image.prospecs.com/front/images/common/icon_calendar.png',
        altField = 'yy.mm.dd'


    $( "#calendar01" ).datepicker({
        showOn: showOn,
        buttonImage: btnSrc,
        buttonImageOnly: true,
        altField: "#calendar01",
        altFormat: altField
    });

    $( "#calendar02" ).datepicker({
        showOn: showOn,
        buttonImage: btnSrc,
        buttonImageOnly: true,
        altField: "#calendar02",
        altFormat: "yy.mm.dd"
    });

    /*$('.search_date ul li').on('click', function(){
     $(this).parent().find('li').removeClass('active')
     $(this).addClass('active')
     })*/

    $(".search_box .search_box_in .term_in input").on('click', function(){
        $(this).parent().find('input').removeClass('on');
        $(this).addClass("on");

    });
}


function op_tabbar(){
    if (document.getElementById('layer_tabbar').style.display == "none"){
        document.getElementById("layer_tabbar").style.display = "block";
        $(".tabbar .brand").addClass('on');
    } else {
        document.getElementById("layer_tabbar").style.display = "none";
        $(".tabbar .brand").removeClass('on');
    }
}

