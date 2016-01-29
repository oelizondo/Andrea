#Andrea

Yes, another front-end framework. Sue me.

Demo: [Andrea](http://oelizondo.github.io/Andrea/)

##Installation and usage

There are several ways to install andrea:

1. With Bower: ```bower instal andrea```.
2. Clone this repo into your project.
3. Copy and paste [Raw](https://raw.githubusercontent.com/oelizondo/Andrea/master/andrea.css).

Cloning the repo:
```html
  <link rel="stylesheet" href="Andrea/normalize.css">
  <link rel="stylesheet" href="Andrea/andrea.css">

```
With Bower:
```html
  <link rel="stylesheet" href="bower_components/andrea/normalize.css">
  <link rel="stylesheet" href="bower_components/andrea/andrea.css">

```
If you copy-and-pasted it:
```html
  <link rel="stylesheet" href="path/to/andrea/normalize.css">
  <link rel="stylesheet" href="path/to/andrea/Andrea/andrea.css">
```

And you're ready to start working. If you like Sass, then you can checkout the ```src``` folder to move things around, or import it directly into your project.


##What does it come with?

###A 12-column grid

```html
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
  <div class="four"></div>
  <div class="five"></div>
  <div class="six"></div>
  <div class="seven"></div>
  <div class="eight"></div>
  <div class="nine"></div>
  <div class="ten"></div>
  <div class="eleven"></div>
  <div class="twelve"></div>

  <div class="row"></div>

  <div class="container"></div>
```

####Offsets. 

To make an offset of the grid (like having only 3 columns in the center), then just do:

```html
<div class="three center"></div>
``` 
To to make it off-set.


###Some buttons

```html
  <div class="button"></div>
  <div class="ghost"></div>
  <div class="big button"></div>
```

###Some base styles

Base styles have been included for the ```<hr>```, anchors and headings. Andrea comes with normalize as well.

###Some rules

These rules are to make life easier, for example ``` <div class="landing-height"></div>``` will create a div that has 100vh height to make landing websites easier.

Different ways of centering:

* ```.center``` Center the element with the class with flex.
* ```.text-center``` Centers the text with the class using text-align: center.
* ```.margin-center``` Center the element with the class using margins.

Column:

* ```.column``` Makes the flow of the container column.

Vertical Align:

* ```.vertical-align``` To the container, aligns its children vertically.



###Version

Andrea is in version 0.0.2, or in an alpha stage. The main framework is done, but I expect to add layers of functionality in the future. This is not the final product so issues are welcome for improvement.

###Contributing

Easiest way to get your environment running is the the ```package.json``` we included in the repo, simply ```npm install``` after you clone it, and then:

* Make your changes.
* Push.
* Pull request to this master branch.

###Rationale

No we don't need another web framework, and no I don't care. It was fun. That's it. And I'm not finished with it.