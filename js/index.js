window.addEventListener("load", function() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    big_banner();
    small_banner();
    spread();


    // function bg_movie() {
    //     var video = document.querySelector(".bg_movie");
    //     video.style.width = window.innerWidth;
    //     video.style.height = window.innerHeight;
    // }

    function big_banner() {
        // 大banner轮播图
        var b_banner = document.querySelector(".b-banner");
        var b_imgs = b_banner.querySelector(".imgs");
        var b_circles = b_banner.querySelector(".circle");
        var index = 1;
        var timer = setInterval(function() {
                if (index == 6) {
                    index = 1;
                    b_imgs.style.left = 0;
                }
                animate(b_imgs, -550 * index);
                index++;
                for (var i = 0; i < b_circles.children.length; i++) {
                    b_circles.children[i].children[0].classList.remove("active");
                }
                if (index == 6) {
                    b_circles.children[0].children[0].classList.add("active");

                } else {
                    b_circles.children[index - 1].children[0].classList.add("active");
                }
            }, 3000)
            // 根据banner图的数量来生成小圆的数量和index,并给每个小圆加点击事件和鼠标移动事件
        for (var i = 1; i <= b_imgs.children.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("index", i);
            var span = document.createElement("span");
            li.appendChild(span);
            // 鼠标点击事件
            span.addEventListener("click", function() {
                clearInterval(timer);
                for (var i = 0; i < b_circles.children.length; i++) {
                    b_circles.children[i].children[0].classList.remove("active");
                }
                this.classList.add("active");
                animate(b_imgs, -550 * (this.parentNode.getAttribute("index") - 1));
                index = parseInt(this.parentNode.getAttribute("index"));
                timer = setInterval(function() {
                    if (index == 6) {
                        index = 1;
                        b_imgs.style.left = 0;
                    }
                    animate(b_imgs, -550 * index);
                    index++;
                    for (var i = 0; i < b_circles.children.length; i++) {
                        b_circles.children[i].children[0].classList.remove("active");
                    }
                    if (index == 6) {
                        b_circles.children[0].children[0].classList.add("active");

                    } else {
                        b_circles.children[index - 1].children[0].classList.add("active");
                    }
                }, 3000)

            })
            b_circles.appendChild(li);
            // b_imgs.children[i-1].setAttribute("index",i);
        }
        // 默认给当前小圆第一个为选中状态
        b_circles.children[0].children[0].classList.add("active");

        // 克隆第一张banner图到最后
        b_imgs.appendChild(b_imgs.children[0].cloneNode(true));
        // 根据banner图加index
        for (var i = 1; i <= b_imgs.children.length; i++) {
            b_imgs.children[i - 1].setAttribute("index", i);
        };
        // 设置动画函数
        function animate(obj, target) {
            // 1.清除定时器
            clearInterval(obj.timer);
            // 2.设置定时器
            obj.timer = setInterval(function() {
                // 1.获取当前obj位置
                obj.x = obj.offsetLeft;
                // 判断当前位置是否大于target
                if (Math.abs(obj.x) == Math.abs(target)) {
                    clearInterval(obj.timer);
                } else {
                    // 设置步长
                    obj.step = (target - obj.x) / 10;
                    // 判断当前步长step的正负
                    // 如果为正，则往大取,如果为负，往小了取
                    obj.step = obj.step > 0 ? Math.ceil(obj.step) : Math.floor(obj.step);
                    obj.style.left = obj.x + obj.step + "px";
                }
            }, 15)

        }





    }

    function small_banner() {
        var s_banner = document.querySelector(".s-banner");
        var arr_l = s_banner.querySelector(".arr-l");
        var arr_r = s_banner.querySelector(".arr-r");
        var info = s_banner.querySelector(".info");
        var p = s_banner.querySelector("p:first-child");
        var lis = s_banner.querySelectorAll("li");
        s_banner.addEventListener("mouseenter", function() {
            arr_l.style.opacity = 1;
            arr_r.style.opacity = 1;
        });
        s_banner.addEventListener("mouseleave", function() {
            arr_l.style.opacity = 0;
            arr_r.style.opacity = 0;
        });
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener("mouseenter", function() {
                this.children[0].children[1].children[0].classList.remove("one");
                this.children[0].children[1].style.bottom = 0;
                this.children[0].children[0].classList.remove("mask");
                this.children[0].children[0].classList.add("mask_h");

            })
            lis[i].addEventListener("mouseleave", function() {
                this.children[0].children[1].children[0].classList.add("one");
                this.children[0].children[1].style.bottom = "-52px";
                this.children[0].children[0].classList.remove("mask_h");
                this.children[0].children[0].classList.add("mask");
            })
        }
    }

    function video(obj, pic_num) {
        // var video = document.querySelector(".video");
        var complete = obj.querySelector(".complete");
        obj.addEventListener("mouseenter", function(e) {
            obj.style.opacity = 1;
            var distance = e.pageX - this.parentNode.offsetLeft;
            console.log(distance);
            var rate = distance / this.offsetWidth;
            complete.style.width = rate * 100 + "%";
            var num = Math.ceil(pic_num * rate);
            var column = Math.ceil(num / 10);
            var y = column == 1 ? column * 10 : -((column - 2) * 10 + 105.875 * (column - 1));
            var x = num % 10 * 206;
            obj.style.backgroundPosition = x + "px " + y + "px";
        })
        obj.addEventListener("mousemove", function(e) {
            obj.style.opacity = 1;
            var distance = e.pageX - this.parentNode.offsetLeft;
            console.log(distance);
            var rate = distance / this.offsetWidth;
            complete.style.width = rate * 100 + "%";
            var num = Math.ceil(pic_num * rate);
            var column = Math.ceil(num / 10);
            var y = column == 1 ? column * 10 : -((column - 2) * 10 + 105.875 * (column - 1));
            var x = num % 10 * 206;
            obj.style.backgroundPosition = x + "px " + y + "px";
        })
        obj.addEventListener("mouseleave", function() {
            obj.style.opacity = 0;
        })


    }
    // spread推广区
    function spread() {
        var spreads = document.querySelector(".spread");
        var videos = spreads.querySelectorAll(".video");
        video(videos[0], 53);
        video(videos[1], 18);
        video(videos[2], 100);
        video(videos[3], 16);

    }
})