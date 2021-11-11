addEventListener("backgroundfetchsuccess", (event) => {
  console.log("[Service Worker]: Background Fetch Success", event.registration);
  event.waitUntil(
    (async function () {
      try {
        //3. Iterating the records to populate the cache
        const cache = await caches.open(event.registration.id);
        //4. Each record = URL/Request we listed during background fetch registration.
        const records = await event.registration.matchAll();
        //5. Build the array of promises by iterating through the records, waiting until record’s responseReady resolved and trying to put this record’s response into the Cache Storage.
        const promises = records.map(async (record) => {
          const response = await record.responseReady; //Response 로 해결되는 promise를 반환합니다 .
          //6. During the download time we have our data in “Other” category, then (on cache.put()) it’s moving to the cache
          await cache.put(record.request, response);
          //7. now we can intercept the requests to these and serve them from the cache!
        });
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#promise.all_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
        await Promise.all(promises);

        // [Optional] This could be an API call to our backend
        let assetsDataResponse = await fetch(
          `/assets/${event.registration.id}-data.json`
        );
        let assetsData = await assetsDataResponse.json();

        // Updating UI
        await event.updateUI({
          title: `${assetsData.title} is ready`,
          icons: assetsData.icons,
        });
      } catch (err) {
        await event.updateUI({
          title: `${assetsData.title} failed: ${event.registration.failureReason}`,
        });
      }
    })()
  );
});

addEventListener("backgroundfetchfail", (event) => {
  console.log("[Service Worker]: Background Fetch Fail", event.registration);
  event.waitUntil(
    (async function () {
      try {
        const cache = await caches.open(event.registration.id);
        const records = await event.registration.matchAll();
        const promises = records.map(async (record) => {
          const response = await record.responseReady;
          if (response && response.ok) {
            await cache.put(record.request, response);
          }
        });
        await Promise.all(promises);
      } finally {
        // [Optional] This could be an API call to our backend
        let assetsDataResponse = await fetch(
          `/assets/${event.registration.id}-data.json`
        );
        let assetsData = await assetsDataResponse.json();

        // Updating UI
        await event.updateUI({
          title: `${assetsData.title} failed: ${event.registration.failureReason}`,
        });
      }
    })()
  );
});

addEventListener("backgroundfetchabort", (event) => {
  // 사용자가 다운로드 취소를 선택할 경우.
  console.log("[Service Worker]: Background Fetch Abort", event.registration);
  console.error("Aborted by the user. No data was saved.");
});

addEventListener("backgroundfetchclick", (event) => {
  console.log("[Service Worker]: Background Fetch Click", event.registration);
  event.waitUntil(
    (async function () {
      // [Optional] This could be an API call to our backend
      let assetsDataResponse = await fetch(
        `/assets/${event.registration.id}-data.json`
      );
      let assetsData = await assetsDataResponse.json();
      // 다운로드 받은 파일을 열었을 때 동작을 설정해준다.
      clients.openWindow(assetsData.descriptionUrl);
    })()
  );
});

self.addEventListener("install", (event) => {
  console.log("[Service Worker]: Installed");
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker]: Active");
});
