/**
 * Created by jojoldu@gmail.com on 2017-01-16
 * Blog : http://jojoldu.tistory.com
 * Github : http://github.com/jojoldu
 */

var commander = require('commander');
var open = require('open');

commander
    .arguments('<browser>')
    .option('-u, --url <url>', 'Address of site you want to go to')
    .action(function(browser){
        open(commander.url, browser, function (response) {
            if(response instanceof Error){
                console.log(response);
            }
        });
    })
    .parse(process.argv);


