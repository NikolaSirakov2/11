let input = [
    2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'
];

let allSongs = input.shift();
let command = input.pop();

for(let i = 0; i < input.length; i++){
    let song = input[i].split("_");

    if(command === "all"){
        console.log(song[1]);
    } else if(song[0] === command){
        console.log(song[1]);
    }
}
