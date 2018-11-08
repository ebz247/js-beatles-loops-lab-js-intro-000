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

function iLoveTheBeatles(number){
  var foo = [];
  do {
    foo.push("I love the Beatles!")
  } while( number < 15) {
    console.log("the difference is currently" + number;)
    number++;
  }
  return foo;
}
