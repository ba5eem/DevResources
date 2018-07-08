# The Vault

_fork and clone your own fork of this repo, then push to your own github account._

Sets 'secret' values defined by a 'key' word.

### Goal

Create a module that exposes 2 functions.  
work on the `vault.js` file.  
make tests pass

##### setValue

```
setValue( key, value )
```
accepts two arguments `key` and `value`.  
will set the `value` in the vault identified by it's `key`.  

##### getValue

```
getValue( key )
```
accepts one argument `key`.  
will return the `value` that was set if the `key` exists in the vault.  
will return `null` if the `key` does not exist in the vault.

### Example usage

```
var myVault = vault();
console.log( myVault.getValue() ); // null
console.log( myVault.setValue('secret password', 'hunter2') );
console.log( myVault.getValue('secret password') ); // hunter2
console.log( myVault.getValue('bank account') ); // null

var yourVault = vault();
console.log( myVault.getValue('secret password') ); // null
```

## Install dependencies

```
npm install
```

## Run the tests

```
npm test
```