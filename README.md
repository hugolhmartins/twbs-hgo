# Router to FerrugemJS

![Ferrugem router logo](/assets/img/router-fjs.png) 


**A basic router implementation to [FerrugemJS](https://github.com/ferrugemjs/library).**

This is a basic implementation of routes for "Ferrugemjs", please feel free to do merge requests and improve this router or create your own.
This router is implemented using [page.js](https://visionmedia.github.io/page.js/).

[![NPM](https://nodei.co/npm/ferrugemjs-router.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ferrugemjs-router/)

#### how to start:
clone
[skeleton-typescript](https://github.com/ferrugemjs/skeleton-typescript) (recomended way)

#### individual install

npm install ferrugemjs-router --save

in config.js.

"ferrugemjs-router":"node_modules/ferrugemjs-router/dist/router"

#### Usage

eg. init-app.html file

``` xml
<template no-model>
  <require from="ferrugemjs-router/index as rt" type="namespace"/>
  <div>
    <rt:router-view>
      <route path="/list-modules" view="apps/module-list"/>
      <route path="/module-a/:id" view="apps/module-a"/>
      <route path="/module-b/:id" view="apps/module-b"/>
      <route path="/module-b/:id/:name" view="apps/module-b"/>
    </rt:router-view> 
    <h1>Router tests</h1>
    <p>
      <a href="/list-modules">modules</a>
    </p>
    <p>
      <a href="/module-a/1">module-a</a>
    </p>
    <p>
      <a href="/module-b/2">module-b</a>
    </p>
    <p>
      <a href="/module-b/10/ops">change module-b name and id</a>
    </p> 
  </div>
</template>
```

#### hashbang

``` xml
<rt:router-view hashbang="true">
  <route path="/list-modules" view="apps/module-list"/>
</rt:router-view> 
```

#### redirect

``` xml
<rt:router-redirect path="/list-modules"/>
```


#### redirect with timeout

``` xml
<rt:router-redirect 
  path="/list-modules"
  timeout="4000"
/>
```


#### dinamic route list

``` typescript
constructor(){
  this.routeList = [
    {path:"/list-modules",view:"apps/module-list"}
    ,{path:"/module-a/:id",view:"apps/module-a"}
    ,{path:"/module-b/:id/:name",view:"apps/module-b"}
  ];
}

```

``` xml
<rt:router-view routes="this.routeList"/>
```


#### redirect from a script tag

``` html
<script>
  _rt.redirect({path:"/module-a/12",timeout:8000});
</script>
```


#### redirect from a representative function

``` xml
<template>
  <require from="ferrugemjs-router/index as router-redirect" type="script"/>
  <div>
    <router-redirect 
      path="/list-modules"
      timeout="3000"
    />
  </div>
</template>
```

#### redirect from a path to other

``` xml
<rt:router-view hashbang="true">
  <route path="/" redirect="/list-modules"/>
  <route path="/list-modules" view="apps/module-list"/>
</rt:router-view> 
```

#### redirect from "/" to "/index.html"

``` xml
<rt:router-view hashbang="true">
  <route path="/" redirect="/index.html"/>
</rt:router-view> 
```
