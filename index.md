---
title: Home
layout: default
---
{% include header.html %}
{% include navigation.html %}
{% include slideshow.html %}

<div id="hosting-prices" class="section-wrap t3-content-tabs">
    <div class="container">
        <ul class="nav nav-tabs" id="tab94">
            <li>
                <a data-toggle="tab" href="#module-94">Who We Are</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane  fade in" id="module-94">
                <div class="acm-features style-2 ">
                    <div class="features-content features-content-center">
                        <div class="row">
                            <div class="features-item ">
                                <a href="who-we-are.html"><h2>WHAT WE DOnt</h2></a>
                                <p>Deep Network GmbH is a Munich based software house and a consultancy company founded by ex-Microsoft developers.
                                 Drawing from our decades of experience building first class software we help our clients achieve their business goals
                                  taking advantage of latest and greatest technology and approaches available today.
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            jQuery(document).ready(function () {
                jQuery("#tab94 a:first").tab("show")
            });
        </script>
    </div>
</div>
<div class="section-wrap t3-content-bottom ">
    <div class="acm-testimonial style-2 bg-image"
        style="background-image: url(images/success-starts-with.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 pull-right">
                    <div class="testimonial-showcase-item">
                        <div class="label-small">success starts with...</div>
                        <h2 class="testimonial-showcase-intro">The key to a successful development process is
                            open, honest communication throughout the project lifespan. We make sure you
                            understand the development process as it evolves, and we check in frequently to
                            deliver in-depth progress reports. Most importantly, we make sure your development
                            team is equipped with the knowledge and documentation they need to transition
                            smoothly to the new environment.<br /><br />A great solution isn’t the one with the
                            biggest cool factor: it’s the one that answers your needs and lets your team hit the
                            ground running.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="acm-features style-1">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-3">
                    <div class="features-intro">
                        <div class="label-small">
                            OUR SERVICES
                        </div>
                        <h2 class="acm-features-title">
                            Almost anyone can get you up and running on a cloud-based platform. That’s the easy
                            part.
                        </h2>
                        <p class="acm-features-intro">
                            The challenge is to clearly envision the ways in which cloud technologies can take
                            your company in the most profitable and sustainable direction.<br />
                            <a class="btn btn-primary btn-rounded btn-border" href="our-services.html">LEARN
                                MORE</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-8 col-lg-9">
                    <div id="acm-feature-93" class="acm-feature-slide">
                        <div class="owl-carousel owl-theme">
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/hybrid-solutions.jpg" alt="" />
                                    </div>
                                    <h3>Hybrid</h3>
                                    <p>Hybrid solutions are becoming far more complex leveraging right mix of
                                        public cloud and on-premises resources for the solution.</p>
                                </div>
                            </div>
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/migration.jpg" alt="" />
                                    </div>
                                    <h3>Migration</h3>
                                    <p>Many of companies benefiting from the value of running their solutions in
                                        the cloud didn't start with a new solution designed for the cloud.</p>
                                </div>
                            </div>
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/autoscaling.jpg" alt="" />
                                    </div>
                                    <h3>Autoscaling</h3>
                                    <p>One of the benefits the cloud offers is the ability to quickly scale
                                        solutions out and even back in based on demand.</p>
                                </div>
                            </div>
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/health-monitoring.jpg" alt="" />
                                    </div>
                                    <h3>Health Monitoring</h3>
                                    <p>One of the challenges in deploying a multi-tenant solution to the cloud
                                        can be in determining the overall health and performance of the
                                        application.</p>
                                </div>
                            </div>
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/multi-tenant-saas.jpg" alt="" />
                                    </div>
                                    <h3>Multi-Tenant SaaS</h3>
                                    <p>Multi-tenancy has been a common requirement in many of the solutions we
                                        have helped our customers develop on cloud technologies and migrate to
                                        the cloud.</p>
                                </div>
                            </div>
                            <div class="features-item col">
                                <div class="features-item-inner">
                                    <div class="features-img">
                                        <img src="images/security.jpg" alt="" />
                                    </div>
                                    <h3>Secure</h3>
                                    <p>Security is a principal concern when entrusting an organization’s
                                        valuable information to the cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        (function ($) {
            jQuery(document).ready(function ($) {
                $("#acm-feature-93 .owl-carousel").owlCarousel({
                    addClassActive: true,
                    items: 2,
                    itemsDesktop: [
                        1199, 2
                    ],
                    itemsDesktopSmall: [
                        979, 2
                    ],
                    itemsTablet: [
                        768, 2
                    ],
                    itemsTabletSmall: false,
                    itemsMobile: [
                        479, 1
                    ],
                    itemsScaleUp: true,
                    navigation: true,
                    navigationText: [
                        "<svg class='serviceicons'><use xlink:href='../images/sprite.svg#icon-caret-left'></use></svg>", 
                        "<svg class='serviceicons'><use xlink:href='../images/sprite.svg#icon-caret-right'></use></svg>"
                    ],
                    pagination: false,
                    paginationNumbers: false,
                    autoPlay: false
                });
            });
        })(jQuery);
    </script>
    <div class="acm-cta style-1" style="background-image: url(images/dnbgreen.png);">
        <div class="container">
            <div class="cta-content">
                <h2>New to Deep Network?</h2>
                <a href="contact-us.html" class="btn btn-default">
                    CONTACT US
                </a>
            </div>
        </div>
    </div>
</div>

{% include backtotop.html %}      
{% include footer.html %}
