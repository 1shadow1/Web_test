"use strict";
self["webpackHotUpdate"]("main",{

/***/ "../../../Framework/src/motion/cubismmotionmanager.ts":
/*!************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionmanager.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMotionManager = void 0;
var cubismmotionqueuemanager_1 = __webpack_require__(/*! ./cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts");
var CubismMotionManager = (function (_super) {
    __extends(CubismMotionManager, _super);
    function CubismMotionManager() {
        var _this = _super.call(this) || this;
        _this._currentPriority = 0;
        _this._reservePriority = 0;
        return _this;
    }
    CubismMotionManager.prototype.getCurrentPriority = function () {
        return this._currentPriority;
    };
    CubismMotionManager.prototype.getReservePriority = function () {
        return this._reservePriority;
    };
    CubismMotionManager.prototype.setReservePriority = function (val) {
        this._reservePriority = val;
    };
    CubismMotionManager.prototype.startMotionPriority = function (motion, autoDelete, priority) {
        if (priority == this._reservePriority) {
            this._reservePriority = 0;
        }
        this._currentPriority = priority;
        return _super.prototype.startMotion.call(this, motion, autoDelete, this._userTimeSeconds);
    };
    CubismMotionManager.prototype.updateMotion = function (model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        var updated = _super.prototype.doUpdateMotion.call(this, model, this._userTimeSeconds);
        if (this.isFinished()) {
            this._currentPriority = 0;
        }
        return updated;
    };
    CubismMotionManager.prototype.reserveMotion = function (priority) {
        if (priority <= this._reservePriority ||
            priority <= this._currentPriority) {
            return false;
        }
        this._reservePriority = priority;
        console.log(this._reservePriority);
        return true;
    };
    return CubismMotionManager;
}(cubismmotionqueuemanager_1.CubismMotionQueueManager));
exports.CubismMotionManager = CubismMotionManager;
var $ = __importStar(__webpack_require__(/*! ./cubismmotionmanager */ "../../../Framework/src/motion/cubismmotionmanager.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionManager = $.CubismMotionManager;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c908081ee88d5fb42efc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZDA2MTdlZDE4MmUwNGFlY2NmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0Esb0pBR29DO0FBT3BDO0lBQXlDLHVDQUF3QjtJQUkvRDtRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQUZDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7SUFDNUIsQ0FBQztJQU1NLGdEQUFrQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFNTSxnREFBa0IsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBTU0sZ0RBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBVU0saURBQW1CLEdBQTFCLFVBQ0UsTUFBcUIsRUFDckIsVUFBbUIsRUFDbkIsUUFBZ0I7UUFFaEIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBRWpDLE9BQU8saUJBQU0sV0FBVyxZQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQVVNLDBDQUFZLEdBQW5CLFVBQW9CLEtBQWtCLEVBQUUsZ0JBQXdCO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQztRQUUxQyxJQUFNLE9BQU8sR0FBWSxpQkFBTSxjQUFjLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTVFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBU00sMkNBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsSUFDRSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUNqQztZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSUgsMEJBQUM7QUFBRCxDQUFDLENBbkd3QyxtREFBd0IsR0FtR2hFO0FBbkdZLGtEQUFtQjtBQXNHaEMsK0hBQTJDO0FBRTNDLElBQWlCLHFCQUFxQixDQUdyQztBQUhELFdBQWlCLHFCQUFxQjtJQUN2Qix5Q0FBbUIsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUM7QUFFM0QsQ0FBQyxFQUhnQixxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUdyQzs7Ozs7Ozs7O1VDOUhELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi8uLi9GcmFtZXdvcmsvc3JjL21vdGlvbi9jdWJpc21tb3Rpb25tYW5hZ2VyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9jdWJpc21tb2RlbCc7XG5pbXBvcnQgeyBBQ3ViaXNtTW90aW9uIH0gZnJvbSAnLi9hY3ViaXNtbW90aW9uJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUsXG4gIEN1YmlzbU1vdGlvblF1ZXVlTWFuYWdlcixcbn0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZW1hbmFnZXInO1xuXG4vKipcbiAqIOODouODvOOCt+ODp+ODs+OBrueuoeeQhlxuICpcbiAqIOODouODvOOCt+ODp+ODs+OBrueuoeeQhuOCkuihjOOBhuOCr+ODqeOCuVxuICovXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uTWFuYWdlciBleHRlbmRzIEN1YmlzbU1vdGlvblF1ZXVlTWFuYWdlciB7XG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2N1cnJlbnRQcmlvcml0eSA9IDA7XG4gICAgdGhpcy5fcmVzZXJ2ZVByaW9yaXR5ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlho3nlJ/kuK3jga7jg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqbjga7lj5blvpdcbiAgICogQHJldHVybiAg44Oi44O844K344On44Oz44Gu5YSq5YWI5bqmXG4gICAqL1xuICBwdWJsaWMgZ2V0Q3VycmVudFByaW9yaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQcmlvcml0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuojntITkuK3jga7jg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqbjgpLlj5blvpfjgZnjgovjgIJcbiAgICogQHJldHVybiAg44Oi44O844K344On44Oz44Gu5YSq5YWI5bqmXG4gICAqL1xuICBwdWJsaWMgZ2V0UmVzZXJ2ZVByaW9yaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2VydmVQcmlvcml0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuojntITkuK3jga7jg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqbjgpLoqK3lrprjgZnjgovjgIJcbiAgICogQHBhcmFtICAgdmFsICAgICDlhKrlhYjluqZcbiAgICovXG4gIHB1YmxpYyBzZXRSZXNlcnZlUHJpb3JpdHkodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNlcnZlUHJpb3JpdHkgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICog5YSq5YWI5bqm44KS6Kit5a6a44GX44Gm44Oi44O844K344On44Oz44KS6ZaL5aeL44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBtb3Rpb24gICAgICAgICAg44Oi44O844K344On44OzXG4gICAqIEBwYXJhbSBhdXRvRGVsZXRlICAgICAg5YaN55Sf44GM54up54yf44GX44Gf44Oi44O844K344On44Oz44Gu44Kk44Oz44K544K/44Oz44K544KS5YmK6Zmk44GZ44KL44Gq44KJdHJ1ZVxuICAgKiBAcGFyYW0gcHJpb3JpdHkgICAgICAgIOWEquWFiOW6plxuICAgKiBAcmV0dXJuICAgICAgICAgICAgICAgIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi0lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr+OAjC0x44CNXG4gICAqL1xuICBwdWJsaWMgc3RhcnRNb3Rpb25Qcmlvcml0eShcbiAgICBtb3Rpb246IEFDdWJpc21Nb3Rpb24sXG4gICAgYXV0b0RlbGV0ZTogYm9vbGVhbixcbiAgICBwcmlvcml0eTogbnVtYmVyXG4gICk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUge1xuICAgIGlmIChwcmlvcml0eSA9PSB0aGlzLl9yZXNlcnZlUHJpb3JpdHkpIHtcbiAgICAgIHRoaXMuX3Jlc2VydmVQcmlvcml0eSA9IDA7IC8vIOS6iOe0hOOCkuino+mZpFxuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRQcmlvcml0eSA9IHByaW9yaXR5OyAvLyDlho3nlJ/kuK3jg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqbjgpLoqK3lrppcblxuICAgIHJldHVybiBzdXBlci5zdGFydE1vdGlvbihtb3Rpb24sIGF1dG9EZWxldGUsIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44KS5pu05paw44GX44Gm44CB44Oi44OH44Or44Gr44OR44Op44Oh44O844K/5YCk44KS5Y+N5pig44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCAgIOWvvuixoeOBruODouODh+ODq1xuICAgKiBAcGFyYW0gZGVsdGFUaW1lU2Vjb25kcyAgICDjg4fjg6vjgr/mmYLplpNb56eSXVxuICAgKiBAcmV0dXJuICB0cnVlICAgIOabtOaWsOOBleOCjOOBpuOBhOOCi1xuICAgKiBAcmV0dXJuICBmYWxzZSAgIOabtOaWsOOBleOCjOOBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZU1vdGlvbihtb2RlbDogQ3ViaXNtTW9kZWwsIGRlbHRhVGltZVNlY29uZHM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArPSBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgY29uc3QgdXBkYXRlZDogYm9vbGVhbiA9IHN1cGVyLmRvVXBkYXRlTW90aW9uKG1vZGVsLCB0aGlzLl91c2VyVGltZVNlY29uZHMpO1xuXG4gICAgaWYgKHRoaXMuaXNGaW5pc2hlZCgpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UHJpb3JpdHkgPSAwOyAvLyDlho3nlJ/kuK3jga7jg6Ljg7zjgrfjg6fjg7Pjga7lhKrlhYjluqbjgpLop6PpmaRcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7PjgpLkuojntITjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtICAgcHJpb3JpdHkgICAg5YSq5YWI5bqmXG4gICAqIEByZXR1cm4gIHRydWUgICAg5LqI57SE44Gn44GN44GfXG4gICAqIEByZXR1cm4gIGZhbHNlICAg5LqI57SE44Gn44GN44Gq44GL44Gj44GfXG4gICAqL1xuICBwdWJsaWMgcmVzZXJ2ZU1vdGlvbihwcmlvcml0eTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcHJpb3JpdHkgPD0gdGhpcy5fcmVzZXJ2ZVByaW9yaXR5IHx8XG4gICAgICBwcmlvcml0eSA8PSB0aGlzLl9jdXJyZW50UHJpb3JpdHlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZXNlcnZlUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9yZXNlcnZlUHJpb3JpdHkpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY3VycmVudFByaW9yaXR5OiBudW1iZXI7IC8vIOePvuWcqOWGjeeUn+S4reOBruODouODvOOCt+ODp+ODs+OBruWEquWFiOW6plxuICBfcmVzZXJ2ZVByaW9yaXR5OiBudW1iZXI7IC8vIOWGjeeUn+S6iOWumuOBruODouODvOOCt+ODp+ODs+OBruWEquWFiOW6puOAguWGjeeUn+S4reOBrzDjgavjgarjgovjgILjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vjgpLliKXjgrnjg6zjg4Pjg4njgafoqq3jgb/ovrzjgoDjgajjgY3jga7mqZ/og73jgIJcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9ubWFuYWdlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmsge1xuICBleHBvcnQgY29uc3QgQ3ViaXNtTW90aW9uTWFuYWdlciA9ICQuQ3ViaXNtTW90aW9uTWFuYWdlcjtcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uTWFuYWdlciA9ICQuQ3ViaXNtTW90aW9uTWFuYWdlcjtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjOTA4MDgxZWU4OGQ1ZmI0MmVmY1wiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9