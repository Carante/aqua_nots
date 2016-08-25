+function ($) {

    $(document).ready(function() {
        $('.js-header-search-toggle').on('click', function() {
            $('.search-bar').slideToggle();
        });

        $('#text-to-speech').on('click', function () {
            var audioElement = document.createElement('audio');
            var name = $(".genus-name").attr("data-name"),
                subFamily = $(".subFamily").attr("data-subFamily"),
                speciesCount = $(".speciesCount").attr("data-speciesCount"),
                funFact = $(".funFact").attr("data-funFact");

            var msg = "Species: "+name+". Sub family: "+subFamily+". Known species: "+speciesCount+". Fun fact: "+funFact;

            audioElement.setAttribute('src', 'http://api.voicerss.org/?key=21f6ff2893f14719852f0d56315a26a6&src='+msg+'&hl=en-gb');
            audioElement.setAttribute('autoplay', 'autoplay');
            //audioElement.load()2  1

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            audioElement.play();
        })
    });

}(jQuery);
