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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = exports.getImages = exports.addImage = void 0;
const db_1 = require("./db");
const getImages = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, db_1.query)("SELECT * from images");
    return data;
});
exports.getImages = getImages;
const getImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, db_1.query)("SELECT * from images");
    return data;
});
exports.getImage = getImage;
const addImage = ({ title, image }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`INSERT INTO images (title, image) VALUES ('${title}', '${image}')`);
    let message = "Error in creating image";
    if (result) {
        message = "Image created successfully";
    }
    return { message };
});
exports.addImage = addImage;
