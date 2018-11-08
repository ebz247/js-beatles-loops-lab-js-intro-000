// add solution here
function theBeatlesPlay(musicians, instruments) {
  var container = [];
  for(var i = 0; i < musicians.length; i++){
    container.push(musicians[i] + " plays " + instruments[i])
  }

  return container
}

function johnLennonFacts(facts) {
  let countdown = facts.length
  let i = 0;
  while(countdown > 0 ){
    facts[i] += "!!!";
	   countdown--;
	    i++;
  }
  return facts;
}
