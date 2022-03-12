var express = require('express');
var path = require('path');
var router = express.Router();
var bodyparser = require('body-parser');
var multer = require('multer');
var mkdirp = require('mkdirp');
const extract = require('extract-zip')
var { ensureAuthenticated } = require('../config/auth');

router.use(bodyparser.urlencoded({ extended: true }));
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dir = 'public/files/' + Date.now().toString();
        mkdirp(dir, err => cb(err, dir));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

router.get('/', (req, res, next) => {
    res.render('./rcj/home', {
        teamCode: req.session.teamCode,
    });
});
router.post('/rcj-file-upload', upload.single('rcjfile'), (req, res, next) => {
    const file = req.file;
    if(!file) res.send('no file to upload');
    else{
        var teamCode = file.destination.slice(6) + '/' + file.originalname;
        if(teamCode.slice(-3) == 'zip' || teamCode.slice(-3) == 'ZIP'){
            if(req.session.teamCode){
                req.session.teamCode.push([teamCode]);
            }
            else{teamCode.slice(-3) != 'zip'
                req.session.teamCode = [teamCode];
            }
            extract(path.join(__dirname + '/../public', teamCode), { dir: __dirname + '/../rcj-code' }).then(doc => {
                console.log('Extraction complete')
            }).catch(err => console.log(err));
            
        }else res.send('file type must be zip.')
    }
});


module.exports = router;
