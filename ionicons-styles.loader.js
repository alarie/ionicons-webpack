var styles = [
    'font',
    'icons'
];

module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    var start =
            "@import          \"~ionicons/scss/ionicons-variables\";\n"
            + "$ionicons-font-path: \"~ionicons/fonts/\";\n"
            + "@import          \"./ionicons.config.scss\";\n";
    source = start + styles.filter(function(style) {
        return config.styles[style];
    }).map(function(style) {
        return "@import \"~ionicons/scss/ionicons-" + style + "\";";
    }).join("\n");
    return source;
};
