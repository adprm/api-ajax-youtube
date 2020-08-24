$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet,statistics',
        id: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        key: 'AIzaSyDyq8_mb0aarYK8E2S33_hfTAmoIhWIt60',
    },
    success: function (data) {

        $('#channel1').append(`
        <div class="col-md-4">
            <img src="` + data.items[0].snippet.thumbnails.medium.url + `" width="200" class="rounded-circle img-thumbnail">
        </div>
        <div class="col-md-8">
            <h5>` + data.items[0].snippet.title + `</h5>
            <p>` + data.items[0].statistics.subscriberCount + ` Subscribers.</p>
            <div class="g-ytsubscribe" data-channelid="UC-lHJZR3Gqxm24_Vd_AJ5Yw" data-layout="default" data-count="default"></div>
        </div>
        `);
    }
});

$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet',
        channelId: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        maxResults: 1,
        key: 'AIzaSyDyq8_mb0aarYK8E2S33_hfTAmoIhWIt60',
        order: 'date'
    },
    success: function (data) {

        $('#latest-video1').append(`
        <div class="col">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"
                    src="https://www.youtube.com/embed/` + data.items[0].id.videoId + `" allowfullscreen></iframe>
            </div>
        </div>
        `)

    }
});

$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet,statistics',
        id: 'UCq-Fj5jknLsUf-MWSy4_brA',
        key: 'AIzaSyDyq8_mb0aarYK8E2S33_hfTAmoIhWIt60',
    },
    success: function (data) {

        $('#channel2').append(`
        <div class="col-md-4">
            <img src="` + data.items[0].snippet.thumbnails.medium.url + `" width="200" class="rounded-circle img-thumbnail">
        </div>
        <div class="col-md-8">
            <h5>` + data.items[0].snippet.title + `</h5>
            <p>` + data.items[0].statistics.subscriberCount + ` Subscribers.</p>
            <div class="g-ytsubscribe" data-channelid="UCq-Fj5jknLsUf-MWSy4_brA" data-layout="default" data-count="default"></div>
        </div>
        `);
    }
});

$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet',
        channelId: 'UCq-Fj5jknLsUf-MWSy4_brA',
        maxResults: 1,
        key: 'AIzaSyDyq8_mb0aarYK8E2S33_hfTAmoIhWIt60',
        order: 'date'
    },
    success: function (data) {

        $('#latest-video2').append(`
        <div class="col">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"
                    src="https://www.youtube.com/embed/` + data.items[0].id.videoId + `" allowfullscreen></iframe>
            </div>
        </div>
        `)

    }
});