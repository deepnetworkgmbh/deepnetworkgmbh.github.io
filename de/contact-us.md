---
lang: de
ref: page_ref_contact_us
layout: default
---

{% include header.html %}
{% include navigation.html %}

<script src="http://maps.google.com/maps/api/js?language=en-GB&key=AIzaSyDIE6SiLMRzA-_zUPis9FVkazPF9NRO5po" type="text/javascript"></script>
<script src="../modules/mod_bt_googlemaps/tmpl/js/btbase64.min.js" type="text/javascript"></script>
<script src="../modules/mod_bt_googlemaps/tmpl/js/default.js" type="text/javascript"></script>

<!-- MASTHEAD -->
<div class="wrap t3-masthead ">
    <div class="ja-masthead" style="background-image: url('../images/titles/contact-us.jpg')">
        <div class="ja-masthead-detail">
		    <h3 class="swiper-header">{{ site.data.pages['page_ref_contact_us'].title[page.lang] }}</h3>
        </div>
    </div>	
</div>
<!-- //MASTHEAD -->
<div id="t3-mainbody" class="container t3-mainbody">
	<div class="row">
    	<!-- MAIN CONTENT -->
		<div id="t3-content" class="t3-content col-xs-12">
	        <div class="page-header clearfix">
		        <h1 class="page-title">{{ site.data.pages['page_ref_contact_us'].title[page.lang] }}</h1>
	        </div>
            <div class="item-page clearfix">
                <!-- Article -->
                <article itemscope itemtype="http://schema.org/Article">
                    <meta itemprop="inLanguage" content="en-GB" />
                    <meta itemprop="url" content="/deepnetwork/contact-us" />
                    <meta itemscope itemprop="mainEntityOfPage" itemtype="http://schema.org/WebPage"  itemid="/deepnetwork/contact-us" /> 
                    <meta content="2019-10-22T07:07:39+00:00" itemprop="dateModified" />
                    <meta content="2019-04-04T19:29:36+00:00" itemprop="datePublished" />
                    <span itemprop="author" style="display: none;">
                        <span itemprop="name">Super User</span>
                        <span itemtype="https://schema.org/Organization" itemscope="" itemprop="publisher" style="display: none;">
                            <span itemtype="https://schema.org/ImageObject" itemscope="" itemprop="logo">
                                <img itemprop="url" alt="logo" src="../templates/ja_company/images/logo.png">
                                <meta content="auto" itemprop="width">
                                <meta content="auto" itemprop="height">
                            </span>
                            <meta content="Super User" itemprop="name">
                        </span>
                    </span>
                    <!--e:Validate structured data-->
                    <meta content="Contact Us" itemprop="headline">
                    <section class="article-content clearfix" itemprop="articleBody">
			            <div class="row" style="font-size: 18px; margin: 30px auto;">
	                        <div class="col-md-3">
                                <svg class="contacticon"><use xlink:href="../images/sprite.svg#icon-phone"></use></svg>
		                        <br>
		                        <a href="tel:+49 (0) 89 2316 6638">+49 (0) 89 2316 6638</a><br><br>
	                        </div>
	                        <div class="col-md-3">
                                <svg class="contacticon"><use xlink:href="../images/sprite.svg#icon-envelope"></use></svg>
                                <br>
                                <span id="cloaka4e1284d423aa5bf27857b071fae9748">This email address is being protected from spambots. You need JavaScript enabled to view it.</span>
                                <script type='text/javascript'>
                                    document.getElementById('cloaka4e1284d423aa5bf27857b071fae9748').innerHTML = '';
                                    var prefix = '&#109;a' + 'i&#108;' + '&#116;o';
                                    var path = 'hr' + 'ef' + '=';
                                    var addya4e1284d423aa5bf27857b071fae9748 = '&#105;nf&#111;' + '&#64;';
                                    addya4e1284d423aa5bf27857b071fae9748 = addya4e1284d423aa5bf27857b071fae9748 + 'd&#101;&#101;pn&#101;tw&#111;rk' + '&#46;' + 'c&#111;m';
                                    var addy_texta4e1284d423aa5bf27857b071fae9748 = '&#105;nf&#111;' + '&#64;' + 'd&#101;&#101;pn&#101;tw&#111;rk' + '&#46;' + 'c&#111;m';document.getElementById('cloaka4e1284d423aa5bf27857b071fae9748').innerHTML += '<a ' + path + '\'' + prefix + ':' + addya4e1284d423aa5bf27857b071fae9748 + '\'>'+addy_texta4e1284d423aa5bf27857b071fae9748+'<\/a>';
                                </script><br><br>
	                        </div>	
                        	<div class="col-md-3">
                                <svg class="contacticon"><use xlink:href="../images/sprite.svg#icon-map-o"></use></svg>
                                <br>
                                <a href="https://www.google.com/maps/place/Zeppelinstra%C3%9Fe+73,+81669+M%C3%BCnchen,+Germany/@48.1301598,11.5842197,17z/data=!3m1!4b1!4m5!3m4!1s0x479ddf7cc4143749:0x1d94ae4c5d1f2e69!8m2!3d48.1301562!4d11.5864084"
                                    target="_blank" class="footermail">Zeppelinstr. 73<br />
                                    DE-81669 München<br />
                                    GERMANY</a>                             
                        	</div>
                            <div class="col-md-3" style="text-align: right;">
                                <img src="../images/logo.png" title="Deep Network GmbH" style="margin: 0 auto">
                            </div>
                        </div>
                    </section>
                </article>
            </div>
		</div>		
	</div>
