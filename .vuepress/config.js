
module.exports = {
    title: 'UESTC_Jungle',
    description: 'Welcome to `WRONG ANSWER` world.',

    head: [
        // ['script', { type: 'text/javascript', src: 'https://cdn.bootcss.com/mathjax/2.7.4/latest.js', async: true }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/KaTeX/0.10.0-alpha/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ],

    markdown: {
        lineNumbers: true,
        config: md => {
            // md.use(require('markdown-it-mathjax')());
            md.use(require('markdown-it-katex'));
        },
    },
};
