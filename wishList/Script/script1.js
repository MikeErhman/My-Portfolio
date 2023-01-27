$("ul").on("click","li", function(){
 	$(this).toggleClass("done");  


})

$("ul").on("click", "span", function(event){
 	console.log("A span");
 	event.stopPropagation();
 	
 	$(this).parent().fadeOut(function(){
 	 	$(this).remove();})
 });
 $("input").keypress(function(event){
 	if(event.which === 13){
 		var itemText = $(this).val(); 
 		$(this).val('');
 		$("ul").append("<li><span><i class='fa-solid fa-trash-can'></i> </span> " + itemText + "</li>");
 		console.log(itemText);
 	}
 })
  
 $("h2 span").click(function(event){
   var itemText1 = $("input").val();
   $("input").val('');
   $("ul").append("<li><span><i class='fa-solid fa-trash-can'></i> </span> " + itemText1 + "</li>");
    
 })
 	



 

