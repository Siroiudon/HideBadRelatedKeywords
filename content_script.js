var relatedWords = document.querySelectorAll('p.nVcaUb');
var pattern = /本名|年齢|顔|中の人|妊娠|特定|嫌い|特定/;

var i = 0;
while (i < relatedWords.length) {
    if (pattern.test(relatedWords[i].innerText)) {
        relatedWords[i].style.display = "none";
    }
    console.log(relatedWords[i].innerText);
    i++;
}