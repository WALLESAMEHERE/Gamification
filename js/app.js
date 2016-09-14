$(document).foundation();

"use strict"
/// //HEAD
$(document).ready(function() {

    // user search animation 
    $('#input_search_btn').on('click', function() {
        $('.sery').toggleClass('clasa_on'); // width from 0 too 80%;
    });
    // button message / settings - alert box 
    // click on button
    $('.panel_btn').on('click', function(e) {
        // condition - if button has active box
        if ($(e.target).parent().find('.user_panel_msg').hasClass('user_alert_on')) {}
        // condition - if button doesn't have active box
        else if (!$(e.target).hasClass('user_alert_on')) {
            // remove other active box
            $('.user_panel_msg').removeClass('user_alert_on').attr('aria-hidden', 'true');
            // add class and show alert box about this button
            $(this).parent().find('.user_panel_msg').addClass('user_alert_on').attr('aria-hidden', 'false');
            e.stopPropagation()
        }
    });
    // click on body
    $('body').on('click', function(e) {
        e.stopPropagation();
        // condition - if button doesn't have active box
        if (!$(e.target).hasClass('user_panel_msg')) {
            // remove active box
            $('.user_panel_msg').removeClass('user_alert_on').attr('aria-hidden', 'true');
        }
    });
    // show mobile menu
    $('.mobile_hamb').on('click', function() {
        $('.medium_nav').toggleClass('mobile_show');
        $('.mobile_hamb').toggleClass('hamb_open').toggleClass('hamb_close');
    });
    $('.game_category').on('click', function() {
        $(this).children('.select_work').find('span').toggleClass('check_box');
        $(this).children('.select_work').find('p').fadeToggle(100).toggleClass('percent_prog');
        // aria checked
        if ($(this).attr('aria-checked') == 'true') {
            $(this).attr('aria-checked', 'false');
        } else {
            $(this).attr('aria-checked', 'true');
        }
    });
    // checks game progress and replaces styles
    (function gameProgress() {
        var zet = $('.game_category');
        for (var i = 0; i < zet.length; ++i) {
            var item = zet[i];
            var wid = $(item).children('.progress').width();
            if (wid == 0) {
                $(item).css({
                    'color': 'black'
                });
                $(item).find('.badge_place').css({
                    'color': 'silver'
                });
            } else {}
        }
    })();
    // show/hide games with 100% progress
    $('.hide_done_challenge').on('click', function() {
        $('.challenge_compl').fadeOut().attr('aria-hidden', 'true');
    });
    $('.show_all_challenge').on('click', function() {
        $('.challenge_compl').fadeIn().attr('aria-hidden', 'false');
    });
    // check the active buttons and setAttribute aria.
    (function sortableButtonPressed() {
        $('.board_buttons').find('button').on('click', function() {
            if ($(this).attr('aria-pressed') == 'false') {
                $(this).attr('aria-pressed', 'true').addClass('active');
                $(this).parent().siblings().find('button').attr('aria-pressed', 'false').removeClass("active");
            }
        });
    })();
// adding a category game to aria-label
    (function gameInfoAria() {
        var zet = $('.game_category');
        for (var i = 0; i < zet.length; ++i) {
            var item = zet[i];
            var wid = $(item).children('p').text();
            $(item).attr('aria-label', wid);
        }
    })();
});