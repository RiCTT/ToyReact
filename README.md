# ToyReact

# 实现思路

  - 配置webpack环境（支持jsx）

    webpack实际上就是一个接受文件，通过特定参数，输出文件的工具;jsx的代码实际上会通过babel插件转换成React.createElement的形式

    - 设置打包文件的输出格式（mode + minimize)
    - babel-loader（将新特性转换成旧浏览器兼容的代码）
      - babel-loader
      - @babel-core
      - @babel-preset-env

  - jsx
    - babel插件会将代码转换成createElement的形式
    - 如果tagName是大写的，会认为是自定义的class组件
      -  react是如何处理上述情况
        
          通过一个wrapper层，封装行为，统一的接口，使得可以同时处理对象和dom对象
