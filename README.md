# AnimusJS
AnimusJS is the solution for combine JS and CSS animations.

With AnimusJS, you can create animations Changing CSS Classes or using JavaScript Functions very easy!

> Live Example: http://codepen.io/soutomario/pen/akrwxp?editors=0010


**First things first...**

> npm install animusjs

or

> git clone https://github.com/soutomario/animusjs.git


After it you need to include the library

```html
<script src="js/animusjs.min.js"></script>
<script src="https://mariosouto.com/animusjs/js/animusjs.min.js"></script> <!-- Or just import from my website -->
```

and then you init the magic!

```js
animusjs.init();
```

Now to see if everything is working, lets create a simple HTML

```html
<img anim-in="active-my-animation" anim-out="active-my-animation" src="placehold.it/1920x1080">
<img anim-in="active-my-animation" anim-out="active-my-animation" src="placehold.it/1920x1080">
<img anim-in="active-my-animation" anim-out="active" src="placehold.it/1920x1080">
<img anim-in="active-my-animation" anim-out="active-my-animation" src="placehold.it/1920x1080">
```

If you look, we add the `anim-in` and `anim-out` parameters, they are used by AnimusJS to trigger your animation.

Well, at this points you just need to create a CSS to make something with the images:

```css
img {
  opacity: 0;
  transform: translateX(-50px);
  transition: .5s ease-in-out;
}
img.active-my-animation {
  opacity: 1;
  transform: translateX(0px);
}
```

Now when you scroll the page you will see everything animated!

# AnimusJS Properties

* `anim-type` Define what kind of action you want to trigger. By default the AnimusJs uses `anim-type="class"`, but you can pass `anim-type="function"` too (In this case a JavaScript function will be called).

* `anim-in` Do some action when the users scroll down.

* `anim-out` Do some action when the users scroll up.

* `anim-in-out` Do some action when you scroll down and call the same action when you scroll up.
> If you use a javascript function you have to pass 2 parameters like this example

```js
function active(element, options) {
	if(options.status === 'animate') {
		element.classList.add('active');
	}
	if(options.status === 'reverse') {
		element.classList.remove('active');
	}
}
```




