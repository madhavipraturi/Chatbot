  function setNumber (type) {
    if (type == "BreakFast") {
    	return 0;
    } 
    else if (type == "Lunch") {
    	return 1;
    }
    else if (type == "Dinner") {
    	return 2;
    }
    else {
    	return 3;
    }
  }


  	// Function to randomly respond to a conversation involving food.
    function foods(agent) {
    var bf = ["Cereal", "Cheesecake", "Pan Cakes"];
    var lun = ["Burger", "Pasta"];
    var din = ["lasagna", "Mac and Cheese", "Pizza"];
    var def = ["Pizza"];
    
    var allFoods = [bf, lun, din, def];
    var par = setNumber(agent.parameters.food);
    var ran = Math.floor(Math.random() * (allFoods[par].length-1));
    agent.add(allFoods[par][ran]);
  }


  	// Function to respond to some basic math questions. 
    function math(agent) {
    const x = agent.parameters.operations;
    var a = parseInt(agent.parameters.number);
    var b = parseInt(agent.parameters.number1);
    var res = 0;
    
    if(x=='-')
    {
      res = a-b;
      agent.add('It is '+res);
    }
    else if(x=='+')
    {
      res = a+b;
      agent.add('It is '+res);
    }
    else if(x=='*')
    {
      res = a*b;
      agent.add('It is '+res);
    }
    else
    {
      agent.add('Remind me, Do I work for you :|');
    }
    
  }


  	// Respond with name feature.
    function respondwithname(agent) {
    const name = agent.parameters.name;
    agent.add('Hello '+name+'. Nice to meet you!');
  }