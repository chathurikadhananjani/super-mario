//set the background
kaboom({
    global: true,
    fullscreen:true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})


const MOVE_SPEED= 120
const JUMP_SPACE= 400
const BIG_JUMP_FORCE= 600
let CURRENT_JUMP_FORCE=JUMP_SPACE
let isJumping = true
const FALL_DEATH =1500


//load images to the ground


loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'nMk7RMO.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'RktJtoV.png')
loadSprite('mushroom','0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')

loadSprite('shroom', 'KPO3fR9.png')

loadSprite('board', 'lLpyzb9.png')
loadSprite('tree1', 'uQ8c9xZ.png')
loadSprite('tree2', 'Y7AYRic.png')
loadSprite('bench', 'KOCfFFu.png')
loadSprite('board2', 'HUnXt0m.png')

loadSprite('error', '3zwZMNx.png')
loadSprite('warning', 'XaUn8C4.png')
loadSprite('rex', 'UC5OtbE.png')
loadSprite('no-signel', 'YaXRnQi.png')

loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')
loadSprite('banner2', 'ikUjMwA.png')
loadSprite('banner', 'bOhC0kA.png')

loadSprite('toy', 'FCszezn.png')
loadSprite('abc', 'wFNcbvX.png')
loadSprite('baby', 'zx5Qtys.png')
loadSprite('food', 'XM4D80k.png')
loadSprite('three-heart', 'ONZ5Fv6.png')
loadSprite('beer', 'hGBr4Bw.png')
loadSprite('book', '1LkyhRI.png')
loadSprite('bun', 'RCY1jlF.png')
loadSprite('bride', 'PWPGXPS.png')
loadSprite('clock', 'nrYyuQk.png')
loadSprite('coffee', 'zPsXpqA.png')
loadSprite('diaper', 'AJqcTif.png')
loadSprite('drink', 'C21HQFr.png')
loadSprite('milk', 'P160NtP.png')
loadSprite('gift', 'JfWLgGO.png')
loadSprite('hearts', 'MtTyfmZ.png')
loadSprite('lap', '8dcB7GQ.png')
loadSprite('letter', 'W4ahSxI.png')
loadSprite('bottle', 'zPKRX6h.png')
loadSprite('suppu', 'Zhb7R4D.png')
loadSprite('ring', 'up1aYnb.png')
loadSprite('duck', 'SpiYgpK.png')
loadSprite('sandwich', 'Hv3IZXT.png')
loadSprite('bag', '0Vembvp.png')
loadSprite('phone', 'ZmV4C7Z.png')
loadSprite('juice', 'a1bscVk.png')
loadSprite('gifts', '9W7rmpT.png')
loadSprite('bear', 'rCAY95O.png')
loadSprite('mobile', 'GcRQq77.png')
loadSprite('cake', 'YquGiKJ.png')



