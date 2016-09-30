updateOutput();
$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton");
}, function(){
    $(this).removeClass("highlightedButton");
    
});

$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelID =$(this).attr("id") + "Panel";
    $("#"+panelID).toggleClass("hidden");
    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberOfActivePanels) -20)
})

$(".panel").height($(window).height() - $("#header").height() -20);
$(".panel").width(($(window).width()/2) -10);

$("textarea").on('change keyup paste', function(){
    $("iframe").contents().find("html").html($("#htmlPanel").val());
    updateOutput();
});

function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val() + "</style></head></html><body>"+$("#htmlPanel").val()+"</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}