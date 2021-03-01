"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __importDefault(require("./init"));
var main = function () {
    console.log('** GRAYMATE **');
    var argument = process.argv[2];
    try {
        if (!argument || argument === 'init') {
            init_1.default();
        }
        else {
            throw new Error('Unrecognized command. Closing GRAYMATE');
        }
    }
    catch (e) {
        console.error(e);
    }
};
main();
exports.default = main;
