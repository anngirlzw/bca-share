<!DOCTYPE html>
<html lang="en">
<head>
<title>Bazaarvoice Curations SDK Tutorial</title>
 
<!-- simple CSS styling for sidebar and updates -->
<style>
    .fm-update { width:300px; display:inline-block; margin: 0 10px 20px 0; border-bottom: 1px #ddd; }
    .avatar { float: left; margin-right: 10px; height: 48px; width: 48px; margin-bottom:20px; }
    .author { font-size: 1.2em; padding-top: 5px; }
    .timestamp { font-size: .8em; color: #777; }
    .text { margin-top: 20px; }
</style>
 
</head>
<body>
 
<!-- this is the div we'll be replacing with social content -->
<div id="social-feed"><span id="loader">Loading content...</span></div>
 
<script>
    // load Bazaarvoice Curations SDK
    var fm_server = 'estee.feedmagnet.com'
    ;(function() {
        window.fm_ready = function(fx) {
            if (typeof $FM!=='undefined' && typeof $FM.ready==='function') {
                $FM.ready(fx);
            } else {
                window.setTimeout(function() { fm_ready.call(null, fx); }, 50);
            }
        };
        var fmjs = document.createElement('script');
        var p = ('https:'===document.location.protocol?'https://':'http://');
        fmjs.src = p + fm_server + '/embed.js';
        fmjs.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(fmjs);
    })();
     
    // do stuff once it is loaded
    fm_ready(function($, _) {
        // create the feed object and get content
        var feed = $FM.Feed("<?php echo $group_id; ?>").options({'limit': 100}).get()
 
        // process JSON data for each update into HTML
        feed.connect('new_update', function(self, data) {
            var udata = data.update.data
            data.update.html =
                '<img class="avatar" ' +
                    'src="' + udata.author.avatar + '" />' +
                '<div class="author">' + udata.author.alias + '</div>' +
                '<div class="timestamp">' +
                    _(udata.timestamp).pretty_time() +
                '</div>' +
                '<img class="photo" src="' +
                    udata.photos[0].image_service_url +
                '&height=300" />' +
                '<div class="text">' + udata.text + '</div>'
        })
 
        // display the feed on the page
        document.getElementById("loader").remove();
        var output = $FM.Element('#social-feed').display(feed)
    })
</script>
</body>
</html>