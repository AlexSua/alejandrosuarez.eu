---
title: 'How to deploy a Nuxt 3 app in Github Pages'
description: 'Tutorial that will explain briefly how to generate and upload a Nuxt 3 application in Github Pages.'
date: '2022-06-30'
language: 'en'
tags: ['Nuxt 3',"Vue 3"]
image: "/assets/img/blog/nuxt-github-pages.jpg"
published: true
---


# How to deploy a Nuxt 3 web app in Github Pages
The following tutorial will explain how to deploy an application with the new version of Nuxt, [Nuxt 3](https://v3.nuxtjs.org/). Notice that by the time this article is written [Nuxt 3](https://v3.nuxtjs.org/) is in its Release Candidate version, so in the future, some of the problems that are being tackled here will be already solved.

> Nuxt version: **[3.0.0-rc.4](https://github.com/nuxt/framework/releases/tag/v3.0.0-rc.4)** 

## 1. Nuxt 3 and static site generation (SSG)
The first step to deploy a Nuxt project on GitHub is to transform it into something that a simple web server, such as github pages, can serve. For this Nuxt provides us with the functionality to generate a static site, that is, the functionality to **transform our Nuxt/Vue project into a static page consisting only of JS, CSS, HTML and Assets such as images**. [Nuxt 3](https://v3.nuxtjs.org/) allows you to generate a static site in two different ways:

### 1.1 **SSG. SPA (Single Page Application)**
 This generation mode is similar to the one provided by raw [Vue](https://vuejs.org/guide/introduction.html#what-is-vue). It generates a site consisting of one `index.html`, a `404.html` and a bunch of `.css`, `.js` and assets files. This `index.html` will contain just a `div` tag and a call to a javascript file that will render the entire page on that tag.  When you click on a link inside the page, what you are doing behind the scenes, is calling a javascript routine that changes the path in the URL and rerenders the webpage for that subroute. If instead of accessing this SPA webpage from the main root you access it directly from a subroute link, the webserver will not recognize the route, it will throw a 404 error and it will fall back to the `404.html` file that was commented before. This fallback is configured by the web server, in this case, GitHub pages. Once the fallback is triggered and you load `404.html`, this file has a redirect call to `index.html` that will recognize the path you inserted and will render the page with that subroute. 
 
A diagram to understand better what was explained below:

::mermaid{name="SPAflow"}
```
sequenceDiagram
    autonumber
    participant Browser
    participant Web Server
    participant index.html
    participant 404.html
    Browser->>Web Server: Give me /blog
    Web Server->>404.html: I don't have /blog so I will fallback to 404.html
    404.html-->>Browser: Receiving 404.html
    Browser->>Browser: Executing JavaScript 404.html 
    Browser->>Web Server: 404.html redirects me to /
    Web Server->>index.html: Let's get index.html
    index.html-->>Browser: Receiving index.html
    loop Rendering process
        Browser->>Browser: Rendering /blog if that route exists.
        Browser->>Web Server: Get resources .js, .jpg...
        Web Server-->>Browser: Getting resources
    end
   

```
::

 This configuration comes with some advantages such as beautiful and fast effects and transitions between pages but, as you may have anticipated, come as well with two main problems.
  - :x: **Search engine crawling:** Even though search engines nowadays can render javascript inside webpages to stalk content from them, if they see that they need to do extra effort to activate their JS engines to sneak into, **they will punish you with oblivion**. 

  - :x: **People with javascript deactivated:** There are people out there with JavaScript deactivated that will ignore your content if they are not able to watch it without JavaScript.

If you want to generate a SPA application with Nuxt 3 you need to:

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

::code-wrapper{note="BASH" description="Inside your project folder"}
```bash
npx nuxi generate
```
::

3. The result of the generation could be found in the folder `.output/public`.


### 1.2 **SSG. Hybrid or Universal mode**
The Hybrid, also called Universal, mode of Nuxt for generating a website is one of the main highlights of this framework, and the main reason I decided to use it instead of raw Vue 3. **This generation mode creates an HTML file for each subroute of your webpage that will contain all the content already rendered on it**. When you execute this generation there is a renderer, an engine called [Nitro](https://nitro.unjs.io/), that will go into every route of your webpage executing its JavaScript and generating for each of them an already rendered HTML.
<!-- and when the process is completed it takes, as I like to think, a snapshot of the rendered webpage saving it on disk as an html. -->

Nevertheless, what is written above is not the only special thing about this mode. Aside from getting without executing any code the total content for each route, if you have javascript enabled, a process called hydration begins. The hydration process, "hydrates" the HTML with JavaScript making the webpage, from the route/HTML you access, behave as a SPA (Single page application). Using this generation process you have all the advantages of SPA without the drawbacks commented on inside this [section](#11-ssg-spa-single-page-application).

I believe the following diagram clarifies better what was explained before:

::mermaid{name="Hybridflow"}
```
sequenceDiagram
    autonumber
    participant Browser
    participant Web Server
    participant /blog/index.html
    Browser->>Web Server: Give me /blog
    Web Server->>/blog/index.html: I do find blog! Wait a minute.
    /blog/index.html-->>Browser: Sending /blog  to the client with all the content rendered by Nitro.

    loop Hydration process
        Browser->>Browser: Hydrating the blog HTML so we can use as SPA
        Browser->>Web Server: Get resources for hydration and prefetching .js, .jpg...
        Web Server-->>Browser: Response with resources
    end
   
```
::

If you want to generate a hybrid static site with Nuxt you need to:
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

::code-wrapper{note="BASH" description="Inside your project folder"}
```bash
npx nuxi generate
```
::

3. The result of the generation could be found in the folder `.output/public`.

### 1.3 Generate to deploy in a specific GitHub subproject
If you want to deploy your Nuxt 3 application into a GitHub subproject you need to specify Nuxt which is the public path where resources are going to live. The generated files have dependencies pointing to `/` by default, so if you have your project deployed in `/nuxt-project/`, what is going to happen is that the webpage tries to access resources on `/` and they will be not found, showing a white page as a result.

The configuration to point dependencies to the right public path in Nuxt 3 is the one that follows:
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

**IMPORTANT! When you execute the generation with this configuration parameter, the build is created in the following folder:  `.output/public/yourrepositoryname`**

### 1.4 Image path resolution after bundle
One of the problems I first faced when I generate the site for the first time was images. I served the application and I found out that some images were not being displayed. What happened is that [Vite](https://vitejs.dev/), the bundler used to build and generate the static site in Nuxt 3, is taking every asset in your assets/ folder, processing them, renaming them and taking them to another place, so some paths were wrong, but others no... why?. Actually, Vite automatically transforms path strings that are found inside every `<template></template>` of your project into new ones result of the generation process... BUT!! **If you have for example an array with image paths, and you want to loop over it to render images dynamically, you have a problem, because paths you have in your array do not point to the right location of your processed assets.**

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

So if you want to render assets dynamically in your Nuxt 3 project you will need to execute a function similar to this one to resolve the new path of the asset:
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

<script setup lang="ts">

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


### 1.5. Avoid Nuxt 3 Static Site prefetching
Prefetching is a feature of Nuxt 3 that allows the application during the hydration process to "prefetch" some resources from other routes of the application to obtain fast transitions between paths in the Hybrid mode of Static Site Generation. The version of Nuxt that we are tackling in this article is still in development, and prefetching is one of the things that prove this fact.  In **[3.0.0-rc.4](https://github.com/nuxt/framework/releases/tag/v3.0.0-rc.4)** this feature is not working properly and every route of the application loads all resources of all routes, leading to huge performance issues.

I tried with some configuration parameters in `nuxt.config.ts` but the option for controlling the prefetching is not implemented or not working properly yet. The best and fastest option I came up with is executing the following command over the build to remove prefetching totally.

```bash
grep -rnwl "<link rel=\"prefetch\"" .output/public | xargs sed -i 's$<link rel="prefetch" href="[^"]*\.\(jpg\|png\|webm\|jpeg\|ttg\|svg\|gif\)">$$g'

```

If you are wondering why your Nuxt 3 application is slow and you see big downloads of resources in your browser this one could be the cause. By simply executing the command shown before you will get better performance. 

## 2. Deploy Nuxt 3 application on Github
When you have completed the steps and taken into account the details shown above you should have a fully functional static site in the folder `.output/public/` or here `.output/public/repositoryname` if you activated the parameter explained [here](#13-generate-to-deploy-in-a-specific-github-subproject). Still, this build is not enough to have your site working inside Github.

### 2.1 Nojekyll file
By default, Github Pages uses [Jekyll](https://jekyllrb.com/), a static sites generator. If your project has a specific format it will automatically be transformed into a static site. Jekyll is a good option if you want to build a simple blog without the fancy virtual dom that you could get with Vue or React. You can check their webpage if you are interested.

The problem with Github Pages using Jekyll as a default mechanism to generate static sites is that **it uses names of folders or files that start with underscore as special resources.** Why does this affect us? It happens that the static site generated by Nuxt contains a folder that starts with an underscore: `_nuxt`. If you do not do anything, your deployment enters into conflict with Jekyll and it will not work. To solve this issue you need to create a `.nojekyll` file inside the generated site to prevent Jekyll from being executed when you deploy on Github Pages. This file is supposed to be generated by Nuxt if you put the `generator:{nojekyll:true}` option inside nuxt.config.ts, but it does not work on this version yet.

::code-wrapper{note="BASH" description="/nuxt-project-folder/"}
```bash
cd .output/public or .output/public/yourrepositoryname
touch .nojekyll
```
::

Now you should be ready to follow the next sections to proceed with the deployment on Github.

### 2.2 Deploy manually on github
You need to execute the following sequence of commands:

::code-wrapper{note="BASH" description="/nuxt-project-folder/"}
```bash
npx nuxi generate
grep -rnwl "<link rel=\"prefetch\"" .output/public | xargs sed -i 's$<link rel="prefetch" href="[^"]*\.\(jpg\|png\|webm\|jpeg\|ttg\|svg\|gif\)">$$g'
cd .output/public or .output/public/yourrepositoryname
touch .nojekyll
git init
git add .
git remote add origin "github_repository_url.git"
git checkout -b "branch_name"
git commit -a -m "First commit"
git push -u origin "branch_name"

```
::

After push, you will need to configure Github Pages from your repository settings to serve your webpage from the specific branch.


### 2.1 Deploy on Github with Github Actions

To deploy on github automatically using github actions you need to create the following file in your nuxt project:

::code-wrapper{note="YAML" description=".github/workflows/deploy.yml"}
```yaml
name: Deploy to GitHub pages
on:
  push:
    branches: [nuxt]
env:
  BUILD_FOLDER: .output/public # or .output/public/yourrepositoryname/
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Generate static Nuxt 3 files
        uses: actions/setup-node@v3
        with:
          node-version: "16"
          cache: 'yarn'
      
      - run: |
          yarn install
          yarn generate

      - name: Init new repo in $BUILD_FOLDER and commit generated files
        run: |
          grep -rnwl "<link rel=\"prefetch\"" $BUILD_FOLDER | xargs sed -i 's$<link rel="prefetch" href="[^"]*\.\(jpg\|png\|webm\|jpeg\|ttg\|svg\|gif\)">$$g'
          cd $BUILD_FOLDER
          touch .nojekyll
          git init
          git add -A
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git commit -m 'deploy'

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: ${{env.BUILD_FOLDER}}
```
::

When you push the commit your static site will be deployed on the branch gh-pages.



<!-- ## Only code. Summary. ADHD ready -->
