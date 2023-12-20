
function hideDiv(){
    for(i=1;i<=6;i++){
        document.querySelector(".questions-p"+i).style.display = 'none';
    }
}
hideDiv();

function faqView(questionClass,btnClass){
    let div = document.querySelector(questionClass);
    let btn = document.querySelector(btnClass);

    if(div.style.display == "block"){
        btn.style.transform = "rotate(90deg)";
        div.style.display = "none";
    } else{
        btn.style.transform = "rotate(45deg)";
        div.style.display = "block";
    }
}

$('#trans').click(function() {
    google.language.translate($('#some').html(), 'en', 'fr', function(result) {
        $('#some').html(result.translation);
    });
  });