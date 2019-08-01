---
layout: post
title:  ""
categories: JavaScript
tags: 效率 vscode markdown
author: Frank
---

1. not using logstash (tried but failed to setup)
2. not using binary logging (too much entries and can't sync all before they are gone)
3. using ec2: a python script sync every 30 mins by using cron job (since no need to sync in real time)
