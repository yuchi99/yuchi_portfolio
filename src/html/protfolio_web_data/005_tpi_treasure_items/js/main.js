/*********************************/
/* 下拉選單 */
/*********************************/

function hiddenPlaceholder($currenSelect) {
  var $isCurrenSelected = $currenSelect.find(".select-single").text();
  if ($isCurrenSelected) {
    $currenSelect.find(".select-placeholder").addClass("d-none");
  }
}

function setSelected(currenSelect) {
  var currenCotent = currenSelect.find(".select-content");
  currenCotent.on("click", ".select-item", function () {
    currenSelect.find(".select-single").text($(this).text());
    currenCotent.children().removeClass("active");
    $(this).addClass("active");
    hiddenPlaceholder($(currenSelect));
  });
}

function bsSelect() {
  var $selects = $(".bs-select");
  $selects.each(function (index) {
    hiddenPlaceholder($(this));
    setSelected($(this));
  });
}

/*********************************/
/* 主選單 */
/*********************************/

// 電腦版主選單
function navbarPC(navbar) {
  if (!$(navbar).length) {
    return;
  }
  $(navbar).slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: false,
  });

  var clearDropdown = function (item, ddlMenu) {
    if (ddlMenu != undefined) {
      $(item).append(ddlMenu.detach());
      ddlMenu.hide();
      // 移除底下 全部 dropdown-menu 的 show
      $.each(ddlMenu.prevObject, function (i, item) {
        if ($(item).hasClass("show")) {
          $(item).removeClass("show");
        }
      });
    }
  };

  var dropdownMenu;
  let _current = null;
  let eOffset = null;

  $.each($(navbar).first().find("li"), function (i, item) {
    if ($(item).attr("data-hover") === "dropdown") {
      $(item).on("mouseenter", ".nav-link", function (e) {
        // 當前 li
        _current = $(e.target).parent();

        // 設置第一層 dropdown 位置
        eOffset = $(_current).offset();
        dropdownMenu = $(_current).find("div.dropdown-menu").first();

        dropdownMenu.css({
          display: "block",
          top: eOffset.top + $(_current).outerHeight(),
          left: eOffset.left,
        });
        $(".clone-dropdown-menu").remove();
        $(dropdownMenu)
          .clone()
          .appendTo("body")
          .addClass("clone-dropdown-menu nav-dropdown-menu");

        $(".clone-dropdown-menu").on("mouseleave", function (e) {
          $(this).remove();
        });
      });
      $(".logo").on("mouseenter", function (e) {
        $(".clone-dropdown-menu").remove();
      });
    } else {
      $(item).on("mouseenter", ".nav-link", function (e) {
        _current = $(e.target).parent();
        $(".clone-dropdown-menu").remove();
        dropdownMenu = $(_current).find("div.dropdown-menu").first();
        if (dropdownMenu !== undefined) {
          clearDropdown(_current, dropdownMenu);
        }
      });
    }
  });
}

// 手機版主選單
function navbarMobile(navbar) {
  var navItem = $(navbar).find(".nav-item");
  // 手機版 nav item slideDown
  $(navItem).on("show.bs.dropdown", function () {
    var items = $(this).parent().children();
    $(items).each(function () {
      if ($(this).hasClass("show")) {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
        $(this).removeClass("show");
      }
    });
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  $(navItem).on("hide.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
  });

  // 手機版 nav 出現時 視窗捲軸消失
  $("#navbarSupportedContent").on("show.bs.collapse", function () {
    $("html").addClass("overflow-hidden");
  });
  $("#navbarSupportedContent").on("hide.bs.collapse", function () {
    $("html").removeClass("overflow-hidden");
  });
}

// 手機版搜尋條
function toggleSearchBar() {
  $(".section-searchbar").addClass("d-block");
  $(".section-searchbar .search").focus();
  $(".section-searchbar .mask").click(function () {
    $(".section-searchbar").removeClass("d-block");
  });
}

/*********************************/
/* 手機版產品篩選 */
/*********************************/

function filterProductMobile() {
  // 檢查使否有已選取
  $(".filter-product-collapse").each(function (index) {
    var items = $(this).find(".select-item");
    var isActive = false;

    $(items).each(function (index, element) {
      if ($(element).hasClass("active")) {
        isActive = true;
      }
    });

    if (isActive) {
      $(
        ".filter-product-controls .btn:nth-child(" + (index + 1) + ")"
      ).addClass("active");
    }
  });

  // 點擊後切換篩選項目及選項樣式
  $(".filter-product-content").on("click", ".select-item", function (e) {
    $(this).parent().siblings().children().removeClass("active");
    $(this).addClass("active");

    var collapseIndex = $(
      ".filter-product-content .filter-product-collapse"
    ).index($(this).parents(".filter-product-collapse"));

    $(
      ".filter-product-controls .btn:nth-child(" + (collapseIndex + 1) + ")"
    ).addClass("active");
  });
}

/*********************************/
/* 產品換圖 slider */
/*********************************/

function productPicSlider(picSection) {
  var $picSection = $(picSection);
  var navSlier = $picSection.find(".slider-nav");
  var picSlider = $picSection.find(".slider-wrap");

  if (!$(picSection).length) {
    return;
  }

  $(picSlider).slick({
    slidesToShow: 1,
    asNavFor: ".slider-nav",
    dots: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  $(picSlider).on("beforeChange", function (event, slick, direction) {
    var count = $(this).parent().find(".slider-number");
    var total = $(this).siblings().find(".total").text();
    var ordinal = $(count).find(".ordinal");

    if (direction < total - 1) {
      $(ordinal).text(direction + 2);
    } else {
      $(ordinal).text(1);
    }
  });

  $(navSlier).slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: ".slider-wrap",
    nextArrow: ".slider__next",
    prevArrow: ".slider__prev",
    focusOnSelect: true,
  });
}

$(".slider-wrap").on("init", function () {
  var total = $(this).find(".slider__item").length;
  var count = $(this).parent().find(".slider-number");
  $(count).find(".ordinal").text(1);
  $(count).find(".total").text(total);
  $(".slider__item").each(function (i, el) {
    var src = $(el).find("img").attr("src");
    var template = '<div class="nav-img"><img src="' + src + '" ></div>';
    $(template).appendTo(".slider-nav");
  });
});

/*********************************/
/* 產品底下說明 tab slider */
/*********************************/

function switchTabContent(currenTabItem) {
  var tragetName = currenTabItem.attr("href").slice(1);
  var traget = $("[id=" + tragetName + "]");
  currenTabItem.parents(".slick-track").find("a").removeClass("active");
  traget.siblings().removeClass("show active");
  traget.tab("show");
}

function productInformationSlider(informationSection) {
  // slick init
  if ($(window).width() <= 767) {
    $(informationSection).slick({
      centerMode: true,
      slidesToShow: 1,
      arrows: false,
      infinite: false,
    });
  }

  // 點擊時切換內容及 active 樣式
  $(informationSection).on("click", "li", function () {
    var currenIndex = $(this).parent().children().index(this);
    $(informationSection).slick("slickGoTo", currenIndex);
    switchTabContent($(this).children());
  });

  // 滑動時時切換內容
  $(informationSection).on("swipe", function () {
    switchTabContent($(this).find(".slick-center").children());
  });
}

/*********************************/
/* call function block  */
/*********************************/

$(document).ready(function () {
  bsSelect();
  navbarPC(".nav-main-ul");
  navbarMobile(".menu-mob");
  filterProductMobile();
  productPicSlider(".pic-slider");
  productInformationSlider(".information-slider");
});
