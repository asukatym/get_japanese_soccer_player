
var btn = document.getElementById('checkButton'); 
var btn2 = document.getElementById('checkButton2');
//一人目の情報取得
function get_info(){
   
    let playername = document.getElementById(this.id).value;
    
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
        name = JSON.stringify(data['response'][0]['player']['name']).replace(/"/g, "");
        age = JSON.stringify(data['response'][0]['player']['age']).replace(/"/g, "");
        birth = JSON.stringify(data['response'][0]['player']['birth']['date']).replace(/"/g, "");
        photo_url = JSON.stringify(data['response'][0]['player']['photo']).replace(/"/g, "");
        dribbles = JSON.stringify(data["response"][0]["statistics"][0]["dribbles"]["attempts"]).replace(/"/g, "");
        duelsWon = JSON.stringify(data["response"][0]["statistics"][0]["duels"]["won"]).replace(/"/g, "");
        goals = JSON.stringify(data["response"][0]["statistics"][0]["goals"]["total"]).replace(/"/g, "");
        tackles = JSON.stringify(data["response"][0]["statistics"][0]["tackles"]["interceptions"]).replace(/"/g, "");
        assists = JSON.stringify(data["response"][0]["statistics"][0]["goals"]["assists"]).replace(/"/g, "");
        shots = JSON.stringify(data["response"][0]["statistics"][0]["shots"]["total"]).replace(/"/g, "");
        let target = document.querySelector("#target")
        target.src = photo_url;

        document.getElementById("name").innerHTML = 'name:'+name;
        document.getElementById("age").innerHTML = 'age:'+age;
        document.getElementById("birthday").innerHTML = 'birthday:'+birth;
        document.getElementById("dribble").innerHTML = 'dribble:'+dribbles;
        document.getElementById("duelwon").innerHTML = 'duelwon:'+duelsWon;
        
    })};

btn.addEventListener('click',{id: 'mytext', handleEvent: get_info}); 

//二人目の情報取得
function get_info2(){
    console.log([goals,get_info.tackles,get_info.assists,get_info.dribbles,get_info.shots])
    let playername = document.getElementById(this.id).value;
    
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
        var name2 = JSON.stringify(data['response'][0]['player']['name']).replace(/"/g, "");
        var age2 = JSON.stringify(data['response'][0]['player']['age']).replace(/"/g, "");
        var birth2 = JSON.stringify(data['response'][0]['player']['birth']['date']).replace(/"/g, "");
        var photo_url2 = JSON.stringify(data['response'][0]['player']['photo']).replace(/"/g, "");
        var dribbles2 = JSON.stringify(data["response"][0]["statistics"][0]["dribbles"]["attempts"]).replace(/"/g, "");
        var duelsWon2 = JSON.stringify(data["response"][0]["statistics"][0]["duels"]["won"]).replace(/"/g, "");
        var goals2 = JSON.stringify(data["response"][0]["statistics"][0]["goals"]["total"]).replace(/"/g, "");
        var tackles2 = JSON.stringify(data["response"][0]["statistics"][0]["tackles"]["interceptions"]).replace(/"/g, "");
        var assists2 = JSON.stringify(data["response"][0]["statistics"][0]["goals"]["assists"]).replace(/"/g, "");
        var shots2 = JSON.stringify(data["response"][0]["statistics"][0]["shots"]["total"]).replace(/"/g, "");
        let target2 = document.querySelector("#target2")
        target2.src = photo_url2;

        document.getElementById("name2").innerHTML = 'name:'+name2;
        document.getElementById("age2").innerHTML = 'age:'+age2;
        document.getElementById("birthday2").innerHTML = 'birthday:'+birth2;
        document.getElementById("dribble2").innerHTML = 'dribble:'+dribbles2;
        document.getElementById("duelwon2").innerHTML = 'duelwon:'+duelsWon2;
        
        //レーダーチャート作成
        var ctx = document.getElementById("myRadarChart");
            var myRadarChart = new Chart(ctx, {
        //グラフの種類
            type: 'radar',
        //データの設定
            data: {
            //データ項目のラベル
                labels: ["ゴール", "アシスト", "タックル", "ドリブル", "シュート"],
            //データセット
                datasets: [
                    {
                    label: "1人目",
                    //背景色
                    backgroundColor: "rgba(200,112,126,0.5)",
                    //枠線の色
                    borderColor: "rgba(200,112,126,1)",
                    //結合点の背景色
                    pointBackgroundColor: "rgba(200,112,126,1)",
                    //結合点の枠線の色
                    pointBorderColor: "#fff",
                    //結合点の背景色（ホバ時）
                    pointHoverBackgroundColor: "#fff",
                    //結合点の枠線の色（ホバー時）
                    pointHoverBorderColor: "rgba(200,112,126,1)",
                    //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                    hitRadius: 5,
                    //グラフのデータ
                    data: [goals,tackles,assists,dribbles,shots]
                },{
                    
                        //凡例のラベル
                         label: "2人目",
                         //背景色
                         backgroundColor: "rgba(80,126,164,0.3)",
                         //枠線の色
                         borderColor: "rgba(80,126,164,1)",
                         //結合点の背景色
                         pointBackgroundColor: "rgba(80,126,164,1)",
                         //結合点の枠線の色
                         pointBorderColor: "#fff",
                         //結合点の背景色（ホバーしたとき）
                         pointHoverBackgroundColor: "#fff",
                         //結合点の枠線の色（ホバーしたとき）
                         pointHoverBorderColor: "rgba(80,126,164,1)",
                         //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                         hitRadius: 5,
           
                    //グラフのデータ
                         data: [goals2,tackles2,assists2,dribbles2,shots2]
                }
                
                
            ]
            
        },
        options: {
          // レスポンシブ指定
          responsive: true,
          scale: {
            ticks: {
              // 最小値の値を0指定
              beginAtZero:true,
              min: 0,
              // 最大値を指定
              max: 5,
            }
          }
        }
      });
    })
    

    
    
    };
    btn2.addEventListener('click',{id: 'mytext2', handleEvent: get_info2});
      
