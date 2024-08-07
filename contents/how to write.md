---
date: '2023-10-10'
title: 'how to explain a system?'
categories: ['write']
summary: 'how to write'
thumbnail: 'images/test.png'
type: "thought"
---

```toc
exclude: Table of Contents
tight: true
ordered: false
from-heading: 1
to-heading: 6
```
# A. Goal
write easy-to-understand & comprehensive article about a system
## a. Misconceptions
### 1. 'words' are not the best medium to explain a system

unlike story, a system is not "linear" in terms of structure, therefore cannot be explained line by line like how a story is explained via words, events by events, sequentially in order of time.

if you want to explain a system,
you can only provide general architecture and tips to play around with the system.

the rest is up to the player to explore specific part of the system and try to figure out on his own to tackle specific problem he encounters at the moment.


### 2. memorizing every details of the system won't last for long

therefore, you should starts with the most basic and yet fundamental unit of the system, and be able to reason inductively from ground zero all the way to the top.

that way, you can deduct everything from the fundamental unit with maximum 10 core concepts, without memorizing every little details that you can find on google / chatgpt / your note.



# B. How

1. find an important question that encompasses every major aspect of the system
2. show architecture diagram of the system
3. find smallest, and yet essential unit that is dealt with every module of the system
4. divide heading by module, explain briefly what and how that module works in relation to the unit
5. summarize everything in 1 picture




## a. Example


Q. explain about computer Network

1. Q. what happen when I type google.com on browser?
2. show overall architecture in single picture including OSI 7 layer, LAN
3. packet
4. explain how packet is created, sent, and dealt by each module within that architecture. make sure to divide header by level of module abstraction(ex. client, LAN, Server starts with single '#', OSI Layer would start with double '#', ARP, TCP/IP, HTTP would start with triple '#', etc)
5.

![](images/2023-10-10-19-29-15.png)

