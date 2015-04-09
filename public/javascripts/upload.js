var _requestBucker;

var processResponse = function(res) {
    $("#fld_redirect").val(res.S3Redirect);
    $("#fld_AWSAccessKeyId").val(res.s3Key);
    $("#fld_Policy").val(res.s3PolicyBase64);
    $("#fld_Signature").val(res.s3Signature);
    $("#questions").submit(); 
}

var requestCredentials = function(event) {
    event.preventDefault();
    var _file;

    _file = $('#file1').val().replace(/.+[\\\/]/, "");
    
    $.ajax({
        url: "/gets3credentials/" + _file,
        dataType: "JSONP",
        success: processResponse,
        error: function(res, status, error) {
            console.log("Response is" + res);
            console.log("Status is" + status);
            console.log("Error is " + error);
        }
    });
}

$('#upload').bind('click', requestCredentials);

