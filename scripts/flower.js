export default class flower {
    constructor() 
    {
        this.gridsize = 3;
        this.size = 64; //radius//
        this.xpos = 50
        this.ypos = 400
        this.inventory = [];
        this.inventorysize = 3;
        this.selected = 0;
        this.usingitem = false;
    }
    draw(ctx)
        {
            const imagePath = './images/tulips.png';
            const img = new Image();
            img.src = imagePath;
            
            ctx.drawImage(img, 100, 0, 600, 600); // Scale image to fit canvas
        
        
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.rect((this.selected * 40), 760, 40, 40);
            ctx.stroke();
            ctx.restore();

            ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("heyyyy kami, i know you like flowers and tulips, so i tried", 10, 630);
                ctx.fillText("to draw flowers on my mouse, i hope you enjoy something", 10, 660);
                ctx.fillText("as small as this, its not alot, but i just thought you'd enjoy", 10, 690);
                ctx.fillText("this, please get well kami, i love youuu <3", 10, 720);
                ctx.fillText("i just wish this would bring a smile, no matter how small", 10, 750);
                ctx.fillText("kocham cie kochanie", 10, 780);

        }
}