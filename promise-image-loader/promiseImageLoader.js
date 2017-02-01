const promiseImageLoader = function imageLoader(image) {
    const isImageElement = (image instanceof HTMLImageElement || image instanceof Image)
    const instance = isImageElement ? image : new Image()
    if (!isImageElement) instance.src = image
    return new Promise(function (resolve, reject) {
        instance.addEventListener("load", _ => resolve(image))
        instance.addEventListener("error", reject)
        if (instance.complete) resolve(image)
    })
}

export default promiseImageLoader;
