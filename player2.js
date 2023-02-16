var btn = document.getElementById('checkButton'); 
function get_info(){
    let playername = document.getElementById('mytext').value; 
    
    fetch(`https:/api-football-v1.p.rapidapi.com/v3/players?league=1&season=2022&team=12&search=${playername}`, {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": ""
    }
    })
    .then((response) => {
        return response.json();
    })
      
    .then((data) => {
        console.log(data);
        var name = JSON.stringify(data['response'][0]['player']['name']).replace(/"/g, "");
        var age = JSON.stringify(data['response'][0]['player']['age']).replace(/"/g, "");
        var birth = JSON.stringify(data['response'][0]['player']['birth']['date']).replace(/"/g, "");
        var photo_url = JSON.stringify(data['response'][0]['player']['photo']).replace(/"/g, "");
        var dribbles = JSON.stringify(data["response"][0]["statistics"][0]["dribbles"]["attempts"]).replace(/"/g, "");
        var duelsWon = JSON.stringify(data["response"][0]["statistics"][0]["duels"]["won"]).replace(/"/g, "");
        let list1 = [name,age,birth,photo_url,dribbles,duelsWon]
        let target = document.querySelector("#target")
        target.src = photo_url;

        document.getElementById("name").innerHTML = 'name:'+name;
        document.getElementById("age").innerHTML = 'age:'+age;
        document.getElementById("birthday").innerHTML = 'birthday:'+birth;
        document.getElementById("dribble").innerHTML = 'dribble:'+dribbles;
        document.getElementById("duelwon").innerHTML = 'duelwon:'+duelsWon;

      } 
    )};

    btn.addEventListener('click',get_info);      
