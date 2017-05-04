+++
resources = []
date = "2017-04-26T21:47:19-07:00"
title = "danno.cc build"
Description = ""
Author = "Dan Hanasono"
slug = ""
image = "https://media3.giphy.com/media/3oz8xKdOUnAB08YeRi/giphy.gif"
time = "30"
type = "writings"

+++
### aka #portfolioBuild - Using Hugo + Gulp + Bourbon + GitHub Pages
![bit by bit][build-gif]
<figcaption>Finally, my very own site, built in a way I want…haha, haha, gif from [Clasharama][build-gif-ref].</figcaption>

Building your own project/portfolio site is kin to building your own custom bike or custom brewing rig, the options are exhausting and the reasoning behind execution is important. Being able to know why you made a decision is part of the reward of creating your own website.

Here I will go into how I put together this very site, and more importantly why I chose to do things a certain way. This post is for dev and design nerds, but may pave a way for those looking to build a portfolio site for themselves. There are infinite decision points and quite a lot of steps, but this post will give you a specific perspective. I will dive into some technical details in a later post for those who want to see bits of build in action.

### #summary
1. design using ux and product process
2. implement gulp for build workflow and to process custom scss
3. use hugo to process markdown files to streamline writings
4. build with neat grid-system to learn new front-end framework
5. host for free on github pages to manage deployment and versioning simultaneously
6. invest in custom webfonts
7. introduce folding of the dom and typed text to emphasize site identity and summary on the homepage


## #custom
The single most important attribute to me was that this site was designed and built by hand. I would permit the use of front-end frameworks, but seeing that I am selling myself as a product designer/manager within web, I want to show that I am not afraid to handmake my own portfolio site. I also want to support the industry of front-end development, so no Squarespace or Wix here.

### #whiteboard to #sketchapp
To begin, I started wireframing on a poster-size whiteboard at home. Lots of erasing took place to find out what combination of content would suffice to share both my design sensibilities and thought process. Tell me if this sounds like a good combination for an MVP portfolio site…

1. Ability to showcase work in a visual and written context. #check
2. A page dedicated to introduce myself. #check #hubris
3. A blog for sustaining ongoing efforts. #check (no product is complete afterall, including my humble site!)

The wireframes were presented to a select few, and I refined in [Sketch][sketch-site] before finalizing the design. Attention was paid to a responsive grid system, use of lightweight svg's when possible, and a type system that wouldn't stretch my writings into impossibly long lines to read.

### #blog platform independence
I've written a blog before. I've used [Wordpress][wordpress-site], [Tumblr][tumblr-site], Vox (the blogging platform that closed in 2013), [Livejournal][livejournal-site], [Jekyll][jekyll-site], and [Scriptogram][scriptogram-site] (which also closed down, later in 2015). Blogs require effort, and to rely on a system that could be shut down doesn't seem sustainable in the long run. Tumblr was purchased by Yahoo!, Livejournal by a Russian Media Company. Vox and Scriptogram had their plugs completely pulled out of the wall. 

Wordpress and Jekyll are great, however they are heavy duty. I want to update posts right where I feel at home in a text editor. Wordpress has some performance concerns both in security and that it is a big bloated system for my needs. Jekyll is almost perfect, however it relies on Ruby gems, so a system to install a system. I wanted something minimalist, that did not rely on updating WYSIWYG content windows.

### #markdown
As I mentioned, keeping up a blog requires effort, so the last thing I wanted to be faced with was having to update security patches before I started writing, or resetting my admin password before copy/pasting a story to publish.

I write in a text editor most of the time, so it seemed natural to me to write in a text editor (of which I am a big fan of [Sublime Text][st-site]), not in a content management textbox. Speed is of the essence when writing, and readability is the greatest accomplishment I could acheive in function, so I decided to write all blog posts in [Markdown][markdown-site]. Markdown is embraced both for its simplicity and speed. Posts will now take a fraction to write, as I can focus on plain text syntax, and not be bogged down with mark-up language (Funny, I just got why it is called Markdown).

### #hugo
I was searching for a website engine then that would allow me to build content right in Markdown, and I came across [Hugo][hugo-site]. Hugo has the perks of many website engines out there that can render Markdown, but it excels are processing speed and simplicity. 

I was comparing Hugo to Jekyll, and with Jekyll, you have to organize files a certain way, there are rubygem dependencies, and for my concerns, I would have to either learn how to build or modify a theme template. This is working backwards for me. I wanted to be able to build a unique web design, and then plug in a website engine to update content, not modify a theme to my design, or design around an existing theme. 

One last perk is that Hugo is fast, it can rip a static build of the site in a fraction of the time it takes using other static site generators. I am considering studying Hugo further to help design and develop themes to share for others. It is a fun process. Super secure, there is no database or external libraries to hack. I am a huge fan now, and would consider it for future custom projects.

## #automation &amp; #frameworks
Every developer gets to pick their tools for the build, and having spent the last three years working with a dev team, I focused on implementing both [Gulp.js][gulp-site] for task automation, and [Neat][bourbon-site] as a front-end framework. Below is a bit of thought on both.

### #neat, bourbon, bitters, refills
I have been using and tweaking [Bootstrap][bootstrap-site] for the past four years. Related to a conversation I had with a colleague at [Product School][ps-site], [Courtney][courtney-site], I decided to use Bourbon as a new framework to learn on this project. 

I decided to rely on Bourbon lightly for a Sass mixin library and concentrate on a custom Scss library I've written over the years. Bourbon itself is a few years old and extremely smaller in file size compared to Bootstrap. Creators [thoughtbot][tb-site] gets major credit for their approach to accessibility with the project. One minor downside is that a lot of Bourbon's mixins have been deprecated, so the library is rather small. I used what made sense and instead focused on Neat.

