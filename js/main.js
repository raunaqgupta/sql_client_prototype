window.onload = function(){

	// expandable db list items
	$("#datastore-list .dbname").click(function() {
		$(this).next().toggle();
		return false;
	});

	//simple output expansion for demo
	$("#output-header").click(function(){
		$('#output-content').toggleClass("active");
	});

	//draggable-droppable tables
	$(".tablename").draggable({
		revert: true,
		opacity: 0.7,
		helper: function( event ) {
			console.log(event);
        	return $( "<div class='.tablename'>Table</div>" );
      	},
		connectToSortable: "#selected-tables",
		drag: function(event, ui) {
			$("#datastore-list").css("overflow", "hidden");
		},

		stop: function(event,ui) {
			$("#datastore-list").css("overflow-y", "scroll");
		}
	});

	$("#selected-tables").sortable();
};