</div> 
<div class="section-wrap t3-content-bottom ">
    <div id="cavas_id173" class="bt-googlemaps"></div>
    <script type="text/javascript">
        var config = {
            mapType:'roadmap',
            width:'auto',
            height:'350',
            cavas_id:"cavas_id173", 
            zoom:15,
            zoomControl:true,
            scaleControl:true,
            panControl:true,
            mapTypeControl:true,
            streetViewControl:true,
            overviewMapControl:true,
            draggable:true,
            disableDoubleClickZoom:false,
            scrollwheel:true,
            weather:0,
            temperatureUnit:'f',
            replaceMarkerIcon:1,
            displayWeatherInfo:1,
            owm_api: "", 
            mapCenterType:"address",
            mapCenterAddress:"Zeppelinstr. 73 Munich GERMANY",
            mapCenterCoordinate	:"48.1301598,11.5842197",
            enableStyle:"0",
            styleTitle:"BT Map",
            createNewOrDefault:"createNew",
            enableCustomInfoBox:"0",
            boxPosition:"-150,-155",
            closeBoxMargin:"-9px",
            closeBoxImage:"",
            url:"http://www.otomobilgi.com/deepnetwork/"
        };
        var boxStyles = {
            "background":"#ffffff",
            "opacity":" 0.85",
            "width":" 280px",
            "height":"100px",
            "border":" 1px solid grey",
            "borderRadius":"3px",
            "padding":" 10px",
            "boxShadow":"30px 10px 10px 1px grey"
        };
        var markersCode ="W3sibWFya2VyVGl0bGUiOiJEZWVwIE5ldHdvcmsgR21iSCIsIm1hcmtlclR5cGUiOiJhZGRyZXNzIiwibWFya2VyVmFsdWUiOiJMYW5kc2JlcmdlcnN0ci4gMzAyIE11bmljaCBHRVJNQU5ZIiwibWFya2VySWNvbiI6IiIsIm1hcmtlclNob3dJbmZvV2luZG93IjoiMSIsIm1hcmtlckluZm9XaW5kb3ciOiIifV0="; 
        var stylesCode ="W10="; 
        initializeMap(config, markersCode, stylesCode, boxStyles);
       
    </script>
</div>

{% include backtotop.html %}  
{% include footer.html %}
