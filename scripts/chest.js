export default class chest {
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
        this.drawpic = true;
    }
    draw(ctx)
        {
            if(this.drawpic == true)
            {
            const imagePath = './images/chest.png';
            const img = new Image();
            img.src = imagePath;
            
            
            ctx.drawImage(img, 0, 0, 800, 800); // Scale image to fit canvas
            }
        }
}