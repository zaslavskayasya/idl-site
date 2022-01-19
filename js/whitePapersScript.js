$.ajax({
    type: 'GET',
    dataType: 'json',
    url: './test.json',

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
            console.log(Data[index].Header);
            $('.white-papers-block').append(
                "<div class='papers-item'> <p class='papers_header'> "+ 
                Data[index].Header + 
                "</p>" + 
                "<p class='wpt_text'>" + 
                Data[index].Text +
                "</p>"+
                "<a  target='_blank' class='btn' href='" + Data[index].Url + "'>" +
                "Download <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M5.46967 11.5303C5.76256 11.8232 6.23744 11.8232 6.53033 11.5303L11.3033 6.75736C11.5962 6.46447 11.5962 5.98959 11.3033 5.6967C11.0104 5.40381 10.5355 5.40381 10.2426 5.6967L6 9.93934L1.75736 5.6967C1.46447 5.40381 0.989593 5.40381 0.696699 5.6967C0.403806 5.98959 0.403806 6.46447 0.696699 6.75736L5.46967 11.5303ZM5.25 3.27835e-08L5.25 11L6.75 11L6.75 -3.27835e-08L5.25 3.27835e-08Z' fill='#F8F8F8'></path></svg> </a> " +    
                "</div>");
        });
    },
});