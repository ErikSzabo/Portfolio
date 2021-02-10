---
_id: memnote
name: Memnote
description: An app for those, who wants, easy to understand notes which can help the learning process at the University.
imgPreviewUrl: https://i.ibb.co/KwD7ZcP/memnote2.png
githubUrl: https://github.com/memnote
updated: 2021-02-10
images:
  - https://i.ibb.co/5xLZdfF/memnote.png
tags:
  - JavaScript
  - Next.js
  - ISR
  - SSR
filterTags:
  - javascript
  - frontend
  - backend
---

# About the project

This is a serverless website built with **Next.js**. The whole purpose of this website is to help the college students (computer science) in Hungary. It has useful and easy to understand notes. These notes can be found in an another github repository. This way everyone can collaborate on the notes easly, something like wikipedia. This note repository also has some really cool CI stuff which is handled by github actions.

# Interesting facts

- The front page where you can query the notes is server side rendered at first, then it's lazy loading when user scrolls.
- Every individual note page is using something called Incremantel Static Regeneration (ISR). This thing ensures that every note page is a static page, but in every 24h the page is rerendered on the server if the data is changed.
- The searching and filtering is visible on the url (query params), so if someone sends a link with this url, the other person will see the exact same results.
