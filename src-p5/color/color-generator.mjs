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

import { Random } from '../../src-shared/random.mjs';

export class ColorGenerator {
    /**
     * @param {p5} ctx
     * @returns {p5.Color}
     */
    getColor(ctx) {
        return ctx.color(0);
    }
}

export class RGBColorGenerator extends ColorGenerator {
    /**
     * @type {{red: {min: number, max: number}, green: {min: number, max: number}, blue: {min: number, max: number}}}
     */
    #ranges = {
        red: { min: 0, max: 255 },
        green: { min: 0, max: 255 },
        blue: { min: 0, max: 255 }
    };

    /**
     * @param {{red: {min: number, max: number}, green: {min: number, max: number}, blue: {min: number, max: number}}} ranges
     */
    constructor(ranges) {
        super();

        if (!ranges || typeof ranges !== 'object' || !ranges.red || !ranges.green || !ranges.blue) {
            throw new TypeError('ranges must be an object with red, green, and blue range definitions.');
        }

        this.#ranges.red = { ...ranges.red };
        this.#ranges.green = { ...ranges.green };
        this.#ranges.blue = { ...ranges.blue };
    }

    /**
     * @param {p5} ctx
     * @returns {p5.Color}
     */
    getColor(ctx) {
        const r = Random.randomInt(this.#ranges.red.min, this.#ranges.red.max);
        const g = Random.randomInt(this.#ranges.green.min, this.#ranges.green.max);
        const b = Random.randomInt(this.#ranges.blue.min, this.#ranges.blue.max);
        return ctx.color(r, g, b);
    }
}

export class GrayColorGenerator extends ColorGenerator {
    /**
     * @type {{min: number, max: number}}
     */
    #range = {
        min: 0, max: 255
    };

    /**
     * @param {{min: number, max: number}} range
     */
    constructor(range) {
        super();
        this.#range = { ...range };
    }

    /**
     * @param {p5} ctx
     * @returns {p5.Color}
     */
    getColor(ctx) {
        const gray = Random.randomInt(this.#range.min, this.#range.max);
        return ctx.color(gray);
    }
}

export class PaletteColorGenerator extends ColorGenerator {
    /**
     * @type {string[]}
     */
    #colors = [];

    /**
     * @param {string[]} colors
     */
    constructor(colors) {
        super();

        if (!Array.isArray(colors) || colors.length === 0) {
            throw new Error('colors must be an array with at least one color.');
        }

        this.#colors.push(...colors);
    }

    getColor(ctx) {
        const index = Random.randomInt(0, this.#colors.length);
        return ctx.color(this.#colors[index]);
    }
}

/**
 * @type {RGBColorGenerator}
 */
export const redColorGenerator = new RGBColorGenerator({
    red: { min: 125, max: 255 },
    green: { min: 0, max: 125 },
    blue: { min: 0, max: 125 }
});

/**
 * @type {RGBColorGenerator}
 */
export const greenColorGenerator = new RGBColorGenerator({
    red: { min: 0, max: 125 },
    green: { min: 125, max: 255 },
    blue: { min: 0, max: 125 }
});

/**
 * @type {RGBColorGenerator}
 */
export const blueColorGenerator = new RGBColorGenerator({
    red: { min: 0, max: 125 },
    green: { min: 0, max: 125 },
    blue: { min: 125, max: 255 }
});

/**
 * @type {RGBColorGenerator}
 */
export const cyanColorGenerator = new RGBColorGenerator({
    red: { min: 0, max: 125 },
    green: { min: 125, max: 255 },
    blue: { min: 125, max: 255 }
});

/**
 * @type {RGBColorGenerator}
 */
export const magentaColorGenerator = new RGBColorGenerator({
    red: { min: 125, max: 255 },
    green: { min: 0, max: 125 },
    blue: { min: 125, max: 255 }
});

/**
 * @type {RGBColorGenerator}
 */
export const yellowColorGenerator = new RGBColorGenerator({
    red: { min: 125, max: 255 },
    green: { min: 125, max: 255 },
    blue: { min: 0, max: 125 }
});

/**
 * @type {RGBColorGenerator}
 */
export const orangeColorGenerator = new RGBColorGenerator({
    red: { min: 125, max: 255 },
    green: { min: 85, max: 170 },
    blue: { min: 0, max: 125 }
});

/**
 * @type {RGBColorGenerator}
 */
export const limeColorGenerator = new RGBColorGenerator({
    red: { min: 85, max: 170 },
    green: { min: 125, max: 255 },
    blue: { min: 0, max: 125 }
});

/**
 * @type {RGBColorGenerator}
 */
export const tealColorGenerator = new RGBColorGenerator({
    red: { min: 0, max: 125 },
    green: { min: 125, max: 255 },
    blue: { min: 85, max: 170 }
});

/**
 * @type {RGBColorGenerator}
 */
export const azureColorGenerator = new RGBColorGenerator({
    red: { min: 0, max: 125 },
    green: { min: 85, max: 170 },
    blue: { min: 125, max: 255 }
});

/**
 * @type {RGBColorGenerator}
 */
export const purpleColorGenerator = new RGBColorGenerator({
    red: { min: 85, max: 175 },
    green: { min: 0, max: 125 },
    blue: { min: 125, max: 255 }
});

/**
 * @type {RGBColorGenerator}
 */
export const plumColorGenerator = new RGBColorGenerator({
    red: { min: 125, max: 255 },
    green: { min: 0, max: 125 },
    blue: { min: 85, max: 175 }
});

/**
 * @type {GrayColorGenerator}
 */
export const blackColorGenerator = new GrayColorGenerator({
    min: 0,
    max: 85
});

/**
 * @type {GrayColorGenerator}
 */
export const grayColorGenerator = new GrayColorGenerator({
    min: 85,
    max: 170
});

/**
 * @type {GrayColorGenerator}
 */
export const whiteColorGenerator = new GrayColorGenerator({
    min: 170,
    max: 255
});
