/*global PIXI*/
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)

/**
 * Initialize container and renderer
 */
let stage = new PIXI.Container();
let chara_container = new PIXI.Container();
let renderer = PIXI.autoDetectRenderer(800, 600, {
    antialias: false,
    backgroundColor: 0x00ffd4,
    // transparent: true
});

/**
 * Initialize texture
 */
const CHARA_DIR = {
    FRONT: 0,
    LEFT: 1,
    RIGHT: 2,
    BACK: 3
};
let loader = new PIXI.loaders.Loader();
loader
    .add("sprite", "./image/walk_base_x2.json")
    .once('complete', function(){

    let txt_walk_base = [];
    let anm_walk_base = [];

    for (let i = 0; i < 4; i++) {
        txt_walk_base[i] = [];
        for (let j = 0; j < 4; j++) {
            txt_walk_base[i].push(PIXI.Texture.fromFrame("walk_base_" + i + "_" + (j === 3 ? 1 : j)));
        }

        anm_walk_base.push(new PIXI.extras.AnimatedSprite(txt_walk_base[i]));
        anm_walk_base[i].play();
        anm_walk_base[i].animationSpeed = 0.1;
        // anm_walk_base[i].position.set(150*(i+1), 150);
        anm_walk_base[i].position.set(150, 150);
        anm_walk_base[i].visible = false;
        chara_container.addChild(anm_walk_base[i]);
    }

    document.addEventListener('keydown', handleKeyDown);
    
    let cur_anm_spr = anm_walk_base[0];

    function handleKeyDown(e){
        let key = e.key;
        let k;
        /**
         * キーボードの矢印キーに対応したテクスチャに変更
         */
        switch (key) {

            case 'ArrowLeft':
            console.log('left');
            k = CHARA_DIR.LEFT;
            break;

            case 'ArrowUp':
            console.log('up');
            k = CHARA_DIR.BACK;
            break;

            case 'ArrowRight':
            console.log('right');
            k = CHARA_DIR.RIGHT;
            break;

            case 'ArrowDown':
            console.log('down');
            k = CHARA_DIR.FRONT;
            break;

            default:
            k = -1;
            break;
        }

        if (k >= 0) {
            cur_anm_spr.visible = false;
            anm_walk_base[k].visible = true;
            cur_anm_spr = anm_walk_base[k];
        }
    }
});

/**
 * Start
 */
window.onload = () => {
    document.getElementById("stage").appendChild(renderer.view);
               
    let animation = function(){
        requestAnimationFrame(animation);   // animation関数の再帰呼び出し...こうやるもんなのか？
        renderer.render(stage);
        renderer.render(chara_container);
    };
    
    loader.load();
    animation();
};

