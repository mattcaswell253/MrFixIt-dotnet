$(document).ready(function () {

    $('.claims').click(function () {
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            dataType: 'json',
            data: {id : $("#jobId").val()},
            success: function (result) {
                var resultMessage = 'This Job has been claimed!'
                $('#result').html(resultMessage);
            }
        });
    });
});