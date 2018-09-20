# ELECTRON DEMO
  ## 学习electron和react构建桌面应用
  ***
  ### 1. **安装**
  ```
  nmp install -g create-react-app
  create-react-app electrondemo
  cd electrondemo
  // 支持动态antd加载
  ```
* 不暴露封装的配置文件来 配置项目
  : creact-react-app 项目本质上是一个隐藏了配置文件的webpack项目，配置文件都在 react-script 这个包中
  * reject 解压配置包，暴露所有的配置文件
  * 一些rewired插件可以在不暴露配置文件的同时支持一些webpack配置
  * 实现动态加载antd组件， 并且配置主题
      : antd通过less的全局变量覆盖来配置主题， 所以要支持less