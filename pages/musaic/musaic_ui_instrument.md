---
title: UI musical instrument in 2-dimension
keywords: musaic, 88musaics
summary: "Matrix interfaces are shapes revealer"
sidebar: musaic_sidebar
permalink: musaic_ui_instrument.html
folder: musaic
---

## Regular instrument

### String instrument

Most stringed instruments are structured by a logical system: the contiguous strings are separated by the same interval, without exception.

The majority of stringed instruments is in regular tuning : violins (7-7-7-7), bass (5-5-5-5)... But this is not the case of the traditional guitar tuning that is (in semitone): 5-5-5-5-4-5, unlike the guitar in fourths: 5-5-5-5-5-5

<div class="row">
  <div class="col-md-6">
{% include image.html file='musaic/guitar-regular-p4tuning.png' alt='guitar regular p4 tuning' caption='guitar regular p4 tuning' %}
  </div>
  
  <div class="col-md-6">
{% include image.html file='musaic/guitar-non-regular-traditional-tuning.png' alt='guitar non regular traditional tuning' caption='guitar non regular traditional tuning<br>trouble in translation' %}
 </div>
</div>

### keyboard instrument 

Regular tuning does not always rhyme with uniform interface ... Indeed, the piano is a *hybride* regular instrument to the extent that its interface is "chromatic shape logic" at the bottom of the keyboard keys, and "C diatonic shape" in the foreground of keyboard keys where
the distance between a white key and its neighbor is, depending on the case, either 2 semitones or 1 semitone : Thus the **correspondence between geometric distance and interval distance is broken**.


{% include image.html file='musaic/keyboard-piano.png' alt='keyboard-piano non regular' caption='keyboard-piano hybride regular interface' %}

