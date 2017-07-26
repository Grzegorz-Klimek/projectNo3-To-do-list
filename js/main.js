var $ul = $('ul');
var $inputAdd = $("input[type='text']");

$ul.on('click', 'li', function () {
    $(this).toggleClass('product-bought');
});

$ul.on('click', 'span', function (e) {
    $(this)
        .parent()
        .slideUp(300, function () {
            $(this).remove();
        });
    e.stopPropagation();
});

$inputAdd
    .click(function () {
        $(this).val('');
    })
    .keypress(function (e) {
        if (e.which === 13) {
            var product = $(this).val();
            $(this).val('');
            $('ul').append('<li>' + '<span><i class="fa fa-trash-o" aria-hidden="true"></i></span>' + product + '</li>');
        }
    });

$('.fa-plus-circle').click(function() {
    $inputAdd.fadeToggle();
});