---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /gRPC/
typora-root-url: ..\.vuepress\public
---



## 环境准备

### 安装protocbuf

protocbuf官网

https://developers.google.com/protocol-buffers

下载地址：

https://github.com/protocolbuffers/protobuf/releases/tag/v3.19.1

Windows下的安装很简单，只需到github上下载Windows平台对应的压缩包然后解压即可

![image-20230419132645753](/images/grpc/image-20230419132645753.png)



> windows环境变量

![image-20230419133020099](/images/grpc/image-20230419132905030.png)

![image-20230419133145165](/images/grpc/image-20230419133145165.png)

> 验证

```sh
C:\Users\11930>protoc --version
libprotoc 22.3
```



## IDEA插件

> idea 建议下载一个 protobuf的插件, 可以有代码提示. 



![image-20230419133831908](/images/grpc/image-20230419133831908.png)



## pom.xml文件配置

修改pom.xml，注意这个build标签和properties标签都是最顶级标签的直接子标签。

```xml
<build>
  <extensions>
    <extension>
      <groupId>kr.motd.maven</groupId>
      <artifactId>os-maven-plugin</artifactId>
      <version>1.6.2</version>
    </extension>
  </extensions>
  <plugins>
    <plugin>
      <groupId>org.xolstice.maven.plugins</groupId>
      <artifactId>protobuf-maven-plugin</artifactId>
      <version>0.6.1</version>
      <configuration>
        <protocArtifact>com.google.protobuf:protoc:3.17.3:exe:${os.detected.classifier}</protocArtifact>
        <pluginId>grpc-java</pluginId>
        <pluginArtifact>io.grpc:protoc-gen-grpc-java:1.42.0:exe:${os.detected.classifier}</pluginArtifact>
      </configuration>
      <executions>
        <execution>
          <goals>
            <goal>compile</goal>
            <goal>compile-custom</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>

```

接着我们继续在pom.xml中添加一些，这些依赖是构造gRPC-java项目必须用到的（来自官方文档）

```xml
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-netty-shaded</artifactId>
  <version>1.42.0</version>
</dependency>
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-protobuf</artifactId>
  <version>1.42.0</version>
</dependency>
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-stub</artifactId>
  <version>1.42.0</version>
</dependency>
<dependency> <!-- necessary for Java 9+ -->
  <groupId>org.apache.tomcat</groupId>
  <artifactId>annotations-api</artifactId>
  <version>6.0.53</version>
  <scope>provided</scope>
</dependency>

```



## 创建proto文件

proto文件用来描述rpc请求体、响应体、以及rpc提供的服务。通过插件可以根据.proto文件生成Java类。

这里面有个非常重要的点要注意，就是proto文件存放的位置。一定要在和`src/main/java`源文件目录同级的proto源文件目录才可以。如下图所

![image-20230419134904299](/images/grpc/image-20230419134904299.png)

## 根据.proto文件生成消息体类文件和XXXGrpc类文件

> 生成消息体类文件

```
mvn protobuf:compile
```

![image-20230419135426443](/images/grpc/image-20230419135426443.png)



> 生成XXXGrpc类文件

```
mvn protobuf:compile-custom 
```

![image-20230419135817834](/images/grpc/image-20230419135817834.png)



> 将生成的代码复制到项目中



## 开发❤️

