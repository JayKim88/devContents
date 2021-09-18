## Service Worker

<br/>

### 1. What is service worker ?

Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to **enable the creation of effective offline experiences, intercept network requests and take appropriate action** based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.  

<img src="https://miro.medium.com/max/1400/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg" alt="diagram" width="600"/>


### 2. How to use ?

1. Registration

   - ServiceWorkerContainer.register() method
   - once downloaded to the client, It will attempt installation/activation for URLs

2. Life cycle
   - Download: The service worker is downloaded when a user first accesses a service worker–controlled site/page.
   - Install: If the downloaded file is new — either different to an existing service worker, or the first service worker encountered for this page/site.
   - Activate: after a successful installation, it is activated.
     - If an existing service worker available, the new version is installed in the background, but not yet activated. It is only activated when there are no longer any pages loaded using the old service worker.

### 3. The Service Worker can do

- Cache Assets & API calls
- Manage Push Notifications
- Control the Network Traffic
- Store the Application Cache

### 4. Common use cases

- Offline-optimized experience
- Sending Push Notifications
- Background sync

### For more details and practices

- [Geeks for Geeks_How to implement it](https://www.geeksforgeeks.org/service-workers-in-javascript/)
- [MDN_Using service workers](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [How javascript works](https://blog.sessionstack.com/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58)
