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
      app-version: '1.1'
      # Version of the java JDK, default is 11
      java-version: '11'
      # NFS Path on its nfs
      nfs-server-path: /path/on/nfs
      # Path to mount nfs on the server
      nfs-mount-path: /path/on/server
      #Java xms and xms Default is as written
      xms: '256m'
      xmx: '256m'
      # Gcloud base64 service account
      gcloud-key: ${{secrets.GCLOUD_KEY}}
      # Server hostname
      host: 'host-name.lokal'
      # Server username
      username: 'linux'
...
```