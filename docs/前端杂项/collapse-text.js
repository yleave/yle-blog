let text1 = `
- **Host**：域名 + 端口号(若无则使用默认端口)，指明了请求将要发送到的服务器主机名和端口号。

  Host 字段在 http/1.1 请求头中必须包含。若缺少了 host 字段或多于一个，则可能会收到 400(bad request) 状态码。

  例： Host: developer.mozilla.org
  
- **Origin** ：协议 + 域名 + 端口。指示了请求来自于哪个站点，且不包含任何路径信息。
  
  这个字段用于 CORS 请求或 POST 请求。

  只有**跨域请求**，或者**同域时发送 post 请求**，才会携带 origin 请求头。 如果浏览器不能获取请求源，那么 origin 满足上面情况也会携带，不过其值为 null。

  例： Origin: https://developer.mozilla.org

- **Referer**：协议 + 域名 + 端口 + 路径 + 参数（完整的 url 路径）。包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。

  不过对于以下几种情况，Referer 不会被发送：
  - 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
  - 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）；
  - 直接输入网址或通过浏览器书签访问；
  - 使用 JavaScript 的 Location.href 或者是 Location.replace()；
  - 使用 html5 中 noreferrer

  例：Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
`;


export default {
    origin_referer_host: text1
};