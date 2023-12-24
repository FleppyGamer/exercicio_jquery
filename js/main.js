$(document).ready(function (){
    $('form').submit(function (e){
        e.preventDefault();
        choirAdder();
    })

    function choirAdder (){
        const text = $('#text').val();
        const newChoir = $('<li id="item"></li>')
        $(`<a>${text}</a>`).appendTo(newChoir);
        $(newChoir).appendTo('ol')

        $('#text').val('');
    }
})