"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
class Session {
    getPage() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.browser) {
                this.browser = yield puppeteer_1.default.launch();
            }
            if (!this.page) {
                this.page = yield this.browser.newPage();
            }
            return this.page;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.browser) {
                return;
            }
            yield this.browser.close();
            this.browser = undefined;
        });
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map