/*
 * Copyright (c) 2026 Brittni Watkins.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

import { CanvasDimensions } from '../src-shared/canvas-dimensions.js';
import { Random } from '../src-shared/random.mjs';

import { ColorSelector } from './color/color-selector.mjs';

/**
 * @param {p5} ctx
 */
export function dots(ctx) {
    class Circle {
        constructor() {
            this.x = Random.randomFloat(0, ctx.width);
            this.y = Random.randomFloat(0, ctx.height);
            this.d = Random.randomFloat(5, 200);
            this.color = colorSelector.getColor(ctx);
            this.color.setAlpha(Random.randomInt(85, 255));
            this.strokeWeight = Random.randomFloat(0.5, 25);

            if (dotType === 'fill') {
                this.isColorFill = true;
            } else if (dotType === 'stroke') {
                this.isColorFill = false;
            } else {
                this.isColorFill = Random.randomBoolean();
            }
        }

        render() {
            if (this.isColorFill) {
                ctx.fill(this.color);
                ctx.noStroke();
            } else {
                ctx.strokeWeight(this.strokeWeight);
                ctx.stroke(this.color);
                ctx.noFill();
            }

            ctx.ellipse(this.x, this.y, this.d, this.d);
        }
    }

    /**
     * @type {number}
     */
    let totalCircles;

    /**
     * @type {Circle[]}
     */
    const circles = [];

    /**
     * @type {ColorSelector}
     */
    let colorSelector;

    /**
     * @type {string[]}
     */
    const dotTypes = ['fill', 'stroke', 'mixed'];

    /**
     * @type {string}
     */
    let dotType;

    ctx.setup = () => {
        CanvasDimensions.aspectRatio = { widthRatio: 1, heightRatio: 1 };
        CanvasDimensions.resolution = 1080;
        const { width: canvasWidth, height: canvasHeight } = CanvasDimensions.getDimensions();
        const canvas = ctx.createCanvas(canvasWidth, canvasHeight);
        decorateCanvas(canvas);

        totalCircles = Random.randomInt(1, 500);

        colorSelector = new ColorSelector(ctx, Random.randomInt(1, 5));

        dotType = Random.randomElement(dotTypes);

        for (let i = 0; i < totalCircles; i++) {
            circles.push(new Circle());
        }
    };

    ctx.draw = () => {
        ctx.background(colorSelector.getBackground());
        circles.forEach((circle) => {
            circle.render();
        });
    };

    ctx.windowResized = () => {
        const canvas = ctx.select('canvas');

        if (canvas) {
            decorateCanvas(canvas);
        }
    };

    /**
     * @param {p5.Element} canvas
     */
    function decorateCanvas(canvas) {
        const canvasFill = CanvasDimensions.getCanvasFill();

        if (canvasFill === 'width') {
            canvas.attribute('style', 'width: 100vw;');
        } else {
            canvas.attribute('style', 'height: 100vh;');
        }
    }
}
