## 创建项目过程
create-react-app react-redbook
cd react-redbook
git add .
git commit -m 'Saving before ejecting'
npm run eject  运行npm run eject生成配置文件(解压 webpack 配置)

# React实战小红书App
7-06 项目环境搭配完成
7-11 完成首页部分功能 



## React 页面渲染后自动执行onClick事件问题
onClick={() => this.某方法(某参数)}
// 或者
onClick={this.某方法.bind(this, 某参数)}