const statGen = () => {
    let health = (Math.floor(Math.random()*6)*6) + 20;
    let attack = Math.floor(Math.random()*8) + 20;
    let defense = Math.floor(Math.random()*6) + 10;
    console.log(`Starting Health:   ${health}`);
    console.log(`Starting Attack:   ${attack}`);
    console.log(`Starting Defense:  ${defense}`);
};

statGen();