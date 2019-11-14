var arr1 = ["test","service2","dev","service4","test5","test6","test7","service8","prod"];
var arr2 = ["test6","service2","service4","service8"];
var str = "";

for (var indx in arr1) 
{
 var item1 = arr1[indx];
 if (arr2.find(function(item2) 
 {
  return item1 == item2
 })) 
 {
  str += "1";
    } 
    else 
    {
  str += "0";
    }
}
alert(str);