define({
  "name": "DnsDB API",
  "version": "0.0.1",
  "description": "DnsDB API Documentation",
  "title": "API - DnsDB",
  "url": "https://dnsdb.io/api/v1",
  "sampleUrl": "https://dnsdb.io/api/v1",
  "header": {
    "title": "Summary",
    "content": "<h2>概述</h2>\n<p><strong>DnsDB API</strong>是<a href=\"https://dnsdb.io\">DnsDB.io</a> 为开发者提供的API服务。目前该API主要提供DNS查询</p>\n<h2>使用条件</h2>\n<ol>\n<li>升级DnsDB账号为开发者账号</li>\n<li>购买相应的API套餐</li>\n</ol>\n<h2>套餐及价格</h2>\n<p>API不是免费的, 如有需求, 请联系DnsDB客服咨询<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=2785770375&site=qq&menu=yes\"><img border=\"0\" src=\"https://dnsdb.io/static/img/qqchat.jpg\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"/></a></p>\n<h2>SDK下载</h2>\n<table>\n<thead>\n<tr>\n<th>语言</th>\n<th>项目地址</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Java</td>\n<td>开发中</td>\n</tr>\n<tr>\n<td>Python</td>\n<td><a href=\"https://pysdk.dnsdb.io\">查看</a></td>\n</tr>\n</tbody>\n</table>\n"
  },
  "footer": {
    "title": "Errors",
    "content": "<h2>Errors</h2>\n<table>\n<thead>\n<tr>\n<th>status</th>\n<th>error</th>\n<th>message</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>401</code></td>\n<td><code>authenticate_failed</code></td>\n<td>Username password does not match</td>\n</tr>\n<tr>\n<td><code>401</code></td>\n<td><code>account_disabled</code></td>\n<td>Account is disabled</td>\n</tr>\n<tr>\n<td><code>400</code></td>\n<td><code>not_developer</code></td>\n<td>Please apply to become a developer</td>\n</tr>\n<tr>\n<td><code>401</code></td>\n<td><code>unauthorized</code></td>\n<td>Access token has expired or not existed</td>\n</tr>\n<tr>\n<td><code>402</code></td>\n<td><code>credits_insufficient</code></td>\n<td>API number of times insufficient, please recharge</td>\n</tr>\n<tr>\n<td><code>400</code></td>\n<td><code>missing_query_error</code></td>\n<td>Missing query parameters, please select at least one parameter from &quot;host&quot;, &quot;domain&quot;, and &quot;ip&quot;</td>\n</tr>\n<tr>\n<td><code>400</code></td>\n<td><code>from_value_error</code></td>\n<td>[from] should be an integer(0~9970)</td>\n</tr>\n<tr>\n<td><code>400</code></td>\n<td><code>ip_value_error</code></td>\n<td>[ip] should be a valid IP address</td>\n</tr>\n<tr>\n<td><code>504</code></td>\n<td><code>gateway_timeout</code></td>\n<td>Please contact the dnsdb.io administrator to deal with the problem.</td>\n</tr>\n<tr>\n<td><code>500</code></td>\n<td><code>internal_server_error</code></td>\n<td>Please contact the dnsdb.io administrator to deal with the problem.</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "order": [
    "Authorize",
    "SearchDNS",
    "SearchAllDNS",
    "RetrieveDNSResult",
    "Search",
    "Other"
  ],
  "template": {
    "withGenerator": false
  },
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-09-18T03:53:02.195Z",
    "url": "http://apidocjs.com",
    "version": "0.16.1"
  }
});
