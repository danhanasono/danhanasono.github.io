+++
resources = []
Description = ""
Author = "Dan Hanasono"
slug = ""
date = "2017-03-31T11:17:21-07:00"
title = "a study of gear ratios and cadence"
image = "https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/15056770_1803780916544291_2440065685016018944_n.jpg"
time = "10 minutes"
type = "writings"

+++

<article class="post-header-img">
	<img src="/images/wr-h-a-study-of-gear-ratios-and-cadence.png" alt="A pic of someone's quite crusty rear cassette - ref:https://pixabay.com/en/bike-cycle-gear-633207/">
	<figcaption>Push-hard Fifi!</figcaption>
</article>
## #roll-one-hundred
I've been taking to the streets and bike paths lately in great anticipation of [LACBC][lacbc-url]'s 17th Annual [LA River Ride 2017][la-river-url]. Call it fitness pressure, but I signed up to ride 100 miles come June 4th, up and down the L.A. River out past Long Beach and back. Mind you, this will be my first ever "century" ride, so I have some prep to do. I'm considering this is an addendum to my time transitioning into product - to get fit.

Biking is a great exercise for me. Solid cardio, great core and leg strengthening (ooh la la those legs), and some vitamin D and cool sites and sounds you can't see from walking or driving around L.A. I've been cycling on and off since I was six, a by-product of growing up in an Indy-car town where tinkering with vehicle and engine is second hand. Sound familiar? #product

While I wouldn't say outright that biking is the most social form of exercise out there, it is surprising how many interactions I've had in the short 2-3 weeks I've started riding again. Twenty-minute ride-alongs with strangers who see me struggling and coach me along. Chit chat off bikes at destination points with experienced riders. [Instagram][instagram-url] and [Strava][strava-url] have been strong inspiration and motivation respectively.

## #cadence hack
Let's discuss strategy - one big method of training is to run a long time (or distance - same thing essentially) at a high cadence of 90-110 rpm. With this training, the focus is less on forcing your legs to heft, and rely more on ride volume (time in the saddle) and cardio capacity (how hard you can push before you pant out). 

So, I'm riding for two hours in L.A. with constant distraction and traffic, which means real vigilence is needed to pedal at the right frequency. Here is a quick cadence reference I use, and a small cadence hack…just listen to a few seconds of A Tribe Called Quest's ["We the People"][we-the-people-url], which is a steady 93 bpm. It's a solid beat, memorable song, and the idea is your left foot should rotate one full crank for each beat, *boom*, 93 rpm #nowthatissomequicktoetapping. Here's the song performed last fall on SNL.
<!-- YouTube Embed -->
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/BDxKVYUHBdA' frameborder='0' allowfullscreen></iframe></div>

## #a gear study - my whips
I have two bikes I've ridden for a few years, each with totally different purposes, but both are in fine shape to ride and train on. I swap on a dime, one goes out with me on Monday, another on the next riding day, etc.

I am riding on two bikes, a steel Surly Cross Check I got on sale to tow my kids about, get myself to work/errand destinations, and, in general, ride for fun around town. It's description is worth another post sometime, but the main point is that it rides on fatter tires smooth like butter.

The second bike, what I will call a *vintage* Lemond* is a tad lighter, with a more aggressive geometry (also worth a separate blog post), and though it is 12 years old, it's been a real pleasure and workhorse for me. I plan on riding it for the century.

<figcaption>*It is only 12 years old, but to me looks vintage next to some whips out there.</figcaption>

<div class="split-content">
	<img src ="https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17076855_961821877285469_51715709801070592_n.jpg">
	<figcaption>Surly Cross-Check 2013</figcaption>
</div>
<div class="split-content">
	<img src ="https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17125708_421097804909017_2084188985541787648_n.jpg">
	<figcaption>Lemond Versailles 2005</figcaption>
</div>

&nbsp;
### #constants
Given that the tire circumferences are the same (plus or minus a few millimeters due to the fatter tire), and the crank arm length is the same (distance from the pedal to the center of the bottom bracket), I want to devise a quick reference table to help myself and potentially any rider out there who have bikes with different front cassettes, but are trying to be disciplined with their cadence training.

### #theproblem
I'm fairly new to giving thought to the drive train. Previous riding meant finding a comfortable gear per tarmac pitch, pushing harder on up grades, pushing easier on down grades. Now I'm focused on toe tapping to "We The People", which means that if gears don't line up, I'm training at different power bike to bike. How can I find a gearing set-up that will be similar across both bikes?

### #gearmath example
On the Lemond, I have a 53 / 39 front cassette, meaning that I have two rings to choose from - one larger ring with 53 teeth and one smaller ring with 39. This is a standard crankset for many classic road bikes.

`var frontCogLemond = new Array("39", "53");`

