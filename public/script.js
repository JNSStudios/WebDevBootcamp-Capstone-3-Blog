// jQuery for toggling the create post form
$(document).ready(function() {
    $("div.create-post-form").hide(); // Set initial state to hidden
    $("button#createPostBtn").on("click", function() {
        $("div.create-post-form").slideToggle();
    });
});

