window.addEventListener("load", function() {
    var layer = document.querySelector(".hd-banner");
    var layer1 = document.querySelector(".layer1 img");
    var layer2 = document.querySelector(".layer2 img");
    var layer3 = document.querySelector(".layer3 img");
    var layer7 = document.querySelector(".layer7");
    lay_init();
    lay_listen();
    eye();
    // layers 初始化
    function lay_init() {
        layer1.style.transform = "scale(1) translate(0px,0px) rotate(0deg)";
        layer2.style.transform = "scale(1) translate(0px,0px) rotate(0deg)";
        layer3.style.transform = "scale(1) translate(0px,0px) rotate(0deg)";
        layer1.style.filter = "blur(0px)";
        layer2.style.filter = "blur(0px)";
        layer3.style.filter = "blur(0px)";


    }

    function eye() {
        function p1() {
            var promise1 = new Promise(reslove => {
                setTimeout(() => {
                    layer3.setAttribute("src", "../images/layer2-3.png");
                    reslove("成功换1");
                }, 200);
            });
            return promise1;
        }

        function p2() {
            var promise2 = new Promise(reslove => {
                setTimeout(() => {
                    layer3.setAttribute("src", "../images/layer2-4.png");
                    reslove("成功换2");
                }, 200);
            });
            return promise2;
        }

        function p3() {
            var promise3 = new Promise(reslove => {
                setTimeout(() => {
                    layer3.setAttribute("src", "../images/layer2-5.png");
                    reslove("成功换3");
                }, 200);
            });
            return promise3;
        }
        setInterval(() => {
            p1().then(reslove => {
                console.log(reslove);
                return p2();
            }).then(reslove => {
                console.log(reslove);
                return p3();
            }).then(reslove => {
                console.log(reslove);
            });
        }, 600);

    }
    // lay_listen layers鼠标监听事件
    function lay_listen() {
        // 设置开始坐标
        var start = 0;
        var end = 0;
        //    鼠标移动到layer上
        layer7.addEventListener("mouseenter", function(e) {
            start = e.pageX;
            // console.log(start);
        });
        layer7.addEventListener("mousemove", function(e) {
            end = e.pageX;
            // console.log(end);
            var ratio = (end - start) / layer.offsetWidth;
            // var blur3 = (end - start) < 0 ? (1 + Math.abs(ratio * 4) + "px") : ((1 - ratio * 4) > 0 ? (1 - ratio * 4) + "px" : (ratio * 4 - 1) + "px");
            // var blur4 = (end - start) < 0 ? (4 + Math.abs(ratio * 10) + "px") : ((4 - ratio * 10) > 0 ? (4 - ratio * 10) + "px" : (ratio * 10 - 4) + "px");
            // var blur5 = (end - start) < 0 ? (5 + Math.abs(ratio * 10) + "px") : (5 - ratio * 10 + "px");
            // console.log(blur3);
            // layer1.style.filter = "blur(" + (4 + ratio * 4) + "px)";
            layer1.style.transform = "scale(1) translate(0px, 0px) rotate(0deg)";
            // layer2.style.filter = "blur(" + (0 + ratio * 10) + "px)";
            layer2.style.transform = "scale(1) translate(" + ratio * 20 + "px" + ", 0px) rotate(0deg)";
            // layer3.style.filter = "blur(" + blur3 + ")";
            layer3.style.transform = "scale(1) translate(" + ratio * 30 + "px" + ", 0px) rotate(0deg)";
        });
        layer7.addEventListener("mouseleave", function() {
            lay_init();
        });

    }



})