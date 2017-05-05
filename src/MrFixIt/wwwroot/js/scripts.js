$(document).ready(function () {

    $('.claims').click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '@Url.Action("request-url")',
            success: function (result) {
                $('#result').html(result);
            }
        });
    });
});