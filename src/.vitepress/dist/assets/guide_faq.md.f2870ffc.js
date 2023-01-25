import{_ as e,c as i,o as a,e as r}from"./app.ae0b7218.js";const m=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"❓ 装完 kivibot 依赖后提示找不到 kivi 命令","slug":"no-kivi-cmd","link":"#no-kivi-cmd","children":[]},{"level":2,"title":"❓ 框架启动时报错，无法正常启动","slug":"start-error","link":"#start-error","children":[]},{"level":2,"title":"❓ 登录时一直提示 server is busy","slug":"server-is-busy","link":"#server-is-busy","children":[]},{"level":2,"title":"❓ 如何获取滑块验证码的 ticket","slug":"get-ticket","link":"#get-ticket","children":[]},{"level":2,"title":"❓ 报错提示设备 QQ 版本过低","slug":"low-version","link":"#low-version","children":[]},{"level":2,"title":"❓ 扫码提示环境异常，无法扫码","slug":"qrcode-limit","link":"#qrcode-limit","children":[]},{"level":2,"title":"❓ 如何切换登录协议，哪些可以同时在线","slug":"change-protocal","link":"#change-protocal","children":[]},{"level":2,"title":"❓ 消息指令安装插件失败，提示 timeout 超时","slug":"npm-timeout","link":"#npm-timeout","children":[]},{"level":2,"title":"❓ 群消息发送失败，提示被风控","slug":"risk-management","link":"#risk-management","children":[]},{"level":2,"title":"❓ 提示密码已泄露，被强制下线要求修改密码","slug":"password-leakage","link":"#password-leakage","children":[]},{"level":2,"title":"❓ 无法设置在线状态、无法接收某些群事件","slug":"miss-events","link":"#miss-events","children":[]},{"level":2,"title":"❓ 只能接收群聊消息，无法接收私聊消息和群邀请","slug":"miss-private","link":"#miss-private","children":[]},{"level":2,"title":"❓ 支持多账号、转账和红包等 API 吗","slug":"bad-reqeust","link":"#bad-reqeust","children":[]}],"relativePath":"guide/faq.md","lastUpdated":1673243126000}'),l={name:"guide/faq.md"},t=r(`<h1 id="faq" tabindex="-1">常见问题 <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><p>这里列举了一系列【高频问题】和【常见解决方案】。</p><p>如果以下方案未能解决，或者你有其他任何问题，欢迎到社区礼貌提问以获取帮助。</p><ul><li><a href="https://discord.gg/RegGQD3Fu6" target="_blank" rel="noreferrer">前往 Discord 频道</a></li><li><a href="https://jq.qq.com/?_wv=1027&amp;k=iK97X7NS" target="_blank" rel="noreferrer">加入 QQ 交流群 (群号: 614617552)</a></li></ul><h2 id="no-kivi-cmd" tabindex="-1">❓ 装完 <code>kivibot</code> 依赖后提示找不到 <code>kivi</code> 命令 <a class="header-anchor" href="#no-kivi-cmd" aria-hidden="true">#</a></h2><p>请确保配置好了 node 关键环境变量 <code>NODE_HOME</code>, 同时命令行能正常访问 node 和 npm 命令。</p><h2 id="start-error" tabindex="-1">❓ 框架启动时报错，无法正常启动 <a class="header-anchor" href="#start-error" aria-hidden="true">#</a></h2><p>框架要求的 node 最低版本为 14，请确保当前安装的 node 版本符合要求。</p><h2 id="server-is-busy" tabindex="-1">❓ 登录时一直提示 server is busy <a class="header-anchor" href="#server-is-busy" aria-hidden="true">#</a></h2><p>可能是当前<strong>网络环境异常</strong>导致，尝试以下方案:</p><ul><li>切换扫码登录模式，如果扫码异常参考<a href="#qrcode-limit">这里</a></li><li>如果可以，切换 WiFi 或移动数据与 WiFi 环境进行互换</li><li>尝试使用 <code>kivi fix --device</code> 命令修复设备 IMEI</li><li>等，没错，就是等，有时候服务器抽风，等一会儿就好</li><li>上面都不行？那完犊子，使用其他设备或服务器进行登录吧</li><li>还不行？可能是账号风控严重，尝试切换其他 QQ 账号登录</li></ul><h2 id="get-ticket" tabindex="-1">❓ 如何获取滑块验证码的 <code>ticket</code> <a class="header-anchor" href="#get-ticket" aria-hidden="true">#</a></h2><p>框架会自动复制滑块链接，如果没有请手动复制，然后进行以下操作:</p><ol><li>打开浏览器，按键盘上的【F12】或鼠标右键网页空白区域选择【检查】(审阅)，打开浏览器的【开发者工具】</li><li>切换到开发者工具的【网络】(network)选项卡，点击【Fetch/XHR】按钮筛选请求</li><li>在浏览器的地址栏粘贴复制好的滑块链接，按 Enter 键打开滑块验证页面</li><li><strong>正确滑动滑块</strong>完成验证，<strong>如果滑动完再次出现滑块，则需要再滑一次</strong></li><li>在开发者工具下方的请求列表找到<strong>最下面最新的一条</strong>，单击它打开详情面板</li><li>切换到详情面板的【预览】(preview)选项卡，在 <code>ticket</code> 字段的内容上鼠标右键【复制值】</li><li>将复制的 <code>ticket</code> 粘贴到框架的命令行输入区，按 Enter 键确认</li></ol><p>如果你使用的是移动设备，可以尝试<a href="https://github.com/mzdluo123/TxCaptchaHelper" target="_blank" rel="noreferrer">这个项目</a>的解决方案。</p><h2 id="low-version" tabindex="-1">❓ 报错提示设备 QQ 版本过低 <a class="header-anchor" href="#low-version" aria-hidden="true">#</a></h2><p>尝试使用 <code>kivi fix --device</code> 命令修复设备 IMEI，然后选择【密码登录】+【短信验证码验证设备锁】的模式进行登录。</p><p>如果修复完登录仍然无效，尝试在<strong>本地设备</strong>上使用扫码模式登录。</p><p>如果还需要部署到服务器，可以尝试先在本地扫码登录后，将 <code>data/oicq</code> 目录（包含验证信息和设备文件）和 <code>kivi.json</code> 配置文件覆盖到服务器的框架目录再尝试登录。</p><p>如果仍然无法登录，可能是账号风控太严重，尝试切换其他 QQ 账号登录。</p><h2 id="qrcode-limit" tabindex="-1">❓ 扫码提示环境异常，无法扫码 <a class="header-anchor" href="#qrcode-limit" aria-hidden="true">#</a></h2><p>你可以尝试以下<strong>任意</strong>方案绕过扫码限制:</p><ul><li>切换【密码登录模式】进行登录</li><li>使用【IP 处于同一地域】的两台本地设备进行登录和扫码</li><li>使用代理将服务器 IP 和扫码设备的 IP 处于【同一地域】</li></ul><h2 id="change-protocal" tabindex="-1">❓ 如何切换登录协议，哪些可以同时在线 <a class="header-anchor" href="#change-protocal" aria-hidden="true">#</a></h2><p>目前共有四种设备类型可以<strong>同时在线</strong>，不会相互挤掉线:</p><ul><li>手机（包括 iOS, Android 和 HarmonyOS 等）</li><li>电脑（包括 Windows, Win UWP, Linux 和 MacOS 等）</li><li>手表（包括 iWatch 和 Android Watch 等）</li><li>平板（包括 Android Pad 和 iPad 等）</li></ul><p>登录协议标识对照：</p><ul><li><code>1</code>: 安卓手机（手机）</li><li><code>2</code>: 安卓平板（平板）</li><li><code>3</code>: 安卓手表（手表）</li><li><code>4</code>: MacOS（电脑）</li><li><code>5</code>: iPad（平板）</li></ul><p>如果需要切换登录协议，可以使用记事本或者 vscode 等文本编辑器打开框架目录下的配置文件 <code>kivi.json</code>，然后根据上述标识对照参考，编辑 <code>oicq_config</code> 字段的 <code>platform</code> 字段，重启框架生效。</p><h2 id="npm-timeout" tabindex="-1">❓ 消息指令安装插件失败，提示 timeout 超时 <a class="header-anchor" href="#npm-timeout" aria-hidden="true">#</a></h2><p>如果使用 <code>/plugin add &lt;name&gt;</code> 消息指令安装插件失败，提示 timeout 超时，可能是由于 npm 网络连接不通畅，尝试打开终端，执行以下命令<strong>切换国内镜像源</strong>:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://registry.npmmirror.com</span></span>
<span class="line"></span></code></pre></div><h2 id="risk-management" tabindex="-1">❓ 群消息发送失败，提示被风控 <a class="header-anchor" href="#risk-management" aria-hidden="true">#</a></h2><p>某些账号由于使用<strong>新设备</strong>、<strong>新 IP</strong> 或者是<strong>新注册的账号</strong>等原因，可能会被<strong>风控</strong>，时长因账号而异，一般而言，注册越久、等级越高、越经常登录的账号，越不容易被风控。</p><p>账号风控时，可能会有以下特征:</p><ul><li>可能在最长几天之内都无法发送超过 2 个字节的群消息</li><li>长消息必须分片发送才能发送成功，风控时框架会自动尝试分片发送</li><li>可能被一定程度限制加群、加好友以及邀请入群的功能</li><li>可能无法发送合并转发，以及一些 XML 消息</li></ul><p>风控<strong>没有确切的持续时长和解决方案</strong>，常见措施是在你的设备上多挂几天官方客户端，或者挂几天框架，但不装任何插件，不发长消息，等待自行恢复。</p><h2 id="password-leakage" tabindex="-1">❓ 提示密码已泄露，被强制下线要求修改密码 <a class="header-anchor" href="#password-leakage" aria-hidden="true">#</a></h2><p>可能是<strong>异地登录</strong>的原因，请尝试打开设备锁，然后再重新登录。</p><h2 id="miss-events" tabindex="-1">❓ 无法设置在线状态、无法接收某些群事件 <a class="header-anchor" href="#miss-events" aria-hidden="true">#</a></h2><p>如果无法设置在线状态、无法接收某些群事件（戳一戳等）、无法正常接收一些 QQ 表情和 CQ 码等，可能是由于使用手表协议。<strong>手表协议不支持这些功能</strong>，推荐使用 iPad 协议，不仅功能全面，还可以手机电脑 Bot 三端同时在线。</p><h2 id="miss-private" tabindex="-1">❓ 只能接收群聊消息，无法接收私聊消息和群邀请 <a class="header-anchor" href="#miss-private" aria-hidden="true">#</a></h2><p>请检查当前设备的系统时间是否快了 1 分钟以上。</p><h2 id="bad-reqeust" tabindex="-1">❓ 支持多账号、转账和红包等 API 吗 <a class="header-anchor" href="#bad-reqeust" aria-hidden="true">#</a></h2><p>KiviBot 🤖 致力于营造丰富、多元、共同进步的机器人生态。</p><p>🚫 严厉禁止使用本框架进行任何，包括但不限于【营销推广】、【引流】、【黄赌毒】、【诈骗】等的一切违反相关法律的行为。</p><p>框架不会考虑也更不会支持交易相关功能的 API，同时既不支持也不鼓励多账号行为，目前没有多账号的计划，以后也不会有。</p><blockquote><p>理论上可以通过目录物理多开，实现多账号。</p></blockquote>`,48),s=[t];function o(n,d,c,h,p,g){return a(),i("div",null,s)}const v=e(l,[["render",o]]);export{m as __pageData,v as default};
