$(document).ready(function () {

    $('.claims').click(function () {
        console.log({ id: this.id });
        var CurrentId = this.id
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            data: {id : this.id},
            success: function (result) {
                var resultMessage = 'This Job has been claimed!'
                $('#result' + CurrentId).html(resultMessage);
            }
        });
    });
});