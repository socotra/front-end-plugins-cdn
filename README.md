# Front End Plugins CDN

Front end plugins is a feature of [Front End V2](https://github.com/socotra/frontend-v2) that allows for injection of hosted JS files into the dom of FEV2 at login.

## Creating an injectable JS file

Create a new folder and file and make a PR to this branch.

Take note of the two files in the `/examples` folder. When appending items to the DOM, be sure to append them to the div with the `id='fe-plugins`.

This ensures that on log out, the div will be removed.

## Adding to the External Integrations API

Get the location of the file you want to inject.

Files saved here can be accessed using

`https://cdn.jsdelivr.net/gh/socotra/front-end-plugins-cdn/{folder}/{fileName}.js`

For example, the script `blue-button-1.0.0.js` located in the `/examples` folder can be accessed at

`https://cdn.jsdelivr.net/gh/socotra/front-end-plugins-cdn/examples/blue-button-1.0.0.js`

Using the Socotra API, create a request to POST to `{API_URL}/integrations` while being logged in as the tenant administrator of the tenant you want the file to be loaded in.

```
POST /integrations
{
		"type": "fe-plugins",
		"name": "blue-button",
		"url": "https://cdn.jsdelivr.net/gh/socotra/front-end-plugins-cdn/examples/blue-button-1.0.0.js",
}
```

> Note: The sem-var at the end of the file name is important for updating access to the file when it changes. JSDelivr does not clear caches of static files.

## FEV2

In FEV2, log into a tenant that has an existing FE-plugins integration. Once logged in, the request will be made and each script will be appended to a div on the <head> of the dom.

### Considerations

This is a powerful tool that can be used to modify the DOM in any way you see fit. We advise to use this tool with caution and use it within the parameters we have set to ensure a quality experience.
