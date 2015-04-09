var crypt = require('crypto'),
    mime = require('mine-magic');

var createS3Policy;
var s3Signature;
var s3Credentials;

createS3Policy = function(mimetype, callback) {
    var s3PolicyBase64, _date, _s3Policy;
    date = new Date();
    s3Policy = {
        "expiration": "" + (_date.getFullYear()) + "-" + (_date.getMonth() + 1) + "-" + (_date.getDate()) + "T" + (_date.getHours() + 1) + ":" + (_date.getMinutes()) + ":" + (_date.getSeconds()) + "Z",
        "conditions": [
            { "bucket": "getsettled" }, 
            ["starts-with", "$Content-Disposition", ""], 
            ["starts-with", "$key", "someFilePrefix_"], 
            { "acl": "public-read" }, 
            { "success_action_redirect": "http://example.com/uploadsuccess" }, 
            ["content-length-range", 0, 2147483648], 
            ["eq", "$Content-Type", mimetype]
        ]
    };

    s3Credentials: {
        s3PolicyBase64: new Buffer( JSON.stringify( s3Policy ) ).toString( 'base64' ),
        s3Signature: crypto.createHmac( "sha1", "yourAWSsecretkey" ).update( s3Policy ).digest( "base64" ),
        s3Key: "Your AWS Key",
        s3Redirect: "http://example.com/uploadsuccess",
        s3Policy: s3Policy
    }

    callback(s3Credentials);

    // Turn policy into a Base 64 encoded variable
    s3PolicyBase64 = new Buffer( JSON.stringify( s3Policy ) ).toString( 'base64' );

    // Generate the signature for POST request
    s3Signature = crypto.createHmac( "sha1", "yourAWSsecretkey" ).update( s3Policy ).digest( "base64" );
};
