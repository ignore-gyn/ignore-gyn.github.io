/*global PIXI*/
// let type = "WebGL"
// if(!PIXI.utils.isWebGLSupported()){
//   type = "canvas"
// }

// PIXI.utils.sayHello(type)

var width = 640;    // 描画エリアのサイズ
    var height = 880;
    var params = {
        backgroundColor: 0xa0a0a0   // 背景色の指定（灰色）
    };
    var renderer = PIXI.autoDetectRenderer(width, height, params);  // レンダラー生成

    // DOM操作にjQueryを使用するので事前に読み込んでおくこと
    $("body").append(renderer.view);    // DOMにレンダラーのビューを追加

    var stage = new PIXI.Container();   // ステージを生成
    renderer.render(stage);     // レンダラーにステージを描画させる


// var game = game || {};

// const app = new PIXI.Application();

// /**
//  * Play the animation.
//  * @param {String} name Animation name
//  */
// // The application will create a canvas element for you that you
// // can then insert into the DOM
// document.body.appendChild(app.view);

// // load the texture we need
// PIXI.Loader.shared.add('battlechara_base', 'battlechara_base.png').load((loader, resources) => {
//     // This creates a texture from a 'bunny.png' image
//     const chara_base = new PIXI.Sprite(resources.bunny.texture);

//     // Setup the position of the bunny
//     chara_base.x = app.renderer.width / 2;
//     chara_base.y = app.renderer.height / 2;

//     // Rotate around the center
//     chara_base.anchor.x = 0.5;
//     chara_base.anchor.y = 0.5;

//     // Add the bunny to the scene we are building
//     app.stage.addChild(bunny);

//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         bunny.rotation += 0.01;
//     });
// });

