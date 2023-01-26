function is_it_valid_point(point){
    console.log(point);
    a = sessionStorage.getItem("a");
    b = sessionStorage.getItem("b");
    if(parseInt(a) + parseInt(b) > point){
        location.replace('index.html')
    }
}
