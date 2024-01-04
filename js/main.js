$(document).ready(function (){
    $('form').submit(function (e){
        e.preventDefault();
        choirAdder();
    })

    function choirAdder (){
        const text = $('#text').val();
        const newChoir = $('<li id="item" title="Clique para marcar a atividade"></li>');
        $(`<a>${text}</a>`).appendTo(newChoir);
        $(newChoir).appendTo('ol');

        $('#text').val('');

        newChoir.click(function(e){
            e.preventDefault();
    
            newChoir.attr("class","checked");
            newChoir.attr('title', 'Dê um clique duplo para desmarcar a atividade')
        })
        
        newChoir.dblclick(function(e){
            e.preventDefault();
    
            newChoir.attr("class"," ")
            newChoir.attr('title', 'Clique para marcar a atividade')
        })
    }

})