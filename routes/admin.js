var sendmail = require('../services/sendmail.js');

exports.get = function(req, res){
    res.render('admin', { title: 'Settled - Get the answers you need, faster!' });
};

exports.post = function(req, res) {
    console.log(req.body);
    var email = {
        to: req.body.toEmail,
        subject: req.body.description,
        from: req.body.fromEmail,
        text: "Choose between " + req.body.comments1 + " and " + req.body.comments2,
    }
    sendmail.send(email);
    res.render('confirm', {title: 'Successfully sent your message'})
}
