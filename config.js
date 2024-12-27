const Fs = require('fs');

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": [
    "ik-workshop/<CHANGE_ME>"
  ],
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateWhen": "always",
  "onboarding": false,
  "requireConfig": "optional",
  "baseBranches": ["master", "main"],
  "packageRules": [
    // {
    //   "matchDatasources": ["aws-eks-addon"],
    // }
  ],
  "customManagers": [
    {
      "customType": "regex",
      "fileMatch": [".*\\.tf"],
      "matchStrings": [
        ".*# renovate: eksAddonsFilter=(?<packageName>.*?)\n.*?[a-zA-Z0-9-_:]*[ ]*?[:|=][ ]*?[\"|']?(?<currentValue>[a-zA-Z0-9-_.]+)[\"|']?.*"
      ],
      // "datasourceTemplate": "aws-eks-addon",
      // "versioningTemplate": "aws-eks-addon"
    }
  ]
}