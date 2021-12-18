var MeowGenerator = (function () {
    'use strict';

    var catMap = {
        twoCats: '                                                _\n\
                   |\\___/|                      \\\\\n\
                   )     (    |\\_/|              ||\n\
                  =\\     /=   )a a `,_.-""""-.  //\n\
                    )===(    =\\Y_= /          \\//\n\
                   /     \\     `"`\\       /    /\n\
                   |     |         |    \\ |   /\n\
                  /       \\         \\   /- \\  \\\n\
                  \\       /         || |  // /`\n\
        jgs_/\\_/\\_/\\_   _/_/\\_/\\_/\\_((_|\\((_//\\_/\\_/\\_/\\_'
    };

    function drawArt(artName) {
        var art = catMap[artName];

        if (typeof art === 'undefined') {
            console.warn('[MeowGenerator] Art ' + artName + ' does not exist!');
            return;
        }

        console.log(art);
    }

    return {
        catMap: catMap,
        drawArt: drawArt
    };
}());
