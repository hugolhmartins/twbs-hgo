define(function () {
    return function (hljs) {
        var SELECTORS = "abbr|acronym|address|area|article|aside|audio|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video";
        var PARAM_ONLY_SELECTORS = "a|input";
        return {
            case_insensitive: false,
            contains: [
                {
                    className: 'id',
                    begin: '\\#[A-Za-z0-9_-]+',
                    relevance: 0
                },
                {
                    className: 'class',
                    begin: '\\.[A-Za-z0-9_-]+',
                    relevance: 0
                },
                {
                    className: 'attribute',
                    begin: '&attributes',
                    relevance: 0
                },
                {
                    className: 'selector-with-params',
                    begin: '\\b(' + PARAM_ONLY_SELECTORS + '|' + SELECTORS + ')\\b\\(', end: '\\)',
                    relevance: 0,
                    contains: [
                        {
                            className: 'param-type',
                            begin: '\\b(href|type|placeholder|data-json|name|checked|class|click|escaped|unescaped)\\b'
                        },
                        {
                            className: 'param-def',
                            variants: [
                                {
                                    begin: /'/, end: /'/
                                },
                                {
                                    begin: /"/, end: /"/
                                },
                                {
                                    begin: /`/, end: /`/
                                }
                            ],
                        },
                        {
                            className: 'param-split',
                            variants: [
                                {
                                    begin: /=/
                                },
                                {
                                    begin: /,/
                                },
                                {
                                    begin: /:/
                                },
                                {
                                    begin: '\\?'
                                }
                            ]
                        }
                    ]
                },
                {
                    className: 'selector',
                    begin: '\\b(' + SELECTORS + ')\\b',
                },
                {
                    className: 'variable',
                    relevance: 0,
                    variants: [
                        {
                            begin: '\\#{', end: '\\}'
                        },
                        {
                            begin: '\\${', end: '\\}'
                        }
                    ]
                },
                {
                    className: 'comment',
                    begin: '\\//- [A-Za-z0-9_-]+',
                }
            ]
        };
    };
});
