export function rps(shot)
{
    const randomNumberGenerator = Math.floor(Math.random()*3)   //Generate choice
    const shot_options = ["rock","paper","scissors"];
    shot = shot.toLowerCase();

    const shot_logic = 
    {
        rock: {
            rock : "tie",
            scissors: "lose"
            paper: "win"
        },
        scissors: {
            rock : "win",
            scissors: "tie"
            paper: "lose"
        },
        paper: {
            rock : "lose",
            scissors: "win"
            paper: "tie"
        },
    }

    if(shot == undefined)
    {
        return { "player": shot_options[randomNumberGenerator]};
    }
    if (!shot_options.includes(shot))
    {
        throw new RangeError(" Shot Out of Range");
    }

}