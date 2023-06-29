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
        console.log('参数优先级' + priority);
        console.log('当前播放的运动优先级' + this._reservePriority);
        console.log('要播放的运动的优先级。' + this._currentPriority);
        if (priority <= this._reservePriority ||
            priority <= this._currentPriority) {
            return false;
        }
        this._reservePriority = priority;
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
/******/ 	__webpack_require__.h = function() { return "81ecb7d73a7bdc709780"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOWQ1ZTllZmVhNzhlYTg1OGRlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0Esb0pBR29DO0FBT3BDO0lBQXlDLHVDQUF3QjtJQUkvRDtRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQUZDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7SUFDNUIsQ0FBQztJQU1NLGdEQUFrQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFNTSxnREFBa0IsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBTU0sZ0RBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBVU0saURBQW1CLEdBQTFCLFVBQ0UsTUFBcUIsRUFDckIsVUFBbUIsRUFDbkIsUUFBZ0I7UUFFaEIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBRWpDLE9BQU8saUJBQU0sV0FBVyxZQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQVVNLDBDQUFZLEdBQW5CLFVBQW9CLEtBQWtCLEVBQUUsZ0JBQXdCO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQztRQUUxQyxJQUFNLE9BQU8sR0FBWSxpQkFBTSxjQUFjLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTVFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBU00sMkNBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsSUFDRSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUNqQztZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBR2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlILDBCQUFDO0FBQUQsQ0FBQyxDQXRHd0MsbURBQXdCLEdBc0doRTtBQXRHWSxrREFBbUI7QUF5R2hDLCtIQUEyQztBQUUzQyxJQUFpQixxQkFBcUIsQ0FHckM7QUFIRCxXQUFpQixxQkFBcUI7SUFDdkIseUNBQW1CLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0FBRTNELENBQUMsRUFIZ0IscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFHckM7Ozs7Ozs7OztVQ2pJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9tb3Rpb24vY3ViaXNtbW90aW9ubWFuYWdlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IEN1YmlzbU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHsgQUN1YmlzbU1vdGlvbiB9IGZyb20gJy4vYWN1YmlzbW1vdGlvbic7XG5pbXBvcnQge1xuICBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlLFxuICBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIsXG59IGZyb20gJy4vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcblxuLyoqXG4gKiDjg6Ljg7zjgrfjg6fjg7Pjga7nrqHnkIZcbiAqXG4gKiDjg6Ljg7zjgrfjg6fjg7Pjga7nrqHnkIbjgpLooYzjgYbjgq/jg6njgrlcbiAqL1xuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvbk1hbmFnZXIgZXh0ZW5kcyBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jdXJyZW50UHJpb3JpdHkgPSAwO1xuICAgIHRoaXMuX3Jlc2VydmVQcmlvcml0eSA9IDA7XG4gIH1cblxuICAvKipcbiAgICog5YaN55Sf5Lit44Gu44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm44Gu5Y+W5b6XXG4gICAqIEByZXR1cm4gIOODouODvOOCt+ODp+ODs+OBruWEquWFiOW6plxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRQcmlvcml0eSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UHJpb3JpdHk7XG4gIH1cblxuICAvKipcbiAgICog5LqI57SE5Lit44Gu44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm44KS5Y+W5b6X44GZ44KL44CCXG4gICAqIEByZXR1cm4gIOODouODvOOCt+ODp+ODs+OBruWEquWFiOW6plxuICAgKi9cbiAgcHVibGljIGdldFJlc2VydmVQcmlvcml0eSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXNlcnZlUHJpb3JpdHk7XG4gIH1cblxuICAvKipcbiAgICog5LqI57SE5Lit44Gu44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm44KS6Kit5a6a44GZ44KL44CCXG4gICAqIEBwYXJhbSAgIHZhbCAgICAg5YSq5YWI5bqmXG4gICAqL1xuICBwdWJsaWMgc2V0UmVzZXJ2ZVByaW9yaXR5KHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzZXJ2ZVByaW9yaXR5ID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIOWEquWFiOW6puOCkuioreWumuOBl+OBpuODouODvOOCt+ODp+ODs+OCkumWi+Wni+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gbW90aW9uICAgICAgICAgIOODouODvOOCt+ODp+ODs1xuICAgKiBAcGFyYW0gYXV0b0RlbGV0ZSAgICAgIOWGjeeUn+OBjOeLqeeMn+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruOCpOODs+OCueOCv+ODs+OCueOCkuWJiumZpOOBmeOCi+OBquOCiXRydWVcbiAgICogQHBhcmFtIHByaW9yaXR5ICAgICAgICDlhKrlhYjluqZcbiAgICogQHJldHVybiAgICAgICAgICAgICAgICDplovlp4vjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7orZjliKXnlarlj7fjgpLov5TjgZnjgILlgIvliKXjga7jg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/jgYvlkKbjgYvjgpLliKTlrprjgZnjgotJc0ZpbmlzaGVkKCnjga7lvJXmlbDjgafkvb/nlKjjgZnjgovjgILplovlp4vjgafjgY3jgarjgYTmmYLjga/jgIwtMeOAjVxuICAgKi9cbiAgcHVibGljIHN0YXJ0TW90aW9uUHJpb3JpdHkoXG4gICAgbW90aW9uOiBBQ3ViaXNtTW90aW9uLFxuICAgIGF1dG9EZWxldGU6IGJvb2xlYW4sXG4gICAgcHJpb3JpdHk6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlIHtcbiAgICBpZiAocHJpb3JpdHkgPT0gdGhpcy5fcmVzZXJ2ZVByaW9yaXR5KSB7XG4gICAgICB0aGlzLl9yZXNlcnZlUHJpb3JpdHkgPSAwOyAvLyDkuojntITjgpLop6PpmaRcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50UHJpb3JpdHkgPSBwcmlvcml0eTsgLy8g5YaN55Sf5Lit44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm44KS6Kit5a6aXG5cbiAgICByZXR1cm4gc3VwZXIuc3RhcnRNb3Rpb24obW90aW9uLCBhdXRvRGVsZXRlLCB0aGlzLl91c2VyVGltZVNlY29uZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OCkuabtOaWsOOBl+OBpuOAgeODouODh+ODq+OBq+ODkeODqeODoeODvOOCv+WApOOCkuWPjeaYoOOBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgICDlr77osaHjga7jg6Ljg4fjg6tcbiAgICogQHBhcmFtIGRlbHRhVGltZVNlY29uZHMgICAg44OH44Or44K/5pmC6ZaTW+enkl1cbiAgICogQHJldHVybiAgdHJ1ZSAgICDmm7TmlrDjgZXjgozjgabjgYTjgotcbiAgICogQHJldHVybiAgZmFsc2UgICDmm7TmlrDjgZXjgozjgabjgYTjgarjgYRcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVNb3Rpb24obW9kZWw6IEN1YmlzbU1vZGVsLCBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcblxuICAgIGNvbnN0IHVwZGF0ZWQ6IGJvb2xlYW4gPSBzdXBlci5kb1VwZGF0ZU1vdGlvbihtb2RlbCwgdGhpcy5fdXNlclRpbWVTZWNvbmRzKTtcblxuICAgIGlmICh0aGlzLmlzRmluaXNoZWQoKSkge1xuICAgICAgdGhpcy5fY3VycmVudFByaW9yaXR5ID0gMDsgLy8g5YaN55Sf5Lit44Gu44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm44KS6Kej6ZmkXG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44KS5LqI57SE44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSAgIHByaW9yaXR5ICAgIOWEquWFiOW6plxuICAgKiBAcmV0dXJuICB0cnVlICAgIOS6iOe0hOOBp+OBjeOBn1xuICAgKiBAcmV0dXJuICBmYWxzZSAgIOS6iOe0hOOBp+OBjeOBquOBi+OBo+OBn1xuICAgKi9cbiAgcHVibGljIHJlc2VydmVNb3Rpb24ocHJpb3JpdHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnNvbGUubG9nKCflj4LmlbDkvJjlhYjnuqcnK3ByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZygn5b2T5YmN5pKt5pS+55qE6L+Q5Yqo5LyY5YWI57qnJyt0aGlzLl9yZXNlcnZlUHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKCfopoHmkq3mlL7nmoTov5DliqjnmoTkvJjlhYjnuqfjgIInK3RoaXMuX2N1cnJlbnRQcmlvcml0eSk7XG4gICAgaWYgKFxuICAgICAgcHJpb3JpdHkgPD0gdGhpcy5fcmVzZXJ2ZVByaW9yaXR5IHx8XG4gICAgICBwcmlvcml0eSA8PSB0aGlzLl9jdXJyZW50UHJpb3JpdHlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZXNlcnZlUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9yZXNlcnZlUHJpb3JpdHkpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY3VycmVudFByaW9yaXR5OiBudW1iZXI7IC8vIOePvuWcqOWGjeeUn+S4reOBruODouODvOOCt+ODp+ODs+OBruWEquWFiOW6piAgIOW9k+WJjeaSreaUvueahOi/kOWKqOS8mOWFiOe6p1xuICBfcmVzZXJ2ZVByaW9yaXR5OiBudW1iZXI7IC8vIOWGjeeUn+S6iOWumuOBruODouODvOOCt+ODp+ODs+OBruWEquWFiOW6puOAguWGjeeUn+S4reOBrzDjgavjgarjgovjgILjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vjgpLliKXjgrnjg6zjg4Pjg4njgafoqq3jgb/ovrzjgoDjgajjgY3jga7mqZ/og73jgILopoHmkq3mlL7nmoTov5DliqjnmoTkvJjlhYjnuqfjgILmkq3mlL7kuK3kuLow44CC5Zyo5YW25LuW57q/56iL5Lit5a+85YWl6L+Q5Yqo5paH5Lu25pe255qE5Yqf6IO944CCXG59XG5cbi8vIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBjb21wYXRpYmlsaXR5LlxuaW1wb3J0ICogYXMgJCBmcm9tICcuL2N1YmlzbW1vdGlvbm1hbmFnZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vdGlvbk1hbmFnZXIgPSAkLkN1YmlzbU1vdGlvbk1hbmFnZXI7XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvbk1hbmFnZXIgPSAkLkN1YmlzbU1vdGlvbk1hbmFnZXI7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiODFlY2I3ZDczYTdiZGM3MDk3ODBcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==