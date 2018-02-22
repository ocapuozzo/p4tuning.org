var ghpages = require('gh-pages');

ghpages.publish('_site', function(err) {
    console.log(err);
});