/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
    
};

var slideshow = {               //object literal
    timer: null,                //commas after each
    nodes: {image: null, caption: null},
    img: {cache: [], counter: 0},       //cache:[] = empty array
    speed: 3000,                        //3000 = 3 seconds
    loadImages: function (slides) {
        "use strict";
        var image, i;
        for (i = 0; i < slides.length; i += 1) {
            image = new Image(); //capital i
            image.src = slides[i].href;
            image.title = slides[i].title;
            this.img.cache.push(image);
        }
        return this;
    },
    startSlideShow: function (image, caption) {
        "use strict";
        this.nodes.image = image;
        this.nodes.caption = caption;
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },
    displayNextImage: function () {
        "use strict";
        if (this.img.counter === this.img.cache.length) {
            this.img.counter = 0;
        } else {
            this.img.counter += 1;
        }
        var image = this.img.cache[this.img.counter];
        this.nodes.image.src = image.src;
        this.nodes.caption.innerHTML = image.title;
    }
};

window.addEventListener("load", function () {
    "use strict";
    var slides = [
        {href: "images/backpack.jpg", title: "He backpacks in the Sierras often."},
        {href: "images/boat.jpg", title: "He loves his boat."},
        {href: "images/camaro.jpg", title: "He loves his Camaro more."},
        {href: "images/punk.jpg", title: "He used to be in a punk band and toured with Sublime."},
        {href: "images/race.jpg", title: "He's active and loves obstacle course races."}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
});