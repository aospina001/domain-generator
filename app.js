function domainGenerator () {
    let pronoun = ['the','our','my','their','your',];
    let adj = ['great', 'big', 'funny','boring','beautiful','comical','smart','athletic'];
    let noun = ['jogger','racoon','dog','wife','child','coder','monkey'];
    let domain = ['.com','.net','.org','.io'];

    console.log(pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * pronoun.length)] + domain[Math.floor(Math.random() * domain.length)]);
    
};

domainGenerator();