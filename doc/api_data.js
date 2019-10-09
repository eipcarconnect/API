define({ "api": [
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
            "field": "birthdate",
            "description": "<p>The birthdate of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"name\": \"name\", \n\t\t\t\"email\": \"emailaddress\",\n\t\t\t\"birthdate\": \"YYYY-MM-DDTHH:MM:SS.000Z\"\n    }",
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
    "filename": "routes/auth/getuserinfos.js",
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
    "filename": "routes/auth/signin.js",
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
            "field": "username",
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
            "field": "birthdate",
            "description": "<p>Users birthdate written in YYYY-MM-DD format.</p>"
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
            "description": "<p>An error occured within the API pleace contat the admin</p>"
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/signup.js",
    "groupTitle": "Auth"
  }
] });
