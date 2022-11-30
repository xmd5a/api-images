"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const services_1 = require("../services");
const imagesRouter = express_1.default.Router();
exports.imagesRouter = imagesRouter;
/* GET images. */
imagesRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, services_1.getImages)());
    }
    catch (err) {
        console.error(`Error while getting images`, err.message);
        next(err);
    }
}));
