// main.js

$('ul.navbar-nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').show();
}, function() {
	$(this).find('.dropdown-menu').hide();
});

jQuery(function () {
    // On Dom Ready
    // _tzm_news_widget.getTzmNews();
    _tzm_news_widget.setConfig({
        maxEntries: 3,
        headerType: 'medium',
        dateType: 'medium'
    });
    _tzm_news_widget.render();
    // _tzm_news_widget.render('.tzm-news-widget');
});

jQuery(function () {
    // On Dom Ready
    jQuery('#apply-config').on('submit click', function (event) {
        event.preventDefault(); // Don't reload the page
        let config = {
            maxEntries: jQuery('#max-entries').val(),
            headerType: jQuery('#header-type').val(),
            dateType: jQuery('#date-type').val(),
        };
        console.log("Setting the config to: ", config);
        _tzm_news_widget.setConfig(config);
        _tzm_news_widget.render();
        return false;
    })
});
