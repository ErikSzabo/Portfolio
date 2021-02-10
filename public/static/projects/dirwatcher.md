---
_id: dirwatcher
name: DirWatcher
description: Electron app to organize and monitor folders. Uses LitElement inside Electron.
imgPreviewUrl: https://i.ibb.co/PxbfpBm/dirwatcher.jpg
githubUrl: https://github.com/ErikSzabo/DirWatcher-v2.0
updated: 2021-02-10
images:
  - https://i.ibb.co/tQwW6cw/dirwatcher1.png
  - https://i.ibb.co/Ph8ZvNX/dirwatcher2.png
  - https://i.ibb.co/qW4sPw2/dirwatcher3.png
tags:
  - JavaScript
  - Electron
filterTags:
  - javascript
---

# About the project

Ever wanted to sort your new downloaded files into different folders instead of leaving them in the Downloads forever? Well now you can do that or even more... You can sort your files from "root" folders into "sub" folders by their extensions. You can even monitor your folders activity, but... well this thing is still not that great.

# How to use?

There are two types of folders: root and sub. Root folders can have multiple sub folders (but can't have the same sub folder twice) You can specify extensions for the subfolders. Then if watching is enabled, DirWatcher will move the files from root folder to its subfolders. (Only when file is created or dropped to the root folder) For example:

- set up your Downloads folder as a root folder (Browse, then Add at the dashboard page)
- add subfolders (subfolders can be anywhere in your computer)
- add extensions to your subfolders (cog wheel icon)
- Well, now if watching is enabled, your downloaded files will be moved to the subfolders

# Logging

You can view logs about your folder activity if you turn this option on. Actually it's turned on by default. New files, or modification, even a delete will appear in the logs. A new log will be created in every day. This logging thingy still doesn't functioning very well, but it can be useful sometimes.
