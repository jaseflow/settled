var sendgrid  = require('sendgrid')('app35124859@heroku.com', 'lyijy0wn');

// returns false if there is any issue prior to sending the e-mail
// executes the callback and do whatever node js does, not sure what
exports.send = function send(data) {
    var response = {};
    console.log("data: ", data);
    if(data.to == undefined || data.to.trim() == "") {
        return {sent: false, message: "To isn't valid"}
    }

    if(data.from == undefined || data.from.trim() == "") {
        return {sent: false, message: "From isn't valid"}
    }
    
    var email = {
        to:       data.to,
        from:     data.from, 
        subject:  data.subject,
        text:     data.text
    }
    
    sendgrid.send(email, function(err, json) {
        if (err) {
            console.error(err);
            return false;
        } 
        console.log("json:", json);
        return true;
    });
    return "test";
}
