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
    yellowColorGenerator,
    PaletteColorGenerator
} from './color-generator.mjs';

/**
 * @type {ColorGenerator[]}
 */
export const colorGenerators = [
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
    new PaletteColorGenerator(['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF']),
    new PaletteColorGenerator(['#dfebf1', '#a4c0df', '#7a9ec7', '#3e6589', '#052542']),
    new PaletteColorGenerator(['#badaee', '#8cc2e3', '#61879e', '#b7bee1', '#dedede']),
    new PaletteColorGenerator(['#e3d4ed', '#c9c1cd', '#baaac5', '#8f81a7', '#775a90']),
    new PaletteColorGenerator(['#f7f4e9', '#ebdbc1', '#7d8778', '#74583e', '#5e4662', '#131210']),
    new PaletteColorGenerator(['#2a314b', '#415676', '#637ea1', '#89aacd', '#b7d9f5']),
    new PaletteColorGenerator(['#9994d6', '#9fade0', '#aec4ea', '#b9daee', '#c7ecf0']),
    new PaletteColorGenerator(['#1c101e', '#3f0d2a', '#610a34', '#930643', '#e8025e']),
    new PaletteColorGenerator(['#6a907f', '#a2c3b1', '#cee4df', '#ebf4f4', '#f5fff7']),
    new PaletteColorGenerator(['#cad3c5', '#84a98c', '#537970', '#344d50', '#2f3e46']),
    new PaletteColorGenerator(['#ff5c5c', '#ffa852', '#ffce5c', '#b8e77e', '#63c57f']),
    new PaletteColorGenerator(['#000000', '#444444', '#FFFBFC', '#AC206A', '#3C91E6']),
    new PaletteColorGenerator(['#000000', '#444444', '#71B340', '#AC206A', '#3C91E6']),
    new PaletteColorGenerator(['#000000', '#444444', '#D17A22', '#AC206A', '#3C91E6']),
    new PaletteColorGenerator(['#ff00a9', '#8000ff', '#f0ff07', '#a5ff0b', '#00ddff']),
    new PaletteColorGenerator(['#94dfca', '#435f54', '#120a0a', '#230717', '#260606']),
    new PaletteColorGenerator(['#785995', '#4f2597', '#352672', '#1c2d4a', '#073224', '#122a1b']),
    new PaletteColorGenerator(['#cecfcb', '#babfb8', '#93828f', '#6a4165', '#44063c', '#39052b']),
    new PaletteColorGenerator(['#ffa951', '#ff6f4b', '#e13661', '#a11477', '#1e1a75']),
    new PaletteColorGenerator(['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC']),
    new PaletteColorGenerator(['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE', '#48BFE3', '#56CFE1', '#64DFDF', '#72EFDD', '#80FFDB']),
    new PaletteColorGenerator(['#d5e2ea', '#fcc936', '#12b8a9', '#12828b', '#923367', '#66215a']),
    new PaletteColorGenerator(['#f6f4ef', '#5d1f1e', '#ffe500', '#006ca9', '#301885', '#110044']),
    new PaletteColorGenerator(['#f5f1ea', '#f9a3aa', '#f5576c', '#004953', '#0f282f', '#070d0d']),
    new PaletteColorGenerator(['#f9fcf3', '#a47299', '#672f58', '#a77c5d', '#7e473f', '#26243e']),
    new PaletteColorGenerator(['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02', '#E85D04', '#F48C06', '#FAA307', '#FFBA08']),
    new PaletteColorGenerator(['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8', '#48CAE4', '#90E0EF', '#ADE8F4', '#CAF0F8']),
    new PaletteColorGenerator(['#121212', '#393D3F', '#D3D4D6', '#928E80', '#857C7B', '#334956', '#223843', '#19414D', '#28253A']),
    new PaletteColorGenerator(['#cfae29', '#32843b', '#241b20', '#4e2475', '#ffb22b']),
    new PaletteColorGenerator(['#5BCEFA', '#F5A9B8', '#FFFFFF']),
    new PaletteColorGenerator(['#D60270', '#9B4F96', '#0038A8']),
    new PaletteColorGenerator(['#E40303', '#FF8C00', '#FFED00', '#008026', '#004CFF', '#732982']),
    new PaletteColorGenerator(['#000000', '#502F4C', '#70587C', '#C8B8DB', '#F9F4F5']),
    new PaletteColorGenerator(['#000000', '#7F95D1', '#FF82A9', '#FFC0BE', '#FFEBE7']),
    new PaletteColorGenerator(['#003494', '#FFD000', '#D9F0FF', '#A3D5FF', '#83C9F4']),
    new PaletteColorGenerator(['#FCF434', '#FFFFFF', '#9C59D1', '#2C2C2C']),
    new PaletteColorGenerator(['#000000', '#ef6fb5', '#f9f9ea', '#cbacee', '#aaf1ed']),
    new PaletteColorGenerator(['#f9f6f4', '#e8eaea', '#648d95', '#92555b', '#5b4148', '#e6be9c']),
    new PaletteColorGenerator(['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557']),
    new PaletteColorGenerator(['#BB1212', '#DD7F7F', '#EEEEEE', '#537DA3', '#0E5493']),
    new PaletteColorGenerator(['#FF0000', '#FF8484', '#FFFFFF', '#81FCFF', '#00D2FF']),
    new PaletteColorGenerator(['#FF0000', '#FFFFFF', '#0900FF']),
    new PaletteColorGenerator(['#FF0000', '#FFFFFF', '#4B7BFF']),
    new PaletteColorGenerator(['#511F1F', '#5E2F2F', '#DDDCDC', '#36426D', '#2E225C']),
    new PaletteColorGenerator(['#FFFFFF', '#FFD8D8', '#FFA6A6', '#B7CEFF', '#D0F2FF']),
    new PaletteColorGenerator(['#B31942', '#0A3161']),
    new PaletteColorGenerator(['#65204E', '#3C2939', '#4E3B4A', '#37202f', '#FBC253', '#312942', '#FEF9F3']),
    new PaletteColorGenerator(['#FDFAF1', '#FADFD2', '#C6DECF', '#DEBEEF', '#59529C', '#02273A']),
    new PaletteColorGenerator(['#403A60', '#F5DADF', '#E782A9', '#C04C36', '#73381D', '#3F2021']),
    new PaletteColorGenerator(['#FDFAF1', '#F5E5CE', '#DDBBFF', '#E5C1A3', '#275779', '#4D213D']),
    new PaletteColorGenerator(['#FAEADD', '#F29CB7', '#FBCF4F', '#DDAAFF', '#522A6F', '#222023']),
    new PaletteColorGenerator(['#F9F8EF', '#E5DCD6', '#E4898A', '#A65570', '#94B8C1', '#1A161D']),
    new PaletteColorGenerator(['#F3FCE1', '#BDF7EF', '#B9DCF2', '#D6C8EE', '#F8C6DB']),
    new PaletteColorGenerator(['#FFC1CF', '#E8FFB7', '#E2A0FF', '#C4F5FC', '#B7FFD8']),
    new PaletteColorGenerator(['#531CB3', '#944BBB', '#AA7BC3', '#CC92C2']),
    new PaletteColorGenerator(['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787', '#FFFFFF', '#FFAFC8', '#74D7EE', '#613915', '#000000']),
    new PaletteColorGenerator(['#078D70', '#26CEAA', '#98E8C1', '#FFFFFF', '#7BADE2', '#5049CC', '#3D1A78']),
    new PaletteColorGenerator(['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A30262']),
    new PaletteColorGenerator(['#F5E9CE', '#432E6F', '#FFA102', '#DD5533', '#BC2D29', '#450E15']),
    new PaletteColorGenerator(['#FEB1CD', '#000000', '#886EF6', '#BDEF80', '#205E2D']),
    new PaletteColorGenerator(['#2E073F', '#7A1CAC', '#AD49E1', '#EBD3F8']),
    new PaletteColorGenerator(['#EAEAEA', '#893168', '#4A1942', '#2E1C2B', '#050404']),
    new PaletteColorGenerator(['#FF7100', '#FD9702', '#E102FF', '#AE03FF', '#000000']),
    new PaletteColorGenerator(['#2BD011', '#8929BF', '#FD7708', '#FDE500', '#000000']),
    new PaletteColorGenerator(['#2BD011', '#8929BF', '#FD7708', '#FDE500', '#000000']),
    new PaletteColorGenerator(['#000000', '#ff6c00', '#9700f8', '#1dff00', '#000000']),
    new PaletteColorGenerator(['#000000', '#D04000', '#EB7800', '#7200A5', '#1C9A00']),
    new PaletteColorGenerator(['#FF7518', '#855294', '#721F92', '#3D0d52', '#1D002D']),
    new PaletteColorGenerator(['#3C3C3C', '#A5FFA7', '#FFBB75', '#E0B6FF', '#FF8BBE']),
    new PaletteColorGenerator(['#EA7C4C', '#94F66D', '#56D465', '#845DC1', '#6834AB']),
    new PaletteColorGenerator(['#B65919', '#000000', '#286849', '#570E3B', '#67503A']),
    new PaletteColorGenerator(['#562c74', '#b45b00', '#000000', '#dddddd', '#234b1a']),
    new PaletteColorGenerator(['#483D6D', '#9965BD', '#CAEC6C', '#69AE4E', '#F08831']),
    new PaletteColorGenerator(['#010101', '#1D002D', '#3D0D52', '#721F92', '#DD69D9']),
    new PaletteColorGenerator(['#1F1D4B', '#382F50', '#5E2B66', '#A17539', '#978A60']),
    new PaletteColorGenerator(['#000000', '#444444', '#5F5F5F', '#797979', '#AC206A']),
    new PaletteColorGenerator(['#4B5D67', '#1A2626', '#170114', '#331134', '#464057'])
];
