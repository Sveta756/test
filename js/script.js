"use strict";$(document).ready((function(){function e(){var e=$("#mail").val(),a=$("#phone").val(),i=$("#name").val();0!=e.length&&0!=a.length&&0!=i.length&&$("#check").is(":checked")?($(".modal__submit").removeAttr("disabled"),$(".modal__submit").css("opacity","1")):$(".modal__submit").attr("disabled","disabled")}$(".header").on("mouseenter",".header__item",(function(){$(this).find(".header__link").addClass("header__link_active"),$(this).addClass("header__item_act"),$('div[data-id="'.concat($(this).attr("data-id"),'"')).fadeIn()})),$(".header").on("mouseleave",".header__item",(function(){$(this).find(".header__link").removeClass("header__link_active"),$(this).removeClass("header__item_act"),$('div[data-id="'.concat($(this).attr("data-id"),'"')).fadeOut()})),$(".header-mobile__hamburger").click((function(){$(this).toggleClass("header-mobile__hamburger_active"),$(this).hasClass("header-mobile__hamburger_active")?($(".body").css("overflow","hidden"),$(".header-mobile__body").fadeIn()):($(".header-mobile__body").fadeOut(),$(".header-mobile__head_active").removeClass("header-mobile__head_active").next().slideUp(),$(".header-mobile__link_active").removeClass("header-mobile__link_active").next().slideUp(),$(".active-link").removeClass("active-link").next().slideUp())})),$(".header-mobile__head").click((function(){$(this).toggleClass("header-mobile__head_active"),$(this).toggleClass("header-mobile__head_active")&&($(this).toggleClass("header-mobile__head_active").next().slideToggle(),$(".header-mobile__head_active").not(this).removeClass("header-mobile__head_active").next().slideUp(),$(".header-mobile__link-levelone").removeClass("active-link").next().slideUp())})),$(".header-mobile__link-levelone").click((function(){$(this).toggleClass("active-link").next().slideToggle(),$(".active-link").not(this).removeClass("active-link").next().slideUp()})),$(window).on("scroll",(function(){$("video, .opacity").css({opacity:1-.003*$(window).scrollTop()}),$(".products, .next-block").css({height:2*$(window).scrollTop()}),$(".header").css("background","rgb(255, 255, 255)")})),$(".wrapper").css({height:$(window).height()+"px"}),$(".main__btn").on("click",(function(){$(".overlay, #modal").fadeIn(),$("body").css("overflow","hidden")})),$(".modal__close").on("click",(function(){$(".overlay, #modal, #thanks").fadeOut(),$("form")[0].reset(),$("body").css("overflow","")})),$(".overlay").click((function(e){0==$(e.target).closest("#modal").length&&($(this).fadeOut(),$("form")[0].reset())})),$(document).on("keydown",(function(e){27==e.keyCode&&$(".overlay, #modal, #thanks").fadeOut()})),$("input[name=phone]").mask("+7(999)999-9999"),jQuery.validator.addMethod("checkMaskPhone",(function(e,a){return/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(e)})),$(".modal__form").validate({rules:{name:"required",checkbox:"required",phone:{checkMaskPhone:!0},email:{required:!0,email:!0}},validClass:"success",messages:{name:"Пожалуйста, введите свое имя",checkbox:"Поставьте флажок",phone:"Пожалуйста, введите свой номер телефона",email:{required:"Пожалуйста, введите свою почту",email:"Неправильно введен адрес почты"}},errorPlacement:function(e,a){if("checkbox"==a.attr("type"))return a.next("label").append(e);e.insertAfter($(a))}}),$(".modal__input").blur((function(){if(!$(this).valid())return $(this).focus(),!1})),$(".modal__input").keyup((function(){e()})),$("#check").change((function(){e()})),$("form").submit((function(e){$(this).find("input").val(""),$(this).find("input").removeClass("success"),$("input:checked").prop("checked",!1),$(".modal__submit").attr("disabled","disabled"),$(".modal__submit").css("opacity","0.2"),$(this).find("textarea").val(""),$("#modal").fadeOut(),$("#thanks").fadeIn("slow"),$("form").trigger("reset")}))}));