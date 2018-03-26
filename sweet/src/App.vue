<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "App",
  data(){
      return{
      }
  }
};
</script>

<style>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

:focus {
  outline: 1;
}

article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted #000;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}
html,body{
    width: 100vw;
    min-height:100vh;
    height: 100%;
    overflow-x: hidden;
}
#app {
  width:100vw;
  height:100vh; 
  background: url("http://api.dujin.org/bing/1366.php") no-repeat;
  background-size: cover
}
/* #app:after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("http://api.dujin.org/bing/1366.php") no-repeat;
    background-size: cover;
    opacity: 0.75;
    z-index: -1;
} */
</style>
