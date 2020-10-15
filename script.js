$('.submit').click(function() {
    let image = $('.imageVal').val();
    let text = $('.textVal').val();
    $('.newPost').append(`<div class='post'><img src='${image}'><p>${text}</p></div>`);
});