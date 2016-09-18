define({ "api": [
  {
    "type": "post",
    "url": "/authorize",
    "title": "Request AccessToken",
    "name": "Authorize",
    "group": "Authorize",
    "version": "0.0.1",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "description": "<p>该API用于验证账号，如果账号验证成功，将返回AccessToken。只有取得AccessToken才能使用其他API。</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST 'https://dnsdb.io/api/v1/authorize' -d 'username=testuser&password=123456'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>后续查询所需要的AccessToken</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expire_in",
            "description": "<p>AccessToken过期时间(秒)，默认10分钟，如果AccessToken已经过期，需要重新请求获取</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"access_token\": \"EPrNyy73OqHbAANw66MWPc9iVHHzhR....\",\n    \"expire_in\": 600\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功，这里一定为<code>false</code></p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"error\": \"authenticate_failed\",\n    \"message\": \"Username password does not match\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://dnsdb.io/api/v1/authorize"
      }
    ],
    "filename": "api/views.py",
    "groupTitle": "Authorize"
  },
  {
    "type": "get",
    "url": "/resources",
    "title": "Request Resources",
    "name": "Resources",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>该API用于获取当前AccessToken关联账号的资源信息，该信息包含剩余查询次数。</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl 'http://dnsdb.io/api/v1/resources' -H 'Access-Token:OV2134AX2...'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>AccessToken值。如果没有指定，或者AccessToken过期将会返回<code>401</code>状态码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "remaining_dns_request",
            "description": "<p>DNS API剩余查询次数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"remaining_dns_request\": 99\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功，这里一定为<code>false</code></p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"error\": \"unauthorized\",\n    \"message\": \"Access token has expired or not existed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://dnsdb.io/api/v1/resources"
      }
    ],
    "filename": "api/views.py",
    "groupTitle": "Other"
  },
  {
    "type": "get",
    "url": "/dns/retrieve",
    "title": "Retrieve DNS Result",
    "name": "RetrieveDNSResult",
    "group": "Search",
    "version": "0.0.1",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "description": "<p>根据查询ID返回对应的查询结果，多次调用可以迭代返回查询结果，直到取完所有查询结果。 本API相当于一个查询结果迭代器。 查询ID通过<a href=\"#api-Search-SearchAllDNS\">Search All DNS Records</a> API获得</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl 'http://dnsdb.io/api/v1/dns/retrieve?id=c2NhbjsxNDsxO.....' -H 'Access-Token:OV2134AX2...'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>AccessToken值. 如果没有指定，或者AccessToken过期将会返回<code>401</code>状态码</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>查询ID, 通过<a href=\"#api-Search-SearchAllDNS\">Search All DNS Records</a>获得</p>"
          },
          {
            "group": "Parameter",
            "type": "None",
            "optional": false,
            "field": "pretty",
            "description": "<p>存在该参数(无须指定值),返回格式化后的JSON</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>匹配本次查询条件的DNS记录总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>DNS记录数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "remaining_request",
            "description": "<p>剩余请求次数。如果该值为<code>0</code>，下次请求将会返回<code>402</code>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"total\": 14706,\n    \"data\": [\n        {\"host\": \"a.example.com\", \"type\": \"a\", \"value\": \"1.1.1.1\"},\n        {\"host\": \"b.example.com\", \"type\": \"ns\", \"value\": \"ns.example.com\"},\n        {\"host\": \"c.example.com\", \"type\": \"mx\", \"value\": \"mail.example.com\"},\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功, 这里一定为<code>false</code></p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功，这里一定为<code>false</code></p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"error\": \"unauthorized\",\n    \"message\": \"Access token has expired or not existed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://dnsdb.io/api/v1/dns/retrieve"
      }
    ],
    "filename": "api/views.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/dns/search_all",
    "title": "Search All DNS Records",
    "name": "SearchAllDNS",
    "group": "Search",
    "version": "0.0.1",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "description": "<p>该API接受一个DNS查询请求，返回一个查询ID， 将该ID提供给<a href=\"#api-Search-RetrieveDNSResult\">Retrieve DNS Result</a> API，则可以获取所有的查询结果。</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl 'http://dnsdb.io/api/v1/dns/search_all?domain=baidu.com' -H 'Access-Token:OV2134AX2...'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>AccessToken值. 如果没有指定,或者AccessToken过期将会返回<code>401</code>状态码</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>根据域名查询，例如<code>baidu.com</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>根据主机地址查询，例如<code>www.baidu.com</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>根据IP地址查询，这里指定是单个IP地址, 例如<code>8.8.8.8</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>根据DNS类型查询，例如<code>A</code></p>"
          },
          {
            "group": "Parameter",
            "type": "None",
            "optional": false,
            "field": "pretty",
            "description": "<p>存在该参数(无须指定值)，返回格式化后的JSON</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>匹配本次查询条件的DNS记录总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "id",
            "description": "<p>查询ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"total\": 14706,\n    \"id\": \"c2NhbjsxNDsxOD....\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功， 这里一定为<code>false</code></p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功，这里一定为<code>false</code></p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"error\": \"unauthorized\",\n    \"message\": \"Access token has expired or not existed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://dnsdb.io/api/v1/dns/search_all"
      }
    ],
    "filename": "api/views.py",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/dns/search",
    "title": "Search DNS",
    "name": "SearchDNS",
    "group": "Search",
    "version": "0.0.1",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "description": "<p>该API用于查询DNS记录，每次查询最多返回30条DNS记录。对于同一个查询条件，最多获取前10000条记录。</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl 'http://dnsdb.io/api/v1/dns/search?domain=baidu.com' -H 'Access-Token:OV2134AX2...'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>AccessToken值. 如果没有指定，或者AccessToken过期将会返回<code>401</code>状态码</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>根据域名查询，例如<code>baidu.com</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>根据主机地址查询，例如<code>www.baidu.com</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>根据IP地址查询，这里指定是单个IP地址, 例如<code>8.8.8.8</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>根据DNS类型查询，例如<code>A</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0..9970",
            "optional": false,
            "field": "from",
            "defaultValue": "0",
            "description": "<p>指定从第几条开始返回数据</p>"
          },
          {
            "group": "Parameter",
            "type": "None",
            "optional": false,
            "field": "pretty",
            "description": "<p>存在该参数(无须指定值)，返回格式化后的JSON</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>匹配本次查询条件的DNS记录总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>DNS记录数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "remaining_request",
            "description": "<p>剩余请求次数。如果该值为<code>0</code>，下次请求将会返回<code>402</code>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"total\": 14706,\n    \"data\": [\n        {\"host\": \"a.example.com\", \"type\": \"a\", \"value\": \"1.1.1.1\"},\n        {\"host\": \"b.example.com\", \"type\": \"ns\", \"value\": \"ns.example.com\"},\n        {\"host\": \"c.example.com\", \"type\": \"mx\", \"value\": \"mail.example.com\"},\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功,这里一定为<code>false</code></p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求是否成功，这里一定为<code>false</code></p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码</p>"
          },
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>简要的错误描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"error\": \"unauthorized\",\n    \"message\": \"Access token has expired or not existed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://dnsdb.io/api/v1/dns/search"
      }
    ],
    "filename": "api/views.py",
    "groupTitle": "Search"
  }
] });
