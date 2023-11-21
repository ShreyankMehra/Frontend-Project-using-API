const url = 'https://kontests.net/api/v1/all';
const options = {
  method: 'GET',
  headers: { 
    'X-RapidAPI-Key': '072f7f9331msh69a94c1525399a9p1ff533jsn18c45382385b',
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
  }
};

try {
	contest= fetch (url)
      response=contest.then((contest)=>{
            return contest.json()
      })
      
      response.then((json)=>{
            let ihtml=``
            let im_list=["https://media.istockphoto.com/id/1061877460/vector/enter-to-win-prizes-gift-box-cartoon-origami-style-vector-illustration.webp?s=2048x2048&w=is&k=20&c=SnxE6a53B0uHsZ-tDhPsg2fM9WoVwhRSbNH_WSzZcfo=",
                        "https://media.istockphoto.com/id/1442333787/photo/leadership-business-company-success-yellow-paper-airplane-origami.webp?s=2048x2048&w=is&k=20&c=1-P44DEcbBKvvY4ulnF3i-Eux8pRaUhzq4EJB0ZpOGU=",
                        "https://media.istockphoto.com/id/1413621979/vector/versus-screen-for-fight-of-sport-and-game-battle-or-sport-vs-background-concept-vector-design.jpg?s=612x612&w=0&k=20&c=IXXi4u-iyrXr_vo71BeSfp2Omt4gNqnWuKQ0GTjLDWs=",
                        "https://media.istockphoto.com/id/1182774086/photo/businessman-draw-growth-graph-and-progress-of-business-and-analyzing-financial-and-investment.jpg?s=612x612&w=0&k=20&c=lYO-T4HAetDIjP6-vbs30Ofc5P9CKlvHfzPDnuTCZKA=",
                        "https://media.istockphoto.com/id/1130035011/vector/isometric-business-people-came-from-different-way-but-have-same-target.jpg?s=612x612&w=0&k=20&c=vXr7RDpRB49Zgx0VJUg_KxULE3QXE9zNu7dRTxb7vt4=",
                        "https://media.istockphoto.com/id/1270314078/vector/quiz-time-geometric-badge-with-question-mark-vector-illustration.jpg?s=612x612&w=0&k=20&c=_AS4drMsxnezEBMpl363ln0XZjXph1BOdeOdp3E9HQM=",
                        "https://media.istockphoto.com/id/1140005148/photo/girl-using-her-laptop-for-taking-part-in-online-poker-tournament.jpg?s=612x612&w=0&k=20&c=Kq04NRIRBbOvT_9pI9GQ7K_ezfKYRKJDFQKJohxkUJk=",
                        "https://media.istockphoto.com/id/1163725802/photo/businessman-pointing-arrow-concept-of-business-success-influencer-opinion-leader-and-benchmark.jpg?s=612x612&w=0&k=20&c=anO6fAJ_MqKfYUfa-dmSUYbSyg-4DuSThkDXA1Ukhss=",
                        "https://media.istockphoto.com/id/1152410679/photo/education-school-test-concept-hands-student-holding-pencil-for-testing-exams-writing-answer.jpg?s=612x612&w=0&k=20&c=I6nThrw78EyaVxVSm_S0gcHEHkF3mRClmqm4q8Q6XTE=",
                        
        ]
            counter=0
            for (v in json){

                ihtml+=`<div class="card" style="width: 22rem; ">
                
                <img src="${im_list[counter]}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" style="color:magenta  "><b>${json[v].name}</b></h5>
                  <p class="card-text" ><b>Start_time</b>:${json[v].start_time}</p>
                  <p class="card-text"><b>End_time</b>: ${json[v].end_time}.</p>
                  <p class="card-text"><b>Duration</b>: ${json[v].duration}.</p>
                  <p class="card-text"><b>Site</b>: ${json[v].site}.</p>
                  <p class="card-text"><b>In_24_hours</b>: ${json[v].in_24_hours}.</p>
                  <a href="${json[v].url}" class="btn btn-primary">Visit Contest</a>
                </div>
              </div>`
              counter+=1
              if (counter ===im_list.length){
                counter=0
              }
            }

            first=document.getElementById("first")
            first.innerHTML=ihtml
      })

}catch(error){
    console.log(error)
}