var myHeaders = new Headers();
myHeaders.append("Authorization", "token 1d88dd4c-7114-46c5-b927-741ee3630bf5\n");
myHeaders.append("Content-Type", "application/json");   

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://events.abattaglia.it/api/event/list", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



            //event1
            var event1 = JSON.stringify({
                "title": "Milano Rock Festival",
                "location": "Milano Arena, Via Brollo 23",
                "startsAt": "2011-11-22",
                "endsAt": "2011-11-24"
            });
            var richiesta1 = {
                method: 'POST',
                headers: myHeaders,
                body: event1,
                redirect: 'follow'
            };
            fetch("https://events.abattaglia.it/api/event/create", richiesta1)
            .then(response => response.text())
            .then(result => {
                var ris=JSON.parse(event1);
                
                let titolo=document.getElementById("titoloEvento1");
                titolo.innerHTML=ris.title;

                let inizioFine=document.getElementById("dataInizioFineEvento1");
                inizioFine.innerHTML=ris.startsAt + "<br/>" +ris.endsAt;

                let location=document.getElementById("locationEvento1");
                location.innerHTML=ris.location;
                
            })
            .catch(error => console.log('error', error));

            // event2
            var event2 = JSON.stringify({
                "title": "Coachella",
                "location": "Roma Colosseo Gladiatori",
                "startsAt": "2013-10-12",
                "endsAt": "2013-10-14"
            });
            var richiesta2 = {
                method: 'POST',
                headers: myHeaders,
                body: event2,
                redirect: 'follow'
            };
            fetch("https://events.abattaglia.it/api/event/create", richiesta2)
            .then(response => response.text())
            .then(result => {
                var ris=JSON.parse(event2);
                
                let titolo=document.getElementById("titoloEvento2");
                titolo.innerHTML=ris.title;

                let inizioFine=document.getElementById("dataInizioFineEvento2");
                inizioFine.innerHTML=ris.startsAt + "<br/>" +ris.endsAt;

                let location=document.getElementById("locationEvento2");
                location.innerHTML=ris.location;
                
            })
            .catch(error => console.log('error', error));


            // event3
            var event3 = JSON.stringify({
                "title": "WoodStock",
                "location": "Texas Nacho Arena",
                "startsAt": "2000-03-04",
                "endsAt": "2000-03-06"
            });
            var richiesta3 = {
                method: 'POST',
                headers: myHeaders,
                body: event3    ,
                redirect: 'follow'
            };
            fetch("https://events.abattaglia.it/api/event/create", richiesta3)
            .then(response => response.text())
            .then(result => {
                var ris=JSON.parse(event3);
                
                let titolo=document.getElementById("titoloEvento3");
                titolo.innerHTML=ris.title;

                let inizioFine=document.getElementById("dataInizioFineEvento3");
                inizioFine.innerHTML=ris.startsAt + "<br/>" +ris.endsAt;

                let location=document.getElementById("locationEvento3");
                location.innerHTML=ris.location;
                
            })
            .catch(error => console.log('error', error));

            // event4
            var event4 = JSON.stringify({
                "title": "Foggia Festival",
                "location": "Foggia Via GioGio 45",
                "startsAt": "2002-01-20",
                "endsAt": "2002-01-22"
            });
            var richiesta4 = {
                method: 'POST',
                headers: myHeaders,
                body: event4    ,
                redirect: 'follow'
            };
            fetch("https://events.abattaglia.it/api/event/create", richiesta4)
            .then(response => response.text())
            .then(result => {
                var ris=JSON.parse(event4);
                
                let titolo=document.getElementById("titoloEvento4");
                titolo.innerHTML=ris.title;

                let inizioFine=document.getElementById("dataInizioFineEvento4");
                inizioFine.innerHTML=ris.startsAt + "<br/>" +ris.endsAt;

                let location=document.getElementById("locationEvento4");
                location.innerHTML=ris.location;
                
            })
            .catch(error => console.log('error', error));