---
title: About author(s)
keywords: 88-musaics, P4Tuning, jekyll
last_updated: December 21, 2016
tags: []
summary: "You can submit your work from your fork of Github P4Tuning.org"
nosidebar: true
permalink: doc_howto_participate.html
folder: doc
---

## Set up your Github repo

1. Make sure you have Git installed. You can download and install [Git for Windows here](https://git-scm.com/download/win) and [Git for Mac here](https://git-scm.com/download/mac). If you're on a Mac, chances are you might already have git installed. You can check by opening up a terminal and typing `which git`.{{end}}
2. Go to [Github.com](http://github.com) and sign up for an account.

## Fork P4Tuning.org project

1. Go to [Github.com](https://github.com/ocapuozzo/p4tuning.org)
2. Select <span><img src='images/forkButton.png'  alt='forkButton'/></span> button in the upper-right to fork project to your account.

## Clone your fork P4Tuning.org project in local

1. In your GitHub repository, copy the **https clone url**
2. On your local machine, ppen a terminal, browse to a convenient location for your project, and type `git clone https://github.com/xxxx/p4tuning.org.git`, replacing the `xxxx` with your repository account
3. Test your local version : `bundle exe jekyll build` and, if ok, `bundle exe jekyll serve`
4. See result with browser (go to local url indicated)

## Edit/Add file
1. Make your change
2. `add`  and/or `commit` your change
3. push to your GitHub rep : `git push origin master`   
4. go to GitHub repo and verify your change
5. if ok, you can do a *pull request* (from github site) to submit your work to the community (reference repo)


{% include links.html %}
