#移动端通用头部（qshHeader）

qshHeader 依赖 JQuery， iconfont

####示例

直接调用

```js
var options = {
        mount: 'body',
        name: "商品管理",
        style: 'custom',
        leftItems: [
            {
                icon: 'back',
                handler: function(){
                    return false;
                }
            }
        ],
        rightItems: [
            {
                text: '完成',
                handler: function(e){
                    alert("完成了");
                }
            },
            {
                icon: 'guanzhugengduocaozuo',
                hasActive: true,
                items: [
                    {
                        name: '消息',
                        icon: 'xiaoxi',
                        hasActive: true,
                        handler: function(){
                            alert('消息')
                        }
                    },
                    {
                        name: '主页',
                        icon: 'home',
                        handler: function(){
                            alert('主页')
                        }
                    },
                    {
                        name: '我的企商',
                        icon: 'user',
                        handler: function(){
                            alert('我的企商')
                        }
                    }
                ]
            }
        ]
    };
    var headerObj = qshHeader(options);
```

参数说明：
<pre>
mount: 挂载点。即head的父级元素
name: 名称。 即中间部分的title
style: 样式。 可不传，默认为卖家版的浅灰色头部。custom为买家版的红色头部
leftItems: 坐边元素。可不传。默认会带有一个返回
    itemObj： icon: icon为iconfont中图标对应的名称。返回图标的icon固定为back。
              handler: handler为图标点击时的回调函数，back的处理略不同，back会默认调用history.back()。如果传入的handler返回false，则back不执行默认行为。
              text: 如果需要显示文字按钮，则传入text，不可同时传入icon
              hasActive: 如果为true，则在图标的右上角显示一个角标
              items: 如果传入items，则为当前按钮创建一个下拉菜单
              id: 当前按钮的标识符，可不传，不传则默认为icon或者text
             
</pre>

返回**headerObj**

<pre>
headerObj:
    append: 在右边的所有按钮后面新增一个按钮，按钮选项等同于itemObj
    prepend: 在右边的所有按钮前面新增一个按钮，按钮选项等同于itemObj
    remove(id): 传入一个id，id参照itemObj的id说明。将id对应的按钮删除
</pre>   

示例效果查看head.html