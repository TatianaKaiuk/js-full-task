export const addImageV2 = (url) => {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    const onImageLoaded = () => {
      const { width, height } = img;
      resolve({ width, height });
    };

    const onImageLoadError = () => reject(new Error('Image load failed'));

    img.addEventListener('load', onImageLoaded);

    img.addEventListener('error', onImageLoadError);
  });
  return p;
};
const url = 'https://server.com/image.png';
const resultPromise = addImageV2(url);
resultPromise.then((data) => console.log(data));
resultPromise.catch((error) => console.log(error));
