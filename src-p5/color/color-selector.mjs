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

import { colorGenerators } from './color-generators.mjs';

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
        if (!Number.isInteger(generatorCount) || generatorCount < 1) {
            throw new RangeError('generatorCount must be an integer greater than or equal to 1.');
        }

        for (let i = 0; i < generatorCount; i++) {
            this.#colorGenerators.push(getRandomGenerator());
        }

        this.#background = this.#setBackgroundColor(ctx);
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
