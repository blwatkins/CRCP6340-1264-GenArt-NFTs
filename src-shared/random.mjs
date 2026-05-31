/*
 * Copyright (c) 2025-2026 Brittni Watkins.
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

import { loadSeed } from './seeded-random.mjs';

export class Random {
    /**
     * @type {() => number}
     */
    static #randomFunction = Math.random;

    /**
     * @param {() => number} randomFunction
     */
    static set rand(randomFunction) {
        if (!randomFunction || typeof randomFunction !== 'function') {
            Random.#randomFunction = Math.random;
            return;
        }

        Random.#randomFunction = randomFunction;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static random(min, max) {
        return (Random.#randomFunction() * (max - min)) + min;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static randomFloat(min, max) {
        return Random.random(min, max);
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static randomInt(min, max) {
        return Math.floor(Random.randomFloat(min, max));
    }

    /**
     * @returns {boolean}
     */
    static randomBoolean() {
        return Random.randomFloat(0, 1) < 0.5;
    }

    /**
     * @param {unknown[]} elements
     * @returns {unknown}
     */
    static randomElement(elements) {
        if (!Array.isArray(elements) || elements.length === 0) {
            throw new Error('Elements must be a non-empty array.');
        }

        const index = Random.randomInt(0, elements.length);
        return elements[index];
    }
}

/**
 * @return {Promise<void>}
 */
export async function loadRandomSeed() {
    await loadSeed();

    if (window.$crcp?.seedRand) {
        if (window.$crcp.seedData) {
            console.debug(`Seed Data`, window.$crcp.seedData);
        }

        Random.rand = window.$crcp.seedRand.next.bind(window.$crcp.seedRand);
    } else {
        console.info('No seed input provided, using default random number generator.');
    }
}
