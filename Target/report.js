$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login User",
  "description": "",
  "id": "test-login-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "As a registered user I want to Login successfully",
  "description": "",
  "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"\u003cemail\u003e\" detail",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cpassw\u003e\" for the user",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "passw"
      ],
      "line": 15,
      "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;1"
    },
    {
      "cells": [
        "adebolaa@hotmail.com",
        "password7"
      ],
      "line": 16,
      "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;2"
    },
    {
      "cells": [
        "adebola432@gmail.com",
        "password123"
      ],
      "line": 17,
      "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;3"
    },
    {
      "cells": [
        "adebola470@gmail.com",
        "password123"
      ],
      "line": 18,
      "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "As a registered user I want to Login successfully",
  "description": "",
  "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"adebolaa@hotmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"password7\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 19171396784,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2274986811,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 1137360325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adebolaa@hotmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 239387597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password7",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 286682846,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2135531408,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_be_logged_in()"
});
formatter.result({
  "duration": 6709577898,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_log_out()"
});
formatter.result({
  "duration": 127606103,
  "status": "passed"
});
formatter.after({
  "duration": 1884625674,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a registered user I want to Login successfully",
  "description": "",
  "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"adebola432@gmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"password123\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 15851092116,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2182617288,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 105165099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adebola432@gmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 257887503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 251587901,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2146537067,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_be_logged_in()"
});
formatter.result({
  "duration": 105012518,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_log_out()"
});
formatter.result({
  "duration": 130501032,
  "status": "passed"
});
formatter.after({
  "duration": 1288289391,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a registered user I want to Login successfully",
  "description": "",
  "id": "test-login-user;as-a-registered-user-i-want-to-login-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter a \"adebola470@gmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"password123\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 11495195074,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2256168061,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 100196986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adebola470@gmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 238728695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 256530696,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2116058544,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_be_logged_in()"
});
formatter.result({
  "duration": 350065446,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_log_out()"
});
formatter.result({
  "duration": 128081636,
  "status": "passed"
});
formatter.after({
  "duration": 1327182435,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "An error message is displayed when invalid details are entered",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a \"\u003cemail\u003e\" detail",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"\u003cpassw\u003e\" for the user",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;",
  "rows": [
    {
      "cells": [
        "email",
        "passw"
      ],
      "line": 31,
      "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;1"
    },
    {
      "cells": [
        "adebolaa@hotmail.com",
        "word"
      ],
      "line": 32,
      "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;2"
    },
    {
      "cells": [
        "zyx@gmail.com",
        "password123"
      ],
      "line": 33,
      "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;3"
    },
    {
      "cells": [
        "london1@gmail.com",
        "p222"
      ],
      "line": 34,
      "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;4"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 35,
      "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "An error message is displayed when invalid details are entered",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a \"adebolaa@hotmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"word\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 9029874357,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2160714762,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 1374405157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adebolaa@hotmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 303052779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "word",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 194034160,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2125758713,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 110138685,
  "status": "passed"
});
formatter.after({
  "duration": 1268315679,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "An error message is displayed when invalid details are entered",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a \"zyx@gmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"password123\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 17465248874,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2163292898,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 166098195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zyx@gmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 250253674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 213206653,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2164402017,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 110279634,
  "status": "passed"
});
formatter.after({
  "duration": 1327876917,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "An error message is displayed when invalid details are entered",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a \"london1@gmail.com\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"p222\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 9153038513,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2167027364,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 126882884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1@gmail.com",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 296672439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p222",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 259158096,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2170309561,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 129380283,
  "status": "passed"
});
formatter.after({
  "duration": 1300901595,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "An error message is displayed when invalid details are entered",
  "description": "",
  "id": "test-login-user;an-error-message-is-displayed-when-invalid-details-are-entered;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on My Account icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see a Welcome message banner",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a \"\" detail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"\" for the user",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 12907286313,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_click_on_My_Account_icon()"
});
formatter.result({
  "duration": 2208643598,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_see_a_Welcome_message_banner()"
});
formatter.result({
  "duration": 109604993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    }
  ],
  "location": "Test_Steps.i_enter_a_detail(String)"
});
formatter.result({
  "duration": 156291973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "Test_Steps.i_enter_for_the_user(String)"
});
formatter.result({
  "duration": 171246257,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.click_the_Sign_In_button()"
});
formatter.result({
  "duration": 2122507990,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 280177979,
  "status": "passed"
});
formatter.after({
  "duration": 1354785186,
  "status": "passed"
});
});