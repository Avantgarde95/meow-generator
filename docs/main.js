(function () {
    'use strict';

    var Input = document.querySelector('.Input'),
        Output = document.querySelector('.Output'),
        Convert = document.querySelector('.Convert');

    Convert.addEventListener('click', function () {
        var input = Input.value,
            output = input
                .replace(/\\/g, '\\\\')
                .replace(/'/g, '\\\'')
                .replace(/(?:\r\n|\r|\n)/g, '\\n\\\n');

        Output.value = '\'' + output + '\'';
    });

    MeowGenerator.drawArt('twoCats');
}());
