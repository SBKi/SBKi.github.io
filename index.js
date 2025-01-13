// var lang="ko";
//     window.onload = function()
//     {
//         var url = unescape(location.href);
//         var pm  = url.split('?');

//         var params   = pm[1].split('&');
//         for( var i=0; i<params.length; i++ )
//         var param = params[i].split('=');
//         if (param[0] === 'lang'){
//             lang=param[1];
//         }
//         document.getElementById(lang).className += ' active';
//     }

function telToggle() {
    var x = document.getElementById("telToggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
