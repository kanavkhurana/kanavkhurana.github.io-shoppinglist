$(document).ready(function() {

    $(".enterItem").click(function() {
        var itemName = $("#itemName").val();
        var itemQuantity = $("#itemQuantity").val();
        //var itemCategory = $("#itemCategory").val();

        //addItemToList(itemCategory, itemName, itemQuantity);
        addItemToList(itemName, itemQuantity);

        //Unbinding is necessary as the event handler is getting bound to the element multiple times
        $('.completeItem').unbind('click').click(function() {
            if (!$(this).hasClass('completeItemCheckboxSelected')) {
                $(this).parent().parent().addClass('itemSelected')
                $(this).addClass('completeItemCheckboxSelected');
            } else {
                //$(this).parent().parent().css('background-color', 'white');
                $(this).parent().parent().removeClass('itemSelected')
                $(this).removeClass('completeItemCheckboxSelected');
            }
        });

        //Unbinding is necessary as the event handler is getting bound to the element multiple times
        $('.deleteItem').unbind('click').click(function() {
            //$(this).parent().parent().remove();
            $(this).parent().parent().fadeOut(function() {
                $(this).remove();
                //In case no elements remains, remove the headers
                if (!$(".item").length) {
                    //$(".myList").remove();
                    $(".myList").fadeOut(function() {
                        $(this).remove();
                    });
                    //$(".headings").remove();
                }
            });
        });

    });
    //Remove the red border once the user starts typing the item Name
    $("#itemName").unbind('keyup').keyup(function() {
        if ($(this).hasClass("missing")) {
            $(this).removeClass("missing");
        }

    });
})

function addItemToList(name, quantity) {

    //Item name must be entered
    if (!$("#itemName").val()) {
        //$("#itemName").effect("shake",{distance:1},1000);
        //window.setInterval(function() {  
        $("#itemName").addClass('missing');
        $("#itemName").focus();
        //}, 1000);
    } else {
        //In case this is the first item being added, add the headers also
        if (!$(".item").length) {
            //$("#content").append('<p class="myList">My List</p>');
            $('<p class="myList">My List</p>').hide().appendTo(".content").fadeIn(1000);
        }
        //alert('This was called!');
        //$("#content").append('<ul class="item"><li>' + name + '</li><li>' + quantity + '</li><li><i class="fa fa-check completeItem"></i></li><li><i class="fa fa-trash deleteItem"></i></li></ul>');
        $('<ul class="item"><li>' + name + '</li><li>' + quantity + '</li><li><i class="fa fa-check completeItem"></i></li><li><i class="fa fa-trash deleteItem"></i></li></ul>').hide().appendTo(".content").fadeIn(1000);

        //Clear the Name of the item
        $("#itemName").val('');
    }

}
