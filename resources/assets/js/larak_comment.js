$(".my-rating").starRating({
    starSize: 25,
    callback: function(currentRating, $el){
        $('#ratings').val(currentRating);
    }
});