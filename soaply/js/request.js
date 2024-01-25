// Request and Response Data Retching from Each Methods ======
/* ====== Common Post Request Function ====== */
async function postRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Put Request Function ====== */
async function putRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
/* put 있는 데이터베이스를 업데이트하는 것 */

/* ====== Common Delete Request Function ====== */
async function deleteRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
/* delete 데이터베이스를 삭제하는 것 */

function abc(n) {
  console.log(n);
}
abc(1);

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
/* get 있는 데이터를 조회만 하는 것 */
// fetch : 외부에 요청해서 결과 데이터를 가져오는것

// 'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=3'
async function getProducts(qnt) {
  const url = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${qnt}`;

  try {
    // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts(3);
