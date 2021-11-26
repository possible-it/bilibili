window.addEventListener("load", function() {
    var banner = document.querySelector(".banner");
    var items = banner.querySelector(".items");
    var s_banner = banner.querySelector(".ban_s");
    var active = banner.querySelector(".active");
    var index = 1;
    var index_s = 1;
    // 1.克隆第一个li
    items.appendChild(items.children[0].cloneNode(true));
    // 2.根据banners图以及缩略图生成index索引
    for (var i = 1; i < items.children.length; i++) {
        items.children[i - 1].setAttribute("index", i);
        s_banner.children[i - 1].setAttribute("index", i);
        s_banner.children[i - 1].addEventListener("click", function() {
            clearInterval(timer);
            var index_ = +this.getAttribute("index");
            active.style.right = 316 - (index - 1) * 74 + "px";
            animate(items, -1200 * (index - 1))
            index = index_s = index_;
            timer = setInterval(function() {
                if (index == 6) {
                    items.style.left = "0px";
                    index = 1;
                }
                if (index_s == 5) {
                    active.style.right = 316 + "px";
                    index_s = 0;
                }
                animate(items, -1200 * index);
                active.style.right = 316 - index_s * 74 + "px";
                index++;
                index_s++;
                console.log(index_s)
            }, 3000);
        })
    }
    // 3.生成动画函数
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
    var timer = setInterval(function() {
        if (index == 6) {
            items.style.left = "0px";
            index = 1;
        }
        if (index_s == 5) {
            active.style.right = 316 + "px";
            index_s = 0;
        }
        animate(items, -1200 * index);
        active.style.right = 316 - index_s * 74 + "px";
        index++;
        index_s++;
        console.log(index_s)
    }, 3000)

})