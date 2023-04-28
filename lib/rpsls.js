export function rps(shot)
{
    const number = Math.floor(Math.random()*3)   //Generate choice
    const shot_options = ["rock","paper","scissors"];
    if(shot == undefined)
    {
        return {"player": shot_options[number]};
    }
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

    
    if (!shot_options.includes(shot))
    {
        throw new RangeError("Shot Out of Range");
    }
    const result = shot_logic[shot_options[number]][shot];
    return {"player": shot,  'opponent': shot_options[number], 'result': result};
}

export function rpsls(shot)
{
    const number = Math.floor(Math.random()*5)   //Generate choice
    const shot_options = ["rock","paper","scissors","lizard","spock"];
    if(shot == undefined)
    {
        return {"player": shot_options[number]};
    }
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
    if (!shot_options.includes(shot))
    {
        throw new RangeError("Shot Out of Range");
    }
    const result = shot_logic[shot_options[number]][shot];
    return {"player": shot,  'opponent': shot_options[number], 'result': result};
}