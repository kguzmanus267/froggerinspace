const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1200
canvas.height= 800

class Player{
    constructor(){
        this.position = {
            x:550,
            y:670
        }
        this.velocity = {
            x:0,
            y:0
        }
        
        const image = new Image()
        image.src = './assets/player.png'
       
        this.image = image
        this.width = 75
        this.height = 75
        

        } 
    draw() {
     c.drawImage(
        this.image, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
    
    }}

}
class boom{
    constructor(){
        this.position = {
            x: Math.floor(Math.random()*1200)+1,
            y: Math.floor(Math.random()*800)+1
        }
        this.velocity = {
            x:0,
            y:0
        }
   const image = new Image()
       
        this.image = image
        this.width = 60
        this.height = 60}


    draw(){ 
            c.strokeStyle = 'white'
            c.beginPath();
            c.arc(this.position.x, this.position.y, 150 , 0, 2 * Math.PI);
            c.stroke();
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.height,
        this.width)

    }
update(){
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y}
    }}

/*class alien{
    constructor({position}){ 
        this.velocity = {
            x:0,
            y:0
        };
       
    const aliens = new Image()
        aliens.src = './assets/enemy2.png'
        this.image = aliens
        this.image.onload = () =>{
        const scale = 2
        this.width = this.image.width/scale
        this.height = this.image.height/scale
        this.position ={
            x:position.x,
            y:position.y
        }};
        
}
draw(){
    c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
    )
}
update({velocity}){
    if(this.image){
        this.draw()
        this.position.x += velocity.x
        this.position.y += velocity.y
    }
}
}

class Grid {
    constructor() {
    this.position = {
        x: 0,
        y: 0
    }

    this.velocity ={
        x: 3,
        y: 3
    }

    this.aliens = [];
    const  columns = Math.floor(Math.random() * 2+4)
    const rows = Math.floor(Math.random() * 6+2)
    this.width=columns * 75;
    for (let x = 1; x<columns; x++) {
        for (let y = 1; rows; y++){
        this.aliens.push(
            new alien({ 
            position: {
        x:x * 75,
        y:y * 50 }
            })
        )
        }
    //console.log(this.aliens)
}}
update(){
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.velocity.y = 0

    if (this.position.x + this.width>= canvas.width|| this.position.x<=0 ){
        this.velocity.x = -this.velocity.x
    this.velocity.y = 50
}
 
}}*/
var timerBoom = new boom()
const Boom = new boom()
const player = new Player()
//const grids = new Grid()

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}
Boom.update()
player.update()
//alien.update()
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    //Alien.update()
    setInterval(Boom.update(), 
        console.log("test"),
     3000);
    player.update()
    if(keys.a.pressed && player.position>=0){
        player.velocity.x = -5
    } else if(keys.d.pressed && player.position>=0){
        player.velocity.x = 5}
    else{
        player.velocity.x = 0
    }
    if(keys.w.pressed && player.position>=0){
        player.velocity.y = -5
    } else if (keys.s.pressed && player.position>=0){
        player.velocity.y = 5
    }
    else{
        player.velocity.y = 0
    }
}
/*grids.forEach((grid) =>{
    grid.update()
    grid.aliens.forEach(alien=> {
        alien.update({velocity: grid.velocity})
        })
    } )
    if (frames % 500 === 0){
        grids.push(new Grid)
    }
    frames++
}*/

animate()

addEventListener('keydown',({key}) => {
    switch (key){
        case 'a':
            //console.log('LEFT')
        if(keys.a.pressed=true){0
        player.velocity.x = -5}
        else{player.velocity.x = 0}
            
        break

        case 'd':
         //   console.log('right')
         if(keys.d.pressed=true){0
            player.velocity.x = 5}
            else{player.velocity.x = 0}
            
        break
    
        case 'w':
            //   console.log('up')
            if(keys.w.pressed=true){0
               player.velocity.y = -5}
               else{player.velocity.y = 0}
               
           break
        case 's':
            //   console.log('down')
            if(keys.s.pressed=true){0
               player.velocity.y = 5}
               else{player.velocity.y = 0}
               
           break
        }})