"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __importDefault(require("./init"));
exports.default = (function () {
    var argument = process.argv[2];
    if (!argument || argument === 'init') {
        init_1.default();
    }
});
