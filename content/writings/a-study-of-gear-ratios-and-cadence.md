+++
resources = []
Description = ""
Author = "Dan Hanasono"
slug = ""
date = "2017-03-27T11:17:21-07:00"
title = "a study of gear ratios and cadence"
time = "10 minutes"
type = "writings"

+++

<article class="post-header-img">
	<img src="/images/dan-profile-lg.png" alt="A pic of me up in public presenting">
	<figcaption>Push-hard Fifi!</figcaption>
</article>
## Roll-a-hundred
I've been taking to the streets lately in great anticipation of [LACBC][lacbc-url]'s 17th Annual [LA River Ride 2017][la-river-url]. Call it a training push, but I signed up to ride 100 miles come June 4th. Mind you, I have never ridden what is commonly referred to as a "century", nor have I been keeping in shape with spin class or indoor training. Nope, this is an addendum to my time transitioning into product - to get fit.

Biking is a natural exercise for me. Great cardio, great core and leg strengthening, and some vitamin D and cool sites you can't see from walking or driving around L.A. I've been cycling on and off since I was six, a by-product of growing up in an Indy-car town where tinkering with both vehicle and engine is second hand for a good ride. Sound familiar? #product

While I wouldn't say outright that biking is the most social form of exercise out there, it is surprising how many interactions I've had in the short 2-3 weeks I've started riding again. Twenty-minute ride-alongs with strangers who see me struggling and coach me along. Chit chat off bikes at destination points with experienced riders. [Instagram][instagram-url] and [Strava][strava-url] have been strong inspiration and motivation respectively.

## Cadence Hack
One big strategy for training is to run a long time (or distance - same thing essentially) at a high cadence of 90-110 rpms. The focus is less on leg strength, more on ride volume (time in the saddle) and cardio capacity (how hard you can push before you pant out). A quick cadence reference for myself and a small cadence hack…just listen to a few seconds of A Tribe Called Quest's ["We the People"][we-the-people-url], which is a steady 93 bpm. Your left foot should rotate one full crank for each beat, *boom*, 93 rpm #nowthatissometoetapping.
<!-- YouTube Embed -->
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/BDxKVYUHBdA' frameborder='0' allowfullscreen></iframe></div>

## Gear Study - the whips
I have two bikes I've ridden for a few years, each with totally different purposes, but both are in fine shape to ride and train on.

I am riding on two bikes, a steel Surly Cross Check I got on sale to tow my kids about, get myself to work/errand destinations, and, in general, ride for fun around town. It's smooth like butter.
![Cross check baby][cross-check]

The second bike, what I will call a *vintage* Lemond* I did not get on sale, in fact I learned some important lessons about managing personal finance back in the day from buying it impulsively. It is stable, fun, comfortable, and well worth the lesson and rides that followed.
<div class="split-content">
	<img src ="https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17125708_421097804909017_2084188985541787648_n.jpg">
	<figcaption>Push-hard Fifi!</figcaption>
</div>
<div class="split-content">
	<img src ="https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17125708_421097804909017_2084188985541787648_n.jpg">
	<figcaption>Push-hard Fifi!</figcaption>
</div>

<!-- ![Twelve years and counting][lemond]
 -->
*It is only 12 years old, but to me looks vintage next to some whips out there.

As you can see, the frames are slightly different in weight, geometry, etc. Given that the tire diameters are the same, and the crank length is the same. I want to devise a quick reference table to help myself and potentially a rider or two out there who have bikes with different front cassettes, but are trying to be disciplined with their cadence training.

### Gear Math Example
On the Lemond, I have a 53 / 39 front cassette, meaning that I have two rings to choose from - one larger ring with 53 teeth and one smaller ring with 39. This is a standard crankset for many classic road bikes.

`var frontCogLemond = new Array("39", "53");`

The rear cassette is 12-26, also a standard for 18 speed road bikes (as I write this I realize that 18 speed is old school now), with gears ranging from 12 teeth on the small ring to 26 teeth on the large. The rear cassette cog breakdown for reference is…

`var rearCogLemond = new Array ("12","13","14","15","17","19","21","23","26")`

One example for training, if I were to ride two hours on the smaller front ring (baby steps right?), as well as the fifth ring down in the rear, I'm pedaling a ratio of…
`39 teeth / 17 teeth = 2.294`
This simply means that my rear wheel is spinning 2.29x for every single rotation of the cranks. At 93 rpm, thats some spinning wheels!

