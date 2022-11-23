# **Vue Animate CSS**

![GitHub forks](https://img.shields.io/github/forks/ossphilippines/v-animate-css?style=for-the-badge) ![GitHub Repo stars](https://img.shields.io/github/stars/ossphilippines/v-animate-css?style=for-the-badge)

### `v-animate-css`

The easiest way to implement Vue directive for Animate.css 

If you like this project, please give it a star :star: , and consider following the author :octocat: :wink: .

### Installation using **NPM** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" width="30" height="30">

```shell
npm install v-animate-css --save
```

### OR

### Installation using **YARN** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg" width="30" height="30">

```shell
yarn add v-animate-css
```

### Or just **import** this to project without installing


### Using **CDN** 

```script
https://unpkg.com/v-animate-css/dist/v-animate-css.js
```
<br>

## **Getting Started**


### **Usage**

```javascript
import Vue from 'vue';
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.js"></script>
<script src="https://unpkg.com/v-animate-css/dist/v-animate-css.js"></script>

<script>
  Vue.use(VAnimateCss.default);
</script>
```

#### Inject Local CSS

Related to [Issue#33](https://github.com/OSSPhilippines/v-animate-css/issues/33) it make sense to give the user the option to add their own local version of Animate.css instead of relying to the default CDN version of Animate.css within the plugin.

You can do it using the new animateCSSPath option.

```js
import Vue from 'vue';
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss, { animateCSSPath: './local-animate-css-file.css' });

// You can also use this option to inject a newer version of Animate.css
Vue.use(VAnimateCss, { animateCSSPath: 'cdn-link-to-a-newer-animate-css-version' });
```

Demo and Docs [here](https://ossphilippines.github.io/v-animate-css/). 

Made with :heart: by [Joff Tiquez](https://github.com/jofftiquez)
