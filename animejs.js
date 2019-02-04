let initAnime = () => {

let screenView = { wid: this.screen.width, hei: this.screen.height };
let defineVersion = { moveMobile: "touchmove", moveWeb: "wheel" || "scroll" || "DOMMouseScroll" };
let elements = { parentEl: document.querySelectorAll(".main-animation"), animEl: document.querySelectorAll(".animation") };
let index = 0;

        let move = screenView.wid > 360 ? defineVersion.moveWeb : defineVersion.moveMobile;

        elements.animEl[index].classList.add("onload");

        this.addEventListener( move, event => {

                let pgOf = screenView.wid > 360 ? window.pageYOffset : event.changedTouches[0].pageY;

                if( pgOf < ( elements.parentEl[index].offsetHeight + elements.parentEl[index].offsetTop ) ) {

                        elements.animEl[index].classList.add("onload");
                        elements.animEl[index].style.transition = "1s";
                } 
                else {
                        elements.animEl[index].classList.remove("onload"); index++;
                } 
               
                if( pgOf < elements.parentEl[index].offsetTop ){
                        elements.animEl[index].classList.remove("onload"); index--;
                }

                event.preventDefault();

        },{passive: true});
}