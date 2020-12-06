$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "CK application testing",
  "description": "",
  "id": "ck-application-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "To verify Login function",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SearchingClass"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Clicks on Class tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters class code\"\u003cclasscode\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function;",
  "rows": [
    {
      "cells": [
        "classcode"
      ],
      "line": 17,
      "id": "ck-application-testing;to-verify-login-function;;1"
    },
    {
      "cells": [
        "Test123"
      ],
      "line": 18,
      "id": "ck-application-testing;to-verify-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User Login to CK application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "CK application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name"
      ],
      "line": 6
    },
    {
      "cells": [
        "chatterjeeamit42@gmail.com",
        "Testing123$"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify tile of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.ck_application_is_Launch()"
});
formatter.result({
  "duration": 22533445399,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 15992787500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_verify_tile_of_the_page()"
});
formatter.result({
  "duration": 5294985000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verify Login function",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@SearchingClass"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Clicks on Class tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters class code\"Test123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.user_Clicks_on_Class_tab()"
});
formatter.result({
  "duration": 4456160400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.user_enters_class_code(String)"
});
formatter.result({
  "duration": 3075861699,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027app\u0027]//following::div[2]/div[4]/input[1]\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LSTK36739\u0027, ip: \u0027172.19.112.247\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\HGAJAV~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58646}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6c091ddc3e8898f2457be7709a8b70ee\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027app\u0027]//following::div[2]/div[4]/input[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat PageObjectRepository.CKLoginPage.typeClassCode(CKLoginPage.java:73)\r\n\tat seleniumgluecode.LoginPageTest.user_enters_class_code(LoginPageTest.java:117)\r\n\tat ✽.And User enters class code\"Test123\"(LoginTest.feature:14)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "To Create New Quiz",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@CreatingQuiz"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Library tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create new dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters on Quiz option",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters valid QuizTitle \"\u003cQuizTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz;",
  "rows": [
    {
      "cells": [
        "QuizTitle"
      ],
      "line": 28,
      "id": "ck-application-testing;to-create-new-quiz;;1"
    },
    {
      "cells": [
        "QATestOne"
      ],
      "line": 29,
      "id": "ck-application-testing;to-create-new-quiz;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User Login to CK application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "CK application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name"
      ],
      "line": 6
    },
    {
      "cells": [
        "chatterjeeamit42@gmail.com",
        "Testing123$"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify tile of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.ck_application_is_Launch()"
});
formatter.result({
  "duration": 17409827900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 15853759200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_verify_tile_of_the_page()"
});
formatter.result({
  "duration": 6409526900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To Create New Quiz",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@CreatingQuiz"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Library tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create new dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters on Quiz option",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters valid QuizTitle \"QATestOne\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.user_Clicks_on_Library_tab()"
});
formatter.result({
  "duration": 33398246200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_click_on_Create_new_dropdown()"
});
formatter.result({
  "duration": 3137517600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_enters_on_Quiz_option()"
});
formatter.result({
  "duration": 18752887900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QATestOne",
      "offset": 29
    }
  ],
  "location": "LoginPageTest.user_enters_valid_QuizTitle(String)"
});
formatter.result({
  "duration": 5213489300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LSTK36739\u0027, ip: \u0027172.19.112.247\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\HGAJAV~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58736}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d45824351cf835ea67978299128a9b75\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat PageObjectRepository.CKLoginPage.FindIframe(CKLoginPage.java:131)\r\n\tat seleniumgluecode.LoginPageTest.user_enters_valid_QuizTitle(LoginPageTest.java:148)\r\n\tat ✽.Then User enters valid QuizTitle \"QATestOne\"(LoginTest.feature:25)\r\n",
  "status": "failed"
});
});