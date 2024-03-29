---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /zk/
typora-root-url: ..\.vuepress\public
---



Zookeeper 的ACL 权限控制,可以控制节点的读写操作,保证数据的安全性，Zookeeper ACL 权限设置分为 3 部分组成，分别是：**权限模式**（Scheme）、**授权对象**（ID）、**权限信息**（Permission）。最终组成一条例如“scheme:id:permission”格式的 ACL 请求信息。



## Scheme（权限模式）

用来设置 ZooKeeper 服务器进行权限验证的方式。ZooKeeper 的权限验证方式大体分为两种类型：

1. 一种是**范围验证**。所谓的范围验证就是说 ZooKeeper 可以针对一个 IP 或者一段 IP 地址授予某种权限。比如我们可以让一个 IP 地址为“ip：192.168.0.110”的机器对服务器上的某个数据节点具有写入的权限。或者也可以通过“ip:192.168.0.1/24”给一段 IP 地址的机器赋权。
2. 另一种权限模式就是**口令验证**，也可以理解为用户名密码的方式。在 ZooKeeper 中这种验证方式是 Digest 认证，而 Digest 这种认证方式首先在客户端传送“username:password”这种形式的权限表示符后，ZooKeeper 服务端会对密码 部分使用 SHA-1 和 BASE64 算法进行加密，以保证安全性。
   1. 还有一种Super权限模式,  Super可以认为是一种特殊的 Digest 认证。具有 Super 权限的客户端可以对 ZooKeeper 上的任意数据节点进行任意操作。 



## 授权对象（ID）

授权对象就是说我们要把权限赋予谁，而对应于 4 种不同的权限模式来说，

1. 如果我们选择采用 IP 方式，使用的授权对象可以是一个 IP 地址或 IP 地址段；
2. 而如果使用 Digest 或 Super 方式，则对应于一个用户名。
3. 如果是 World 模式，是授权系统中所有的用户。





## 权限信息（Permission）

权限就是指我们可以在数据节点上执行的操作种类，如下所示：在 ZooKeeper 中已经定义好的权限有 5 种：

1. 数据节点（c: create）创建权限，授予权限的对象可以在数据节点下创建子节点；
2. 数据节点（w: wirte）更新权限，授予权限的对象可以更新该数据节点；
3. 数据节点（r: read）读取权限，授予权限的对象可以读取该节点的内容以及子节点的列表信息；
4. 数据节点（d: delete）删除权限，授予权限的对象可以删除该数据节点的子节点；
5. 数据节点（a: admin）管理者权限，授予权限的对象可以对该数据节点体进行 ACL 权限设置。