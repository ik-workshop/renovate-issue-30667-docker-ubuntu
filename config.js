const Fs = require('fs');

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": [
    "ik-workshop/renovate-issue-30667-docker-ubuntu"
  ],
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateWhen": "always",
  "onboarding": false,
  "requireConfig": "optional",
  "baseBranches": ["master", "main"],
  "hostRules": [
    {
      "hostType": "docker",
      "matchHost": "docker.io",
      "username": process.env.RENOVATE_DOCKER_HUB_USERNAME,
      "password": process.env.RENOVATE_DOCKER_HUB_TOKEN
    }
  ],
  "packageRules": [
    {
      "matchDatasources": ["docker"],
      "groupName": "1 {{packageFile}} {{newVersion}}",
      "matchFileNames": [".*Dockerfile"],
      "addLabels": ["rule::1"],
    },
    {
      "matchDatasources": ["docker"],
      "groupName": "2 {{packageFile}} {{newVersion}}",
      "matchFileNames": [".*normal\\.yml"],
      "addLabels": ["rule::2"],
      "versioning": "regex:^v?(?<major>\\d+)\.(?<minor>\\d+)\.(?<patch>\\d+)$"
    },
    {
      "matchDatasources": ["docker"],
      "groupName": "3 {{packageFile}} {{newVersion}}",
      "matchFileNames": [".*with-suffix\\.yaml"],
      "addLabels": ["rule::3"],
    }

  ],
  "customManagers": [
    {
      "customType": "regex",
      "fileMatch": [".*\\.yaml"],
      "matchStrings": [
        ".*# renovate: depName=(?<depName>.*?)\n.*?[a-zA-Z0-9-_:]*[ ]*?[:|=][ ]*?[\"|']?(?<currentValue>[a-zA-Z0-9-_.]+)[\"|']?.*"
      ],
      "datasourceTemplate": "docker",
      "versioningTemplate": "ubuntu"
    },
    {
      "customType": "regex",
      "fileMatch": [".*\\.yml"],
      "matchStrings": [
        ".*# renovate: depName=(?<depName>.*?)\n.*?[a-zA-Z0-9-_:]*[ ]*?[:|=][ ]*?[\"|']?(?<currentValue>[a-zA-Z0-9-_.]+)[\"|']?.*"
      ],
      "datasourceTemplate": "docker",
      "versioningTemplate": "ubuntu"
    }
  ]
}
