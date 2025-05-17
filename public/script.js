// jQuery for toggling the create post form
$(document).ready(function() {
    $("div.dropdown").hide(); // Set initial state to hidden
    $("button.dropdown").on("click", function() {
        $("div.dropdown").slideToggle();
    });
});