[Source Code](https://github.com/Q10Viking/learncode/tree/main/rpc/gRPCDemo/src/main)

### proto文件

编写helloworld.proto文件

```protobuf
syntax="proto3";  //  协议版本号

// 选项配置
option java_package = "org.hzz.grpc";
option java_outer_classname = "RPCDateServiceApi";
option java_multiple_files = true;

package org.hzz.protobuf;

// 服务接口.定义请求参数和相应结果
service RPCDateService {
  rpc getDate (RPCDateRequest) returns (RPCDateResponse) {
  }
}

// 定义请求体
message RPCDateRequest {
  string userName = 1;
}

// 定义响应内容
message RPCDateResponse {
  string serverDate = 1;
}
```



### 服务端

> 实现业务功能

```java
import io.grpc.stub.StreamObserver;
import org.hzz.grpc.RPCDateServiceGrpc;
import org.hzz.grpc.RPCDateRequest;
import org.hzz.grpc.RPCDateResponse;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class RPCDateServiceImpl extends RPCDateServiceGrpc.RPCDateServiceImplBase {
    @Override
    public void getDate(RPCDateRequest request, StreamObserver<RPCDateResponse> responseObserver) {
        RPCDateResponse response = null;

        String userName = request.getUserName();
        String data = String.format("你好:%s,今天是%s.", userName, LocalDate.now()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

        try{
            response = RPCDateResponse.newBuilder()
                    .setServerDate(data)
                    .build();
//            int i = 3/0;
        }catch (Exception e){
            responseObserver.onError(e);
        } finally {
            responseObserver.onNext(response);
        }
        responseObserver.onCompleted();
    }
}

```



> 服务



```java
public class GRPCServer {
    private static final int port = 9999;
    public static void main(String[] args) throws IOException, InterruptedException {
        Server server = ServerBuilder.forPort(9999)
                .addService(new RPCDateServiceImpl())
                .build()
                .start();

        System.out.println(String.format("GRpc服务端启动成功, 端口号: %d.", server.getPort()));

        server.awaitTermination();
    }
}
```





### 客户端

```java
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.hzz.grpc.RPCDateRequest;
import org.hzz.grpc.RPCDateResponse;
import org.hzz.grpc.RPCDateServiceGrpc;

public class GRPCClient {
    private static final String host = "localhost";
    private static final int serverPort = 9999;


    public static void main(String[] args) {
        //1,拿到一个通信channel
        ManagedChannel channel = ManagedChannelBuilder.forAddress(host, serverPort)
                .usePlaintext() // 使用明文传输
                .build();

        try {

            //2,通过channel拿到一个stub
            RPCDateServiceGrpc.RPCDateServiceBlockingStub stub = RPCDateServiceGrpc.newBlockingStub(channel);

            RPCDateRequest request = RPCDateRequest.newBuilder().setUserName("Q10Viking").build();
            //3,请求
            RPCDateResponse response = stub.getDate(request);
            //4 输出结果
            System.out.println(response.getServerDate());
        }finally {
            //5 关闭channel
            channel.shutdown();
        }
    }
}
/**
 * 你好:Q10Viking,今天是2023-04-19.
 */
```





## 总结gRPC的核心概念

![image.png](/images/grpc/1636089243054-7937ef27-0e78-42fc-adc2-1045255dc3a4.png)

.proto 文件定义了服务 RPCDateService和 API getDate

```protobuf
// 服务接口.定义请求参数和相应结果	
service RPCDateService {
    rpc getDate (RPCDateRequest) returns (RPCDateResponse) {
    }
}
```

GRPCClient 是 **Client**，是对 **Stub** 封装；通过 **Stub** 可以真正的调用 RPC 请求

```java
//1,拿到一个通信channel
ManagedChannel channel = ManagedChannelBuilder.forAddress(host, serverPort).
    usePlaintext()//无需加密或认证
    .build();
try {
    //2.拿到stub对象
    RPCDateServiceGrpc.RPCDateServiceBlockingStub rpcDateService  = RPCDateServiceGrpc.newBlockingStub(channel);
    RPCDateRequest rpcDateRequest = RPCDateRequest.newBuilder()
        .setUserName("JACK")
        .build();
    //3,请求
    RPCDateResponse rpcDateResponse = rpcDateService.getDate(rpcDateRequest);
    //4,输出结果
    System.out.println(rpcDateResponse.getServerDate());
} finally {
    // 5.关闭channel, 释放资源.
    channel.shutdown();
}
```

**Channel** 提供一个与特定 gRPC server 的主机和端口建立的连接。

**Stub** 就是在 **Channel** 的基础上创建而成的。

Server 端需要实现对应的 RPC，所有的 RPC 组成了 **Service**：

```java
// RPCDateServiceGrpc.RPCDateServiceImplBase 这个就是接口.
// RPCDateServiceImpl 我们需要继承他的,实现方法回调
public class RPCDateServiceImpl extends RPCDateServiceGrpc.RPCDateServiceImplBase {
    @Override
    public void getDate(RPCDateRequest request, StreamObserver<RPCDateResponse> responseObserver) {
        //请求结果，我们定义的
        RPCDateResponse rpcDateResponse = null;
        //
        String userName = request.getUserName();
        String response = String.format("你好:%s,今天是%s.", userName,LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        try {
            // 定义响应,是一个builder构造器.
            rpcDateResponse = RPCDateResponse.newBuilder()
                .setServerDate(response)
                .build();
            //int i = 10/0;
        } catch (Exception e) {
            responseObserver.onError(e);
        } finally {
            // 这种写法是observer,异步写法,
            responseObserver.onNext(rpcDateResponse);
        }

        responseObserver.onCompleted();

    }
}
```

**Server** 的创建需要一个 **Builder**，添加上监听的地址和端口，**注册**上该端口上绑定的服务，最后构建出 Server 并启动：

```java
public class GRPCServer {
    private static final int port = 9999;

    public static void main(String[] args) throws IOException, InterruptedException {
        //设置service端口
        Server server = ServerBuilder.forPort(port)
                .addService(new RPCDateServiceImpl())
                .build().start();
        System.out.println(String.format("GRpc服务端启动成功, 端口号: %d.", port));

        server.awaitTermination();


    }
}
```

**RPC 和 API 的区别**：RPC (Remote Procedure Call) 是一次远程过程调用的整个动作，而 API (Application Programming Interface) 是不同语言在实现 RPC 中的具体接口。一个 RPC 可能对应多种 API，比如同步的、异步的、回调的。一次 RPC 是对某个 API 的一次调用。
