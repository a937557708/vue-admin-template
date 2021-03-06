<template>
<section id="container">
  <header>MiniDialog 对话框</header>
  <div class="box">
    <p>信息提示</p>
    <div class="button-box" id="button-box-1">
      <button>Info 信息</button>
      <button>Success 成功</button>
      <button>Warn 警告</button>
      <button>Error 错误</button>
    </div>
    <div class="code">
      <pre>
		<span fn>Dialog.info</span>( <span value>"info 对话框"</span>, <span value>"内容区域"</span> );
		<span fn>Dialog.success</span>( <span value>"success 对话框"</span>, <span value>"内容区域"</span> );
		<span fn>Dialog.warn</span>( <span value>"warn 对话框"</span>, <span value>"内容区域"</span> );
		<span fn>Dialog.error</span>( <span value>"error 对话框"</span>, <span value>"内容区域"</span> );
	</pre>
    </div>
  </div>
  <div class="box">
    <p>快捷方式</p>
    <div class="button-box" id="button-box-2">
      <button>内容</button>
      <button>标题 + 内容</button>
      <button>标题 + 内容 + 宽度</button>
    </div>
    <div class="code">
      <pre>
			<span fn>Dialog</span>( <span value>"内容"</span> );
			<span fn>Dialog</span>( <span value>"标题"</span>, <span value>"内容"</span> );
			<span fn>Dialog</span>( <span value>"标题"</span>, <span value>"内容"</span>, <span value>800</span> );
	 </pre>
    </div>
  </div>
	
  <div class="box">
    <p>常规配置</p>
    <div class="button-box" id="button-box-3">
      <button>标题 + 内容</button>
      <button>标题 + 内容 + 宽度</button>
      <button>内容区域背景色</button>
    </div>
    <div class="code">
      <pre>
		<span fn>Dialog</span>
				({
					<span attr>title</span>: <span value>"标题"</span>,
					<span attr>content</span>: <span value>"内容"</span>
				});
				<span fn>Dialog</span>
				({
					<span attr>title</span>: <span value>"标题"</span>,
					<span attr>content</span>: <span value>"内容"</span>,
					<span attr>width</span>: <span value>800</span>
				});
				<span fn>Dialog</span>
				({
					<span attr>title</span>: <span value>"标题"</span>,
					<span attr>content</span>: <span value>"内容"</span>,
					<span attr>contentBgColor</span>: <span value>"#f5f5f5"</span>
				});
		</pre>
    </div>
  </div>
	
	
  <div class="box">
    <p>可拖动对话框</p>
    <div class="button-box" id="button-box-4">
      <button>打开一个对话框</button>
      <p><span>关闭所有对话框</span></p>
    </div>
    <div class="code">
      <pre>
			<span fn>Dialog</span>
			({
				<span attr>title</span>: <span value>"标题"</span>,
				<span attr>content</span>: <span value>"内容"</span>,
				<span attr>draggable</span>: <span value>true</span>
			});
		</pre>
    </div>
  </div>
	
  <div class="box">
    <p>全屏对话框</p>
    <div class="button-box" id="button-box-5">
      <button>全屏对话框</button>
    </div>
    <div class="code">
		<pre>
			<span fn>Dialog</span>
			({
				<span attr>title</span>: <span value>"标题"</span>,
				<span attr>content</span>: <span value>"内容"</span>,
				<span attr>fullscreen</span>: <span value>true</span>
			});
		</pre>
    </div>
  </div>
	
  <div class="box">
    <p>自动关闭</p>
    <div class="button-box" id="button-box-6">
      <button>可自动关闭</button>
    </div>
    <div class="code">
      <pre>
			<span fn>Dialog</span>
			({
				<span attr>title</span>: <span value>"标题"</span>,
				<span attr>content</span>: <span value>"内容"</span>,
				<span attr>autoClose</span>: <span value>5000</span>
			});
	</pre>
    </div>
  </div>
  <div class="box">
    <p>嵌入 Iframe</p>
    <div class="button-box" id="button-box-7">
      <button>打开对话框</button>
    </div>
    <div class="code">
      	<pre>
			<span fn>Dialog</span>
			({
			<span attr>title</span>: <span value>"标题"</span>,
			<span attr>width</span>: <span value>1100</span>,
			<span attr>iframeContent</span>: {
				<span attr>src</span>: <span value>"http://www.baidu.com/"</span>,
				<span attr>height</span>: <span value>600</span>
			},
			<span attr>showButton</span>: <span value>false</span>
			});
		</pre>
    </div>
  </div>
 
  <div class="box">
    <p>嵌入图片</p>
    <div class="button-box" id="button-box-8">
      <button>打开对话框</button>
    </div>
    <div class="code">
      <pre>
			<span fn>Dialog</span>
			({
				<span attr>width</span>: <span value>1100</span>,
				<span attr>imageContent</span>: {
					<span attr>src</span>: <span value>"demo.png"</span>,
					<span attr>height</span>: <span value>600</span>
				},
				<span attr>showButton</span>: <span value>false</span>,
				<span attr>showTitle</span>: <span value>false</span>,
				<span attr>maskClose</span>: <span value>true</span>
			});
		</pre>
    </div>
  </div>
	
  <div class="box">
    <p>嵌入多张图片</p>
    <div class="button-box" id="button-box-9">
      <button>打开对话框</button>
    </div>
    <div class="code">
      <pre>
			<span fn>Dialog</span>
				({
				<span attr>width</span>: <span value>700</span>,
				<span attr>imageContent</span>: {
					<span attr>src</span>: [ <span value>"1.png"</span>, <span value>"2.png"</span>, <span value>"3.png"</span>, <span value>"4.png"</span>, <span value>"5.png"</span> ],
					<span attr>height</span>: <span value>400</span>
				},
				<span attr>showButton</span>: <span value>false</span>,
				<span attr>showTitle</span>: <span value>false</span>,
				<span attr>maskClose</span>: <span value>true</span>
			});
	</pre>
    </div>
  </div>
	
  <div class="box">
    <p>嵌入视频</p>
    <div class="button-box" id="button-box-10">
      <button>打开对话框</button>
    </div>
    <div class="code">
     	 <pre>
				<span fn>Dialog</span>({
				<span attr>width</span>: <span value>800</span>,
				videoContent: {
					<span attr>src</span>: <span value>"https://blz-videos.nosdn.127.net/1/HearthStone/f6cd63b590d416821d3e27e0.mp4"</span>,
					<span attr>height</span>: <span value>450</span>
				},
				<span attr>showButton</span>: <span value>false</span>,
				<span attr>showTitle</span>: <span value>false</span>,
				<span attr>maskClose</span>: <span value>true</span>
			});
		</pre>
    </div>
  </div>
  <div class="box">
    <p>确定按钮 - 加载中</p>
    <div class="button-box" id="button-box-11">
      <button>打开对话框</button>
    </div>
    <div class="code">
      <pre>
				<span fn>Dialog</span>
				({
					<span attr>title</span>: <span value>"标题"</span>,
					<span attr>content</span>: <span value>"内容"</span>,
					<span attr>ok</span>: {
					<span attr>loading</span>: true,
					<span attr>loadingText</span>: "等一会",
					<span attr>click</span>: function () {
						setTimeout(function () {
							<span fn>Dialog.close</span>();
						}, 3000)
					}
				}
			});
		</pre>
    </div>
  </div>
	
  <div class="box">
    <p>按钮事件</p>
    <div class="button-box" id="button-box-12">
      <button>打开对话框</button>
    </div>
    <div class="code">
			  <pre>
					<span fn>Dialog</span>({
						<span attr>title</span>: <span value>"标题"</span>,
						<span attr>content</span>: <span value>"内容"</span>,
						<span attr>ok</span>: {
							<span attr>click</span>: function () {
								alert( <span value>"确定"</span> );
							}
						},
						<span attr>cancel</span>: {
							<span attr>click</span>: function () {
								alert( <span value>"取消"</span> );
							}
						}
					});
			</pre>
    </div>
  </div>
  
  <div class="box">
    <p>开关事件</p>
    <div class="button-box" id="button-box-13">
      <button>打开对话框</button>
    </div>
    <div class="code">
     	 <pre>
			<span fn>Dialog</span>
			({
				<span attr>title</span>: <span value>"标题"</span>,
				<span attr>content</span>: <span value>"内容"</span>,
				<span attr>afterOpen</span>: function () {
					alert( <span value>"打开了对话框"</span> );
				},
				<span attr>afterClose</span>: function () {
					alert( <span value>"关闭了对话框"</span> );
				}
			});
		</pre>
    </div>
  </div>
