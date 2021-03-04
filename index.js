function getWeekNumber(){
	var weekOfMonth = Math.ceil(new Date().getDate() / 7)
	return weekOfMonth;
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