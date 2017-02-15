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
```

and then you init the magic!

```js
animusjs.init();
```

Now to see if everything is working, lets create a simple HTML

```html
<img anim-in="active" anim-out="active" src="placehold.it/1920x1080">
<img anim-in="active" anim-out="active" src="placehold.it/1920x1080">
<img anim-in="active" anim-out="active" src="placehold.it/1920x1080">
<img anim-in="active" anim-out="active" src="placehold.it/1920x1080">
```

If you look, we add the `anim-in` and `anim-out` 
