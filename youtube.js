const API = "AIzaSyDveMPWEySYWVotJWYVy9jLr7PZIuPJRjk";
const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key="+API;
const videoURL = "https://www.youtube.com/embed/";

var rank = 1;
const video_section = document.getElementById('video_section');


fetch(URL)
    .then(response => response.json())
    .then(response => {
        // console.log(response);
        response.items.forEach((element) =>{
            // console.log(element.id); // video src
            // console.log(element.snippet.channelTitle); // video channel title
            // console.log(element.snippet.title); // video title

            //create the elemenets
            let video_li = document.createElement('li');
            let video_div = document.createElement('div');
            let video_iframe = document.createElement('iframe');
            //set the iframe src
            video_iframe.setAttribute("src", videoURL+element.id);
            
            //create the title, desc
            let video_title = document.createElement("h3");
            video_title.innerText = rank + ". " +element.snippet.channelTitle;
            let video_desc = document.createElement("h5");
            video_desc.innerText = element.snippet.title;

            //append the context
            video_div.appendChild(video_iframe);
            video_div.appendChild(video_title);
            video_div.appendChild(video_desc);
            video_li.appendChild(video_div);
            video_section.appendChild(video_li);

            //rank ++
            rank++;


        })
    });