Neat is a Sass grid, which would allow me to play with margins and columns without hacking the framework to pieces. I could embed, collapse, and shift columns just like in Bootstrap, but with a fraction of the code. Learned new framework, win win.

### #gulp
While I think a front-end framework is a bit of an academic decision, using Gulp was imperative. It's workflow could automate the following with one command line in Terminal (I'm listing what is in my actual gulpfile):

1. Take all of the custom styles I write in scss and process them into CSS.
2. Concatenate all of the CSS libraries into a single CSS file and minimize that file, including files from Bourbon and Neat.
3. Map which original scss files are responsible for each element for troubleshooting.
4. Refreshes the browser everytime a CSS, HTML, or JS file is saved (huge time saver).
5. Concatenate all of the JS libraries into a single JS file and minimize that file, including external JS libraries.
6. Copy all minimized files to a specific destination folder for deployment.
7. Copy over static files like font files into a specific destination folder for deployment.
8. Purge the specific destination folder each time before files are saved to eliminate redundancies.
9. Optimize image asset files and save into a specific destination directory for deployment.
10. Connect all new minimized asset files to their relative paths, essentially creating a deployment version of the site without any preprocess file redundancies.

It rules! I relied heavily over the last two years for our dev team to set this up, so it was refreshing to set up Gulp for myself. I highly recommend it for its sass pre-processor and browser-sync functions alone.


## #cost
It was important to me that the overhead for this site be as manageable as possible. There is no business incentive to pay a lot to share information on my site. There is also no eCommerce component to the site, so no direct return to time investment. Sound relatable? Here are some decisions.

### #GitHub Pages &amp; #Hover.com
I am not a back-end developer, so knowing there is no need to flex muscles building a custom back-end, I decided to host my site on [GitHub Pages][gh-pages]. I already use GitHub as part of my versioning process, and GitHub pages has evolved to make it very easy to publish a project or personal site for free. Downsides include the elimination of any ability to use server-side scripting languages, but this is far outweighed by my ability to push straight from repository to live site.

I am a fan of [Hover][hover-site] for registering domain names. Their ethical compass far exceeds major competitors, and they have a decent library of TLD's to choose from. Danno.cc breaks down into "Danno" (my full name condensed) and "cc" of which right now stands for "Cycling Club" (hat tip to [Rapha][rapha-site] for the idea) as I am currently training for my first century ride. Side note, I polled my friends about which URL suffix to use, and ".cc" was the overwhelming winner. Other domain suffices such as ".design" are too literal, and ".co" is a few years overplayed and technically is the TLD for Columbia. Domains through hover.com are typically $10-30/yr.

### #Colophon Foundry &amp; #Google Webfonts
This is for the type nerds out there. While there are major cost savings now with hosting for free, I think it is a worthwhile investment to purchase a webfont license from a proper type foundry. #supportYourFoundry 

For my own expressions, I am using the medium weight of [Aperçu Pro][apercu-site] as the header typeface. I was introduced to the typeface by my colleague [Elisa][elisa-site] last year, and have found that its take on a classic realist sans-serif felt refreshing and accessible to me personally. Since then, I've seen the typeface all over [Typewolf's site][typewolf-site], a testament to its relevance as a pop font. 

Display type is important, but body copy is critical. While GitHub pages can send you Aperçu Pro's font files quickly, I decided on using Google's CDN magic to serve you [Work Sans][worksans-site] lightning fast. Work Sans is a grotesque sans serif, which is my personal nod to just how punk rock grotesque type was when it came about. Work Sans is a nerdy grotesque, optimized for screens between 14&em;48px in size, and pairs well with Aperçu Pro. There will be no font-blink-webfont in this build.

## #flair
I added two JS libraries that I want to call out on my homepage, which will please a solid few. I wanted to fold the dom [(oridomi)][oridomi-site] to conceptually explain where the name "danno" comes from as an identity. I also wanted to keep summary intro text on a typing animation [(typed.js)][typed-site], not to increase engagement, but because I grew up watching [Doogie Howser, M.D.][doogie]

Hope you enjoy the site as we go from MVP onward. I hope to share design and dev resources in the near future.


<!-- Link  -->
[build-gif]: https://media.giphy.com/media/Rm1p7xp3Odl2o/giphy.gif
[build-gif-ref]: https://giphy.com/gifs/Rm1p7xp3Odl2o
[gh-pages]: https://pages.github.com
[hover-site]: https://www.hover.com
[rapha-site]: http://www.rapha.cc/us/en_US/
[apercu-site]: https://www.colophon-foundry.org/typefaces/apercu/
[elisa-site]: http://www.elisa-foster.com
[typewolf-site]: https://www.typewolf.com
[worksans-site]: https://fonts.google.com/specimen/Work+Sans
[bootstrap-site]: http://getbootstrap.com
[courtney-site]: https://twitter.com/swtcourt
[wordpress-site]: https://wordpress.com
[tumblr-site]: https://www.tumblr.com
[livejournal-site]: http://www.livejournal.com
[scriptogram-site]: https://scriptogr.am
[sketch-site]: https://sketchapp.com
[jekyll-site]: https://jekyllrb.com
[st-site]: https://www.sublimetext.com
[markdown-site]: https://daringfireball.net/projects/markdown/syntax
[hugo-site]: https://gohugo.io
[gulp-site]: http://gulpjs.com
[bourbon-site]: http://neat.bourbon.io
[ps-site]: https://www.productschool.com
[tb-site]: https://thoughtbot.com
[typed-site]: https://github.com/mattboldt/typed.js/
[oridomi-site]: http://oridomi.com
[doogie]: https://www.youtube.com/watch?v=N1WnfMFUqWQ


