let month = 5;   

if (month === 1) {
  console.log("იანვარი");
} else if (month === 2) {
  console.log("თებერვალი");
} else if (month === 3) {
  console.log("მარტი");
} else if (month === 4) {
  console.log("აპრილი");
} else if (month === 5) {
  console.log("მაისი");
} else if (month=== 6) {
  console.log("ივნისი");
} else if (month === 7) {
  console.log("ივლისი");
} else if (month === 8) {
  console.log("აგვისტო");
} else if (month === 9) {
  console.log("სექტემბერი");
} else if (month === 10) {
  console.log("ოქტომბერი");
} else if (month === 11) {
  console.log("ნოემბერი");
} else if (month === 12) {
  console.log("დეკემბერი");
} else {
  console.log("შენ რა არ იცი რომელი თვეა?");
}


let result =
  month === 1 ? 
    console.log("იანვარი") :
  month === 2 ? 
    console.log("თებერვალი") :
  month === 3 ? 
    console.log("მარტი"):
  month === 4 ? 
    console.log("აპრილი") :
  month === 5 ? 
    console.log("მაისი") :
  month === 6 ? 
    console.log("ივნისი" ):
  month === 7 ? 
    console.log("ივლისი") :
  month === 8 ? 
    console.log("აგვისტო") :
  month === 9 ? 
    console.log("სექტემბერი") :
  month === 10 ? 
    console.log("ოქტომბერი" ):
  month === 11 ? 
    console.log("ნოემბერი") :
  month === 12 ? 
    console.log("დეკემბერი") 

:console.log(result);


switch(month){
    case 1: 
    console.log("იანვარი");
    break;
    case 2: 
    console.log("თებერვალი"); 
    break;
    case 3: 
    console.log("მარტი"); 
    break;
    case 4: 
    console.log("აპრილი"); 
    break;
    case 5: 
    console.log("მაისი"); 
    break;
    case 6: 
    console.log("ივნისი"); 
    break;
    case 7: 
    console.log("ივლისი"); 
    break;
    case 8: 
    console.log("აგვისტო"); 
    break;
    case 9: 
    console.log("სექტემბერი"); 
    break;
    case 10: 
    console.log("ოქტომბერი"); 
    break;
    case 11: 
    console.log("ნოემბერი"); 
    break;
    case 12: 
    console.log("დეკემბერი"); 
    break;
    default: 
    console.log("რა გითხრა რით გაგახარო");
}
