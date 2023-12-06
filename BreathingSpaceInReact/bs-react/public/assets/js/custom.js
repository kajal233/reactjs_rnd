$(function() {
    (function(name) {
      var container = $('#pagination-' + name);
      if (!container.length) return;
      var sources = function () {
        var result = [];
  
        for (var i = 1; i < 196; i++) {
          result.push(i);
        }
  
        return result;
      }();
  
      var options = {
        dataSource: sources,
        callback: function (response, pagination) {
          window.console && console.log(response, pagination);
  
          var dataHtml = '<ul>';
  
          $.each(response, function (index, item) {
            dataHtml += '<li>' + item + '</li>';
          });
  
          dataHtml += '</ul>';
  
          container.prev().html(dataHtml);
        }
      };
  
      //$.pagination(container, options);
  
      container.addHook('beforeInit', function () {
        window.console && console.log('beforeInit...');
      });
      container.pagination(options);
  
      container.addHook('beforePageOnClick', function () {
        window.console && console.log('beforePageOnClick...');
        //return false
      });
    })('demo1');

    $("#navxs .dropdown-menu").append('<li><a href="#" class="close-nav">Close</a></li>');
    $(".close-nav").click(function(){
        $(".navbar-collapse").removeClass("show");
    });
  })

function list_scroll() {
    $('.scrollTop').on('click', function() {
        $('html, body').animate({ scrollTop: $('body').offset().top }, 100)
    });
}

function removeAction() {
    $('.removePlan').on('click', function() {
        $('.RemoveAction_model').addClass('show').addClass('modelShow');
    });
    $('.btn-close').on('click', function() {
        $('.RemoveAction_model').removeClass('show').removeClass('modelShow');
    });
    $('.close').on('click', function() {
        $('.RemoveAction_model').removeClass('show').removeClass('modelShow');
    });
}


function addValidationAction() {
    $('.addValidation').on('click', function() {
        $('.action_carousel_pop').addClass('show').addClass('modelShow');
    });
    $('.btn-close').on('click', function() {
        $('.action_carousel_pop').removeClass('show').removeClass('modelShow');
    });
    $('.close').on('click', function() {
        $('.action_carousel_pop').removeClass('show').removeClass('modelShow');
    });
}



function playVideo() {
    $('.play_btn').on('click', function(e) {
        e.preventDefault;
        $(this).siblings('.video_part').children("iframe")[0].requestFullscreen();
    });
}

function showButtonGrey() {
    $('.shw-btn-grey').on('click', function() {
        $("#modal-btn1").hide();  
        $("#fake-modal-btn1").show();   
    });
}

function selectDropdown() {
    $('body').on('click', function() {
        $('.dropdown_container ul').removeClass('list_show');
    });

    $('.dropdown_container .icon_btn').on('click', function(event){
        event.stopPropagation();
        $(this).parents('.button_wrapper').siblings('ul').toggleClass('list_show');
    });
}

function disclaimerModel() {
    $('.disclaimer_model .close').on('click', function() {
        $(this).parents('.disclaimer_model').fadeOut();
    });
}

function navCall(){
    $(".nav-item").each(function(){
        if ($(window).width() > 767) {
            $(this).on('mouseover', function(){
                $(this).children(".nav-link").addClass("show");
                $(this).children("ul.dropdown-menu").addClass("show");
            });
            $(this).on('mouseout', function(){
                $(this).children(".nav-link").removeClass("show");
                $(this).children("ul.dropdown-menu").removeClass("show");
            });
        }
    });
}

// function pagination_bottom() {
//     var itemsCount = 300;
//     var itemsOnPage = 10;
//     var myPagination =new Pagination({
//         container: $(".custom_pagination_bottom")
//     });
//     myPagination.make(itemsCount, itemsOnPage);
// }

$(document).ready(function() {
    list_scroll();
    removeAction();
    playVideo();
    addValidationAction();
    showButtonGrey();
    selectDropdown();
    disclaimerModel();
    navCall(); 
})

