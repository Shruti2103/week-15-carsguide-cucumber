$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - All",
        "$50,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "NSW - All",
        "$60,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$40,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Vitara",
        "NT - South",
        "$45,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41122843800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 480542400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 440392900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 18155271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 114194200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 429212100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 549458600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 486871300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 455481200,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 21172235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 141746200,
  "status": "passed"
});
formatter.after({
  "duration": 3380058300,
  "status": "passed"
});
formatter.before({
  "duration": 44321313600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Wrangler\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 561209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
