// 验证手机号码
export const phone = (phone) => {
  const str = (/^1[3456789]\d{9}$/.test(phone))
  return str
}

// 是否为4位数字
export const isFourNum = (num) => {
  const str = /^\d{4}$/.test(num)
  return str
}

// 验证手机邮箱
export const emails = (num) => {
  const str = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(num)
  return str
}

// 定义
export function getEl(el) {
  return document.querySelector(el)
}

// 字节格式化
export const bytesToSize = (bytes) => {
  if (bytes === 0) return '0B'
  const k = 1024
  const sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}


// 手机号码验证
export const isPhone = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('手机号码不能为空'))
  } else if(!phone(value)) {
    return callback(new Error('手机号码不正确'))
  } else {
    callback()
  }
}

// 验证手机邮箱
export const isEmail = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('电子邮箱不能为空'))
  } else if(!emails(value)) {
    return callback(new Error('电子邮箱不正确'))
  } else {
    callback()
  }
}

// 验证码是不是4位数字
export const isCode = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('验证码不能为空'))
  } else if(!isFourNum(value)) {
    return callback(new Error('验证码不正确'))
  } else {
    callback()
  }
}