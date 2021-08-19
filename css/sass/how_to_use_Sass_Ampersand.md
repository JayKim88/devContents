## The Sass Ampersand

code examples..!

```css
.some-class {
  &.another-class {
  }
}

/* the above is same se below; */

.some-class.another-class {
}
```

this means the & always refers to the parent selector when nesting.  
 We can think of the & as a mechanism that allows us to place the parent selector wherever we need it in our child selector.

#### <strong>Using the & with pseudo classes</strong>

```css
.button {
  &:visited {
  }
  &:hover {
  }
  &:active {
  }
}

/* this compiles to*/
.button:visited {
}
.button:hover {
}
.button:active {
}
/*means awesome that nice to shorten the code*/
```

#### <strong>Qualifying based on context</strong>

This is how to switch the position of child and parent

```css
.button {
  body.page-about & {
  }
}
/* this compiles to */
body.page-about .button {
}
```

This is really useful for qualifying a selector based on a different parent.

#### <strong>@at-root to the rescue</strong>

@at-root allows you to break out of your nesting structure entirely to the “root” of your nesting tree.
This is literally useful.

```css
.grand-parent {
  .parent {
    @at-root body.page-about .child {
    }
  }
}
/* Compiled CSS: */
body.page-about .child {
}
```

all the code is still grouped together, which could be noted as an unsung benefit of nesting. @at-root can help keep specificity levels low because you no longer have the compiled parent selector to increase specificity.

#### <strong>Modifying the ampersand</strong>

```css
.btn {
  &-primary {
  }
  &-secondary {
  }
}
/* This Compiles to */
.btn-primary {
}
.btn-secondary {
}
```

Conclusion: It's good to know the usage of & for developing with Material UI :)  
When you style it, very useful to code with & to approach the target element!
