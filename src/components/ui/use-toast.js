import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export function useToast() {
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    state.forEach((toast) => {
      if (toast.duration && toast.duration > 0) {
        setTimeout(() => {
          toast.onDismiss?.()
        }, toast.duration)
      }
    })
  }, [state])

  const toast = React.useCallback(
    function (props) {
      const id = genId()

      const update = (props) =>
        setState((state) => {
          const toast = state.find((t) => t.id === id)
          if (toast) {
            return state.map((t) =>
              t.id === id ? { ...t, ...props } : t
            )
          }
          return state
        })

      const dismiss = () => setState((state) => state.filter((t) => t.id !== id))

      setState((state) => [
        ...state,
        { id, ...props, dismiss },
      ].slice(-TOAST_LIMIT))

      return {
        id,
        dismiss,
        update,
      }
    },
    [setState]
  )

  return {
    toast,
    toasts: state,
  }
} 