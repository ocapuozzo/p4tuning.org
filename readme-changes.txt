Some changes from http://idratherbewriting.com/documentation-theme-jekyll/http://localhost:4000/#


default.html

line 42:
{% unless page.no_sidebar %}
...


topnav.html

line 15:
{% unless page.no_sidebar %}
...


page.html

line 69 :
{% if page.comments %}
  {% include disqus.html %}
{% endif %}


footer.html (header.html,... )

customstyles
line 466 (figcaption)
because no center text...
/*max-width: 90%;*/
