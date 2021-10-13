# Java Builder Workflow

Uses the tags for specific purposes or the master if you want the latest.

## How to use


``` yml
...
steps:
    - uses: saskaradit/custom-java-actions@master
      with:
          # App name
          app-name: 'test-app'
          # Version of the app
          app-version: '11'
          # Version of the java JDK, default is 11
          java-version: '11'
          # builds the docker image or not the default is true
          docker-container: false
          # Gcloud base64 service account
          gcloud-account: ${{secrets.GCLOUD_KEY}}
...
```