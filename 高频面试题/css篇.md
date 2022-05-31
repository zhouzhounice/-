# 垂直/水平居中的方式

# flex布局都有哪些属性

- 用在容器上的有：
  - justify-content 调整主轴上项目的排列方式
  - flex-direction 设置主轴副轴
  - flex-wrap 控制项目换不换行
  - flex-flow 为flex-direction和flex-wrap的简写
  - align-item 调整副轴上项目对齐方式
  - align-content 调整副轴上项目的排列方式

- 用在项目上
  - order 项目的排列顺序；数值越小越靠前
  - flex-grow 项目的放大比例
  - flex-shrink 项目的缩小比例
  - flex-basis 项目在主轴方向的初始大小
  - flex flex-grow flex-shrink flex-basis三者的缩写形式
  - align-self 允许单个项目与其他项目的对齐方式不一样

# 谈谈BFC

它的定义是块级格式上下文，独立的渲染区域，使得BFC内部元素与外部元素隔开，内外两边元素的定位不会互相影响。

开启BFC的方式有：

- float不为none
- position为fixed或absolute
- overflow为auto、scroll或hidden
- display为inline-block、inline-flex、flex、table-cell

它解决了：

- 如果父元素不设置高度而让子元素浮动，导致的父元素高度塌陷的问题
- 解决了自适应布局
- 解决了外边距重叠的问题