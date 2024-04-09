"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[97409],{38033:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2ba19eef",path:"/Docker/13%20%E5%AE%89%E8%A3%85k8s.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Docker/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"服务器准备",slug:"服务器准备",children:[]},{level:2,title:"K8S环境准备工作",slug:"k8s环境准备工作",children:[{level:3,title:"k8s安装",slug:"k8s安装",children:[]},{level:3,title:"设置启动",slug:"设置启动",children:[]},{level:3,title:"配置",slug:"配置",children:[]}]},{level:2,title:"在k8s-master机器执行查看节点命令❤️",slug:"在k8s-master机器执行查看节点命令❤️",children:[]},{level:2,title:"说明",slug:"说明",children:[{level:3,title:"kubeadm",slug:"kubeadm",children:[]},{level:3,title:"kubectl",slug:"kubectl",children:[]},{level:3,title:"kubelet",slug:"kubelet",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"Docker/13 安装k8s.md"}},36032:(n,s,a)=>{a.r(s),a.d(s,{default:()=>L});var e=a(20641);const l={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Fv)('<h2 id="服务器准备" tabindex="-1"><a class="header-anchor" href="#服务器准备" aria-hidden="true">#</a> 服务器准备</h2><p>搭建K8S集群，准备三台2核（2CPU）4G的虚拟机(内存至少2G以上)，操作系统选择用centos 7以上 版本，每台机器上都安装好docker</p><p><img src="/images/Docker/image-20230424225007912.png" alt="image-20230424225007912"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.135.130 k8s-master\n192.168.135.132 k8s-node1\n192.168.135.135 k8s-node2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/images/Docker/image-20230424214944619.png" alt="image-20230424214944619"></p><h2 id="k8s环境准备工作" tabindex="-1"><a class="header-anchor" href="#k8s环境准备工作" aria-hidden="true">#</a> K8S环境准备工作</h2>',6),r={href:"https://q10viking.github.io/Docker/06%20centos%E5%AE%89%E8%A3%85docker.html",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Fv)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1 关闭防火墙</span>\nsystemctl stop firewalld\nsystemctl disable firewalld\n\n<span class="token comment"># 2 关闭 selinux</span>\n<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config <span class="token comment"># 永久关闭</span>\nsetenforce <span class="token number">0</span> <span class="token comment"># 临时关闭</span>\n\n<span class="token comment"># 3、关闭 swap</span>\nswapoff <span class="token parameter variable">-a</span> <span class="token comment"># 临时关闭</span>\n<span class="token function">vi</span> /etc/fstab <span class="token comment"># 永久关闭</span>\n<span class="token comment">#注释掉swap这行</span>\n<span class="token comment"># /dev/mapper/centos-swap swap                    swap    defaults        0 0</span>\n\nsystemctl <span class="token function">reboot</span>  <span class="token comment">#重启生效</span>\n<span class="token function">free</span> <span class="token parameter variable">-m</span>  <span class="token comment">#查看下swap交换区是否都为0，如果都为0则swap关闭成功</span>\n\n\n<span class="token comment">#4、给三台机器分别设置主机名</span>\nhostnamectl set-hostname <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>  <span class="token comment"># 如： hostnamectl set-hostname k8s-master</span>\n第一台<span class="token punctuation">(</span><span class="token number">192.168</span>.135.130<span class="token punctuation">)</span>：k8s-master\n第二台<span class="token punctuation">(</span><span class="token number">192.168</span>.135.132<span class="token punctuation">)</span>：k8s-node1\n第三台<span class="token punctuation">(</span><span class="token number">192.168</span>.135.135<span class="token punctuation">)</span>：k8s-node2\n\n<span class="token function">hostname</span>  <span class="token comment"># 验证</span>\n<span class="token comment">#或者</span>\n<span class="token function">cat</span> /etc/hostname\n\n\n<span class="token comment">#5、在 k8s-master机器添加hosts，执行如下命令，ip需要修改成你自己机器的ip</span>\n<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n192.168.135.130 k8s-master\n192.168.135.132 k8s-node1\n192.168.135.135 k8s-node2\nEOF</span>\n\n<span class="token comment">#6、将桥接的IPv4流量传递到iptables</span>\n<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF</span>\n\n<span class="token function">sysctl</span> <span class="token parameter variable">--system</span> <span class="token comment"># 生效</span>\n\n<span class="token comment"># 7、设置时间同步</span>\nyum <span class="token function">install</span> ntpdate <span class="token parameter variable">-y</span>\nntpdate time.windows.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="k8s安装" tabindex="-1"><a class="header-anchor" href="#k8s安装" aria-hidden="true">#</a> k8s安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 8、添加k8s yum源</span>\n<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\nhttps://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF</span>\n\n\n<span class="token comment"># 9、如果之前安装过k8s，先卸载旧版本</span>\nyum remove <span class="token parameter variable">-y</span> kubelet kubeadm kubectl\n\n<span class="token comment"># 10、查看可以安装的版本</span>\nyum list kubelet <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>\n\n<span class="token comment"># 11、安装kubelet、kubeadm、kubectl 指定版本，我们使用kubeadm方式安装k8s集群</span>\nyum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="/images/Docker/image-20230424223507060.png" alt="image-20230424223507060"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>已安装:\n  kubeadm.x86_64 <span class="token number">0</span>:1.18.0-0            kubectl.x86_64 <span class="token number">0</span>:1.18.0-0\n  kubelet.x86_64 <span class="token number">0</span>:1.18.0-0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="设置启动" tabindex="-1"><a class="header-anchor" href="#设置启动" aria-hidden="true">#</a> 设置启动</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 12、开机启动kubelet</span>\nsystemctl <span class="token builtin class-name">enable</span> kubelet\nsystemctl start kubelet\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><p><strong>在k8s-master机器上执行初始化操作</strong>(里面的第一个ip地址就是k8s-master机器的ip，改成你自己机器的，后面两个ip网段不用动)</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm init --apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.135.130 --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.18.0 --service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 --pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/Docker/image-20230424225402763.png" alt="image-20230424225402763"></p><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Your Kubernetes control-plane has initialized successfully<span class="token operator">!</span>\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube\n  <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config\n  <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun <span class="token string">&quot;kubectl apply -f [podnetwork].yaml&quot;</span> with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can <span class="token function">join</span> any number of worker nodes by running the following on each as root:\n\nkubeadm <span class="token function">join</span> <span class="token number">192.168</span>.135.130:6443 <span class="token parameter variable">--token</span> wgswcq.r8zwff0iyzvf0oon <span class="token punctuation">\\</span>\n    --discovery-token-ca-cert-hash sha256:803e8a48e64fa25b7ec1ae57a36d775b305d3d970d28a361a85dda7f551f8da0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><blockquote><p><strong>在k8s-master机器上执行如下命令</strong></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#配置使用 kubectl 命令工具(类似docker这个命令)，执行上图第二个红框里的命令</span>\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube\n<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config\n<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config\n\n<span class="token comment">#查看kubectl是否能正常使用</span>\nkubectl get nodes\n\n<span class="token comment">#安装 Pod 网络插件</span>\nkubectl apply <span class="token parameter variable">-f</span> https://docs.projectcalico.org/manifests/calico.yaml\n<span class="token comment"># 如果上面这个calico网络插件安装不成功可以试下下面这个</span>\n<span class="token comment">#  kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span>\nkubectl apply <span class="token parameter variable">-f</span> https://k8s.io/examples/pods/simple-pod.yaml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p><strong>在所有k8s node机器执行上图第三个红框里的命令</strong></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.135.130:6443 <span class="token parameter variable">--token</span> wgswcq.r8zwff0iyzvf0oon <span class="token punctuation">\\</span>\n    --discovery-token-ca-cert-hash sha256:803e8a48e64fa25b7ec1ae57a36d775b305d3d970d28a361a85dda7f551f8da0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/Docker/image-20230424232214629.png" alt="image-20230424232214629"></p><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> Starting the kubelet\n<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> Waiting <span class="token keyword">for</span> the kubelet to perform the TLS Bootstrap<span class="token punctuation">..</span>.\n\nThis <span class="token function">node</span> has joined the cluster:\n* Certificate signing request was sent to apiserver and a response was received.\n* The Kubelet was informed of the new secure connection details.\n\nRun <span class="token string">&#39;kubectl get nodes&#39;</span> on the control-plane to see this <span class="token function">node</span> <span class="token function">join</span> the cluster.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h2 id="在k8s-master机器执行查看节点命令❤️" tabindex="-1"><a class="header-anchor" href="#在k8s-master机器执行查看节点命令❤️" aria-hidden="true">#</a> 在k8s-master机器执行查看节点命令❤️</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>\nNAME         STATUS   ROLES    AGE     VERSION\nk8s-master   Ready    master   39m     v1.18.0\nk8s-node1    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   8m11s   v1.18.0\nk8s-node2    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   8m1s    v1.18.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>刚刚安装的三个k8s节点都已经准备就绪，<strong>大功告成</strong>！😘😊👍</p></blockquote><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><h3 id="kubeadm" tabindex="-1"><a class="header-anchor" href="#kubeadm" aria-hidden="true">#</a> kubeadm</h3>',23),c={href:"https://kubernetes.io/zh-cn/docs/reference/setup-tools/kubeadm/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<ul><li><p>kubeadm 是 kubernetes 的集群安装工具，能够快速安装 kubernetes 集群。能完成下面的拓扑安装</p><ul><li><p>单节点 k8s （1+0）</p></li><li><p>单 master 和多 node 的 k8s 系统（1+n）</p></li><li><p>Mater HA 和多 node 的 k8s 系统(m*1+n)</p></li></ul></li></ul><p>kubeadm 在整个 K8S 架构里的位置</p><p><img src="/images/Docker/0457a7c9df764999b7860f.png" alt="img"></p><hr><h3 id="kubectl" tabindex="-1"><a class="header-anchor" href="#kubectl" aria-hidden="true">#</a> kubectl</h3>',5),i={href:"https://kubernetes.io/zh-cn/docs/reference/kubectl/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://kubernetes.io/zh-cn/docs/reference/kubectl/kubectl/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Lk)("hr",null,null,-1),m=(0,e.Lk)("h3",{id:"kubelet",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#kubelet","aria-hidden":"true"},"#"),(0,e.eW)(" kubelet")],-1),k={href:"https://kubernetes.io/zh-cn/docs/reference/command-line-tools-reference/kubelet/",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Lk)("p",null,"在集群中的每个节点上用来启动 Pod 和容器等",-1),h=(0,e.Lk)("p",null,"kubelet 是在每个 Node 节点上运行的主要 “节点代理”。它可以使用以下之一向 apiserver 注册： 主机名（hostname）；覆盖主机名的参数；某云驱动的特定逻辑。",-1),g=(0,e.Lk)("h2",{id:"参考",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,e.eW)(" 参考")],-1),f={href:"https://zhuanlan.zhihu.com/p/494374026",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/yy690486439/p/13596947.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/7107954026875977764#heading-18",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md",target:"_blank",rel:"noopener noreferrer"},x={},L=(0,a(66262).A)(x,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",l,[(0,e.eW)("Kubernetes 文档 | Kubernetes"),(0,e.bF)(a)])]),p,(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,[(0,e.eW)("首先安装好docker参照"),(0,e.Lk)("a",r,[(0,e.eW)("centos 安装 docker"),(0,e.bF)(a)])])]),t,(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("Kubeadm | Kubernetes"),(0,e.bF)(a)])]),o,(0,e.Lk)("p",null,[(0,e.Lk)("a",i,[(0,e.eW)("命令行工具 (kubectl) | Kubernetes"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.eW)("Kubernetes 命令行工具 "),(0,e.Lk)("a",b,[(0,e.eW)("kubectl"),(0,e.bF)(a)]),(0,e.eW)("， 让你可以对 Kubernetes 集群运行命令。 你可以使用 kubectl 来部署应用、监测和管理集群资源以及查看日志。")]),u,m,(0,e.Lk)("p",null,[(0,e.Lk)("a",k,[(0,e.eW)("kubelet | Kubernetes"),(0,e.bF)(a)])]),d,h,g,(0,e.Lk)("p",null,[(0,e.Lk)("a",f,[(0,e.eW)("K8S 笔记 - 部署 k8s dashboard - 知乎 (zhihu.com)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",v,[(0,e.eW)("删除kubernetes dashboard - 危杨益 - 博客园 (cnblogs.com)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",y,[(0,e.eW)("Kubernetes（k8s）安装以及搭建k8s-Dashboard详解 - 掘金 (juejin.cn)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",w,[(0,e.eW)("dashboard creating-sample-user GitHub"),(0,e.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);