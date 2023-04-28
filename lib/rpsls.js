export function rps(shot)
{
    const randomNumberGenerator = Math.floor(Math.random()*3)   //Generate choice
    const shot_options = ["rock","paper","scissors"];
    shot = shot.toLowerCase();
    const shot_logic = 
    {
        rock: {
            rock : "tie",
            scissors: "lose",
            paper: "win"
        },
        scissors: {
            rock : "win",
            scissors: "tie",
            paper: "lose"
        },
        paper: {
            rock : "lose",
            scissors: "win",
            paper: "tie"
        }
    }

    if(shot == undefined)
    {
        var output = "player:" + shot_options[randomNumberGenerator]
        return {output};
    }
    if (!shot_options.includes(shot))
    {
        throw new RangeError(" Shot Out of Range");
    }
    var winner = shot_logic[shot_options[randomNumberGenerator]][shot]
    var output = "player:" + shot + "opponent:" + shot_options[randomNumberGenerator] +"result:" + winner;
    return{output};
}

export function rpsls(shot)
{
    const randomNumberGenerator = Math.floor(Math.random()*5)   //Generate choice
    const shot_options = ["rock","paper","scissors","lizard","spock"];
    shot = shot.toLowerCase();
    const shot_logic = 
    {
        rock: {
            rock : "tie",
            scissors: "lose",
            paper: "win",
            lizard: "lose",
            spock: "win"

        },
        scissors: {
            rock : "win",
            scissors: "tie",
            paper: "lose",
            lizard: "lose",
            spock: "win"
        },
        paper: {
            rock : "lose",
            scissors: "win",
            paper: "tie",
            lizard: "win",
            spock: "lose"
        },
        lizard: {
            rock : "win",
            scissors: "win",
            paper: "lose",
            lizard: "tie",
            spock: "lose"
        },
        spock: {
            rock : "lose",
            scissors: "lose",
            paper: "win",
            lizard: "win",
            spock: "tie"
        }
    }

    if(shot == undefined)
    {
        var output = "player:" + shot_options[randomNumberGenerator]
        return {output};
    }
    if (!shot_options.includes(shot))
    {
        throw new RangeError(" Shot Out of Range");
    }
    var winner = shot_logic[shot_options[randomNumberGenerator]][shot]
    var output = "player:" + shot + "opponent:" + shot_options[randomNumberGenerator] +"result:" + winner;
    return{output};
}