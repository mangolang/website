
var monaco: any;
var editor = monaco.editor.create(document.getElementById('mango-editor'), {
    value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
    ].join('\n'),
    language: 'javascript'
});
