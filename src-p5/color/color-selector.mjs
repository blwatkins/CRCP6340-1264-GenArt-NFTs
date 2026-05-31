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

import {
    azureColorGenerator,
    blackColorGenerator,
    blueColorGenerator,
    cyanColorGenerator,
    grayColorGenerator,
    greenColorGenerator,
    limeColorGenerator,
    magentaColorGenerator,
    orangeColorGenerator,
    plumColorGenerator,
    purpleColorGenerator,
    redColorGenerator,
    tealColorGenerator,
    whiteColorGenerator,
    yellowColorGenerator, PaletteColorGenerator
} from './color-generator.mjs';

/**
 * @type {ColorGenerator[]}
 */
const colorGenerators = [
    redColorGenerator,
    orangeColorGenerator,
    yellowColorGenerator,
    greenColorGenerator,
    tealColorGenerator,
    cyanColorGenerator,
    blueColorGenerator,
    purpleColorGenerator,
    magentaColorGenerator,
    limeColorGenerator,
    plumColorGenerator,
    azureColorGenerator,
    blackColorGenerator,
    grayColorGenerator,
    whiteColorGenerator,
    new PaletteColorGenerator(['#0A2342', '#2CA58D', '#84BC9C', '#FFFDF7', '#F46197']),
    new PaletteColorGenerator(['#DABFFF', '#907AD6', '#4F518C', '#2C2A4A', '#7FDEFF']),
    new PaletteColorGenerator(['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0']),
    new PaletteColorGenerator(['#FFD9DA', '#EA638C', '#89023E', '#30343F', '#1B2021']),
    new PaletteColorGenerator(['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'])
];

/**
 * @returns {ColorGenerator}
 */
function getRandomGenerator() {
    return Random.randomElement(colorGenerators);
}

export class ColorSelector {
    /**
     * @type {ColorGenerator[]}
     */
    #colorGenerators = [];

    /**
     * @type {p5.Color}
     */
    #background;

    /**
     * @param {p5} ctx
     * @param {number} generatorCount
     */
    constructor(ctx, generatorCount = 1) {
        if (typeof generatorCount !== 'number' || generatorCount < 1) {
            throw new RangeError('generatorCount must be a number greater than or equal to 1.');
        }

        for (let i = 0; i < generatorCount; i++) {
            this.#colorGenerators.push(getRandomGenerator());
        }

        this.#setBackgroundColor(ctx);
    }

    /**
     * @param {p5} ctx
     * @returns {p5.Color}
     */
    getColor(ctx) {
        const generator = this.#getRandomGenerator();
        return generator.getColor(ctx);
    }

    /**
     * @returns {p5.Color}
     */
    getBackground() {
        return this.#background;
    }

    /**
     * @returns {ColorGenerator}
     */
    #getRandomGenerator() {
        return Random.randomElement(this.#colorGenerators);
    }

    /**
     * @param {p5} ctx
     */
    #setBackgroundColor(ctx) {
        const colors = [ctx.color(0), ctx.color(255), this.getColor(ctx)];
        return Random.randomElement(colors);
    }
}
