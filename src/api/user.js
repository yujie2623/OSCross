import request from '@/utils/request';

// 获取角色权限
export const getRoles = query => {
  return request({
      url: 'api/user/index',
      method: 'post',
      data: query
  })
}

// 获取授权列表
export const get_auth_list = query => {
  return request({
      url: 'api/user/get_auth_list',
      method: 'post',
      data: query
  })
}

// 退出登录
export const logout = query => {
  return request({
      url: 'api/user/logout',
      method: 'post',
      data: query
  })
}

// 登录注册
export const userLogin = query => {
    return request({
        url: 'api/user/login',
        method: 'post',
        data: query
    });
};

// 获取验证码
export const vcode = query => {
  return request({
      url: 'api/user/sms_code',
      method: 'post',
      data: query
  });
};

// 注册
export const register = query => {
  return request({
      url: 'api/user/register',
      method: 'post',
      data: query
  });
};

//获取新闻
export const getlist = query => {
  return request({
      url: 'api/faq/getlist',
      method: 'post',
      data: query
  });
};

// 获取详情
export const search = query => {
  return request({
      url: 'api/faq/search',
      method: 'post',
      data: query
  })
}

// 留言
export const message = query => {
  return request({
      url: 'api/message/add',
      method: 'post',
      data: query
  });
};

// 授权
export const apply_auth = query => {
  return request({
      url: 'api/user/apply_auth',
      method: 'post',
      data: query
  });
}

// 获取视频
export const get_video = query => {
  return request({
      url: 'api/explorer/get_video',
      method: 'post',
      data: query
  });
}

// 下载列表
export const get_apk = query => {
  return request({
      url: 'api/explorer/get_apk',
      method: 'post',
      data: query
  });
}