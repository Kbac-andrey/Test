$( document ).ready(function() {
    var stepSlider = document.getElementById('slider-step');
    noUiSlider.create(stepSlider, {
        start: [ 5 ],
        step: 5,
        range: {
            'min': [  5 ],
            'max': [ 20 ]
        },

        format: wNumb({
            decimals: 0,
            prefix: '< ',
            postfix: ' дней >'
        })
    });

    var stepSliderValueElements = document.getElementsByClassName('noUi-handle')[0];
    stepSlider.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElements.innerHTML = values[handle];
    });
});