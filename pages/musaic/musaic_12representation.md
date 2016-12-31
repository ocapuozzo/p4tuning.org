---
title: PCS representation
keywords: musaic 88musaics
summary: "This is just a sample topic..."
sidebar: musaic_sidebar
permalink: musaic_12representation.html
folder: musaic
---


## Textual representatin of Pitch Class (PC) and Pitch Class Set (PCS)

We have a preferenc for **integer notation** as PC (*pitch class*), because it eliminates any ambiguity (no enharmonic notation such that A = Bbb = G ## ...), **but we do not prohibit the use of solfege-latin notation neither**.

| Integer PC | solfege PC | pitches |  
|-------|--------|
| **0** | C | C0, C1, ...
| **1** | C#, Db, ... | C#0, C#1, Db1, ...
| **2** | D, Ebb, ... | D0, D1, ...
| **3** | D#, Eb, ... | D#0, D#1, ...
| **4** | E, Fb, ... | E0, E1, ...
| **5** | F, E#, ... | F0, F1, ...
| **6** | F#, Gb, ... | F#0, F#1, ...
| **7** | G, Abb, ... | G0, G1, ...
| **8** | G#, Ab, ... | G#0, G#1, ...
| **9** | A, Bbb, ... | A0, A1, ...
| **10** | A#, Bb, ... | A#0, A#1, ...
| **11** | B, Cb, ... | B0, B1, ...

A PCS is a subset of `{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}` (Although its elements are not ordered by definition, it is usual to present them in ascending order to facilitate their reading)

Examples :

  * Empty set : `{  }`;
  * DO-DO#-RE : `{0, 1, 2}`
  * DO-RE-MI  : `{0, 2, 4}`
  * C7        : `{0, 4, 5, 7}`
  * G7        : `{2, 5, 7, 11}`
  * Chromatic : `{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}`

## Circular representation of 12 Pitch Class 

Example of circles with labels :

{% include image.html file='musaic/circle-chromatic.png' alt='circle-chromatic' caption='Pitch Class Circle - MST notation' %}
{% include image.html file='musaic/circle-chromatic-latin.png' alt='circle-chromatic-latin' caption='Pitch Class Circle - solfege-latin sharp notation' %}


## Examples of *Pitch Class Set* (PCS) representation

{% include image.html file='musaic/circle-cdiatonic.png' alt='circle-cdiatonic' caption='C diatonic<br/> &#123;0, 2, 4, 5, 7, 9, 11&#125;' %}
{% include image.html file='musaic/circle-fdiatonic-latin.png' alt='circle-fdiatonic' caption='F diatonic<br/> &#123;0, 2, 4, 5, 7, 9, 10&#125;' %}
{% include image.html file='musaic/circle-fdiatonic-mst.png' alt='circle-fdiatonic MST' caption='F diatonic - MST notation<br/> &#123;0, 2, 4, 5, 7, 9, 10&#125;' %}
{% include image.html file='musaic/circle-gdiatonic-mst.png' alt='circle-gdiatonic MST' caption='G diatonic<br/> &#123;0, 2, 4, 6, 7, 9, 11&#125;' %}
{% include image.html file='musaic/sol7_Clock.png' alt='sol7_Clock MST' caption='G7<br/> &#123;2, 5, 7, 11&#125;' %}
{% include image.html file='musaic/cdim7_Clock.png' alt='cdim7_Clock MST' caption='Cdim7<br/> &#123;0, 3, 6, 9&#125;' %}


## Interests of circular representation

As you can see, the circular representation, much more than text, makes it possible to put forward **symmetries** and **characteristic structures**, some of which are easily detectable such as regular polygons and their relationship (but not always) with limited transposition structures.

### intervallic struture explained by illustration 

{% include image.html file='musaic/0_2_is.png' alt='0_2_is' caption='PCS : {0, 2}<br/> is : (2, 10)' %}
{% include image.html file='musaic/0_4_7_is.png' alt='0_4_7_is' caption='PCS : {0, 4, 7}<br/> is : (4, 3, 5)' %}
{% include image.html file='musaic/2_6_9_is.png' alt='2_6_9_is_is' caption='PCS : {2, 6, 9}<br/> is : (4, 3, 5)' %}
{% include image.html file='musaic/4_is.png' alt='4_is' caption='PCS : {4}<br/> is : (12)' %}
{% include image.html file='musaic/0_1_2_3_4_5_6_7_8_9_10_11_is.png' alt='0_1_2_3_4_5_6_7_8_9_10_11_is' caption='PCS : {0,1,2,3,4,5,6,7,8,9,10,11}<br/> is : (1,1,1,1,1,1,1,1,1,1,1,1)' %}

## References and Co


*  [Make yourself a chromatic circle](http://solomonsmusic.net/clock.htm){:target="_blank"}

*  Constellation vs Polygon : [another approach to form in a chromatic circle](https://en.wikipedia.org/wiki/Chromatic_circle){:target="_blank"}

*  As early as 1679, design [circle 7 step](https://en.wikipedia.org/wiki/Circle_of_fifths){:target="_blank"}


{% include links.html %}