The rear cassette is 12&mdash;26, meaning gears ranging from 12 teeth on the small ring to 26 teeth on the large. The rear cassette cog breakdown for reference is…

`var rearCogLemond = new Array ("12","13","14","15","17","19","21","23","26")`

If I were to ride two hours on the smaller front ring (baby steps right?), as well as the fifth ring down from the lowest gear in the rear, I'm pedaling a ratio of…

`39 teeth / 17 teeth = 2.294`

This means that my rear wheel is spinning 2.29x for every single rotation of the cranks. At 93 rpm, thats some spinning wheels!

### Gear Math Example 2
On the Surly, the front and rear cog are more compact, the configuration is similar to a mountain bike even though it is an entry-level cyclocross bike (if these terms are unfamiliar, then [let me know](<dan.hanasono@gmail.com>), I'm happy to go into more detail with you). The Surly is conveniently an 18 speed bike, but the cassettes both have different teeth per cog. The front cassette is 48 / 36, and rear cassette is 11&mdash;32…

`var frontCogSurly = new Array("36", "48");`

`var rearCogSurly = new Array ("11","12","14","16","18","21","24","28","32")`

If I were to hop over to the Surly, and set my gears in the exact same position (smaller front gear & fifth gear down from the lowest in the rear), the ratio would feel different, or would it?

`36 teeth / 21 teeth = 1.714`

What does this mean? Well, on the Surly, if I was keeping that same 93 rpm *#wethepeople*, then my rear tire would be spinning almost a half rotation less per crank spin. Trying to maintain a similar speed on this smaller gear, I would have to allegro up to 140 rpm which would me my knees would fall off.

I joke, but the end result if I rigidly stayed in this arrangement would probably be an overall slower speed and more time in the saddle (which can be less fun).

## #thetables
Below is a rudimentary table of the gear ratio combos for both bikes, let's see if we see any patterns. I've matched up similar ratios independent of rear cassette size…

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
…and on the bigger front cassette…

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

I tried to line up values to the nearest ~ +/- 15 hundredths of a gear ratio. I figure that my legs probably could not feel a difference between a tenth of a wheel spin difference, but would notice a speed difference for a half of a wheel spin. 

## #conclusions
1. **Surly for the climbs**
	It is a heavier frame, but with the lowest overall gear ratio of 1.13, I would assume the Surly will be a better climber. Its mountain bike drive train backs this up.
2. **Lemond for the speed**
	With the rare exception of a continuous straight-hill descent with no stops or turns, the Lemond will be able to push out more rotational distance in the highest gear with a ratio of 4.5. The Surly is respectable at 4.36 rear-revolutions per crank turn. The reality is that most cyclists need to incrementally build up to such a high gear ratio. The Lemond has smaller increments on the highest gears, which means a more build-up of super-high speed.
3. **Overlap is subjective**
	There are sweet spots on both bikes where the ratio is close, but unfortunately they are only within our margin of matching on the smallest two rear cogs. This means too much crossover in one scenario, and in the other it means I'm sustaining a speed of about 40+ mph at 94 rpm. No thanks.
4. **Flat road**
	Since the bulk of this type of training and the century ride itself is largely on flat terrain, I will want to stick to the smaller front cog. This means that 2.25&mdash;2.29 gear ratio will probably work for me at 93 rpm. That's the fifth cog from highest on the Lemond, and the sixth cog from the highest on the Surly. Hmn, I might be better off just getting a cadence and speed monitor.


## #other
Welcome to my blog, this is my first post in recent times and on a topic that has been in my headspace for some time. I'll be covering all kinds of topics, largely as a journal as I explore going from a more traditional design to what John Maeda is calling [computational design][maeda-url]. Some posts will be for fun, some with a product cap on, some with a design cap…good times.

<div class="small-mid">
	<img src="/images/wr-that-stinner-bike-dream.jpg">
	<figcaption>now imagine if I had this whip! #whatawhip #stinnerframeworks
	</figcaption>
</div>
&nbsp;

<div>
	<a href="#top-o-page" class="back-to-top">{{< fa sort-asc >}}
	<p>Scroll to top</p>
	</a>
</div>



[cross-check]: https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17076855_961821877285469_51715709801070592_n.jpg
[lemond]: https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/17125708_421097804909017_2084188985541787648_n.jpg
[lacbc-url]: http://www.la-bike.org/
[la-river-url]: http://www.la-bike.org/riverride
[strava-url]: https://www.strava.com/athletes/18288126
[instagram-url]: https://www.instagram.com/brkfstburrito/?hl=en
[we-the-people-url]: https://www.youtube.com/watch?v=BDxKVYUHBdA
[maeda-url]:https://venturebeat.com/2016/03/14/kpcbs-john-maeda-3-types-of-design-every-company-needs-to-know/