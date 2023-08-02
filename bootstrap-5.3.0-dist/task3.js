/*
Event handler for the Add button
*/ 
$("#addButton").on("click", function () {
    var textInput = $("#textInput").val().trim();
    if (textInput !== "") {
        var newRow = $("<tr class = 'ui-sortable-handle'>");
        newRow.append("<td>" + textInput + "</td>");
        newRow.append("<td><button class='editBtn'>Edit</button><button class='deleteBtn'>Delete</button></td>");
        newRow.draggable({ containment: "#output tbody", axis: "y", cursor: "move", revert: "invalid" });
        newRow.addClass("custom-row");
        $("#output tbody").append(newRow);
        $("#textInput").val(""); 
    }
});

// $("#addButton").on("click", function(){
    
// })


/*
Event handler for the dynamically added Edit button
*/ 
$(document).on("click", ".editBtn", function () {
    var currentRow = $(this).closest("tr");
    var text = currentRow.find("td:first-child").text();
    var newText = prompt("Enter new text:", text);
    if (newText !== null) {
        currentRow.find("td:first-child").text(newText);
    }
});

/*
Event handler for the dynamically added Delete button
*/ 
$(document).on("click", ".deleteBtn", function () {
    $(this).closest("tr").remove();
});

/*
Supposed to handle the drag and drop
*/ 
$("output tbody").sortable({
    cursor: 'row-resize',
    placeholder: 'ui-state-highlight',
    opacity: '0.55',
    items: '.ui-sortable-handle'
});




/*
Here I tried to make the items appear in a list as I had deceived myself because of the 
tutorial in the meeting that a table with table rows was required. Here, however, I
could not make the drag and drop work properly.
*/


// $("#addButton").on("click", function(){
//     var textInput = $("#textInput").val().trim();
//     if(textInput !== ""){
//         var newLi = $("<li class = 'ui-sortable-handle'>");
//         newLi.append(textInput);
//         newLi.append("<button class='editBtn'>Edit</button><button class='deleteBtn'>Delete</button></td>");
//         newLi.draggable({containment: "#output", axis: "y", cursor: "move", revert: "invalid"});
//         newLi.addClass("custom-row");
//         $("#output").append(newLi);
//         $("#textInput").val("");
//     }
// })

// $(document).on("click", ".editBtn", function(){
//     var currentLi = $(this).closest("li");
//     // var text = currentLi.find("li:first-child").text();
//     var newText = prompt("Enter new text:");
//     if(newText !== null){
//         currentLi.text(newText);
//         currentLi.append("<button class='editBtn'>Edit</button><button class='deleteBtn'>Delete</button></td>");
//     }
// })

// $(document).on("click", ".deleteBtn", function(){
//     $(this).closest("li").remove();
// })

// $("output").sortable({
//     cursor: 'row-resize',
//     placeholder: 'ui-state-highlight',
//     opacity: '0.5',
//     items: 'ui-sortable-handle',
// }).disableSelection();


