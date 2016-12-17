$(document).ready(function(){

$('#test-option1').click(function(){
    $(this).addClass("active");
});

$('#button1').click(function(){
    $(this).addClass("btn-info");
});

//for canvas


    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
$('#canvas_button').click(function(){
	  $("#dialog").dialog('open');
	var lc = LC.init(
                      document.getElementsByClassName('canvas')[0],{
                          imageURLPrefix:'canvas/img',
                          primaryColor:'#fff',
                          backgroundColor:'#ddd',
                          toolbarPosition:'top',
                          tools:
                                  [
                                      LC.tools.Pencil,
                                      LC.tools.Eraser,
                                      LC.tools.Line,
                                      LC.tools.Rectangle,
                                      LC.tools.Text,
                                      LC.tools.Polygon
                                  ]
                      });
                  });

});

