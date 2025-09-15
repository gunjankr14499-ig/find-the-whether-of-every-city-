let input=document.getElementById("input_type");
let btn=document.getElementById("set1");
let wheatherbox=document.getElementById("wheather_input");


async function getData(city){
   const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=eb35cbc036024107890171102251309&q=${city},india&aqi=no`);
   return await promise.json();
}

btn.addEventListener("click" , async()=>{
    const value=input.value;
   const result=await getData(value);
   console.log(result);
   if(result.error){
      wheatherbox.innerHTML='<p style="color:red">city not found<p>';
   }
   let cityname=result.location.name;
   let country=result.location.country;
   let temp=result.current.temp_c;
   let condition=result.current.condition.text;
   let icon=result.current.condition.icon;
   wheatherbox.innerHTML=`<h1>${cityname},${country}</h1>
   <h3>${temp} </h3>
   <p>${condition}</p>
   <img src="https:${icon}" alt="wheather icon">
    `;
});
