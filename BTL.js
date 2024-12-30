function replaceText(selector, text, newText, flags) {
    var matcher = new RegExp(text, flags);
    var elems = document.querySelectorAll(selector), i;

    for (i = 0; i < elems.length; i++)
        if (!elems[i].childNodes.length)
            elems[i].innerHTML = elems[i].innerHTML.replace(matcher, newText);
}

replaceText('span.r-1inkyih:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)','Post',"Tweet");


