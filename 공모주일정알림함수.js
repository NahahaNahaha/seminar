  //공모주 일정 알려주는 함수
  function stockIPO(){
   
    try{
    var data = Utils.getWebText("http://www.38.co.kr/html/fund/index.htm?o=k");
    data=data.replace(/<[^>]+>/g,""); 
    data=data.split("분석")[6]; 

    data = data.split("&nbsp;"); 
    var IPO = new Array(); 
    
    for(var i=1;i<26;i++){
      IPO.push(data[i].replace(/\s*$/,""));
    } 
    var temp_IPO = [];
    for(var i=0;i<25;i++){
      temp_IPO[0] = "종목명: " + IPO[i].split("\n")[0].trim(); 
      temp_IPO[1] = "공모주일정: " + IPO[i].split("\n")[1].trim(); 
      temp_IPO[2] = "확정공모가: " + IPO[i].split("\n")[2].trim(); 
      temp_IPO[3] = "희망공모가: " + IPO[i].split("\n")[3].trim(); 
      try{
        temp_IPO[4] = "주간사: " + IPO[i].split("\n")[5].trim(); 
      } 
      catch(e){
        temp_IPO[4] = "주간사: 없음";
      }
      IPO[i] = temp_IPO.join("\n");
    }
    IPO = IPO.join("\n\n");
    return IPO;
    }
    catch(e){
    return null;
    }
}
  