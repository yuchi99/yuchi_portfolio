document.writeln('<header class="header">');
document.writeln('            <div class="logo">');
document.writeln(
  '                <button class="hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"'
);
document.writeln(
  '                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
);
document.writeln(
  '                    <i class="icons-ic-hamburger d-none d-sm-block"></i>'
);
document.writeln(
  '                    <i class="icons-ic-hamburger-s d-block d-sm-none"></i>'
);
document.writeln("                </button>");
document.writeln('                <div class="logo-inner">');
document.writeln('                    <a href="">');
document.writeln(
  '                        <img class="header-logo" src="../images/header-logo.png"'
);
document.writeln(
  '                            srcset="../images/header-logo@2x.png 2x" alt="">'
);
document.writeln("                    </a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln('            <div class="header-menu">');
document.writeln("");
document.writeln("                <!--search-->");
document.writeln('                <div class="header-item item-search-box">');
document.writeln(
  '                    <input type="text" class="search" placeholder="">'
);
document.writeln(
  '                    <button class="icons-ic-search-purple" type="button"></button>'
);
document.writeln("                </div>");
document.writeln(
  '                <button class="header-item item-search-box-s" onclick="toggleSearchBar()">'
);
document.writeln(
  '                    <i class=" icons-ic-search d-none d-sm-block"></i>'
);
document.writeln(
  '                    <i class=" icons-ic-search-s d-block d-sm-none"></i>'
);
document.writeln("                </button>");
document.writeln("");
document.writeln("                <!--購物車-->");
document.writeln(
  '                <button class="header-item item-shopping-cart">'
);
document.writeln(
  '                    <i class="d-none d-sm-block icons-ic-shopping-cart"></i>'
);
document.writeln(
  '                    <i class="d-block d-sm-none icons-ic-shopping-cart-s"></i>'
);
document.writeln('                    <div class="circle-number">1</div>');
document.writeln("                </button>");
document.writeln("");
document.writeln("                <!--小鈴鐺：有未讀狀態增加 .unread -->");
document.writeln(
  '                <!-- <button class="header-item item-notice">'
);
document.writeln('                    <div class="badge">');
document.writeln(
  '                        <i class=" icons-ic-notice d-none d-sm-block"></i>'
);
document.writeln(
  '                        <i class=" icons-ic-notice-s d-block d-sm-none"></i>'
);
document.writeln("                    </div>");
document.writeln('                    <div class="unread-badge">');
document.writeln(
  '                        <i class=" icons-ic-notice-circle d-none d-sm-block"></i>'
);
document.writeln(
  '                        <i class=" icons-ic-notice-circle-s d-block d-sm-none"></i>'
);
document.writeln("                    </div>");
document.writeln("                </button> -->");
document.writeln("");
document.writeln("                <!--account-->");
document.writeln(
  '                <div class="btn-dropdown dropdown item-account">'
);
document.writeln(
  '                    <button class="btn dropdown-toggle nav account" type="button" data-toggle="dropdown"'
);
document.writeln(
  '                        aria-haspopup="true" aria-expanded="false" data-display="static">'
);
document.writeln(
  '                        <div class="account-name">蘇漢祥</div>'
);
document.writeln(
  '                        <i class="icons-ic-account account-s"></i>'
);
document.writeln(
  '                        <i class="icons-ic-account-s account-s"></i>'
);
document.writeln("                    </button>");
document.writeln(
  '                    <div class="dropdown-menu dropdown-menu-right triangle right" aria-labelledby="dropdownMenuButton">'
);
document.writeln('                        <div class="menu-inner">');
document.writeln(
  '                            <a class="dropdown-item" href="#">購買紀錄</a>'
);
document.writeln(
  '                            <a class="dropdown-item" href="#">出價紀錄</a>'
);
document.writeln(
  '                            <a class="dropdown-item" href="#">物品總覽</a>'
);
document.writeln(
  '                            <a class="dropdown-item" href="#">登出</a>'
);
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln('            <div class="section-searchbar">');
document.writeln('                <div class="mask"></div>');
document.writeln('                <div class="searchbar">');
document.writeln(
  '                    <input type="text" class="search" placeholder="">'
);
document.writeln(
  '                    <button class="ic icons-ic-search-purple p-0" type="button"></button>'
);
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </header>");
