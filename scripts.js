const mumbaiMarker = document.getElementById('mumbai');
        const puneMarker = document.getElementById('pune');
        const noidaMarker = document.getElementById('noida');
		const dehradunMarker = document.getElementById('dehradun');
		const jammuMarker = document.getElementById('jammu');
        const kolkataMarker = document.getElementById('kolkata');
        const siliguriMarker = document.getElementById('siliguri');
        const bangaloreMarker = document.getElementById('bangalore');
        const hyderabadMarker = document.getElementById('hyderabad');
        const chennaiMarker = document.getElementById('chennai');
    
        const maharashtraState = document.getElementById('maharashtra');
        const uttarpradeshState = document.getElementById('uttar-pradesh');
		const uttarakhandState = document.getElementById('uttarakhand');
		const jammuAndKashmirState = document.getElementById('jammu-and-kashmir');
        const westBengalState = document.getElementById('west--bengal');
        const karnatakaState = document.getElementById('karnataka');
        const telanganaState = document.getElementById('telangana');
        const tamilNaduState = document.getElementById('tamil-nadu');
        
        const mascotDiv = document.getElementById('mascot');

            function changeMascotImage(imageUrl) {
            mascotDiv.innerHTML = `<img src="${imageUrl}">`;
            }

        mumbaiMarker.addEventListener('click', () => {
          
          document.title = 'Maharashtra';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>MUMBAI</h4>
		  <font size="2"><b>Grey House:</b></font><br>
		  <font size="2">India Global Services Pvt. Ltd. ground Floor,<br>
			D-1, abc House, Street No. 2, Andheri East,<br>
			Mumbai Suburban, Maharashtra, - 645645<br>
			Phone : <b>4103171017</b></font><br><br>

			<font size="2"><b>vimanIT:</b></font><br>
			<font size="2">india Global Services Pvt. Ltd, twins Center,<br>
			Z wing 0 & 1, ground Floor, Rd. No. 58, abc post,<br>
			Andheri East, Mumbai - 545456<br>
			Phone : <b>2155085215</b></font><br><br>

			<font size="2"><b>Surfer:</b></font><br>
			<font size="2">561 Vejsat Road. 1448 Matni Pike, Gitaj,<br>
			10 Kaubi Place, 594 Utook Park<br>
			Andheri East, Mumbai, Maharashtra - 645645<br>
			Phone : <b>(433) 409-5514</b></font><br><br>
			
			<font size="2"><b>Nahur:</b></font><br>
			<font size="2">India Global Services Pvt. Ltd garden Park,<br>
			ground Floor, opposite to Rly Station, xyz Nagar Rd<br>
			Bhandup West, Mumbai - 456456<br>
			Phone : <b>964945568</b></font>`;
            changeMascotImage('img/maha.png');
			
        });
		 
        puneMarker.addEventListener('click', () => {
          
          document.title = 'Maharashtra';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>PUNE</h4>
		  <font size="2"><b>Address:</b></font><br>
		  <font size="2">391 Foce Key. Ltd. 172 Larle River,<br>
			23 Mipru Trail, 1925 Fawof Terrace, Pune,<br>
			Maharashtra - 789564<br>
			Phone : <b>(910) 875-8487</b></font>`;
            changeMascotImage('img/maha.png');
        });
    
        noidaMarker.addEventListener('click', () => {
          
          document.title = 'Uttar Pradesh';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>NOIDA</h4>
		  <font size="2"><b>Address:</b></font><br>
		 <font size="2" id="addtext">534 Wahduv Court. 213 Ucugo Heights,<br>
			1152 Utca Circle, 1733 Husral Terrace, Sector 5,<br>
			1312 Zamhar View, 1047 Aroape Key,<br>
			Uttar Pradesh - 656565<br>
			Phone : <b>(957) 523-5512</b></font>`;
            changeMascotImage('img/noida.png');
        });
	
		jammuMarker.addEventListener('click', () => {
          
          document.title = 'Jammu & Kashmir';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>JAMMU</h4>
		  <font size="2"><b>Address:</b></font><br>
		 <font size="2">144 Defij Mill, 131 Toboni, Camcu Square,<br>
			879 Cudmi Mill, 1898 Gatu Heights<br>
			Pin - 546464.</font>`;
            changeMascotImage('img/jammu.png');
        });
		
		dehradunMarker.addEventListener('click', () => {
          
          document.title = 'Uttarakhand';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>DEHRADUN</h4>
		  <font size="2"><b>Address:</b></font><br>
		 <font size="2" id="addtext">1140 Ujeazo Circle, 1088 Coak Plaza, 1307 Lote Avenue,<br>
			568 Foli Glen, Dehradun,<br>
			Uttarakhand - 546548, India</font>`;
            changeMascotImage('img/jammu.png');
        });
    
        kolkataMarker.addEventListener('click', () => {
          
          document.title = 'West Bengal';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";      
          document.querySelector('p').innerHTML = `<h4>KOLKATA</h4>
		  <font size="2"><b>rlystation:</b></font><br>
		<font size="2">989 Igiji Way, 285 Keso Trail,<br>
			900 Piwnem Avenue, 985 Ugmup View,<br>
			Kolkata - 465464<br>
			Phone : <b>(833) 584-1332</b></font><br><br>
			
			<font size="2"><b>Easy 4u:</b></font><br>
			<font size="2">1262 Udhu Point, 520 Tinig Avenue,<br>
			116 Hison Court, Kolkata - 456465<br>
			Phone : <b>(330) 422-3490</b></font>`;
            changeMascotImage('img/bengel.png');

        });

        siliguriMarker.addEventListener('click', () => {
          
          document.title = 'West Bengal';
          document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";      
          document.querySelector('p').innerHTML = `<h4>SILIGURI</h4>
		  <font size="2"><b>Address:</b></font><br>
		<font size="2">1001, lach vihari nagar, 12th Floor, neesham Rd,<br>
			Near KKR Branch, Siliguri,<br>
			West Bengal - 1110005</font><br><br>`;
            changeMascotImage('img/bengel.png');
			
        });
    bangaloreMarker.addEventListener('click', () => {
      
      document.title = 'Karnataka';
      document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>BANGALORE</h4>
		  <font size="2"><b>zzr Complex:</b></font><br>
			<font size="2">India Global Services Pvt. Ltd Nagar blg N0. 8,<br>
			flatron, highway, abc Nagar, Bengaluru,<br>
			Bengaluru sub-urb, Karnataka, 560068<br>
			Phone : <b>2133490649</b></font><br><br>
			
			<font size="2"><b>palmcity:</b></font><br>
			<font size="2">India Services Pvt. Ltd 70 Tako Lane<br>
			215 Nalo Mill, 1039 Tavu Key,<br>
			1596 Situt Parkway, Bengaluru(Bangalore)<br>
			Urban, Karnataka,<br>
			Phone : <b>3519897312</b></font>`;
            changeMascotImage('img/Karnataka-01.png');
			
    });
    
    hyderabadMarker.addEventListener('click', () => {
      document.title = 'Telangana';
      document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>HYDERABAD</h4>
		  <font size="2"><b>UnFortune 9:</b></font><br>
		 <font size="2">India Services Pvt. Ltd. qwerty 008, 12th Floor -<br>
			blg 8 And 8th floor - wing 9, a428:5c55,<br>
			xyz Road, dell and hp, Hyderabad,<br>
			Telangana, - 500082.<br>
			Phone : <b>2540194761</b></font>`;
            changeMascotImage('img/south.png');
    });
    
    chennaiMarker.addEventListener('click', () => {
      document.title = 'Tamil Nadu';
      document.querySelector('p').style.color='#F8F3F3';
          document.querySelector('p').style.fontSize = "x-large";
          document.querySelector('p').innerHTML = `<h4>CHENNAI</h4>
		  <font size="2"><b>Rajveer Complex:</b></font><br>
		  <font size="2">India Services Pvt. Ltd. Vijay-85,<br>
			ground Floor No. 0, Abc nagar,<br>
			Chennai - 545457<br>
			Phone : <b>628499078</b></font>`;
            changeMascotImage('img/south.png');
    });

    function changeStateColor(stateId, color) {
			document.getElementById(stateId).style.fill = color;
		}

        function resetOtherStateColors(currentState) {
  		const states = document.querySelectorAll('.state');
  		states.forEach(state => {
    		if (state.id !== currentState) {
      			state.style.fill = '#F8F3F3';
    		}
  		});
		}

		function changeStateColor(stateId, color) {
  		resetOtherStateColors(stateId);
  		const state = document.querySelector(`#${stateId}`);
  			state.style.fill = color;
	}