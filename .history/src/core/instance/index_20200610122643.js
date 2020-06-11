import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

function Vue(options) {
  // 如果不是 new 来调用的话，会提示
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

// _init
initMixin(Vue);
// $set, $delete, $watch
stateMixin(Vue);
// $on, $once, $off, $emit
eventsMixin(Vue);
// _upate, $forceUpdate, $destory
lifecycleMixin(Vue);
// $nextTick, _render, 以及多个内部调用的方法
renderMixin(Vue);

export default Vue;
