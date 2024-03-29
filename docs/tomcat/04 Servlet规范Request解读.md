---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /tomcat/
---

::: tip

阅读Java™ Servlet Specification，加强理解Serlvet,

:::

## post请求multipart/form-data

```java {6}
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("=============POST METHOD==================");
        String[] as = req.getParameterValues("a");
        // read body data
        String collect = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        System.out.println(collect);
        System.out.println(Arrays.toString(as));
    }
```

![image (22)](https://gitee.com/q10viking/PictureRepos/raw/master/images//202112050620460.jpg)

结果输出

```
=============POST METHOD==================
----------------------------818265112593556460216598
Content-Disposition: form-data; name="a"

goodbye
----------------------------818265112593556460216598
Content-Disposition: form-data; name="a"

world
----------------------------818265112593556460216598--
[hello]
```

## post请求application/x-www-form-urlencoded:star:

::: tip

Data from the query string and the post body are aggregated into the request parameter set. Query string data is presented before post body data. For example, if a request is made with a query string of a=hello and a post body of a=goodbye&a=world, the resulting parameter set would be ordered a=(hello, goodbye, world).

:::

The following are the conditions that must be met before post **form data will be populated to the parameter set**:

1. The request is an HTTP or HTTPS request.
2. The HTTP method is POST.
3. The content type is application/x-www-form-urlencoded.
4. The servlet has made an initial call of any of the getParameter family of methods on the request object.

![image (20)](https://gitee.com/q10viking/PictureRepos/raw/master/images//202112050618418.jpg)

```sh
=============POST METHOD==================

[hello, goodbye, world]
```

### 两种请求类型的区别

::: tip

:one: `application/x-www-form-urlencoded`, the body of the HTTP message sent to the server is essentially one giant query string -- name/value pairs are separated by the ampersand (`&`), and names are separated from values by the equals symbol (`=`)

:two: `multipart/form-data` transmitting name/value pairs, each pair is represented as a "part" in a MIME message.**Parts** are separated by a particular string **boundary** (chosen specifically so that this boundary string does not occur in any of the "value" payloads). Each part has its own set of MIME headers like `Content-Type`, and particularly `Content-Disposition`, which can give each part its "name." The value piece of each name/value pair is the payload of each part of the MIME message.

:::

参考：https://stackoverflow.com/a/4073451/7628578

请求头传入：

```json
content-type: multipart/form-data; boundary=--------------------------188143036584739792660095
```

服务端收到

```sh
----------------------------188143036584739792660095
Content-Disposition: form-data; name="a"

goodbye
----------------------------188143036584739792660095
Content-Disposition: form-data; name="a"

world
----------------------------188143036584739792660095--
```



## FileUpload

![image (24)](https://gitee.com/q10viking/PictureRepos/raw/master/images//202112060630551.jpg)

```java
// 用于getPart中part使用的
@MultipartConfig(location = "D:\\Github\\learn-tomcat\\catalina-home\\webapps\\servlet-specification\\uploads")
public class FileUpload extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("=============FileUpload===================");
        Collection<Part> parts = req.getParts();
        for (Part part: parts){
            part.write(part.getSubmittedFileName());
        }
    }
}
```

![image (23)](https://gitee.com/q10viking/PictureRepos/raw/master/images//202112060629324.jpg)

## Attributes

::: tip

自己设置的属性，用于后续处理

:::

```java
@WebServlet("/request/attributes")
public class Attributes extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("developer.name","静默");
        Enumeration<String> attributeNames = req.getAttributeNames();
        while(attributeNames.hasMoreElements()){
            String name = attributeNames.nextElement();
            System.out.println(name + " = " + req.getAttribute(name));
        }
    }
}
```

## Headers

```java
@WebServlet("/request/headers")
public class Headers extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Enumeration<String> headerNames = req.getHeaderNames();
        while(headerNames.hasMoreElements()){
            String name = headerNames.nextElement();
            System.out.println(name + " = " + req.getHeader(name));
        }
    }
}
```



```
accept = */*
accept-encoding = gzip, deflate, br
accept-language = zh-CN
user-agent = ApiPOST Runtime +https://www.apipost.cn
connection = keep-alive
content-type = multipart/form-data; boundary=--------------------------383670703119003940829799
host = localhost:8888
content-length = 0
```



## Path

::: tip

http://localhost:8888/servlet_specification/request/path

:::

```java
@WebServlet("/request/path")
public class path extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String contextPath = req.getContextPath();
        String servletPath = req.getServletPath();
        String pathInfo = req.getPathInfo();
        String requestURI = contextPath + servletPath + pathInfo;
        System.out.println("contextPath = " + contextPath);
        System.out.println("servletPath = " + servletPath);
        System.out.println("pathInfo = " + pathInfo);
        System.out.println("requestURI = " + requestURI);
    }
}
```

```
contextPath = /servlet_specification
servletPath = /request/path
pathInfo = null
requestURI = /servlet_specification/request/pathnull
```



---------

```java
@WebServlet("/request/pathTranslated")
public class PathTranslation extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String requestURI = req.getRequestURI();
        String realPath = req.getServletContext().getRealPath("");
        String pathTranslated = req.getPathTranslated();
        // pathTranslated = null
        System.out.println("pathTranslated = " + pathTranslated);
        // realPath = D:\Github\learn-tomcat\catalina-home\webapps\servlet-specification\
        System.out.println("realPath = " + realPath);
        // requestURI = /servlet_specification/request/pathTranslated
        System.out.println("requestURI = " + requestURI);
    }
}
```

