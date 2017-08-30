$(function(){
    $('input[type=submit]').click(sendData);
})

function sendData(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/bugerchuk@kpnu.km.ua", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            age: $('#age').val(),
            male: $('#male').val(),
            female: $('#female').val(),
            other: $('#other').val(),
           
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
    });
}