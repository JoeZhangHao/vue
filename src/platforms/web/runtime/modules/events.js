/* @flow */

import { isDef, isUndef } from 'shared/util'
import { updateListeners } from 'core/vdom/helpers/index'
<<<<<<< HEAD
import { withMacroTask, isIE, supportsPassive } from 'core/util/index'
import { RANGE_TOKEN, CHECKBOX_RADIO_TOKEN } from 'web/compiler/directives/model'
=======
import { isIE, supportsPassive } from 'core/util/env'
import { RANGE_TOKEN } from 'web/compiler/directives/model'
>>>>>>> 0948d999f2fddf9f90991956493f976273c5da1f

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    const event = isIE ? 'change' : 'input'
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || [])
    delete on[RANGE_TOKEN]
  }
<<<<<<< HEAD
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || [])
    delete on[CHECKBOX_RADIO_TOKEN]
  }
}

let target: any

function createOnceHandler (event, handler, capture) {
  const _target = target // save current target element in closure
  return function onceHandler () {
    const res = handler.apply(null, arguments)
    if (res !== null) {
      remove(event, onceHandler, capture, _target)
    }
  }
}
=======
}

let target: HTMLElement
>>>>>>> 0948d999f2fddf9f90991956493f976273c5da1f

function add (
  event: string,
  handler: Function,
<<<<<<< HEAD
  capture: boolean,
  passive: boolean
) {
  handler = withMacroTask(handler)
=======
  once: boolean,
  capture: boolean,
  passive: boolean
) {
  if (once) {
    const oldHandler = handler
    const _target = target // save current target element in closure
    handler = function (ev) {
      const res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments)
      if (res !== null) {
        remove(event, handler, capture, _target)
      }
    }
  }
>>>>>>> 0948d999f2fddf9f90991956493f976273c5da1f
  target.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture, passive }
      : capture
  )
}

function remove (
  event: string,
  handler: Function,
  capture: boolean,
  _target?: HTMLElement
) {
<<<<<<< HEAD
  (_target || target).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  )
=======
  (_target || target).removeEventListener(event, handler, capture)
>>>>>>> 0948d999f2fddf9f90991956493f976273c5da1f
}

function updateDOMListeners (oldVnode: VNodeWithData, vnode: VNodeWithData) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  const on = vnode.data.on || {}
  const oldOn = oldVnode.data.on || {}
  target = vnode.elm
  normalizeEvents(on)
<<<<<<< HEAD
  updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context)
  target = undefined
=======
  updateListeners(on, oldOn, add, remove, vnode.context)
>>>>>>> 0948d999f2fddf9f90991956493f976273c5da1f
}

export default {
  create: updateDOMListeners,
  update: updateDOMListeners
}
