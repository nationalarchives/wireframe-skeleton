<header role="banner" id="page-header">
    <div id="skip-link-container">
        <a href="http://discovery.nationalarchives.gov.uk/details/rd/N13980137#page_wrap">Skip to Main Content</a>
    </div>

    <div id="retro-disco"><span>This is a wireframe prototype representing only a single route through a potential application process</span></div>

    <div class="container">
        <div id="holds-logo-and-search" class="row">
            <div id="logo-holder" class="col starts-at-full ends-at-half clr">
                <a title="Go to The National Archives homepage" href="http://www.nationalarchives.gov.uk/">
                    <img src="images/logo-white.png" alt="The National Archives" title="The National Archives">
                </a>

                <form id="mobile-global-search" method="get"
                      action="http://apps.nationalarchives.gov.uk/search/quick_search.aspx">
                    <div id="mobile-search-outer-wrapper" style="display: none;">
                        <div id="mobile-search-wrapper">
                            <input type="text" aria-required="true" required="" name="search_text"
                                   placeholder="Search our website..." id="mobile-search-field" autocomplete="off">
                            <input type="submit" id="mobileSearchSubmit" value="">
                        </div>
                        <div id="change-destination">
                            <span><input type="radio" data-fieldname="search_text"
                                         data-placeholder="Search our website..."
                                         data-target="http://apps.nationalarchives.gov.uk/search/quick_search.aspx"
                                         id="websiteSearch" name="searchDestination"
                                         class="mobileSearchDestinationOption" checked=""><label for="websiteSearch">Search
                                    our website</label></span>
                            <span><input type="radio" data-fieldname="_q" data-placeholder="Search our records..."
                                         data-target="/results/r" id="catalogueSearch" name="searchDestination"
                                         class="mobileSearchDestinationOption"><label for="catalogueSearch">Search our
                                    records</label></span>
                        </div>
                    </div>
                </form>
                <span id="search-expander" style="position: absolute; right: 5px;">&nbsp;</span></div>
            <div class="col starts-at-full ends-at-half clr">
                <div id="search-field-wrapper" role="search">
                    <form id="globalSearch" method="get"
                          action="http://apps.nationalarchives.gov.uk/search/quick_search.aspx">
                        <span id="scope-selector" class="interactive-element expanded">&nbsp;</span>
                        <input type="text" aria-required="true" required="" name="search_text" id="tnaSearch"
                               placeholder="Search our website..." class="search-field" autocomplete="off">
                        <input type="submit" value="" id="search-button" class="search-button">
                    </form>
                    <ul id="search-options" style="display: block;">
                        <li><a aria-label="Change form destination to search the website" role="button"
                               data-fieldname="search_text" data-placeholder="Search our website..."
                               data-target="http://apps.nationalarchives.gov.uk/search/quick_search.aspx"
                               class="formDestinationChanger"
                               href="http://discovery.nationalarchives.gov.uk/details/rd/N13980137#">Search our
                                website</a></li>
                        <li><a aria-label="Change form destination to search the catalogue" role="button"
                               data-fieldname="_q" data-placeholder="Search our records..." data-target="/results/r"
                               class="formDestinationChanger"
                               href="http://discovery.nationalarchives.gov.uk/details/rd/N13980137#">Search our
                                records</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col starts-at-full clr pull-down">
                <div id="mega-menu-pull-down" class="interactive-element">
                    <button aria-label="Toggle menu">Menu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- This is where the mega-menu would be included -->
    <div id="account-controls-wrapper">
        <div id="account-controls" class="container">
            <ul>
                <li id="signin"><a href="http://discovery.nationalarchives.gov.uk/sign-in">Sign in</a></li>
                <li id="register"><a href="http://discovery.nationalarchives.gov.uk/register">Register</a></li>
                <li id="miniBasket">
                <span class="noItems">
                    <img src="images/basket.png" id="basketIcon" alt="Basket icon">
                    No items
                </span>
                </li>

            </ul>
        </div>
    </div>
</header>