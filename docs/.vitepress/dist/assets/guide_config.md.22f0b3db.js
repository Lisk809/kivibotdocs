import{_ as s,c as n,o as a,e as l}from"./app.a9f38e6a.js";const u=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[{"level":2,"title":"字段说明","slug":"字段说明","link":"#字段说明","children":[]},{"level":2,"title":"kivi.json 简略例子","slug":"kivi-json-简略例子","link":"#kivi-json-简略例子","children":[]}],"relativePath":"guide/config.md","lastUpdated":null}'),o={name:"guide/config.md"},p=l(`<h1 id="config-file" tabindex="-1">配置文件 <a class="header-anchor" href="#config-file" aria-hidden="true">#</a></h1><p>框架目录下的 <code>kivi.json</code> 是 <code>KiviBot</code> 的配置文件, 包含了一系列框架配置, 可以手动进行修改, 重启后生效。</p><blockquote><p><code>kivi start</code> 命令会检索当前目录下的 <code>kivi.json</code> 配置文件以及 <code>app.js</code> 入口文件, 从而使用正确的配置启动框架。</p></blockquote><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-hidden="true">#</a></h2><div class="language-jsonc"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Bot QQ 账号, 由 CLI 引导生成</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;account&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">114514</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 登录方式, 由 CLI 引导生成, 可选 password（密码登录） 和 qrcode（扫码登录）</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;login_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;password&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 设备锁验证方式, 选择密码登录时, 由 CLI 引导生成, 如果选扫码默认是验证码登录</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 可选 sms（短信验证码验证） 和 qrcode（扫码验证）</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;device_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;sms&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 框架日志消息显示模式, 默认为 short（精简模式, 忽略 CQ 码, 消耗资源少）</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 也可设置为 detail（详细模式, 会显示 CQ 码具体内容, 对于调试插件有帮助）</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;message_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;short&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Bot 账号密码, 在选择密码登录时, 由 CLI 引导生成, 如果选择扫码默认为空</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;password&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 框架日志输出等级, 默认 info, 不输出日志可置为 off, 调试插件可以设为 debug</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;log_level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 管理员列表, 由 CLI 引导生成, 第一个为主管理员（必须）, 其余的为副管理员（可选）</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;admins&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#D19A66;">1141284758</span><span style="color:#ABB2BF;">], </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 启用插件列表, 包括 npm 插件（kivibot-plugin- 开头）和 plugins 目录下的插件</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// npm 插件（kivibot-plugin- 开头）忽略 kivibot-plugin- 前缀</span></span>
<span class="line highlighted"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;plugins&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;demo&quot;</span><span style="color:#ABB2BF;">], </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 机器人事件通知</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;notice&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是否启用, 可通过消息指令 \`/config notice on\` 和 \`/config notice off\` 进行实时切换</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 好友列表相关配置</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;friend&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 好友申请</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;request&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 是否开启好友申请通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 处理好友申请, 可选：ignore（忽略, 默认）, accept（同意）, refuse（拒绝）</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;action&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 新增好友通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;increase&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 好友减少通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;decrease&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 好友私聊消息通知, 默认关闭（false）, 开启请设置为 true</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;message&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 群聊相关配置</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;group&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 邀请机器人进群</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;request&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 是否开启通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 处理群邀请, 可选：ignore（忽略, 默认）, accept（同意）, refuse（拒绝）</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;action&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 新增群聊通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;increase&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 新增群聊通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;decrease&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 机器人被禁言通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;ban&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 群管理员变动通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;admin&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 群转让通知, 默认开启（true）, 不开启请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;transfer&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// oicq 协议配置, 参考 oicq 文档, data 目录限制为 data/oicq, 无法手动修改</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;oicq_config&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 登录协议：1 为安卓手机, 2 为安卓平板, 3 为安卓手表, 4 为 MacOS, 5 为 iPad</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;platform&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// oicq 的日志等级, oicq 日志会输出到框架目录的 logs 文件夹下</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;log_level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 群聊中, 是否忽略机器人自身的消息, 默认忽略, 不忽略请改为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ignore_self&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是否自动选择最优服务器, 默认开启, 关闭请改为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 关闭后会一直使用 msfwifi.3g.qq.com:8080 进行连接</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;auto_server&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是否缓存群员列表, 默认缓存提高效率, 关闭后将大幅减小占用的内存</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;cache_group_member&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 网络问题导致掉线时的重连间隔, 默认 5（秒）, 设置为 0 不自动重连</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;reconn_interval&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 被风控时是否尝试用分片发送, 默认 true, 不发送分片请设置为 false</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;resend&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 指定 ffmpeg 路径</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ffmpeg_path&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ffmpeg&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 指定 ffprobe 路径</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ffprobe_path&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ffprobe&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="kivi-json-简略例子" tabindex="-1"><code>kivi.json</code> 简略例子 <a class="header-anchor" href="#kivi-json-简略例子" aria-hidden="true">#</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;account&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">114514</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;login_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;password&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;device_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;sms&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;message_mode&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;short&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;password&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;log_level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;admins&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#D19A66;">1141284758</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;plugins&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;demo&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;notice&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;friend&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;request&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;action&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;increase&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;decrease&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;message&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;group&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;request&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;enable&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">&quot;action&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;increase&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;decrease&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;ban&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;admin&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;transfer&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;oicq_config&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;platform&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;log_level&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ignore_self&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;auto_server&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;cache_group_member&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;reconn_interval&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;resend&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ffmpeg_path&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ffmpeg&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;ffprobe_path&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ffprobe&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(B,c,r,y,i,A){return a(),n("div",null,e)}const q=s(o,[["render",t]]);export{u as __pageData,q as default};
