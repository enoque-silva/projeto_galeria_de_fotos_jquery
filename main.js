// Slide Down no clique do botão Adicionar+ no cabeçalho
$('header button').click(function(){
    $('form').slideDown();
});
// Slide Up no clique do botão cancelar do formulario
$('#btn-cancelar').click(function(){
    $('form').slideUp();
});

$('form').on('submit', function(evento){
	// Previne o comportamento padrão do formulário (que é recarregar a página)
	evento.preventDefault();

    const urlNovaImagem = $('#campo-url').val();
    
    const novoItem = $('<li id="img-adicionada" ></li>');
    
    $(`<img src="${urlNovaImagem}">`).appendTo(novoItem);

    $(`<div class="link-imagem">
            <a href="${urlNovaImagem}" title="Visualizar em tamanho real" target="_blank">Visualizar em tamanho real</a>
        </div>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');

    $('form').slideUp();

    $(novoItem).fadeIn(1000);//1 Segundos

    $('#campo-url').val('');
})