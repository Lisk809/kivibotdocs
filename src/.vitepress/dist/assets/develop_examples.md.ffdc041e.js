import{_ as s,c as n,o as a,e as l}from"./app.ae0b7218.js";const C=JSON.parse('{"title":"插件示例","description":"","frontmatter":{},"headers":[{"level":2,"title":"随机一言","slug":"随机一言","link":"#随机一言","children":[]},{"level":2,"title":"扔骰子","slug":"扔骰子","link":"#扔骰子","children":[]}],"relativePath":"develop/examples.md","lastUpdated":1673329401000}'),p={name:"develop/examples.md"},o=l(`<h1 id="plugin-examples" tabindex="-1">插件示例 <a class="header-anchor" href="#plugin-examples" aria-hidden="true">#</a></h1><blockquote><p>逐步完善中，可先参考 <a href="/api/plugin.html"><code>KiviPlugin API</code></a>。</p></blockquote><div class="danger custom-block"><p class="custom-block-title">请注意</p><p>请不要把示例插件发布到 npm。</p></div><h2 id="随机一言" tabindex="-1">随机一言 <a class="header-anchor" href="#随机一言" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;一言&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;1.0.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;一言&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">http</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://v1.hitokoto.cn&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">hitokoto</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div><h2 id="扔骰子" tabindex="-1">扔骰子 <a class="header-anchor" href="#扔骰子" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">randomItem</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">randomInt</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;骰子&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;1.0.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;扔骰子&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 或使用 const n = randomInt(1, 6)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">randomItem</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">nums</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">dice</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function B(t,c,r,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",B]]);export{C as __pageData,d as default};