import { TIMEOUT_SECONDS } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJSON = async function (url) {
  try {
    const fetchData = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify(response), // body data type must match "Content-Type" header};
    };
    const res = await Promise.race([
      fetch(url, fetchData),
      timeout(TIMEOUT_SECONDS),
    ]);
    console.log("yes");
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
export const generateCreatorList = function (record) {
  let creator = "";
  creator =
    record.creators
      ?.map((c) => {
        const [a, b] = c.creator.split(", ");
        return { firstName: b, lastName: a };
      })
      .map((item) => item.firstName + " " + item.lastName)
      .join(", ") ?? "";
  return creator;
};
export const getFirstSentenceAbstract = function (res) {
  const firstFullstop = res.abstract?.indexOf(".") + 1;
  return res.abstract.slice(0, firstFullstop);
};
