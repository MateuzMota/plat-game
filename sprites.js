function sprite(img, x, y, w, h) {
    function draw(ctx, xcanvas, ycanvas, w = this.w, h = this.h) {
        ctx.drawImage(img, this.x, this.y, this.w, this.h, xcanvas, ycanvas, w, h);
    }

    return {
        x,
        y,
        w,
        h,
        draw
    }
}