### Gear Math Example 2
On the Surly, the front and rear cog are more compact, set-up like a mountain bike even though it is an entry-level cyclocross bike (if these terms are unfamiliar, then let me know, I'm happy to nerd out more with you). It too is an 18 speed bike, and the cassettes are set up like so…

`var frontCogSurly = new Array("36", "48");`

`var rearCogSurly = new Array ("11","12","14","16","18","21","24","28","32")`

If I were to hop over to the Surly, and set my gears in the exact same position, the ratio would feel different, or would it?

`36 teeth / 21 teeth = 1.714`

What does this mean? Well, on the Surly, if I was keeping that same 93 rpm #wethepeople, then my rear tire would be spinning almost a half rotation less per crank spin. To the user, the cyclist's legs, with the same effort would fly up to 140 rpm to keep the same speed. This is too fast with leg rotations, so the end result would probably be a slower speed and more time in the saddle (which is no fun).

## Gear ratio comparison table
Below is a rudimentary table of the low and high gear ratios for both bikes, let's see if we see any patterns…

39 Front Gear | 12-26 Rear Gear | Ratio A | 36 Front Gear | 11-32 Rear Gear | Ratio B
--- | --- | --- | --- | --- | ---
39 | -- | -.-- | 36 | 32 | 1.13
39 | -- | -.-- | 36 | 28 | 1.29
39 | 26 | 1.50 | 36 | 24 | 1.50
39 | 23 | 1.70 | 36 | 21 | 1.71
39 | 21 | 1.86 | 36 | -- | -.--
39 | 19 | 2.05 | 36 | 18 | 2.00
39 | 17 | 2.29 | 36 | 16 | 2.25
39 | 15 | 2.60 | 36 | 14 | 2.57
39 | 14 | 2.79 | 36 | -- | -.--
39 | 13 | 3.00 | 36 | 12 | 3.00
39 | 12 | 3.25 | 36 | 11 | 3.27


&nbsp;

54 Front Gear | 12-26 Rear Gear | Ratio A | 48 Front Gear | 11-32 Rear Gear | Ratio B
--- | --- | --- | --- | --- | ---
54 | -- | -.-- | 48 | 32 | 1.50
54 | -- | -.-- | 48 | 28 | 1.71
54 | 26 | 2.08 | 48 | 24 | 2.00
54 | 23 | 2.35 | 48 | 21 | 2.29
54 | 21 | 2.57 | 48 | 18 | 2.67
54 | 19 | 2.84 | 48 | -- | -.--
54 | -- | -.-- | 48 | 16 | 3.00
54 | 17 | 3.18 | 48 | -- | -.--
54 | 15 | 3.60 | 48 | 14 | 3.43
54 | 14 | 3.86 | 48 | -- | -.--
54 | 13 | 4.15 | 48 | 12 | 4.00
54 | 12 | 4.50 | 48 | 11 | 4.36

I tried to line up values to ~ +/- 15 hundredths gear ratios. I figure that my legs, as novices, probably could not feel a different of a tenth of a wheel spin difference. I could probably see a slight difference in bike speed if my cadence is robot precise, but with hills, winds, bumps, obstacles, that isn't likely to matter over two hours of pedalling.

## General observations
1. **Surly for the climbs**
	It is a heavier frame, but with a low gear ratios of 1.13, I would assume the Surly will be a better climber. The mountain bike drive train reflects this.
2. **Lemond for the speed**
	With the rare exception of a continuous straight-hill descent with no stops or turns, the Lemond will be able to push out just a few more rotations in the highest gear with a ratio of 4.5. The Surly is respectable at 4.36 rear-revolutions per crank turn, but the reality is that the Lemond has more cassette teeth closer together on the high speeds, which means a more incremental shifting experience at the high speeds.
3. **Some gears overlap**
	There are cozy spots on both bikes and on both front cassettes, where the ratio is close. One bike is slightly heavier than the other, but that aside, the overlap is nice. If I had to jump

## What else
Welcome to my blog, this is my first post and on a topic that has been in my headspace for some time. I'll be covering all kinds of topics, largely as a journal. Some posts for fun, some with a product cap on, good times.
![Let's get it started][me]
<figcaption>now imagine if I had this whip! #whatawhip</figcaption>

[me]: /images/w-that-stinner-bike-dream.jpg
[cross-check]: https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17076855_961821877285469_51715709801070592_n.jpg
[lemond]: https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17125708_421097804909017_2084188985541787648_n.jpg
[lacbc-url]: http://www.la-bike.org/
[la-river-url]: http://www.la-bike.org/riverride
[strava-url]: https://www.strava.com/athletes/18288126
[instagram-url]: https://www.instagram.com/brkfstburrito/?hl=en
[we-the-people-url]: https://www.youtube.com/watch?v=BDxKVYUHBdA