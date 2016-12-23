---
title: UI musical instrument in dimension 2
keywords: musaic 88musaics
summary: "This is just a sample topic..."
sidebar: musaic_sidebar
permalink: musaic_repr_dim2.html
folder: musaic
---


## Matrix instrument

A matrix instrument is instance of a dual interval space (DIS), as two-dimentional array of pitch in which each dimension corresponds to an unique (non-zero) interval. For definition of DIS, see [Dual Interval Space in Twentieth-Century Music, Stephen C.Brown](http://mts.oxfordjournals.org/content/25/1/35.abstract){:target="_blank"}.


## Case of strings instruments

Strings instruments are always tuning with interval 1 (to play along the string) and an other that varies. For example, violin is (1, 7), and it is said *tuned in fifths* (fifth is composed of 7 semitones), bass (1, 5) and it is said *tuned in fourths*. Traditionnal violin has 4 strings, bass has 3, 4 or 5 strings, and **same** interval is kept between the neighboring strings. This is referred to as **regular tuning**.

Of course there is the guitar tuned in fourth (and this may be why you read these lines), but also instruments in regular tuning, as (1,4) major 3rd, for example.

## Remarkable tunings

It would seem (*but it remains to prove*) that the choose a DIS with 2 generator of 12 (one for each dimension of the matrix), gives the latter interesting properties.

The 4 generators of 12 {**1**, **5**, **7**, **11**}  -- or more conceptualy {1, 5, n-5, n-1 } with n=12, can be supported by 2 axes and so 4 angulars sectors : 1-O-5, 7-O-1, 7-O-11 and 11-O-5, as showing with figure below :

{% include image.html file='musaic/snapshotEulerAxeGimp.png'  alt='eulerAxe' caption='AxesGenerator12' %}

{% include note.html content="Thereafter we will retain sector **1-O-5**, which corresponds to perfect fourth guitar tuning, but all that will be studied is transposable, true, to the 3 other sectors (In particular string instruments tuning in *fifths* - 1-O-7)."  type="primary"  %}

A angular sector forms a two-dimensional array (DIS), Below, we choose as origin 0, elements are pitches in [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation){:target="_blank"}.

{% include image.html file='musaic/grilleEmptyETC.png'  alt='matrix (1,5)' caption='matrix (1,5)' %}

This space can be considered as a *musical keyboard*. Like keyboard of piano, let us emphasize the notes of diatonic scale.

{% include image.html file='musaic/grilleDiatonicETC.png' alt='diatonic matrix (1,5)' caption='diatonic matrix (1,5)' %}


{% include links.html %}
