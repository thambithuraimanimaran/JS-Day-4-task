/*1. how to compare two JSON have the same properties without order?
 let obj1 = {name:"Person 1",age:5};
 let obj2 = {age:5,name:"Person 1"};
if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log("yes")
}else{
    console.log("no");
}
output:
no
---------------------------------------------------------------------*/

/*2.Use the rest countries'API URL->http://restcountries.com/v3.1/all and
 display all the country flags in the console.

 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function(){
    var result =JSON.parse(request.response);
    for(var i in result){
        console.log(result[i].flags);
    }
}*/
/*3. Use the same rest countries and print all countries names,region,
sub-region and population
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response;
    var result =JSON.parse(data)
    console.log(result.name.common,result.region,result.sub-region,result.population)
}*/