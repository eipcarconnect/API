define({ "api": [
  {
    "type": "post",
    "url": "/auth/edit",
    "title": "Edit User Infos",
    "name": "Edit_User_Infos",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The new Token generated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true, \n\t\t\t\"token\" : \"NewTokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsWeak",
            "description": "<p>The password provided is weak</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiInternalError",
            "description": "<p>There was an internal error in the API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "InvalidToken:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"InvalidToken\"\n    }",
          "type": "json"
        },
        {
          "title": "PasswordIsWeak:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"PasswordIsWeak\"\n    }",
          "type": "json"
        },
        {
          "title": "ApiInternalError:",
          "content": "    HTTP/1.1 500 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"ApiInternalError\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/user/edit.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/manager/getinfo",
    "title": "Get Manager Infos",
    "name": "Get_Manager_Infos",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The manager token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the manager</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the manager</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company of the manager</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true,\n\t\t\t\"name\": \"name\",\n\t\t\t\"email\": \"email@address\",\n\t\t    \"company\": \"company name\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/manager/getinfo.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/getuserinfos",
    "title": "Get User Infos",
    "name": "Get_User_Infos",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"name\": \"name\", \n\t\t\t\"email\": \"emailaddress\",\n\t\t\t\"company\": \"company name\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/user/getuserinfos.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/manager/signin",
    "title": "SignIn a Manager",
    "name": "Manager_SignIn",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Manager unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Manager password.</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token needed to access authenticated page</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\"success\": true,\n      \"token\": \"JWT YourTokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was not found in the database</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>The password of the given email is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n\t\"success\": false,\n      \"error\": \"UserNotFound\"\n    }",
          "type": "json"
        },
        {
          "title": "WrongPassword:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n\t\"success\": false,\n      \"error\": \"WrongPassword\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t\"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t\"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/manager/managerSignin.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/manager/signup",
    "title": "SignUp a new Manager",
    "name": "Manager_SignUp",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manager last name and first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Manager unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Manager password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company name must be unique.</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token needed to access authenticated page</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\"success\": true,\n      \"token\": \"JWT TokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>The Username already exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsWeak",
            "description": "<p>The Password does not fit the standard , it must be at least 8 character long and contain a number and a letter</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APIInternalError",
            "description": "<p>An error occured within the API please contact the admin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CompanyExist",
            "description": "<p>The Company already exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "UserAlreadyExist:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"UserAlreadyExist\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "PasswordIsWeak:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"PasswordIsWeak\"\n    }",
          "type": "json"
        },
        {
          "title": "APIInternalError:",
          "content": "    HTTP/1.1 500 Internal Error\n    {\n\t \"success\": false,\n      \"error\": \"APIInternalError\"\n    }",
          "type": "json"
        },
        {
          "title": "CompanyExist:",
          "content": "    HTTP/1.1 400 Internal Error\n    {\n\t \"success\": false,\n      \"error\": \"CompanyExist\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/manager/managerSignup.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/signin",
    "title": "SignIn a User",
    "name": "SignIn",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token needed to access authenticated page</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\"success\": true,\n      \"token\": \"JWT YourTokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was not found in the database</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>The password of the given email is incorrect</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n\t\"success\": false,\n      \"error\": \"UserNotFound\"\n    }",
          "type": "json"
        },
        {
          "title": "WrongPassword:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n\t\"success\": false,\n      \"error\": \"WrongPassword\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t\"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t\"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/user/signin.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "SignUp a new User",
    "name": "SignUp",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User last name and first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company name must already exist.</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token needed to access authenticated page</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\"success\": true,\n      \"token\": \"JWT TokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>The Username already exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsWeak",
            "description": "<p>The Password does not fit the standard , it must be at least 8 character long and contain a number and a letter</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APIInternalError",
            "description": "<p>An error occured within the API please contact the admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "UserAlreadyExist:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"UserAlreadyExist\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "PasswordIsWeak:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"PasswordIsWeak\"\n    }",
          "type": "json"
        },
        {
          "title": "APIInternalError:",
          "content": "    HTTP/1.1 500 Internal Error\n    {\n\t \"success\": false,\n      \"error\": \"APIInternalError\"\n    }",
          "type": "json"
        },
        {
          "title": "CompanyNotFound:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"CompanyNotFound\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/user/signup.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/manger/edit",
    "title": "Edit Manager Infos",
    "name": "editManagerInfo.js_Manager_Infos",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The manager token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The new token generated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true,\n\t\t\t\"token\" : \"NewTokenHere\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsWeak",
            "description": "<p>The password provided is weak</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiInternalError",
            "description": "<p>There was an internal error in the API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "InvalidToken:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"InvalidToken\"\n    }",
          "type": "json"
        },
        {
          "title": "PasswordIsWeak:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"PasswordIsWeak\"\n    }",
          "type": "json"
        },
        {
          "title": "ApiInternalError:",
          "content": "    HTTP/1.1 500 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"ApiInternalError\"\n    }",
          "type": "json"
        },
        {
          "title": "CompanyAlreadyExist:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"CompanyAlreadyExist\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/manager/editManagerInfo.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/data/user/addbill",
    "title": "Add Bill",
    "name": "Add_Bill",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rideId",
            "description": "<p>The if of the ride</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceTTC",
            "description": "<p>The full price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceHT",
            "description": "<p>The price without taxes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the bill</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of bill</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>The message of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true,\n\t\t\tmsg: \"Ride created with success\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        },
        {
          "title": "Ride Not Found:",
          "content": "    HTTP/1.1 404 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"RideNotFound\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/user/addBill.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/user/addRide",
    "title": "Add Ride",
    "name": "Add_Ride",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licencePlate",
            "description": "<p>The licence plate of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>The start address of the ride</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>The end of the ride</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the ride</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The date of the ride</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>The message of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true,\n\t\t\tride:  {\n\t\t\t \t_id: \"id\",\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    name: \"Meet up with a client\",\n\t\t\t\tvehicle: \"licence plate\",\n\t\t\t\tuserId: \"id\",\n\t\t\t\tstart: \"start address\",\n\t\t\t\tend: \"end address\",\n\t\t\t    date: \"01/01/1998\"\n\t\t\t }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/user/addRide.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/manager/addvehicle",
    "title": "Add Vehicle",
    "name": "Add_Vehicle",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The manager token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The model of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licencePlate",
            "description": "<p>The licence plate of the vehicle</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>The message of the vehicle</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true,\n\t\t\tmsg: \"Vehicle created with success\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/manager/addvehicle.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/getbills",
    "title": "Get Bills",
    "name": "Get_Bills",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rideId",
            "description": "<p>The id of the Ride</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vehicles",
            "description": "<p>An array of vehicles belonging to the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true,\n\t\t\t\"bills\": [\n\t\t\t {\n\t\t\t \t_id: \"id\",\n\t\t\t \tname: \"name\"\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    rideId: \"id\",\n\t\t\t\tpriceTTC: 20,\n\t\t\t\tpriceHT: 15,\n\t\t\t\ttype: \"Restaurant\"\n\t\t\t }\n\t\t\t]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/getBills.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/manager/getrides",
    "title": "Get Rides Manager",
    "name": "Get_Rides",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The manager token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rides",
            "description": "<p>An array of rides belonging to the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true,\n\t\t\t\"rides\": [\n\t\t\t {\n\t\t\t \t_id: \"id\",\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    name: \"Meet up with a client\",\n\t\t\t\tvehicle: \"licence Plate\",\n\t\t\t\tuser: \"Jean\",\n\t\t\t\tstart: \"start address\",\n\t\t\t\tend: \"end address\",\n\t\t\t    date: \"01/01/1998\"\n\t\t\t }\n\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/manager/getRide.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/user/getrides",
    "title": "Get Rides User",
    "name": "Get_Rides",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rides",
            "description": "<p>An array of rides belonging to the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true,\n\t\t\t\"rides\": [\n\t\t\t {\n\t\t\t \t_id: \"id\",\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    name: \"Meet up with a client\",\n\t\t\t\tvehicle: \"licence plate\",\n\t\t\t\tuserId: \"id\",\n\t\t\t\tstart: \"start address\",\n\t\t\t\tend: \"end address\",\n\t\t\t    date: \"01/01/1998\"\n\t\t\t }\n\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/user/getRide.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/manager/getvehicles",
    "title": "Get Vehicle Manager",
    "name": "Get_Vehicles",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The manager token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vehicles",
            "description": "<p>An array of vehicles belonging to the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"vehicles\": [\n\t\t\t {\n\t\t\t \t_id: \"id\",\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    model: \"Tesla Model 3\",\n\t\t\t\tspeed: 200,\n\t\t\t\tbreakPressed: false,\n\t\t\t\tclutchPressed: false,\n\t\t\t\ttempCoolant: 20,\n\t\t\t\ttempEngine: 60,\n\t\t\t\tlicencePlate: \"licence Plate\"\n\t\t\t }\n\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/manager/getvehicles.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/user/getvehicles",
    "title": "Get Vehicle User",
    "name": "Get_Vehicles",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user token</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "vehicles",
            "description": "<p>An array of vehicles belonging to the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"vehicles\": [\n\t\t\t {\n\t\t\t \t_id: \"id\",\n\t\t\t \tlicencePlate: \"licence Plate\"\n\t\t\t  \tcompany: \"Total\",\n\t\t\t    model: \"Tesla Model 3\",\n\t\t\t\tspeed: 200,\n\t\t\t\tbreakPressed: false,\n\t\t\t\tclutchPressed: false,\n\t\t\t\ttempCoolant: 20,\n\t\t\t\ttempEngine: 60\n\t\t\t }\n\t\t\t]\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token provided is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Invalid Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"Invalid Token\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/user/getvehicles.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/company",
    "title": "Get List of created Company",
    "name": "Get_Vehicule_Info",
    "group": "Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>An array of company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true,\n\t\t\t\"company\": [\n\t\t\t \"Total\",\n\t\t\t \"Fromage\"\n\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APIInternalError",
            "description": "<p>An error occured within the API please contact the admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "APIInternalError:",
          "content": "    HTTP/1.1 500 Internal Error\n    {\n\t \"success\": false,\n      \"error\": \"APIInternalError\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/getCompany.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/vehicle",
    "title": "Update Vehicle info",
    "name": "Vehicle",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licencePlate",
            "description": "<p>The licence plate of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>The speed of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "breakPressed",
            "description": "<p>If the break is pressed</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "clutchPressed",
            "description": "<p>If the clutch is pressed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tempCoolant",
            "description": "<p>The temperature of the Coolant</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tempEngine",
            "description": "<p>The temperature of the Engine</p>"
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
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>The message of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true,\n\t\t\tmsg: \"Vehicle Updated with success\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>An argument of the request is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BodyEmpty",
            "description": "<p>The Body of the Request is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VehicleNotFound",
            "description": "<p>The vehicle is not created in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingArgument:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingArgument\"\n    }",
          "type": "json"
        },
        {
          "title": "BodyEmpty:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"BodyEmpty\"\n    }",
          "type": "json"
        },
        {
          "title": "Vehicle Not Found:",
          "content": "    HTTP/1.1 404 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"VehicleNotFound\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/vehicle.js",
    "groupTitle": "Data"
  }
] });
