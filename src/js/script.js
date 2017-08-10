$(function() {

    //chart

    $('#container .diagram').css('display', 'none');

    $("#chart__type").change(function() {
        $('#container .diagram').css('display', 'none');
        id = $('#chart__type option:selected').val();
        $('#' + id).show();
    });

    $('.language a').click(function () {
        $('.language a').removeClass('lang-select');
        $(this).addClass('lang-select');
        return true;
    });

    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });


    //mobile-menu

    $.fn.extend({

        // Define the threeBarToggle function by extending the jQuery object
        threeBarToggle: function(options){

            // Set the default options
            var defaults = {
                color: '#000000',
                width: 32,
                height: 21,
                speed: 400,
                animate: true
            };
            var options = $.extend(defaults, options);

            return this.each(function(){

                $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
                $(this).addClass('tb-menu-toggle');
                $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
                    event.preventDefault();
                    $(this).toggleClass('tb-active-toggle');
                    if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
                    $('.tb-mobile-menu').slideToggle(options.speed);
                });
                $(this).children().css('background', options.color);
            });
        },

        // Define the accordionMenu() function that adds the sliding functionality
        accordionMenu: function(options){

            // Set the default options
            var defaults = {
                speed: 400
            };
            var options =  $.extend(defaults, options);

            return this.each(function(){

                $(this).addClass('tb-mobile-menu');
                var menuItems = $(this).children('li');
                menuItems.find('.sub-menu').parent().addClass('tb-parent');
                $('.tb-parent ul').hide();
                $('.tb-parent > .holder').on('click', function(event) {
                    //event.stopPropagation();
                    event.preventDefault();
                    $(this).siblings().slideToggle(options.speed);
                });

            });
        }
    });

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
    $('#menu-toggle').threeBarToggle({color: '#000000', width: 32, height: 21});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
    $('#menu').accordionMenu();

    $('#chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Points scored'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
            title: {
                text: null
            }
        },

        tooltip: {
            valueSuffix: ''
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },

        series: [{
            name: 'Period 1',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Period 2',
            data: [133, 156, 947, 408, 6]
        }]
    });

    $('#line').highcharts({
        chart: {
            type: 'line'
        },

        title: {
            text: 'Points scored'
        },

        subtitle: {
            text: ''
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },


        plotOptions: {
            series: {
                pointStart: 2010
            }
        },

        series: [{
            name: 'Period 1',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Period 2',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }]
    });

    $('#pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Points scored'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 56.33
            }, {
                name: 'Team 2',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Team 3',
                y: 10.38
            }, {
                name: 'Team 4',
                y: 4.77
            }, {
                name: 'Team 5',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });

});

$( ".type" ).select2({
    placeholder: "chart type",
    allowClear: true
});



