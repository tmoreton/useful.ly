# [useful.ly](http://www.useful.ly)

useful.ly is a CSS framework based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

## How to use useful.ly

useful.ly is in early but active development! Try it out now:

Include this line in your index.html

Flexbox Grid System ONLY
```sh
  <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/useful.ly/flex.css">
```

Full CSS Framework with Flexbox Grid System
```sh
  <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/useful.ly/useful.ly.min.css">
```

### HTML Class

```sh
  <!DOCTYPE html>
  <html lang="en">
    <head>

      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <title></title>

      <!-- Style Guide CSS -->
      <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/useful.ly/useful.ly.min.css">

      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

    </head>

    <body>

  		<header></header>

  		<section></section>

  		<footer></footer>

      <!-- jQuery -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    </body>
  </html>
```

### Flex Class Classes
  The goal was to start using flexbox with the lowest possible learning curve aka least about of classes necessary
  
#### Flex Grid Sizing
* All need .flex to be present in order work correctly
```sh
  .flex
    .flex-{1-12}
    .flex-tablet-{1-12}
    .flex-mobile-{1-12}
    .hidden-desktop
    .hidden-tablet
    .hidden-mobile
```

#### Flex Grid Position
* All need .flex to be present in order work correctly
```sh
  .flex
    .center (aligns vertically and horizontally & adds spacing between other flex items)
    .top
    .bottom
    .left
    .right
```

### Flex Class Structure

#### Flex Set Width Center
```sh
  <div class="flex center">
    <div></div>
    <div></div>
  </div>
```

#### Flex Auto Width
```sh
  <div class="flex">
    <div class="flex center"></div>
    <div class="flex center"></div>
  </div>
```

#### Classic 12 Column Based Flexbox Grid
```sh
  <div class="flex">
    <div class="flex-6 flex-tablet-12">
      <div></div>
    </div>
    <div class="flex-6 flex-tablet-12">
      <div></div>
    </div>
  </div>
```

### Navigation HTML

```sh
  <header>
    <div class="flex flex-12 nav center left">
      <div class="hidden-desktop left">
        //Hamburger button also calls jQuery to expand menu
        <div id="open-close-nav" class="hamburger hamburger--squeeze">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-2 flex-mobile-4 center">
        <a href="/">
          <img class="flex center" src="logo.jpg">
        </a>
      </div>

      <div class="menu flex flex-8 center">
        //Dropdown must have nav-item class
        <div class="nav-item">
          <p class="main">Dropdown</p>
          <div class="dropdown">
            <a href="#" class="sub"></a>
            <a href="#" class="sub"></a>
          </div>
        </div>

        <a href="#" class="main"></a>
        <a href="#" class="main"></a>
        <a href="#" class="main"></a>
        <a href="#" class="main"></a>
      </div>
    </div> 
  </header>
```

### Navigation JS

```sh
  // Showing and Hiding mobile nav Overlay
  $('#open-close-nav').click( function(){
    if ($("#open-close-nav").hasClass('is-active')){
      $("#open-close-nav").removeClass('is-active');
      $('body').css("overflow", "initial");
      $(".menu").removeClass("open");
    } else {
      $("#open-close-nav").addClass('is-active');
      $('body').css("overflow", "hidden");
      $(".menu").addClass("open");
    }
  });

  //Close nav when link is clicked
  $('a').click(function(){
    $("#open-close-nav").removeClass('is-active');
    $(".menu").removeClass("open");
    $('body').css("overflow", "initial");
  })

  // Nav Dropwdowns
  $(".nav-item").click(function(){
    if ($(this).hasClass("open")){
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
  })
```

### Hero

```sh
  <div class="hero">
    <div class="flex hero-content center">
      <div></div>
    </div>
  </div>  
```

### Buttons

```sh
  <button class="small center"></button>
  <button class="center"></button>
  <button class="large center"></button>
  <button class="x-large center"></button>
  <button class="full"></button>
```

### Modal HTML

```sh
  <button onclick="openModal()">Open Modal</button>

  <div id="modal" class="modal flex center">
    <div class="modal-background" onclick="closeModal()"></div>
    <div class="modal-content">
      <p class="modal-close"  onclick="closeModal()">x</p>
      <h1></h1>
      <p></p>
    </div>
  </div>
```

### Modal JS

```sh
	function openModal(){
		var modal = document.getElementById("modal");
		modal.style.visibility = "visible"
		modal.style.opacity = 1
		document.body.style.overflow = "hidden";
	}

	function closeModal(){
		var modal = document.getElementById("modal");
		modal.style.visibility = "hidden"
		modal.style.opacity = 0
		document.body.removeAttribute("style");
	}
```

### Form

```sh
  <form action="#" method="POST">
    <div class="flex">
      <div class="flex-6 flex-mobile-12">
        <input required type="name" name="name">
        <label>Name <span>*</span></label>
      </div>
      <div class="flex-6 flex-mobile-12">
        <input required type="email" name="email">
        <label>Email <span>*</span></label>
      </div>
      <div class="flex-12">
        <textarea required type="text" name="message"></textarea>
        <label>Message <span>*</span></label>
      </div>
      <button type="submit" value="Submit" class="center">Submit</button>
    </div>
  </form>
```

### Form JS

```sh
// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});
```

### CDN

[https://s3.amazonaws.com/useful.ly/useful.ly.min.css](https://s3.amazonaws.com/useful.ly/useful.ly.min.css)

Feel free to raise an issue or submit a pull request.