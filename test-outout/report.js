$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "MercuryTours Automate",
  "description": "",
  "id": "mercurytours-automate",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "LogIn To The MercuryTours Application",
  "description": "",
  "id": "mercurytours-automate;login-to-the-mercurytours-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User Already in Log In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on Login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "mercurytours-automate;login-to-the-mercurytours-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Passenger",
        "departingfrom"
      ],
      "line": 9,
      "id": "mercurytours-automate;login-to-the-mercurytours-application;;1"
    },
    {
      "cells": [
        "ShivarajR",
        "Reset123",
        "2",
        "Acapulco"
      ],
      "line": 10,
      "id": "mercurytours-automate;login-to-the-mercurytours-application;;2"
    },
    {
      "cells": [
        "ShivarajR",
        "Reset123",
        "3",
        "London"
      ],
      "line": 11,
      "id": "mercurytours-automate;login-to-the-mercurytours-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8103912785,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "LogIn To The MercuryTours Application",
  "description": "",
  "id": "mercurytours-automate;login-to-the-mercurytours-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User Already in Log In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \"ShivarajR\" and \"Reset123\" and click on Login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_Already_in_Log_In_Page()"
});
formatter.result({
  "duration": 116650535,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.title_of_the_page_is_Welcome_Mercury_Tours()"
});
formatter.result({
  "duration": 5717648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShivarajR",
      "offset": 7
    },
    {
      "val": "Reset123",
      "offset": 23
    }
  ],
  "location": "StepDef.enter_and_and_click_on_Login_button(String,String)"
});
formatter.result({
  "duration": 4078950888,
  "status": "passed"
});
formatter.after({
  "duration": 612982650,
  "status": "passed"
});
formatter.before({
  "duration": 7897840395,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "LogIn To The MercuryTours Application",
  "description": "",
  "id": "mercurytours-automate;login-to-the-mercurytours-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User Already in Log In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \"ShivarajR\" and \"Reset123\" and click on Login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_Already_in_Log_In_Page()"
});
formatter.result({
  "duration": 7351491,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.title_of_the_page_is_Welcome_Mercury_Tours()"
});
formatter.result({
  "duration": 5049097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShivarajR",
      "offset": 7
    },
    {
      "val": "Reset123",
      "offset": 23
    }
  ],
  "location": "StepDef.enter_and_and_click_on_Login_button(String,String)"
});
formatter.result({
  "duration": 3975579295,
  "status": "passed"
});
formatter.after({
  "duration": 605010088,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Enter the passenger Details",
  "description": "",
  "id": "mercurytours-automate;enter-the-passenger-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is on Find Flights Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User verified the title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enyter \"\u003cPassenger\u003e\" and \"\u003cdepartingfrom\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "mercurytours-automate;enter-the-passenger-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Passenger",
        "departingfrom"
      ],
      "line": 21,
      "id": "mercurytours-automate;enter-the-passenger-details;;1"
    },
    {
      "cells": [
        "ShivarajR",
        "Reset123",
        "2",
        "Acapulco"
      ],
      "line": 22,
      "id": "mercurytours-automate;enter-the-passenger-details;;2"
    },
    {
      "cells": [
        "ShivarajR",
        "Reset123",
        "3",
        "London"
      ],
      "line": 23,
      "id": "mercurytours-automate;enter-the-passenger-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7354266068,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter the passenger Details",
  "description": "",
  "id": "mercurytours-automate;enter-the-passenger-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is on Find Flights Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User verified the title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enyter \"2\" and \"Acapulco\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_Find_Flights_Page()"
});
formatter.result({
  "duration": 11825069,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verified_the_title()"
});
formatter.result({
  "duration": 6109668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "Acapulco",
      "offset": 16
    }
  ],
  "location": "StepDef.enyter_and(int,String)"
});
formatter.result({
  "duration": 20118105051,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\u0027fromPort\u0027]\"}\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027STI-D01-YOGESHA\u0027, ip: \u0027192.168.94.86\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\yogesha\\AppData\\Local\\Temp\\scoped_dir8572_30333}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d63.0.3239.132, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 25696a027ea0f7ae18ef0871e123dfbb\n*** Element info: {Using\u003dxpath, value\u003d//select[@name\u003d\u0027fromPort\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat Pages.FlightFinderPage.EnterDetains(FlightFinderPage.java:43)\r\n\tat StepDefinition.StepDef.enyter_and(StepDef.java:63)\r\n\tat ✽.Then Enyter \"2\" and \"Acapulco\"(Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 586340394,
  "status": "passed"
});
formatter.before({
  "duration": 7815741801,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter the passenger Details",
  "description": "",
  "id": "mercurytours-automate;enter-the-passenger-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is on Find Flights Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User verified the title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enyter \"3\" and \"London\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_Find_Flights_Page()"
});
formatter.result({
  "duration": 8504452,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verified_the_title()"
});
formatter.result({
  "duration": 5925848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "StepDef.enyter_and(int,String)"
});
formatter.result({
  "duration": 20030804015,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\u0027fromPort\u0027]\"}\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027STI-D01-YOGESHA\u0027, ip: \u0027192.168.94.86\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\yogesha\\AppData\\Local\\Temp\\scoped_dir4940_18814}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d63.0.3239.132, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bea76b0a45b8060176d28174a377dc81\n*** Element info: {Using\u003dxpath, value\u003d//select[@name\u003d\u0027fromPort\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat Pages.FlightFinderPage.EnterDetains(FlightFinderPage.java:43)\r\n\tat StepDefinition.StepDef.enyter_and(StepDef.java:63)\r\n\tat ✽.Then Enyter \"3\" and \"London\"(Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 613199192,
  "status": "passed"
});
});