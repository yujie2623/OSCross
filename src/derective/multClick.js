// 阻止多次点击事件

export default {
  created (el, binding, vnode, prevNnode ) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
            el.disabled = false
        }, binding.value || 3000)
      }
    })
  }
}