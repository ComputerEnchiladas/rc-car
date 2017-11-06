# rc-car
Hacked RC Car

## Prerequisites for Mobile App Development

Install Android Studio

  * https://developer.android.com/studio/install.html
  
Install NVM 

  * *nix : https://github.com/creationix/nvm
  
  * Windows : https://github.com/coreybutler/nvm-windows

Install Node v6.x.x via NVM

  * `> nvm install 6.11.3` // note 6.11.3 is the latest v6 as of this writing

Install Cordova and Ionic

  * http://ionicframework.com/getting-started/

## Install Car CPU

This RC Car hack assumes you have a Raspberry Pi , or other ARM based device on the car.

On the ARM based device Install NVM & Node just as you did in Prerequisites

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

Finally, test that your app is building properly by serving it locally from your laptop

* `> ionic serve`

Your browser should open, and the mobile app showing Left, Right, Forward, Backward controls.
