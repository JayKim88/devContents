## Overview

"accessible " means that any user can use all its features and content, regardless of how the user accesses the web — even and especially users with physical or mental impairments.

Sites should be accessible to keyboard, mouse, and touch screen users, and any other way users access the web, including screen readers and voice assistants like Alexa and Google Home.
Applications should be understandable and usable by people regardless of auditory, visual, physical, or cognitive abilities.

## Guides

---

1. [**What is accessibility ?**](#1.-what-is-accessibility-?)
1. **HTML: A good basis for accessibility**
1. **CSS and JavaScript accessibility best practices**
1. **WAI-ARIA basics**
1. **Accessible multimedia**
1. **Mobile accessibility**

---

<br/>

### 1. what is accessibility ?

Building accessible sites benefit everyone:

- Semantic HTML, which improves accessibility, also improves SEO, making your site more findable.
- Caring about accessibility demonstrates good ethics and morals, which improves your public image.
- Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users or those on low network speed. In fact, everyone can benefit from many such improvements.
- Providing accessible sites is part of the law in some countries,

What kinds of disability are we looking at?

- People with visual impairments  
  : Many people with visual impairments use screen magnifiers that are either physical magnifiers or software zoom capabilities. Most browsers and operating systems these days have zoom capabilities. Some users will rely on screen readers, which is software that reads digital text aloud.
- People with hearing impairments  
  : To provide access, textual alternatives must be provided. Videos should be manually captioned, and transcripts should be provided for audio content. Furthermore, due to high levels of language deprivation in DHH populations, text simplification should be considered
- People with mobility impairments
  : Some people might have difficulty making the exact hand movements required to use a mouse, while others might be more severely affected, perhaps being significantly paralyzed to the point where they need to use a head pointer to interact with computers.
- People with cognitive impairments  
   A good foundation of accessibility for people with cognitive impairments includes:
  - Delivering content in more than one way, such as by text-to-speech or by video.
  - Easily understood content, such as text written using plain-language standards.
  - Focusing attention on important content.
  - Minimizing distractions, such as unnecessary content or advertisements.
  - Consistent webpage layout and navigation.
  - Familiar elements, such as underlined links blue when not visited and purple when visited.
  - Dividing processes into logical, essential steps with progress indicators.
  - Website authentication as easy as possible without compromising security.
  - Making forms easy to complete, such as with clear error messages and simple error recovery.

### 2. HTML: A good basis for accessibility

Keep in mind the importance of using semantic HTML (sometimes called POSH, or Plain Old Semantic HTML). This means using the correct HTML elements for their intended purpose as much as possible.

Semantic HTML doesn't take any longer to write than non-semantic (bad) markup if you do it consistently from the start of your project. Even better, semantic markup has other benefits beyond accessibility:

- Easier to develop with — as mentioned above, you get some functionality for free, plus it is arguably easier to understand.
- Better on mobile — semantic HTML is arguably lighter in file size than non-semantic spaghetti code, and easier to make responsive.
- Good for SEO — search engines give more importance to keywords inside headings, links, etc. than keywords included in non-semantic <div>s, etc., so your documents will be more findable by customers.

[How to make good semantics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#good_semantics)

### 3. CSS and JavaScript accessibility best practices

#### CSS

- Select sensible font sizes, line heights, letter spacing, etc. to make your text logical, legible, and comfortable to read.
- Make sure your headings stand out from your body text, typically big and bold like the default styling. Your lists should look like lists.
- Your text color should contrast well with your background color.

#### Javascript

- Good semantics: Using the right element for the right job. For example, making sure you use headings and paragraphs, and button and a elements
- Making sure content is available as text, either directly as text content, good text labels for form elements, or text alternatives, e.g. alt text for images.

  Complex functionality like 3D games are not so easy to make accessible — a complex 3D game created using WebGL will be rendered on a canvas element, which has no facility at this time to provide text alternatives or other information for severely visually impaired users to make use of. these game doesn't really have these people as a main target audience, and it would be unreasonable to make it 100% accessible to blind people, however you could implement keyboard controls so it is usable by non-mouse users, and make the color scheme contrasting enough to be usable by those with color deficiencies.

  Keeping Javascript unobtrusive

  - Providing client-side form validation, which alerts users to problems with their form entries quickly, without having to wait for the server to check the data. If it isn't available, the form will still work, but validation might be slower.

[For more details](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)

### 4. WAI-ARIA basics

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#introduction) (Web Accessibility Initiative - Accessible Rich Internet Applications) is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking.

[Three main features](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

- Roles
  : These define what an element is or does. role="navigation" (nav) or role="complementary" (aside), role="banner", role="search", role="tabgroup", role="tab", etc., which are commonly found in UIs.
- Properties: These define properties of elements, which can be used to give them extra meaning or semantics. As an example, aria-required="true" specifies that a form input needs to be filled in order to be valid, whereas aria-labelledby="label" allows you to put an ID on an element, then reference it as being the label for anything else on the page.

  ```html
  <!-- for example -->
  <img src="dinosaur.png" aria-labelledby="dino-label" />

  <p id="dino-label">The Mozilla red Tyrannosaurus ...</p>
  ```

  In this case, we have presented our description of the image as a regular text paragraph, given it an id, and then used the aria-labelledby attribute to refer to that id, which causes screen readers to use that paragraph as the alt text/label for that image. **This is especially useful if you want to use the same text as a label for multiple images — something that isn't possible with alt.**

- States: Special properties that define the current conditions of elements, such as aria-disabled="true", which specifies to a screenreader that a form input is currently disabled. States differ from properties in that properties don't change throughout the lifecycle of an app, whereas states can change, generally programmatically via JavaScript.

  <div align= "center" style="background-color:white;">
    <img src="https://www.w3.org/TR/wai-aria-1.1/img/accessibleelement.png" alt="diagram" width="80%"/>
  </div>

### 5. Accessible multimedia

Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives so they can be understood by assistive technologies and their users.

- Accessible audio and video controls  
  : HTML5 video and audio instances even come with a set of inbuilt controls that allow you to control the media straight out of the box.

  However, there are problems with these controls:

  - They are not keyboard-accessible in most browsers, i.e. you can't tab between the controls inside the native player. Opera and Chrome provide this to some degree, but it still isn't ideal.
  - Different browsers give the native controls differing styling and functionality, and they aren't stylable, meaning that they can't be easily made to follow a site style guide.

  <br/>

- Audio transcripts  
  : To provide deaf people with access to audio content, you really need to create text transcripts. These can either be included on the same page as the audio in some way or included on a separate page and linked to.

- Video text tracks  
  : To make video accessible for deaf, blind, or even other groups of users (such as those on low bandwidth, or who don't understand the language the video is recorded in), you need to include text tracks along with your video content.

[Solution for the above cases](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

### 6. Mobile accessibility

With web access on mobile devices being so popular and renowned platforms such as iOS and Android having full-fledged accessibility tools, it is important to consider the accessibility of your web content on these platforms.

To make a website accessible and usable on mobile, you just need to follow general good web design and accessibility best practices.

Three exceptions that need special consideration for mobile

- [Control mechanisms](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile#control_mechanisms): Make sure interface controls such as buttons are accessible on mobiles (i.e., mainly touchscreen), as well as desktops/laptops (mainly mouse/keyboard).
- [User input](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile#user_input): Make user input requirements as painless as possible on mobile (e.g., in forms, keep typing to a minimum).
- [Responsive design](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile#responsive_design): Make sure layouts work on mobile, conserve image download sizes, and think about the provision of images for high-resolution screens.
  <br/>
  <br/>

### For more details about [Accessbility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
