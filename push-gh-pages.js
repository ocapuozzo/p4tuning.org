var ghpages = require('gh-pages');

ghpages.publish('_site', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('done.\n');
  }
});

