# MAHRIO-RC-car
Hacked RC Car

## Hardware Requirements
* Raspberry Pi B+ or better
* Arduino
* iOS or Android smart phone

## Prerequisites for Mobile App Development

Install Android Studio on your laptop

  * https://developer.android.com/studio/install.html

Install NVM on your laptop

  * Linux or Mac : https://github.com/creationix/nvm

  * Windows : https://github.com/coreybutler/nvm-windows

Install Node v8.x.x via NVM on your laptop

  * `> nvm install 8` // note v8.11.1 is the latest version of NodeJS as of this writing

Install Cordova and Ionic on your laptop

  * http://ionicframework.com/getting-started/

## Install Car CPU and start 

This RC Car hack assumes you have a Raspberry Pi , or other ARM based device on the car.

On the ARM based device

* Install NVM & Node just as you did in Prerequisites

* Copy the following files to the ARM device

```
> <project_root_dir>/package.json
>  ...              /server.js
>  ...              /.env
```

* Edit the `.env` file `NODE_URL=...` so that the ARM devices IP Address is correct

Start your engines

* `> node server.js`

## Test and Build the Mobile App Controller

You will need to grab a `ionic.config.json` , and copy it to ` <project_root_dir>/mobile`

Example Ionic Config

```
{
  "name": "rc-car",
  "app_id": "",
  "type": "ionic1"
}
```
On your development environemnt run the npm installer and bower installer

* `> cd <project_root_dir>/mobile`
* `> npm install`
* `> bower install`

Edit the IP address in the mobile app, to point to the ARM device

* `<project_root_dir>/mobile/www/index.html #LINE 35ish`

```
  var socket = io('http://<IP_ADDRESS_HERE>:6085');
```

Finally, test that your app is building properly by serving it locally from your laptop

* `> ionic serve`

Your browser should open, and the mobile app showing Left, Right, Forward, Backward controls.

## Build Mobile App for Production

Be sure you've already tested, then run the following command for building Android APK

* `> ionic cordova build android`
