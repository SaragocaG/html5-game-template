import * as Phaser from 'phaser';
import './style.css'

//@ts-ignore
window.game = new Phaser.Game({
    type: Phaser.AUTO,
    width: document?.documentElement?.clientWidth || 800,
    height: document?.documentElement?.clientHeight || 600,
    scene: [],
});
