function getWeekNumber(){
	var now = new Date();
   	var start = new Date(now.getFullYear(), 0, 0);
  	var diff = now - start;
    	var oneWeek = 1000 * 60 * 60 * 24 * 7;
    	var week = Math.floor(diff / oneWeek); 
	return (week % 4) +1;
}

function setChores(){
	var week = getWeekNumber()

	var folks = ['S', 'J', 'A', 'D'];
	var index = 0;
	var recycling = 'Glass';

	if(week == 1) {
		folks = ['J', 'A', 'D', 'S'];
		recycling = 'Paper';
	}else if(week == 2) {
		folks = ['A', 'D', 'S', 'J'];
	}else if(week == 3) {
		folks = ['D', 'S', 'J', 'A'];
		recycling = 'Paper';
	}else if(week == 4) {
		folks = ['S', 'J', 'A', 'D'];
	}else {
		console.log("something wrong...")
	}

	var chores = document.getElementsByClassName("chore");

	for (var index = 0; index < folks.length; index++) {
		var person = document.createTextNode(folks[index]);
		var paragraph = document.createElement("P")
		paragraph.appendChild(person)
		chores[index].appendChild(paragraph)
	}
	// recycling = ''+recycling+' this week';
	// var p = document.createElement("P")
	// p.appendChild(document.createTextNode(recycling));
	// document.getElementById('rubbish').appendChild(p)
}

setChores()
