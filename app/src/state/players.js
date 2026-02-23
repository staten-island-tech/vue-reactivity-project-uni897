import { reactive } from "vue"

export const players = reactive([
  { id: 1, color: '#FFE67B'},
  { id: 2, color: '#FFE67B'},
])

export function updateStats(id, color) {
    const player = players.find(player => player.id === id)
    if(player){
        player.color = color
    }else{
        console.log("Player not found")
    }
}

