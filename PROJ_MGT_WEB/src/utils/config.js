module.exports = {
  name: 'OV PM Sync System',
  prefix: 'OVPM',
  footerText: 'OV PM Sync System  © 2017',
  logo: '/logo-dark.png',
  log_title: '/logo-white.png',
  favicon: '/favicon.ico',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  baseURL: '/api',
  YQL: ['http://localhost:8000'],
  CORS: ['http://10.88.17.71:8080'],
  openPages: ['/login'],
  // apiPrefix: '/api/v1',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    user: '/user/:id',
    userCurrent: 'user/current',
    updatePassword: '/user/updatePassword',
    dashboard: '/dashboard',
    addproject: '/project/add',
    getproject: '/project/get',
    getopenproject: '/project/getOpen',
    getToDoTask: '/task/getToDo',
    getRelatedTask: '/task/getRelated',
    getCCTask: '/task/getCC',
    taskInfo: '/project/getById',
    projectOpen: '/project/open',
    projectUpdate: '/project/update',
    upload: '/api/attachment/upload',
    deleteAttachment: '/attachment/delete',
    down: '/api/attachment/down',
    updateprojectprogress: '/project/updateProgress',
    updateissueprogress: '/issue/updateProgress',
    projectInfo: '/project/getById',
    projectActs: '/project/getActs',
    projectIssues: '/project/getIssueList',
    issueInfo: '/issue/getById',
    issueupdate: '/issue/update',
    issueActs: '/issue/getActs',
    iAudit: '/issue/audit',
    iSolve: '/issue/solve',
    iClose: '/issue/close',
    iComment: '/issue/comment',
    iFinish: '/issue/finish',
    pComment: '/project/comment',
    pFinish: '/project/finish',
    pClose: '/project/close',
    newissue: '/issue/add',
    logquery: '/log/query',
    logget: '/log/get',
    getusers: '/user/get',
    getentity: '/user/getEntities',
    getlocation: '/user/getLocations',
    createuser: '/user/add',
    updateuser: '/user/update',
    deleteuser: '/user/delete',
    taskQuery: '/task/query',
    getUserInfo: '/user/getById',
  },
}
