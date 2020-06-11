/* @flow */

import * as nodeOps from "web/runtime/node-ops";
import { createPatchFunction } from "core/vdom/patch";
import baseModules from "core/vdom/modules/index";
import platformModules from "web/runtime/modules/index";

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules);

/**
 * 这里传入了一个对象，包含 nodeOps 参数和 modules 参数。
 * nodeOps 封装了一系列 DOM 操作的方法，
 * modules 定义了一些模块的钩子函数的实现
 */
export const patch: Function = createPatchFunction({ nodeOps, modules });
