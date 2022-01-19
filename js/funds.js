$.ajax({
    type: 'GET',
    dataType: 'json',
    url: './funds.json',

    headers: {
        'Content-Type': 'application/json'
    },
    xhrFields: {
        withCredentials: false 
    },
    success: function(Data) {
        console.log(Data);
        $.each(Data, function(index, value){
            console.log(Data[index]);
            console.log(Data[index].image_url);
            $('.target').append(
                "<div class='partners-item '> <div class='wrap-logos'> <img src='"+
                Data[index].image_url
                +"' alt=''> "+                
                "</img></div>" + 
                "<p class='target-name'>" + 
                Data[index].name +
                "</p>"+
                "</div>");
        });
    },
});