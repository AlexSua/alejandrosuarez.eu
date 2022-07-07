---
title: 'How to deploy a Nuxt3 app in Github Pages'
description: 'Tutorial that will explain briefly how to generate and upload a Nuxt3 application in Github Pages.'
date: '2022-06-30'
language: 'en'
tags: ['Nuxt3',"Vue3"]
image: "/assets/img/blog/nuxt-github-pages.jpg"
---


# How to deploy a Nuxt3 web app in Github Pages
The following tutorial will explain how to deploy an application with the new version of Nuxt, [Nuxt3](https://v3.nuxtjs.org/). Notice that by the time this article is written [Nuxt3](https://v3.nuxtjs.org/) is in its Release Candidate version, so in the future some of the problems that are being tackled here will be already solved.

> Nuxt version: **[3.0.0-rc.4](https://github.com/nuxt/framework/releases/tag/v3.0.0-rc.4)** 

## 1. Nuxt3 and static site generation (SSG)
The first step to deploy a Nuxt project on github is to transform it into something that a simple web server, such as github pages, can serve. For this Nuxt provides us with the functionality to generate a static site, that is, the functionality to **transform our Nuxt/Vue project into a static page consisting only of JS, CSS, HTML and Assets such as images**. [Nuxt3](https://v3.nuxtjs.org/) allows you to generate a static site in two different ways:

### 1.1 **SSG. SPA (Single Page Application)**
 This generation mode is similar to the one provided by raw [Vue](https://vuejs.org/guide/introduction.html#what-is-vue). Basically it generates a site consisting in one `index.html`, a `404.html` and a bunch of `.css`, `.js` and assets files. This `index.html` will contain just a `div` tag and a call to a javascript file that will render the entire page on that tag. When you click on a link inside the page, what you are doing behind the scenes, is calling a javascript routine that changes the path in the URL and rerenders the webpage for that subroute. If instead of accessing this SPA webpage from the main root you access it directly from a subroute link, the webserver will not recognize the route, it will throw a 404 error and it will fallback to the `404.html` file that was commented before (This is the configuration at least in Github Pages), at the same time that it will redirect to the `index.html` that will recognize the path you inserted and will render the page with the subroute. 
 
 This configuration comes with some advantages such as beautiful and fast effects and transitions between pages but, as you may have anticipated, come as well with two main problems.
  - :x: **Search engine crawling**: Even though search engines nowadays are able to render javascript inside webpages in order to stalk content from them, if they see that they need to do extra effort to activate their JS engines to sneak into, **they will punish you with oblivion**. 

  * :x: **People with javascript deactivated**: There are people out there with JavaScript deactivated that will ignore your content if they are not able to watch it without JavaScript.

If you want to generate a SPA application with nuxt you need to:
1. Put the following configuration in your `nuxt.config.ts`

::code-wrapper{note="json" description="./nuxt.config.js"}
```json
{
  ...

  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  ssr: false, //When false
  target: "static", // and static, nuxt generates a SPA

  ...
}
```
::

2. Execute the following command

::code-wrapper{note="SHELL" description="Inside your project folder"}
```bash
npx nuxi generate
```
::

3. The result of the generation could be found in the folder `.output/public`.


### 1.2 **SSG. Hybrid or Universal mode**
The Hybrid or also called Universal mode of Nuxt for generating a website is one of the main higlights of this framework, and the main reason why I decided to use it instead of raw Vue3. This generation mode creates a html file for each subroute of your webpage, that will contain all the content already rendered on it. When you execute this generation there is a renderer, an engine called Nitro, that will go into every route of your webpage, executes the javascript for each route, and when the process is completed it takes, as I like to think, a snapshot of the rendered webpage saving it on disk as an html.

Nevertheless, what is written above is not the only special thing about this mode. When you access to one of this generated html routes through a browser you will obtain, without executing any javascript, the content of that route and, if you have javascript enabled, a process called hydratation begins. The hydratation process, "hydratates" the html with javascript making your simple static page behave as a SPA (Single page application). With this generation process you have all the advantages of SPA without the drawbacks commented inside the section above.

If you want to generate a hybrid static site with nuxt you need to:
1. Put the following configuration in your nuxt.config.ts 

::code-wrapper{note="json" description="./nuxt.config.js"}
```json
{
  ...

  generate:{
    nojekyll: true, //not working on this version
  },
  ssr: true, //server side rendered enabled //When true
  target: "static", // and static, nuxt generates a hybrid static site

  ...
}
```
::

2. Execute the following command

::code-wrapper{note="SHELL" description="Inside your project folder"}
```bash
npx nuxi generate
```
::

3. The result of the generation could be found in the folder `.output/public`.

### 1.3 Generate to deploy in a specific github subproject
If you want to deploy your Nuxt3 application into a github subproject you need to specify Nuxt which is the public path where resources are going to live. The generated files have dependencies pointing to / by default, so if you have your project deployed in /nuxt-project/, what is going to happen is that the webpage tries to access resources on / and they will be not found, showing a white page as a result.

The configuration to point dependencies to the right public path in Nuxt3 is the one that follows:
::code-wrapper{note="json" description="./nuxt.config.js"}
```json
{
  ...

  app: {
      baseURL: "/yourrepositoryname/"
  }

  ...
}
```
::

### 1.4 Image path resolution after bundle
One of the problems I first faced when I generate the site for the first time was images. I served the application and I found out that some images were not being displayed. What happened is that Vite, the bundler used to build and generate the static site in Nuxt3, is taking every asset in your assets/ folder, process them, renaming them and taking them to another place, so some paths were wrong, but anothers no... why?. Actually, Vite automatically transforms paths strings that are found inside every `<template></template>` of your project to the new ones result of the generation process... BUT!! If you have for example an array with image paths, and you want to loop over it to render images dynamically, you have a problem, because paths you have in your array do not point to the right location of your processed assets.

To solve this problem you have to use `import.meta.globEager("assetdirectory")` (Only for the Vite bundler). The Vite bundler transforms this code fragment into a json, with the original assets path inside the "assetdirectory" as keys and the new path as value. Example:

::code-wrapper{note="TypeScript" description="Before Vite bundler"}
```ts
const modules = import.meta.globEager("/assets/img/*")
``` 
::

::code-wrapper{note="JS" description="After Vite bundler"}
```js
const modules = {
  "/assets/img/logo.png": __vite_ssr_import_0__, 
  "/assets/img/logo2.png": __vite_ssr_import_1__
  // __vite_ssr_import points where the resource now lives
};
``` 
::

So if you want to render assets dynamically in your Nuxt3 project you will need to execute a function similar to this one to resolve the new path of the asset:
::code-wrapper{note="TYPESCRIPT" description="example.vue"}
```html
<template>
  <div>
    <img 
      for="originalImagePath, index of images" 
      key="index" 
      :src="resolveImagePath(originalImagePath)" 
    />
  </div>
</template>

<script>

const images: Array<String> = ["/assets/img/logo","/assets/img/logo2"];

const resolveImagePath = (originalImagePath:string) => {
  //The argument of globEager needs to be a string literal since it is
  //a bundler requirement for generating the map. You can imagine that if it is
  //a variable the bundler will be not able to do the transformation.
  const modules = import.meta.globEager("/assets/img/*");
  return modules[originalImagePath];
}

</script>
``` 
::


<!-- ### 1.5. Avoid Nuxt3 Static Site prefetching -->



## 2. Deploy Nuxt3 application on Github
When you have completed the steps and taking into account the details showed above you should have a fully functional static site in the folder .output/public. Still, this build is not enough to have your site working inside github.

### 2.1 Nojekyll file
By default Github Pages uses Jekyll, a static sites generator. If your project have a specific format it will be automatically be transformed into a static site. Jekyll is a good option if you want to build a simple blog without the fancy virtual dom that you could get with Vue or React. You can check in their webpage if you are interested.

The problem of Github Pages using Jekyll as a default mecanism to generate static sites is that **it uses names of folders or files that starts with underscore as special resources.** Why does this affect us? It happens that the static site generated by Nuxt contains a folder that starts with underscore: `_nuxt`. If you do not do anything, your deployment enters in conflict with jekyll and it will not work. To solve this issue you need to create a `.nojekyll` file inside the generated site to prevent jekyll being executed when you deploy on Github Pages. This file is supposed to be generated by nuxt if you put the `generator:{nojekyll:true}` option inside nuxt.config.ts, but it does not work on this nuxt version yet.

::code-wrapper{note="SHELL" description="/nuxt-project-folder/"}
```bash
cd .output/public
touch .nojekyll
```
::

Now you should be ready to follow next sections to proceed with the deployment on github.

### 2.2 Deploy manually on github
You need to execute the following sequence of commands:

::code-wrapper{note="SHELL" description="/nuxt-project-folder/"}
```bash
npx nuxi generate
cd .output/public
touch .nojekyll
git init
git checkout -b "branch name"
git checkout "branch name"
git commit -a -m "First commit"
git remote add origin "github_repository_url.git"
git push -u origin "branch name"

```
::

After push you will need to configure Github Pages from your repository settings to serve your webpage from the specific branch.


### 2.1 Deploy on Github with travis.yml

There will be another article explaining in detail how to use CI/CD tools on github. In the meantime you can search on internet. 

To deploy on github automatically using travis you need to create the following file in your nuxt project:

::code-wrapper{note="YAML" description="/nuxt-project-folder/travis.yml"}
```yaml
language: node_js
node_js:
  - "14"
cache:
  yarn: true
  directories:
    - node_modules
script:
  - yarn generate
  - touch .output/public/.nojekyll
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $github_token
  local_dir: .output/public
  on:
    branch: gh-pages
```
::

When you push the commit your static site will be deployed on the branch gh-pages.

> You need to create a travis account here and set your repository and the private variable $github_token.



## Only code. Summary. ADHD ready
