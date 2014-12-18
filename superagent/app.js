var superagent = require('superagent');
var cheerio    = require('cheerio');

var url = 'https://cnodejs.org';

superagent.get(url).end(function getCnode(err, sres) {
    if(err) {
        console.error(err);
    } 

    var $ = cheerio.load(sres.text);
    var items = [];

    $('#topic_list .cell').each(function (index, cell) {
        var $cell       = $(cell);
        var $topicTitle = $cell.find('.topic_title');

        author = $cell.find('.user_avatar img').attr('title');
        title  = $topicTitle.attr('title');
        href   = $topicTitle.attr('href');

        items.push({
            title : title,
            href  : href,
            author : author
        });
    });

    console.log(items);
});
