$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet,statistics',
        id: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        key: 'AIzaSyDyq8_mb0aarYK8E2S33_hfTAmoIhWIt60',
    },
    success: function (result) {

        $('#channel1').append(`
        <div class="col-md-4">
            <img src="` + result.items[0].snippet.thumbnails.medium.url + `" width="200" class="rounded-circle img-thumbnail">
        </div>
        <div class="col-md-8">
            <h5>` + result.items[0].snippet.title + `</h5>
            <p>` + result.items[0].statistics.subscriberCount + ` Subscribers.</p>
        </div>
        `);
    }
});