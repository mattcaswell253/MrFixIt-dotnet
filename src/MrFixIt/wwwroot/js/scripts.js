$(document).ready(function () {

    $('.claims').click(function () {
        console.log({ id: this.id });
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            dataType: 'json',
            data: {id : this.id},
            success: function (result) {
                var resultMessage = 'This Job has been claimed!'
                $('.claims').html(resultMessage);
            }
        });
    });
});