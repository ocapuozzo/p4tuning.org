source "https://rubygems.org"

gem 'github-pages', group: :jekyll_plugins

#   limitation plugins : gif_tag not in list https://pages.github.com/versions/ (writing on server...)
#   and default running in safe mode (for github pages)
#   see : https://github.com/jekyll/jekyll/issues/5265
#   see : https://help.github.com/enterprise/2.12/user/articles/adding-jekyll-plugins-to-a-github-pages-site/
#   "Other plugins are not supported, so the only way to incorporate them in your site is to generate your site locally
#    and then push your site's static files to your GitHub Pages site."

# gem 'jekyll', group: :jekyll_plugins

# after, here my process for pushing _site directory on github :

# 1/ (install npm package)
#  npm install gh-pages --save-dev

# 2/ (create js file)
# $ cat push-gh-pages.js

# var ghpages = require('gh-pages');

# ghpages.publish('_site', function(err) {
#    if (err) {
#      console.log(err);
#    } else {
#      console.log('done.\n');  }
#  });

# 3/ (change pages publishing source from master branch to gh-pages branch)
# see :  https://help.github.com/articles/configuring-a-publishing-source-for-github-page

# 4/ (build _site)
# bundle exec jekyll build

# 5/ (start script to push - idem, from root project/site)
#  ... waiting a little the first time
# $ nodejs push-gh-pages.js