See new keyboard (symmetrical piano) : [symmetrical-ui keyboard](http://www.le-nouveau-clavier.fr/english/){:target="_blank"} 

### win instrument 

Few regular interface in this range of acoustic instruments

TODO

## Linear instrument

Util minimum for musical instrument is to take one generator, more often genrator **1**.

For example, **mono string** instrument.

*  [monochord principle](https://en.wikipedia.org/wiki/Monochord){:target="_blank"}
*  [Example Đàn bầu](https://en.wikipedia.org/wiki/%C4%90%C3%A0n_b%E1%BA%A7u){:target="_blank"}

or **piano**

{% include image.html file='musaic/keyboard-piano.png' alt='keyboard-piano linear 1 step' caption='keyboard-piano linear 1-step' %}

{% include note.html content="Piano keyboard. At the bottom of the keyboard, the pitches are linearly arranged in semitones." %}

<br/>

{% include important.html content="An 1-dimension instrumental interface is said to be **concise** to the extent that there are not redundant pitches (opposite to **UI redundant** having unisons - like guitar, violin, some accordions...)" %}


## Matrix instrument

As regular tuning instrument, a matrix instrument is instance of a *dual interval space* (DIS), as two-dimentional array of pitches where "rows" are separated by the same interval, the "columns" (non-zero) interval. 

Matrix instrument are noted as follows: DIS(y,x) where **y** is row interval and **x** is culumn interval. 

{% include image.html file='musaic/violinDIS.png'  alt='samples DIS' caption='DIS(1,7)<br/>violin' %}
{% include image.html file='musaic/accordionMD.png'  alt='samples DIS' caption='<br/>DIS(2,3)<br/>accordion (right hand)' %}

For a more formal definition of DIS see [Dual Interval Space in Twentieth-Century Music, Stephen C.Brown](http://mts.oxfordjournals.org/content/25/1/35.abstract){:target="_blank"}.


## Case of strings instruments

Strings instruments are always tuning with interval 1 (row interval - to play along the string) and an other that varies. For example, violin is (1, 7), and it is said *tuned in fifths* (fifth is composed of 7 semitones), bass (1, 5) and it is said *tuned in fourths*. Traditionnal violin has 4 strings, bass has 3, 4 or 5 strings, and **same** interval is kept between the neighboring strings. This is referred to as **regular tuning**.

Of course there is the guitar tuned in fourths (and this may be why you read these lines), but also instruments in regular tuning, as (1,4) major 3rd, for example.

## Remarkable tunings

It would seem (*but it remains to prove*) that the choose a DIS with 2 generators of 12 (one for each dimension of the matrix), gives the latter interesting properties.

The 4 generators of 12 {**1**, **5**, **7**, **11**}  -- or more conceptualy {1, 5, n-5, n-1 } with n=12, can be supported by 2 axes and so 4 angulars sectors : 1-O-5, 7-O-1, 7-O-11 and 11-O-5, as showing with figure below :

{% include image.html file='musaic/axesEuler.png'  alt='eulerAxe' caption='AxesGenerator12' %}

{% include note.html content="Thereafter we will retain sector **1-O-5**, which corresponds to perfect fourth guitar tuning, but all that will be studied is transposable, true, to the 3 other sectors (In particular string instruments tuning in *fifths* - 1-O-7)."  type="primary"  %}

A angular sector forms a two-dimensional array (DIS), Below, we choose as origin 0, elements are pitches in [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation){:target="_blank"}.


{% include image.html file='musaic/grilleCreuseVide.png'  alt='matrix without labels (1,5)' caption='matrix DIS(1,5) without labels ' %}
{% include image.html file='musaic/grilleEmptyETC.png'  alt='DIS(1,5)' caption='DIS(1,5) as pavement<br/>(with unison axe on A3 - a non-concise interface)' %}

This space can be considered as a *musical keyboard*. Like keyboard of piano, let us emphasize the notes of diatonic scale.

{% include image.html file='musaic/grilleDiatonicETC.png' alt='C-diatonic DIS(1,5)' caption='DIS(1,5)<br/>C-diatonic <br/>(2, 2, 1, 2, 2, 2, 1)<br/>{C, D, E, F, G, A, B}' %}


The motif that emerges from this representation ( <span><img src="images/musaic/car-diato.png" /></span> ) is the very basis of the 88 musaics: their nature is geometrical.

## Diatonic tones shape in DIS(1,5)

Let's take a look at F diatonic tonality :

{% comment %}
{% include image.html file='musaic/cdiatonic.png' alt='C-diatonic DIS(1,5)' caption='C-diatonic DIS(1,5)<br/>{C, D, E, F, G, A, B}<br/>(2, 2, 1, 2, 2, 2, 1)' %}

{% include image.html file='musaic/csharpdiatonic.png' alt='C#-diatonic DIS(1,5)' caption='C#-diatonic DIS(1,5)<br/>{C#, D#, E#, F#, G#, A#, B#}<br/>(2, 2, 1, 2, 2, 2, 1)' %}
{% endcomment %}

{% include image.html file='musaic/fdiatonic.png' alt='F-diatonic DIS(1,5)' caption='F-diatonic DIS(1,5)<br/>{C, D, E, F, G, A, Bb}<br/>(2, 2, 1, 2, 2, 2, 1)' %}

{% include image.html file='musaic/fdiatonic-01.png' alt='F-diatonic Pitch Class  DIS(1,5)' caption='F-diatonic Pitch Class DIS(1,5)<br/>{0, 2, 4, 5, 7, 9, 10}<br/>(2, 2, 1, 2, 2, 2, 1)' %}


## Recognizable shapes


With this system of representation, each harmonic color is associated with one and only one form, as a marker.

We can even remove the labels to **better emphasize the shape**.

Would you recognize the diatonic intervallic structure form (2, 2, 1, 2, 2, 2, 1) ? :
<table>
<tr>
<td>
{% include image.html file='musaic/exo1-1_Musaique_Matrix.png' alt=' ? ' caption='1' %}
</td>
<td>
{% include image.html file='musaic/exo1-2_Musaique_Matrix.png' alt=' ? ' caption='2' %}
</td>
<td>
{% include image.html file='musaic/exo1-3_Musaique_Matrix.png' alt=' ? ' caption='3' %}
</td>
<td>
{% include image.html file='musaic/exo1-4_Musaique_Matrix.png' alt=' ? ' caption='4' %}
</td>
<td>
{% include image.html file='musaic/exo1-5_Musaique_Matrix.png' alt=' ? ' caption='5' %}
</td>
<td>
{% include image.html file='musaic/exo1-6_Musaique_Matrix.png' alt=' ? ' caption='6' %}
</td>
</tr>
</table>

... We think you did. There are four : 1, 2, 3 and 6. Each time, it is the **same pattern** used to select the diatonic form. 

Examples :


{% include image.html file='musaic/mask-is-motif.gif' alt='diatonic form' caption='Diatonic form animation' %}

The drawing you recognized is as follows (central figure):


{% include image.html file='musaic/exo1_sameShapeMusaique_Matrix.png' alt='diatonic form' caption='12 Diatonic scales in DIS(1,5)<br/>(12 transpositions)' %}
{% include image.html file='musaic/exo1_sameCircleShapMusaique_Matrix.png' alt='diatonic circle form' caption='12 Diatonic scales in circle<br/>(12 transpositions)' %}


By definition, all diatonic scales are same intervallic structure `(2, 2, 1, 2, 2, 2, 1)` that may be represented by a graphic motif, invariant by transposition.

<div class="row">
  <div class="col-md-4" style="text-align: center">
    {% include image.html file='musaic/diatonic-dis.png' alt='diatonic form' caption='(2, 2, 1, 2, 2, 2, 1)<br/>in DIS(1,5)' %}
  </div>
  <div class="col-md-4" style=" height: 250px; line-height: 250px; text-align: center; border: 2px dashed #AAA;">
    <span style=" display: inline-block;  vertical-align: middle; line-height: normal;">
      What you see ? White ink on black background or black ink on white background ? <br/>
      In fact, both ... because there no reason, a priori, to privilege one in relation to the other (its complementary)<br/>
      <span> <img src="images/musaic/cplt_clock.png"/> <!-- img src="images/musaic/yinyang.png" / --></span></span>
  </div>
  <div class="col-md-4" style="text-align: center">    
  {% include image.html file='musaic/diatonic-cplt-dis.png' alt='diatonic-cplt form' caption='(2, 3, 2, 2, 3)<br/>in DIS(1,5)' %}
  </div>
</div>

Thus, as will be appreciated, such a pattern is the expression of two *intervallic structures*, mutually complementary, each of which can be realized by, at most, 12 different PCS (here, pentatonic and diatonic scales in 12 tones - 2 scales that have marked the history of music...)

How many distincts "motif patterns" are they in an octave of 12 equal semitones?

You will find the answer by following this link : [88-musaics.org](http://88-musaics.org){:target="_blank"}


{% include links.html %}
