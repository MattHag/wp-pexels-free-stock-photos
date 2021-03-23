/*
    Initiate the call to the Pexels API (https://www.pexels.com/api/)
    An API key is provided upon request, hence hardcoded here.
    No user action required upon installation.
*/
function call_api(q, p){
    var xhr = new XMLHttpRequest();
    var locale = "de-DE"
    xhr.open('GET', 'https://api.pexels.com/v1/search?query='+encodeURIComponent(q)+'&per_page='+per_page+'&page='+p+'&locale='+locale);
        xhr.setRequestHeader('Authorization', '563492ad6f91700001000001a626f8ddac7d48a88fc0856cb7622195');
    xhr.onreadystatechange = function(){
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            if (!(data.total_results > 0)) {
                jQuery('#pexels_fsp_results').html('<div style="color:#bbb;font-size:24px;text-align:center;margin:40px 0">——No matches——</div>');
                return false;
            }
            render_px_results(q, p, data);
        }
    };
    xhr.send();
    return false;
}