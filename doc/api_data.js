define({ "api": [
  {
    "type": "post",
    "url": "/auth/addregistrationtoken",
    "title": "Add Registration Token",
    "name": "Add_Registration_Token",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "registrationToken",
            "description": "<p>The registration Token</p>"
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
            "description": "<p>Message of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success\": true, \n\t\t\t\"msg\": \"The token was added sucessfully\"\n    }",
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
          "title": "ApiInternalError:",
          "content": "    HTTP/1.1 500 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"ApiInternalError\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/addRegistrationToken.js",
    "groupTitle": "Auth"
  },
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
            "field": "msg",
            "description": "<p>Message of success</p>"
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
    "filename": "routes/auth/edit.js",
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
    "filename": "routes/auth/managerSignin.js",
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
            "field": "username",
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
            "field": "birthdate",
            "description": "<p>Manager birthdate written in YYYY-MM-DD format.</p>"
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
    "filename": "routes/auth/managerSignup.js",
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth/signup.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/data/addpermission",
    "title": "Add Permission between User and Vehicles",
    "name": "Add_Per",
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
            "field": "idUser",
            "description": "<p>The user id whow ants to have the permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idVehicle",
            "description": "<p>the id of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seeLastSeen",
            "description": "<p>Does the user has permission to see when the vehicle was last seen ?</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seePosition",
            "description": "<p>Does the user has permission to see where the vehicle is ?</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seeData",
            "description": "<p>Does the user has permission to dee the data of the vehicle ?</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n    }",
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
    "filename": "routes/data/addpermission.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/getavailablevehicles",
    "title": "Get Available Vehicle",
    "name": "Get_Available_Vehicle",
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
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>The speed is sent in km/h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fuel",
            "description": "<p>The fuel is sent in %</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the vehicule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the vehicule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"speed\": \"10\", \n\t\t\t\"fuel\": \"45\",\n\t\t\t\"latitude\": \"46.510492\",\n\t\t\t\"longitude\": \"3.533891\",\n\t\t\t\"globalState\": \"Good\"\n    }",
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
    "filename": "routes/data/getavailabevehicles.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/getownedvehicles",
    "title": "Get Owned Vehicle",
    "name": "Get_Owned_Vehicle_List",
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
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>The speed is sent in km/h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fuel",
            "description": "<p>The fuel is sent in %</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the vehicule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the vehicule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"speed\": \"10\", \n\t\t\t\"fuel\": \"45\",\n\t\t\t\"latitude\": \"46.510492\",\n\t\t\t\"longitude\": \"3.533891\",\n\t\t\t\"globalState\": \"Good\"\n    }",
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
    "filename": "routes/data/getownedvehicles.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/addownedvehicle",
    "title": "Get Vehicule Info",
    "name": "Get_Vehicule_Info",
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
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>The speed is sent in km/h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fuel",
            "description": "<p>The fuel is sent in %</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the vehicule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the vehicule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"speed\": \"10\", \n\t\t\t\"fuel\": \"45\",\n\t\t\t\"latitude\": \"46.510492\",\n\t\t\t\"longitude\": \"3.533891\",\n\t\t\t\"globalState\": \"Good\"\n    }",
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
    "filename": "routes/data/addvehicle.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/getvehiculeinfo",
    "title": "Get Vehicule Info",
    "name": "Get_Vehicule_Info",
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
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>The speed is sent in km/h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fuel",
            "description": "<p>The fuel is sent in %</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the vehicule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the vehicule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"speed\": \"10\", \n\t\t\t\"fuel\": \"45\",\n\t\t\t\"latitude\": \"46.510492\",\n\t\t\t\"longitude\": \"3.533891\",\n\t\t\t\"globalState\": \"Good\"\n    }",
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
    "filename": "routes/data/getvehiculeinfo.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/modifypermission",
    "title": "Get Vehicule Info",
    "name": "Get_Vehicule_Info",
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
            "field": "idUser",
            "description": "<p>The user id whow ants to have the permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idVehicle",
            "description": "<p>the id of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seeLastSeen",
            "description": "<p>Does the user has permission to see when the vehicle was last seen ?</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seePosition",
            "description": "<p>Does the user has permission to see where the vehicle is ?</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "seeData",
            "description": "<p>Does the user has permission to dee the data of the vehicle ?</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\t\"success: true, \n\t\t\t\"speed\": \"10\", \n\t\t\t\"fuel\": \"45\",\n\t\t\t\"latitude\": \"46.510492\",\n\t\t\t\"longitude\": \"3.533891\",\n\t\t\t\"globalState\": \"Good\"\n    }",
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
    "filename": "routes/data/modifypermission.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/receiveshock",
    "title": "Receive Shock",
    "name": "Receive_Shock",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\tsuccess: true,\n\t\t\tmsg : \"Shock notification sent\"\n    }",
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
            "field": "MissingRegistrationToken",
            "description": "<p>You must use the registration token route first</p>"
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
          "title": "Missing Registration Token:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t \"success\": false,\n      \"error\": \"MissingRegistrationToken\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/data/receiveshock.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/data/uploaddrivingdata",
    "title": "Upload Driving Data",
    "name": "Upload_Driving_Data",
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
            "field": "speed",
            "description": "<p>The speed is sent in km/h</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fuel",
            "description": "<p>The fuel is sent in %</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the vehicle</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\tsuccess: true, \n\t\t\tmsg: \"Driving data successfully uploaded\"\n    }",
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
    "filename": "routes/data/uploaddrivingdata.js",
    "groupTitle": "Data"
  }
] });
