class Banner {


    constructor(majorHead, minorHead) {

        this._majorHead = majorHead;
        this._minorHead = minorHead;
    }

    get majorHead() {
        return this._majorHead;
    }
    get minorHead() {
        return this._minorHead;
    }

    set majorHead(majorHead) {

        this._majorHead = majorHead;
    }

    set minorHead(minorHead) {
        this._minorHead = minorHead;
    }

}

var app = {}

app.displayBanner = function(banner) {
    var heading1 = document.querySelector('#majhead');

    var heading2 = document.querySelector('#minhead');

    heading1.innerHTML = banner.majorHead;

    heading2.innerHTML = banner.minorHead;

}

let mainPage = new Banner('ES6 Examples', 'Verizon,Chennai');

app.displayBanner(mainPage);

let footer = new Banner();

footer.majorHead = 'Designed By Ramesh';
footer.minorHead = 'Copy right 2018-2010';

console.log(footer.majorHead);

console.log(footer.minorHead);