</section>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'

export default {
  name: 'SvgIcon',
  props: {
   
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
   
  },
  mounted(){
      function $(selector, context) {
	return (context || document).querySelector(selector);
}

function $$(selector, context) {
	return [].slice.call((context || document).querySelectorAll(selector));
}
$$(".button-box").forEach(function (el) {
	if ($$("button", el).length === 1) {
		$("button", el).style.cssText = "display:block;margin:0 auto;";
	}
})
$("#container").style.display = "block";
$$("#button-box-1 button").forEach(function (btn, index) {
	btn.onclick = function () {
		var type = ["info", "success", "warn", "error"];
		Dialog[type[index]](type[index] + " 对话框", "内容区域");
	}
})
$$("#button-box-2 button").forEach(function (btn, index) {
	btn.onclick = function () {
		switch (index) {
			case 0:
				Dialog("内容");
				break;
			case 1:
				Dialog("标题", "内容");
				break;
			case 2:
				Dialog("标题", "内容", 800);
				break;
		}
	}
})
$$("#button-box-3 button").forEach(function (btn, index) {
	btn.onclick = function () {
		switch (index) {
			case 0:
				Dialog({
					title: "标题",
					content: "内容"
				});
				break;
			case 1:
				Dialog({
					title: "标题",
					content: "内容",
					width: 800
				});
				break;
			case 2:
				Dialog({
					title: "标题",
					content: "内容",
					contentBgColor: "#f5f5f5"
				});
				break;
		}
	}
})
$("#button-box-4 button").onclick = function () {
	this.textContent = "再打开一个对话框";
	Dialog({
		title: "标题",
		content: "内容",
		draggable: true
	});
}
$("#button-box-4 p").onclick = function () {
	Dialog.close();
}
$("#button-box-5 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		fullscreen: true
	});
}
$("#button-box-6 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		autoClose: 5000
	});
}
$("#button-box-7 button").onclick = function () {
	Dialog({
		title: "标题",
		width: 1100,
		iframeContent: {
			src: "http://www.baidu.com/",
			height: 600
		},
		showButton: false
	});
}
$("#button-box-8 button").onclick = function () {
	Dialog({
		width: 1100,
		imageContent: {
			src: "1.jpg",
			height: 600
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-9 button").onclick = function () {
	Dialog({
		width: 700,
		imageContent: {
			src: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],
			height: 400
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-10 button").onclick = function () {
	Dialog({
		width: 800,
		videoContent: {
			src: "https://blz-videos.nosdn.127.net/1/HearthStone/f6cd63b590d416821d3e27e0.mp4",
			height: 450
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-11 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		ok: {
			loading: true,
			loadingText: "等一会",
			callback: function () {
				setTimeout(function () {
					Dialog.close();
				}, 3000)
			}
		}
	});
}
$("#button-box-12 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		ok: {
			callback: function () {
				alert("确定");
			}
		},
		cancel: {
			callback: function () {
				alert("取消");
			}
		}
	});
}
$("#button-box-13 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		afterOpen: function () {
			alert("打开了对话框");
		},
		afterClose: function () {
			alert("关闭了对话框");
		}
	});
}
  }
}
</script>

<style scoped>


.box {
	width: 740px;
	border-bottom: #fff solid 1px;
	margin: 0 auto;
	padding: 30px 0
}
.box>p {
	text-align: center;
	font-size: 20px;
	font-weight: 700;
	margin: 10px 0 24px 0
}
.button-box {
	text-align: center
}
button {
	display: inline-block;
	background: #fff;
	border: #09f solid 1px;
	color: #09f;
	padding: 8px 10px;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
	margin-right: 6px;
	transition: .2s
}
button:hover {
	opacity: .8
}
.code {
	border-radius: 4px;
	font-size: 11px;
	background: #fcfcfc;
	padding: 16px;
	margin: 20px 0 0 0;
	border: #eaeaea solid 1px;
	line-height: 170%;
	overflow-x: auto
}
.code, .code * {
	font-family: InputMono, Consolas
}
span[fn] {
	color: #7e00ee
}
span[value] {
	color: #d70f41
}
span[attr] {
	color: #009595
}
#button-box-4 p {
	margin-top: 20px;
	font-size: 13px;
	cursor: pointer;
	color: #777
}
</style>
