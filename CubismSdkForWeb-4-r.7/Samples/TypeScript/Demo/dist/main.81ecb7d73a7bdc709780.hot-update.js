"use strict";
self["webpackHotUpdate"]("main",{

/***/ "../../../Framework/src/motion/cubismmotionqueueentry.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionqueueentry.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.Live2DCubismFramework = exports.CubismMotionQueueEntry = void 0;
var acubismmotion_1 = __webpack_require__(/*! ./acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var CubismMotionQueueEntry = (function () {
    function CubismMotionQueueEntry() {
        this._autoDelete = false;
        this._motion = null;
        this._available = true;
        this._finished = false;
        this._started = false;
        this._startTimeSeconds = -1.0;
        this._fadeInStartTimeSeconds = 0.0;
        this._endTimeSeconds = -1.0;
        this._stateTimeSeconds = 0.0;
        this._stateWeight = 0.0;
        this._lastEventCheckSeconds = 0.0;
        this._motionQueueEntryHandle = this;
        this._fadeOutSeconds = 0.0;
        this._isTriggeredFadeOut = false;
    }
    CubismMotionQueueEntry.prototype.release = function () {
        if (this._autoDelete && this._motion) {
            acubismmotion_1.ACubismMotion.delete(this._motion);
        }
    };
    CubismMotionQueueEntry.prototype.setFadeOut = function (fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
        this._isTriggeredFadeOut = false;
    };
    CubismMotionQueueEntry.prototype.startFadeOut = function (fadeOutSeconds, userTimeSeconds) {
        var newEndTimeSeconds = userTimeSeconds + fadeOutSeconds;
        this._isTriggeredFadeOut = true;
        if (this._endTimeSeconds < 0.0 ||
            newEndTimeSeconds < this._endTimeSeconds) {
            this._endTimeSeconds = newEndTimeSeconds;
        }
    };
    CubismMotionQueueEntry.prototype.isFinished = function () {
        return this._finished;
    };
    CubismMotionQueueEntry.prototype.isStarted = function () {
        return this._started;
    };
    CubismMotionQueueEntry.prototype.getStartTime = function () {
        return this._startTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getFadeInStartTime = function () {
        return this._fadeInStartTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getEndTime = function () {
        return this._endTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.setStartTime = function (startTime) {
        this._startTimeSeconds = startTime;
    };
    CubismMotionQueueEntry.prototype.setFadeInStartTime = function (startTime) {
        this._fadeInStartTimeSeconds = startTime;
    };
    CubismMotionQueueEntry.prototype.setEndTime = function (endTime) {
        this._endTimeSeconds = endTime;
    };
    CubismMotionQueueEntry.prototype.setIsFinished = function (f) {
        this._finished = f;
    };
    CubismMotionQueueEntry.prototype.setIsStarted = function (f) {
        this._started = f;
    };
    CubismMotionQueueEntry.prototype.isAvailable = function () {
        return this._available;
    };
    CubismMotionQueueEntry.prototype.setIsAvailable = function (v) {
        this._available = v;
    };
    CubismMotionQueueEntry.prototype.setState = function (timeSeconds, weight) {
        this._stateTimeSeconds = timeSeconds;
        this._stateWeight = weight;
    };
    CubismMotionQueueEntry.prototype.getStateTime = function () {
        return this._stateTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getStateWeight = function () {
        return this._stateWeight;
    };
    CubismMotionQueueEntry.prototype.getLastCheckEventSeconds = function () {
        return this._lastEventCheckSeconds;
    };
    CubismMotionQueueEntry.prototype.setLastCheckEventSeconds = function (checkSeconds) {
        this._lastEventCheckSeconds = checkSeconds;
    };
    CubismMotionQueueEntry.prototype.isTriggeredFadeOut = function () {
        return this._isTriggeredFadeOut;
    };
    CubismMotionQueueEntry.prototype.getFadeOutSeconds = function () {
        return this._fadeOutSeconds;
    };
    return CubismMotionQueueEntry;
}());
exports.CubismMotionQueueEntry = CubismMotionQueueEntry;
var $ = __importStar(__webpack_require__(/*! ./cubismmotionqueueentry */ "../../../Framework/src/motion/cubismmotionqueueentry.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionQueueEntry = $.CubismMotionQueueEntry;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "836e0cdec2116e6d283e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MWVjYjdkNzNhN2JkYzcwOTc4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsbUhBQWdEO0FBTWhEO0lBSUU7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUtNLHdDQUFPLEdBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBTU0sMkNBQVUsR0FBakIsVUFBa0IsY0FBc0I7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFFdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBT00sNkNBQVksR0FBbkIsVUFBb0IsY0FBc0IsRUFBRSxlQUF1QjtRQUNqRSxJQUFNLGlCQUFpQixHQUFXLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUVoQyxJQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRztZQUMxQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUN4QztZQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBUU0sMkNBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQU9NLDBDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSw2Q0FBWSxHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFNTSxtREFBa0IsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBTU0sMkNBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQU1NLDZDQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQU1NLG1EQUFrQixHQUF6QixVQUEwQixTQUFpQjtRQUN6QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFNTSwyQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFNTSw4Q0FBYSxHQUFwQixVQUFxQixDQUFVO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFNTSw2Q0FBWSxHQUFuQixVQUFvQixDQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFPTSw0Q0FBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBTU0sK0NBQWMsR0FBckIsVUFBc0IsQ0FBVTtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBT00seUNBQVEsR0FBZixVQUFnQixXQUFtQixFQUFFLE1BQWM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBTU0sNkNBQVksR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBTU0sK0NBQWMsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQU9NLHlEQUF3QixHQUEvQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFNTSx5REFBd0IsR0FBL0IsVUFBZ0MsWUFBb0I7UUFDbEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQztJQUM3QyxDQUFDO0lBTU0sbURBQWtCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQU1NLGtEQUFpQixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBa0JILDZCQUFDO0FBQUQsQ0FBQztBQXhPWSx3REFBc0I7QUEyT25DLHFJQUE4QztBQUU5QyxJQUFpQixxQkFBcUIsQ0FHckM7QUFIRCxXQUFpQixxQkFBcUI7SUFDdkIsNENBQXNCLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0FBRWpFLENBQUMsRUFIZ0IscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFHckM7Ozs7Ozs7OztVQzdQRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVlbnRyeS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IEFDdWJpc21Nb3Rpb24gfSBmcm9tICcuL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSB9IGZyb20gJy4vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcblxuLyoqXG4gKiBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXLjgaflho3nlJ/jgZfjgabjgYTjgovlkITjg6Ljg7zjgrfjg6fjg7Pjga7nrqHnkIbjgq/jg6njgrnjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvblF1ZXVlRW50cnkge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYXV0b0RlbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX21vdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGFydFRpbWVTZWNvbmRzID0gLTEuMDtcbiAgICB0aGlzLl9mYWRlSW5TdGFydFRpbWVTZWNvbmRzID0gMC4wO1xuICAgIHRoaXMuX2VuZFRpbWVTZWNvbmRzID0gLTEuMDtcbiAgICB0aGlzLl9zdGF0ZVRpbWVTZWNvbmRzID0gMC4wO1xuICAgIHRoaXMuX3N0YXRlV2VpZ2h0ID0gMC4wO1xuICAgIHRoaXMuX2xhc3RFdmVudENoZWNrU2Vjb25kcyA9IDAuMDtcbiAgICB0aGlzLl9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlID0gdGhpcztcbiAgICB0aGlzLl9mYWRlT3V0U2Vjb25kcyA9IDAuMDtcbiAgICB0aGlzLl9pc1RyaWdnZXJlZEZhZGVPdXQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRGVsZXRlICYmIHRoaXMuX21vdGlvbikge1xuICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUodGhpcy5fbW90aW9uKTsgLy9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaT44Go6ZaL5aeL5Yik5a6a44Gu6Kit5a6aXG4gICAqIEBwYXJhbSBmYWRlT3V0U2Vjb25kcyDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgavjgYvjgYvjgovmmYLplpNb56eSXVxuICAgKi9cbiAgcHVibGljIHNldEZhZGVPdXQoZmFkZU91dFNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gZmFkZU91dFNlY29uZHM7XG4gICAgLy8gdGhpcy5faXNUcmlnZ2VyZWRGYWRlT3V0ID0gdHJ1ZTtcbiAgICB0aGlzLl9pc1RyaWdnZXJlZEZhZGVPdXQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7plovlp4tcbiAgICogQHBhcmFtIGZhZGVPdXRTZWNvbmRzIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXG4gICAqIEBwYXJhbSB1c2VyVGltZVNlY29uZHMg44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cbiAgICovXG4gIHB1YmxpYyBzdGFydEZhZGVPdXQoZmFkZU91dFNlY29uZHM6IG51bWJlciwgdXNlclRpbWVTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdFbmRUaW1lU2Vjb25kczogbnVtYmVyID0gdXNlclRpbWVTZWNvbmRzICsgZmFkZU91dFNlY29uZHM7XG4gICAgdGhpcy5faXNUcmlnZ2VyZWRGYWRlT3V0ID0gdHJ1ZTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuX2VuZFRpbWVTZWNvbmRzIDwgMC4wIHx8XG4gICAgICBuZXdFbmRUaW1lU2Vjb25kcyA8IHRoaXMuX2VuZFRpbWVTZWNvbmRzXG4gICAgKSB7XG4gICAgICB0aGlzLl9lbmRUaW1lU2Vjb25kcyA9IG5ld0VuZFRpbWVTZWNvbmRzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7ntYLkuobjga7norroqo1cbiAgICpcbiAgICogQHJldHVybiB0cnVlIOODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn1xuICAgKiBAcmV0dXJuIGZhbHNlIOe1guS6huOBl+OBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIGlzRmluaXNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmlzaGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+OBrueiuuiqjVxuICAgKiBAcmV0dXJuIHRydWUg44Oi44O844K344On44Oz44GM6ZaL5aeL44GX44GfXG4gICAqIEByZXR1cm4gZmFsc2Ug6ZaL5aeL44GX44Gm44GE44Gq44GEXG4gICAqL1xuICBwdWJsaWMgaXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFydGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu+OBruWPluW+l1xuICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1vnp5JdXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhcnRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZVNlY29uZHM7XG4gIH1cblxuICAvKipcbiAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu5Y+W5b6XXG4gICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi7W+enkl1cbiAgICovXG4gIHB1YmxpYyBnZXRGYWRlSW5TdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZmFkZUluU3RhcnRUaW1lU2Vjb25kcztcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqfjg7zjg4njgqTjg7Pjga7ntYLkuobmmYLliLvjga7lj5blvpdcbiAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7Pjga7ntYLkuobmmYLliLvjga7lj5blvpdcbiAgICovXG4gIHB1YmxpYyBnZXRFbmRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRpbWVTZWNvbmRzO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu+OBruioreWumlxuICAgKiBAcGFyYW0gc3RhcnRUaW1lIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1xuICAgKi9cbiAgcHVibGljIHNldFN0YXJ0VGltZShzdGFydFRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3N0YXJ0VGltZVNlY29uZHMgPSBzdGFydFRpbWU7XG4gIH1cblxuICAvKipcbiAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu6Kit5a6aXG4gICAqIEBwYXJhbSBzdGFydFRpbWUg44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi7W+enkl1cbiAgICovXG4gIHB1YmxpYyBzZXRGYWRlSW5TdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9mYWRlSW5TdGFydFRpbWVTZWNvbmRzID0gc3RhcnRUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODleOCp+ODvOODieOCpOODs+OBrue1guS6huaZguWIu+OBruioreWumlxuICAgKiBAcGFyYW0gZW5kVGltZSDjg5Xjgqfjg7zjg4njgqTjg7Pjga7ntYLkuobmmYLliLtb56eSXVxuICAgKi9cbiAgcHVibGljIHNldEVuZFRpbWUoZW5kVGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZW5kVGltZVNlY29uZHMgPSBlbmRUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OBrue1guS6huOBruioreWumlxuICAgKiBAcGFyYW0gZiB0cnVl44Gq44KJ44Oi44O844K344On44Oz44Gu57WC5LqGXG4gICAqL1xuICBwdWJsaWMgc2V0SXNGaW5pc2hlZChmOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZmluaXNoZWQgPSBmO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+OBruioreWumlxuICAgKiBAcGFyYW0gZiB0cnVl44Gq44KJ44Oi44O844K344On44Oz44Gu6ZaL5aeLXG4gICAqL1xuICBwdWJsaWMgc2V0SXNTdGFydGVkKGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGFydGVkID0gZjtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7mnInlirnmgKfjga7norroqo1cbiAgICogQHJldHVybiB0cnVlIOODouODvOOCt+ODp+ODs+OBr+acieWKuVxuICAgKiBAcmV0dXJuIGZhbHNlIOODouODvOOCt+ODp+ODs+OBr+eEoeWKuVxuICAgKi9cbiAgcHVibGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGU7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44Gu5pyJ5Yq55oCn44Gu6Kit5a6aXG4gICAqIEBwYXJhbSB2IHRydWXjgarjgonjg6Ljg7zjgrfjg6fjg7Pjga/mnInlirlcbiAgICovXG4gIHB1YmxpYyBzZXRJc0F2YWlsYWJsZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fYXZhaWxhYmxlID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7nirbmhYvjga7oqK3lrppcbiAgICogQHBhcmFtIHRpbWVTZWNvbmRzIOePvuWcqOaZguWIu1vnp5JdXG4gICAqIEBwYXJhbSB3ZWlnaHQg44Oi44O844K344On44Oz5bC+6YeN44G/XG4gICAqL1xuICBwdWJsaWMgc2V0U3RhdGUodGltZVNlY29uZHM6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZVRpbWVTZWNvbmRzID0gdGltZVNlY29uZHM7XG4gICAgdGhpcy5fc3RhdGVXZWlnaHQgPSB3ZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44Gu54++5Zyo5pmC5Yi744Gu5Y+W5b6XXG4gICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Gu54++5Zyo5pmC5Yi7W+enkl1cbiAgICovXG4gIHB1YmxpYyBnZXRTdGF0ZVRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVUaW1lU2Vjb25kcztcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7ph43jgb/jga7lj5blvpdcbiAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7ph43jgb9cbiAgICovXG4gIHB1YmxpYyBnZXRTdGF0ZVdlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVdlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmnIDlvozjgavjgqTjg5njg7Pjg4jjga7nmbrngavjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpPjgpLlj5blvpdcbiAgICpcbiAgICogQHJldHVybiDmnIDlvozjgavjgqTjg5njg7Pjg4jjga7nmbrngavjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNb56eSXVxuICAgKi9cbiAgcHVibGljIGdldExhc3RDaGVja0V2ZW50U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0RXZlbnRDaGVja1NlY29uZHM7XG4gIH1cblxuICAvKipcbiAgICog5pyA5b6M44Gr44Kk44OZ44Oz44OI44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaT44KS6Kit5a6aXG4gICAqIEBwYXJhbSBjaGVja1NlY29uZHMg5pyA5b6M44Gr44Kk44OZ44Oz44OI44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaTW+enkl1cbiAgICovXG4gIHB1YmxpYyBzZXRMYXN0Q2hlY2tFdmVudFNlY29uZHMoY2hlY2tTZWNvbmRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0RXZlbnRDaGVja1NlY29uZHMgPSBjaGVja1NlY29uZHM7XG4gIH1cblxuICAvKipcbiAgICog44OV44Kn44O844OJ44Ki44Km44OI6ZaL5aeL5Yik5a6a44Gu5Y+W5b6XXG4gICAqIEByZXR1cm4g44OV44Kn44O844OJ44Ki44Km44OI6ZaL5aeL44GZ44KL44GL44Gp44GG44GLXG4gICAqL1xuICBwdWJsaWMgaXNUcmlnZ2VyZWRGYWRlT3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1RyaWdnZXJlZEZhZGVPdXQ7XG4gIH1cblxuICAvKipcbiAgICog44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaT44Gu5Y+W5b6XXG4gICAqIEByZXR1cm4g44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaTW+enkl1cbiAgICovXG4gIHB1YmxpYyBnZXRGYWRlT3V0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mYWRlT3V0U2Vjb25kcztcbiAgfVxuXG4gIF9hdXRvRGVsZXRlOiBib29sZWFuOyAvLyDoh6rli5XliYrpmaRcbiAgX21vdGlvbjogQUN1YmlzbU1vdGlvbjsgLy8g44Oi44O844K344On44OzXG5cbiAgX2F2YWlsYWJsZTogYm9vbGVhbjsgLy8g5pyJ5Yq55YyW44OV44Op44KwXG4gIF9maW5pc2hlZDogYm9vbGVhbjsgLy8g57WC5LqG44OV44Op44KwXG4gIF9zdGFydGVkOiBib29sZWFuOyAvLyDplovlp4vjg5Xjg6njgrBcbiAgX3N0YXJ0VGltZVNlY29uZHM6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz5YaN55Sf6ZaL5aeL5pmC5Yi7W+enkl1cbiAgX2ZhZGVJblN0YXJ0VGltZVNlY29uZHM6IG51bWJlcjsgLy8g44OV44Kn44O844OJ44Kk44Oz6ZaL5aeL5pmC5Yi777yI44Or44O844OX44Gu5pmC44Gv5Yid5Zue44Gu44G/77yJW+enkl1cbiAgX2VuZFRpbWVTZWNvbmRzOiBudW1iZXI7IC8vIOe1guS6huS6iOWumuaZguWIu1vnp5JdXG4gIF9zdGF0ZVRpbWVTZWNvbmRzOiBudW1iZXI7IC8vIOaZguWIu+OBrueKtuaFi1vnp5JdXG4gIF9zdGF0ZVdlaWdodDogbnVtYmVyOyAvLyDph43jgb/jga7nirbmhYtcbiAgX2xhc3RFdmVudENoZWNrU2Vjb25kczogbnVtYmVyOyAvLyDmnIDntYLjga5Nb3Rpb27lgbTjga7jg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNcbiAgcHJpdmF0ZSBfZmFkZU91dFNlY29uZHM6IG51bWJlcjsgLy8g44OV44Kn44O844OJ44Ki44Km44OI5pmC6ZaTW+enkl1cbiAgcHJpdmF0ZSBfaXNUcmlnZ2VyZWRGYWRlT3V0OiBib29sZWFuOyAvLyDjg5Xjgqfjg7zjg4njgqLjgqbjg4jplovlp4vjg5Xjg6njgrBcblxuICBfbW90aW9uUXVldWVFbnRyeUhhbmRsZTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZTsgLy8g44Kk44Oz44K544K/44Oz44K544GU44Go44Gr5LiA5oSP44Gu5YCk44KS5oyB44Gk6K2Y5Yil55Wq5Y+3XG59XG5cbi8vIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBjb21wYXRpYmlsaXR5LlxuaW1wb3J0ICogYXMgJCBmcm9tICcuL2N1YmlzbW1vdGlvbnF1ZXVlZW50cnknO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSAkLkN1YmlzbU1vdGlvblF1ZXVlRW50cnk7XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSAkLkN1YmlzbU1vdGlvblF1ZXVlRW50cnk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiODM2ZTBjZGVjMjExNmU2ZDI4M2VcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==