scene("game", ({ level, score }) => {
    layers(['bg','obj','ui'],'obj')
    

    //map for display the game items
    const maps =[
        [
            '                                                                                                                                                                                                                        ',
            '                                                                                                                                                                                                                        ',
            '                                                                                                                                                                                                                        ',
            '                                                               G                                                                                                        Ak                                              ',
            '                                                                 9,jq                                                                                                                                                   ',
            '                                                                                                                                                                                                                        ',
            '                                                                                                                                                                                _4/|v                                   ',
            '=                                                    N                                    N                              ,]uq                    X                 22                          N                        ',
            '=                                                                                                                                                                                                                       ',
            '=            $$$$$$                                                                                      6uq.|                                                                                                          ',
            '=            ======        %D%E%TSB         0//0    v          STB%%SM          SDGF                     ======                      GCHSR                                       CDH%L                                  ',
            '=                                                                                                                                                                                                                       ',
            '=                                                                                                                                                            _|k2                                                       ',
            '=                                                                                                                                                                                                              332      ',
            '=                                g$j$9j7$6                                         000..js                      3kk3|3_]_3                 __6                                                                          ',
            '=                                                                                                                                                                                                          -+           ',
            '=                             Q                                     Q                                                    Q                                                                     Q           ()           ',
            '========================================================================================================================================================================================================================', 
        ],
        [ 
        '?                                                                                                 790_                                                                                                                      ',
        '?                        k2]                                        kA                       !!!!!!!!!                                                                                                                     ?',
        '?                                                                  N                                                             X        790_              X                                            N                 ?',
        '?                                                                                                                                  !!!!!!!!!!                                                                              ?',
        '?       []v4a          @D@G@H@O                     CSWD                                                                                                                                                                   ?',
        '?                                                                               TGCD%F                          BCGHTE                                                                                                     ?',
        '?                                            9                  u.A0                                                                      $$$$$$$$$$                                                                       ?',
        '?                  sgjk    u                       jj        //                                       x                                                                                                                    ?',
        '?                                           x x                                   3qsgja             xx                                                                                                                    ?',
        '?                                           x x   0.                x                               xxx             64[]g                                      40v4[,]                                                     ?',
        '?                                        x xx x       qj6v        x x                              xxxx                                                                               $$$$$$$$$$              -+           ?',
        '?                           ^     ^     xx xx x                  x x                              xxxxx                                                                                                       ()           ?',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', 
    ],
    [
        '                                                                                                                                     ',
        '                                                                                                                                     ',
        '                                         BSDHR                                                                                       ',
        '                                                                                                                                     ',
        '                                                                                                                                     ',
        '                                                                                                                                     ',
        '                              %G                                                                                                     ',
        '            X                                           $$$$              N                             X                            ',
        '                                                                                                 4                                   ',
        '                                        =============                           $$$$$          bbbb                                  ',
        '                                                                     0v                                                              ',
        '                             ^                                    bbbbb                      bbb                                     ',
        '                                                                                                                                     ',
        '               bbbbbbbbbbbbbbbbbbbb                                                       bbb                                        ',
        '                                                                                                                                     ',
        '                                                                                                      3         -+                   ',
        '         $$$$$$$$$   ^                                                  ^                                      ^()                   ',
        'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 
    ],

    [       

            '                                                                                                                                                                                                              ',
            '                                                                                                                                                                                                               ',     
            '                                                                                                                                                                                                               ',
            '                         GCSH               `                                                                     __                                                                                           ',
            '                                                                                                               bbbbbbb                                                                -+                       ',
            '                                                                                                                                                                                      ()                       ?',
            '                 N                                          N                 X                    9|[]Av                                             N                           !!!!!!!!!!!!!!!!!!!!!!!!!!!! ?',
            '                                                                                                bbbbbbbbbbb             bbbb                                                !!!!!                              ?',
            '                                                                                                                                                                                                               ?',
            '                         $$$$$$$$$$$$$         v   7.2                                                               ,                      $$$$$$$$                                                           ?',
            '                        ================================                 6u                                          bbb                                              !!!!!!!                                  ?',
            '                                                                                        bbbb                                            $$$$$$$$$                                                              ?',
            '                   ====                  qsu.                                         bbbbbb       kkkkkkkkkkk                                                      !!!                                        ?',
            '!                                                                  0,93             bbbbbbbb                                        $$$$$$$$$$$$$                                                              ?',
            '!                                                                                 bbbbbbbbbb                 6                                             7_6                                                 ?',
            '!              z             z                             z                     bbbbbbbbbbb                                                                                                                  ^?',
            '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', 
        ],
   

    ]
    



    //explain about the map
    const levelCfg ={
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'),'coin'],
        '%': [sprite('surprise'),solid(), 'coin-surprise'],
        '*': [sprite('surprise'),solid(), 'mushroom-surprise'],

        'B': [sprite('surprise'),solid(), 'bun-surprise'],
        'T': [sprite('surprise'),solid(), 'toy-surprise'],
        'G': [sprite('surprise'),solid(), 'gift-surprise'],
        'C': [sprite('surprise'),solid(), 'cake-surprise'],
        'S': [sprite('surprise'),solid(), 'suppu-surprise'],
        'D': [sprite('surprise'),solid(), 'drink-surprise'],
        'H': [sprite('surprise'),solid(), 'heart-surprise'],

        'F': [sprite('surprise'),solid(), 'food-surprise'],
        'E': [sprite('surprise'),solid(), 'diaper-surprise'],
        'M': [sprite('surprise'),solid(), 'milk-surprise'],
        'R': [sprite('surprise'),solid(), 'ring-surprise'],
        'L': [sprite('surprise'),solid(), 'bride-surprise'],
        'O': [sprite('surprise'),solid(), 'beer-surprise'],
        'W': [sprite('surprise'),solid(), 'letter-surprise'],


        '}': [sprite('unboxed'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(),scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(),scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(),scale(0.5), 'pipe'],
        '+': [sprite('pipe-top-right'), solid(),scale(0.5), 'pipe'],       
        '^': [sprite('evil-shroom'),solid(),'dangerous',body()],
        '#': [sprite('mushroom'),solid(),'mushroom',body()],
        'Q': [sprite('shroom'),solid(),'dangerous',body()],

        'e': [sprite('error'),solid(),'dangerous',body()],
        'w': [sprite('warning'),solid(),'dangerous',body()],
        'r': [sprite('rex'),solid(),'dangerous',body()],
        'n': [sprite('no-signel'),solid(),'dangerous',body()],

        '!': [sprite('blue-block'),solid(),scale(0.5)],
        '?': [sprite('blue-brick'),solid(),scale(0.5)],
        'z': [sprite('blue-evil-shroom'),solid(),scale(0.5),'dangerous'],
        '@': [sprite('blue-surprise'),solid(),scale(0.5),'coin-surprise'],
        '`': [sprite('blue-surprise'),solid(),scale(0.5),'mushroom-surprise'],
        'x': [sprite('blue-steel'),solid(),scale(0.5)],
        'U': [sprite('banner2'),scale(1)],

        'b': [sprite('brick'), solid()],
        'V': [sprite('board')],
        'I': [sprite('board2')],
        'N': [sprite('tree1')],
        'X': [sprite('tree2')],
        'Y': [sprite('bench')],

        'a' : [sprite('toy'),'coin'], 
        'f' : [sprite('abc'),solid(),'mushroom',body()], 
        'g' : [sprite('baby'),'coin'],
        'j' : [sprite('food'),'coin'],
        'k' : [sprite('three-heart'),'coin'],
        'o' : [sprite('beer'),solid(),'mushroom',body()],
        'q' : [sprite('book'),'coin'],
        's' : [sprite('bun'),'coin'],
        't' : [sprite('bride'),solid(),'mushroom',body()],
        'u' : [sprite('clock'),'coin'],
        'v' : [sprite('coffee'),'coin'],
        'y' : [sprite('diaper'),solid(),'mushroom',body()],
        '.' : [sprite('drink'),'coin'],
        '1' : [sprite('milk'),solid(),'mushroom', body()],
        '2' : [sprite('gift'),'coin'],
        '3' : [sprite('hearts'),'coin'],
        '4' : [sprite('lap'),'coin'],
        '5' : [sprite('letter'),solid(),'mushroom', body()],
        '6' : [sprite('bottle'),'coin'],
        '7' : [sprite('suppu'),'coin'],
        '8' : [sprite('ring'),solid(),'mushroom',body()],
        '9' : [sprite('duck'),'coin'],
        '0' : [sprite('sandwich'),'coin'],
        '_' : [sprite('bag'),'coin', ],
        ',' : [sprite('phone'),'coin'],
        '/' : [sprite('juice'),'coin'],
        '|' : [sprite('gifts'),'coin'],
        ']' : [sprite('bear'),'coin'],
        '[' : [sprite('mobile'),'coin'],
        'A' : [sprite('cake'),'coin',],




    }

    const gameLevel=addLevel( maps[level],levelCfg)


    //adding score to the ground
    const scoreLabel=add([
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value: score,
        }
    ])
    add([text('level' + parseInt(level + 1)) ,pos(40,6)])



    //shold happen when mario big
    function big(){
        let timer = 0
        let isBig = false
        return{
            update(){
                if(isBig){
                    CURRENT_JUMP_FORCE=BIG_JUMP_FORCE
                    timer-= dt()
                    if(timer<=0){
                        this.smallify()
                    }
                }
            },
            isBig(){
                return isBig

            },
            //when mario small
            smallify(){
                this.scale=vec2(1),
                CURRENT_JUMP_FORCE=JUMP_SPACE
                timer=0
                isBig=false
            },
            //whwn mario big
            biggify(time){
                this.scale=vec2(2),
                
                timer=time
                isBig=true
            },

        }
    }

    //mario added to the ground
    const player=add([
        sprite('mario'),solid(),
        pos(30,0),
        body(),
        big(),
        origin('bot')
    ])

    //mushroom moves to right
    action('mushroom',(m)=>{
        m.move(20,0)
    })

    //destroy the block and display the coin
    player.on("headbump",(obj)=>{
        if(obj.is('coin-surprise')){
            gameLevel.spawn('$',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('bun-surprise')){
            gameLevel.spawn('s',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('heart-surprise')){
            gameLevel.spawn('3',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('toy-surprise')){
            gameLevel.spawn('a',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('gift-surprise')){
            gameLevel.spawn('2',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('cake-surprise')){
            gameLevel.spawn('A',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('suppu-surprise')){
            gameLevel.spawn('7',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('drink-surprise')){
            gameLevel.spawn('.',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('mushroom-surprise')){
            gameLevel.spawn('#',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('food-surprise')){
            gameLevel.spawn('f',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('diaper-surprise')){
            gameLevel.spawn('y',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('milk-surprise')){
            gameLevel.spawn('1',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('letter-surprise')){
            gameLevel.spawn('5',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('ring-surprise')){
            gameLevel.spawn('8',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('bride-surprise')){
            gameLevel.spawn('t',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
        if(obj.is('beer-surprise')){
            gameLevel.spawn('o',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.sub(0,0))
        }
    })

    //when collides mushroom player get bigger
    player.collides('mushroom', (m)=>{
        destroy(m)
        player.biggify(6)
    })

    player.collides('coin',(c)=>{
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value

    })


    const ENEMY_SPEED=20
    action('dangerous',(d)=>{
        d.move(-ENEMY_SPEED,0)
    })


    //if mario collides with jump evil will destroy and else mario destroy
    player.collides('dangerous', (d)=>{
        if (isJumping){
            destroy(d)
        }
        else{
            go('lose',{ score: scoreLabel.value})

        }
        
    })
    player.action(()=>{
        camPos(player.pos)
        if(player.pos.y >= FALL_DEATH){
            go('lose',{ score: scoreLabel.value})
        }
    })

    player.action(() =>{

        if(player.grounded()){
            isJumping = false
        }
    })

    player.collides('pipe',()=>{
        keyPress('down',()=>{
            go('game',{
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    

    

    //key events for game play
    keyDown('left',()=>{
        player.move(-MOVE_SPEED,0)
    })

    keyDown('right',()=>{
        player.move(MOVE_SPEED,0)
    })

    keyPress('space',()=>
    {
        if(player.grounded()){
            isJumping = true
            player.jump(CURRENT_JUMP_FORCE)
        }
    })

    //key events ends
    
})


scene('lose', ({ score }) => {
    add([text(score,32), origin('center'), pos(width()/2, height()/2)])
})

 

start("game",{level: 0 ,score: 0})