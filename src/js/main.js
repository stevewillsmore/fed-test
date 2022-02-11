var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '<span class="sr-only">(this link opens in a new window)</span></a>' + // sr-only class added
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}}' +
                                '<span>({{file_size}} {{file_type}})</span>' + // added file size/type missing from design
                                '<span class="sr-only">(this link opens in a new window)</span></a>' + // sr-only class added
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    // template was missing a '+', breaking the string concatenation and preventing the reports from populating the page

    init: function() {
        this.renderReports(reportData || []);
        console.log(reportData); // just to see what was coming through to the page
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();