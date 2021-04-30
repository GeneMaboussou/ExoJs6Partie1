document.getElementById("submit");submit.addEventListener('click',
function rest(){    
    var foot = document.getElementById('foot').value;
    var birth = document.getElementById('birth').value;

    var result = (foot * 2 + 5)*50 - birth +1769;
    alert(result);

});